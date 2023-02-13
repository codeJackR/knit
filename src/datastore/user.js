import { DataStore } from 'aws-amplify';
import { Creator } from '../models';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';

function SaveNewUser() {
    const [user, setUser] = useState(null);
    const { signInStatus } = useAuthenticator(context => [context.route]);

    useEffect(() => {
        const getUser = async () => {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUser(currentUser);
        };
        console.log("In First useEffect!!!")

        getUser();
    }, []);

    useEffect(() => {
        if (user && signInStatus !== 'signedIn') {
            const creatorInfo = {
                id: user.attributes.sub,
                username: user.username,
                email_id: user.attributes.email,
            };
            DataStore.save(new Creator(creatorInfo));

            console.log("User Saved Successfully!")
        }
    }, [user, signInStatus]);

}

async function getUserByUsername(username) {
    const result = await DataStore.query(Creator, (c) => c.and(c => [
        c.username.eq(username)
    ]))
    return result;
}

function GetUserByUsername(username) {
    const [userProfile, setUserProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getUserByUsername(username);
                setUserProfile(result);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchData();
    }, [username]);

    if (loading) {
        return "loading";
    }

    if (error) {
        return "error";
    }
    return userProfile[0]
}

export { GetUserByUsername, SaveNewUser };