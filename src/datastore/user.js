import { DataStore, Predicates } from 'aws-amplify';
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

        getUser();
    }, []);

    useEffect(() => {
        if (user && signInStatus !== 'signedIn') {
            const creatorInfo = {
                id: user.attributes.sub,
                username: user.attributes.preferred_username,
                email_id: user.attributes.email,
            };
            // TODO: Validate creatorInfo
            DataStore.query(Creator, (c) => c.email_id.eq(creatorInfo.email_id))
                .then((results) => {
                    if (results.length > 0) {
                        console.log('Creator with email already exists');
                    } else {
                        DataStore.save(new Creator(creatorInfo))
                            .then(() => console.log('Creator saved successfully'))
                            .catch((error) => console.error('Error saving Creator:', error));
                    }
                })
                .catch((error) => console.error('Error querying for creator:', error));
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