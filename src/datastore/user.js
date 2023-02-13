import { DataStore } from 'aws-amplify';
import { Creator } from '../models';
import { useState, useEffect } from 'react';

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

export default GetUserByUsername;