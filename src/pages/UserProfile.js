import { useParams } from 'react-router-dom';
import { ProfilePage } from '../ui-components';
import { useState } from 'react';
import { GetCreatorByUsername, GetCreatorDetailsByID, GetCreatorMediaByID } from './../datastore/user'

export const UserProfile = (props) => {

    let { username } = useParams();

    const [user, setUser] = useState(null);
    const [creatorProfile, setCreatorProfile] = useState({});
    const [creatorDetails, setCreatorDetails] = useState({});
    const [creatorMedia, setCreatorMedia] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const hooks = {
        user: user,
        setUser: setUser,
        creatorProfile: creatorProfile,
        setCreatorProfile: setCreatorProfile,
        creatorDetails: creatorDetails,
        setCreatorDetails: setCreatorDetails,
        creatorMedia: creatorMedia,
        setCreatorMedia: setCreatorMedia,
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

    GetCreatorDetailsByID(hooks, creatorProfile.id)
    if (creatorDetails === "loading") {
        return <div>Loading...</div>;
    }
    if (creatorDetails === "error") {
        return <div>Error...</div>;
    }

    GetCreatorMediaByID(hooks, creatorProfile.id)
    if (creatorMedia === "loading") {
        return <div>Loading...</div>;
    }
    if (creatorMedia === "error") {
        return <div>Error...</div>;
    }

    const profilePageOverrides = (creatorMedia) => {
        return (
            {
                "Creator Backgroud Image": {
                    src: creatorMedia.BackgroundImage
                }
            }
        )
    }

    return (
        <div>
            <div> Welcome {creatorProfile.email_id}! </div>
            <ProfilePage overrides={profilePageOverrides(creatorMedia)} creator={creatorProfile} creatorDetails={creatorDetails} ></ProfilePage>
        </div>
    )
}

export default UserProfile;