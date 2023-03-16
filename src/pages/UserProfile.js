import { useParams } from 'react-router-dom';
import { ProfilePage, MeetCreator } from '../ui-components';
import React, { useState } from 'react';
import { GetCreatorByUsername, GetCreatorDetailsByID, GetCreatorMediaByID, GetSocialMediaIcons } from './../datastore/user'
import { ConvertToPascalCase } from './../utils/text'

export const UserProfile = React.memo(({ props }) => {

    let { username } = useParams();

    const [user, setUser] = useState(null);
    const [creatorProfile, setCreatorProfile] = useState({});
    const [creatorDetails, setCreatorDetails] = useState({});
    const [creatorMedia, setCreatorMedia] = useState({});
    const [socialMediaIconKeys, setSocialMediaIconKeys] = useState({});
    const [socialMediaIcons, setSocialMediaIcons] = useState({});
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
        socialMediaIconKeys: socialMediaIconKeys,
        setSocialMediaIconKeys: setSocialMediaIconKeys,
        socialMediaIcons: socialMediaIcons,
        setSocialMediaIcons: setSocialMediaIcons,
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

    GetSocialMediaIcons(hooks, creatorProfile.id)
    if (socialMediaIconKeys === "loading" || socialMediaIcons === "loading") {
        return <div>Loading...</div>;
    }
    if (socialMediaIconKeys === "error" || socialMediaIcons === "error") {
        return <div>Error...</div>;
    }

    const profilePageOverrides = (creatorMedia) => {
        var result = {
            "Creator Backgroud Image": {
                src: creatorMedia.BackgroundImage
            },
        }
        for (const [socialMediaPlatform, iconURL] of Object.entries(socialMediaIcons)) {
            result[ConvertToPascalCase(socialMediaPlatform) + 'Icon'] = {
                src: iconURL
            }
        }
        return result
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div> Welcome {creatorProfile.email_id}! </div>
            <div style={{ height: 'calc(100vh - 0px)', overflowY: 'auto' }}>
                <ProfilePage width="100%" height="100%" position="fixed" top="0" left="0"
                    overrides={profilePageOverrides(creatorMedia)} creator={creatorProfile} creatorDetails={creatorDetails}></ProfilePage>
            </div>
            <div>
                <MeetCreator></MeetCreator>
            </div>
        </div>
    )
});

export default UserProfile;