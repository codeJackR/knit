import { useParams } from 'react-router-dom';
import { ProfilePage, MeetCreator, TopPosts } from '../ui-components';
import { TopPostsWrapper } from './../ui-components-wrapper/TopPostsWrapper';
import React, { useState, useRef } from 'react';
import { GetCreatorByUsername, GetCreatorDetailsByID, GetCreatorMediaByID, GetSocialMediaIcons } from './../datastore/user'
import { ConvertToPascalCase } from './../utils/text'
import InstagramPosts from './../sections/InstagramPosts';

export const UserProfile = React.memo((props) => {

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

    const meetCreatorRef = useRef(null);

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

    // OnClick of MeetTab scroll to MeetCreator section
    const handleMeetCreatorClick = () => {
        meetCreatorRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const profilePageOverrides = (creatorMedia) => {
        var result = {
            "Creator Backgroud Image": {
                src: creatorMedia.BackgroundImage
            },
            "Meet Tab": {
                onClick: handleMeetCreatorClick,
                style: {
                    cursor: "pointer"
                }
            }
        }

        for (const [socialMediaPlatform, iconURL] of Object.entries(socialMediaIcons)) {
            result[ConvertToPascalCase(socialMediaPlatform) + 'Icon'] = {
                src: iconURL
            }
        }
        return result
    }

    const topPostsOverrides = () => {
        return (
            {
                Post1: {
                    dangerouslySetInnerHTML: { __html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLc3VQSe45A9f7LNzF3rfHimIHdBVPrrxv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' }
                },
            }
        )
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 'calc(100vh)', overflowY: 'visible' }}>
                <ProfilePage width="100%" height="100%" creator={creatorProfile} creatorDetails={creatorDetails} overrides={profilePageOverrides(creatorMedia)}></ProfilePage>
            </div>
            <div ref={meetCreatorRef}>
                <MeetCreator width="100%"></MeetCreator>
            </div>
            <div>
                <TopPosts width="100%" overrides={topPostsOverrides()} />
            </div>
        </div>
    )
});

export default UserProfile;