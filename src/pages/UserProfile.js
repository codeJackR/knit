import { useParams } from 'react-router-dom';
import { ProfilePage } from '../ui-components';
import { useState } from 'react';
import { GetCreatorByUsername, GetCreatorDetailsByID } from './../datastore/user'

export const UserProfile = (props) => {

    let { username } = useParams();

    const [user, setUser] = useState(null);
    const [creatorProfile, setCreatorProfile] = useState({});
    const [creatorDetails, setCreatorDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const hooks = {
        user: user,
        setUser: setUser,
        creatorProfile: creatorProfile,
        setCreatorProfile: setCreatorProfile,
        setCreatorDetails: setCreatorDetails,
        loading: loading,
        setLoading: setLoading,
        error: error,
        setError: setError,
    }

    GetCreatorByUsername(hooks, username)
    if (creatorProfile === "loading") {
        return <div>Loading...</div>;
    }

    if (creatorProfile === "error") {
        return <div>Error...</div>;
    }

    debugger;
    GetCreatorDetailsByID(hooks, creatorProfile.id)
    if (creatorDetails === "loading") {
        return <div>Loading...</div>;
    }
    if (creatorDetails === "error") {
        return <div>Error...</div>;
    }

    return (
        <div>
            <div> Welcome {creatorProfile.email_id}! </div>
            <ProfilePage creator={creatorProfile} creatorDetails={creatorDetails}></ProfilePage>
        </div>
    )
}

export default UserProfile;