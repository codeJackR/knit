import { useParams } from 'react-router-dom';
import { ProfilePage, MeetCreator, TopPosts } from '../ui-components';
import React, { useState, useRef, useEffect } from 'react';
import { GetCreatorByUsername, GetCreatorDetailsByID, GetCreatorMediaByID, GetSocialMediaIcons } from './../datastore/user'
import { ConvertToPascalCase } from './../utils/text'

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

    useEffect(() => { // Needed to load twitter with proper formatting
        if (window.twttr && typeof window.twttr.widgets !== 'undefined') {
            window.twttr.widgets.load();
        }
    }, []);

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

    const topPostsOverrides = (embedHtml, post1, post2, post3) => {
        return (
            {
                Post1: {
                    dangerouslySetInnerHTML: { __html: embedHtml.replace("{post_url}", post1) }
                },
                Post2: {
                    dangerouslySetInnerHTML: { __html: embedHtml.replace("{post_url}", post2) }
                },
                Post3: {
                    dangerouslySetInnerHTML: { __html: embedHtml.replace("{post_url}", post3) }
                },
            }
        )
    }

    const topYoutubePostsOverrides = () => {
        let post1 = "https://www.youtube.com/embed/8j_oqFcVN-s"
        let post2 = "https://www.youtube.com/embed/7Wp1qRFTX-E"
        let post3 = "https://www.youtube.com/embed/H3trAKt3Tzg"
        let embedHtml = '<iframe width="100%" height="315" src="{post_url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        return topPostsOverrides(embedHtml, post1, post2, post3)
    }

    const topLinkedinPostsOverrides = () => {
        let post1 = "https://www.linkedin.com/embed/feed/update/urn:li:share:7036032180166283264"
        let post2 = "https://www.linkedin.com/embed/feed/update/urn:li:share:7035843741663858688"
        let post3 = "https://www.linkedin.com/embed/feed/update/urn:li:share:7036931887877013504"
        let embedHtml = '<iframe width="100%" height="540" src="{post_url}" frameborder="0" allowfullscreen="false" title="Embedded post"></iframe>'
        return topPostsOverrides(embedHtml, post1, post2, post3)
    }

    const topTwitterPostsOverrides = () => {
        let post1 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Did you know you can secure upto 10 Million worth of Scholarship for studying abroad?<br><br>The applications have opened RIGHT NOW, for Inlak Shivdasani Foundation Scholarship 2023. <br><br>Find more information and the link to the application form, click here: <a href="https://t.co/3RG1aGsfBC">https://t.co/3RG1aGsfBC</a></p>&mdash; Mayuri Rajput (@mayuri_1606) <a href="https://twitter.com/mayuri_1606/status/1625704252453814272?ref_src=twsrc%5Etfw">February 15, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
        let post2 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Social Media careers are going to be one of the most trending careers!<br><br>Check out these 8 jobs that you can apply today! <a href="https://t.co/D2kEY1VMJ6">https://t.co/D2kEY1VMJ6</a></p>&mdash; Mayuri Rajput (@mayuri_1606) <a href="https://twitter.com/mayuri_1606/status/1616037346528595969?ref_src=twsrc%5Etfw">January 19, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
        let post3 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A week of binge shoots! <br>YouTube, here I come. Again ✨ <a href="https://t.co/qZNp46zMPo">pic.twitter.com/qZNp46zMPo</a></p>&mdash; Mayuri Rajput (@mayuri_1606) <a href="https://twitter.com/mayuri_1606/status/1611638029621563392?ref_src=twsrc%5Etfw">January 7, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
        return (
            {
                Post1: {
                    dangerouslySetInnerHTML: { __html: post1 }
                },
                Post2: {
                    dangerouslySetInnerHTML: { __html: post2 }
                },
                Post3: {
                    dangerouslySetInnerHTML: { __html: post3 }
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
                <TopPosts width="100%" overrides={topYoutubePostsOverrides()} />
                <TopPosts width="100%" overrides={topLinkedinPostsOverrides()} />
                <TopPosts width="100%" overrides={topTwitterPostsOverrides()} />
            </div>
        </div>
    )
});

export default UserProfile;