import { useParams } from 'react-router-dom';
import { ProfilePage, MeetCreator, TopPosts, EditProfilePopup } from '../ui-components';
import React, { useState, useRef, useEffect } from 'react';
import { GetCreatorByUsername, GetCreatorDetailsByID, GetCreatorMediaByID, GetSocialMediaIcons } from './../datastore/user'
import { ConvertToPascalCase } from './../utils/text'
import { EditProfileOverlay } from '../sections/EditProfileOverlay';

function resizeIframe(iframeString, newWidth) {
    const widthRegex = /width="(\d+)"/;
    const heightRegex = /height="(\d+)"/;

    const widthMatch = iframeString.match(widthRegex);
    const heightMatch = iframeString.match(heightRegex);

    if (!widthMatch || !heightMatch) {
        return iframeString;
    }

    const originalWidth = parseInt(widthMatch[1]);
    const originalHeight = parseInt(heightMatch[1]);

    const aspectRatio = originalHeight / originalWidth;
    const newHeight = Math.round(newWidth * aspectRatio);

    let resizedIframeString = iframeString

    if (originalWidth > newWidth) {
        resizedIframeString = iframeString.replace(
            widthRegex,
            `width="100%"`
        )
    }

    if (originalWidth < newWidth) {
        resizedIframeString = resizedIframeString.replace(
            heightRegex,
            `height="${newHeight}"`
        );
    }

    return resizedIframeString;
}

// Define addFBScript outside of component
const addFBScript = () => {
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0&appId=736922408128647&autoLogAppEvents=1';
    script.crossOrigin = 'anonymous';
    script.defer = true;
    script.async = true;
    script.nonce = 'eL4fF7kM';
    script.onload = () => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    };
    document.body.appendChild(script);
}

export const UserProfile = React.memo((props) => {

    let { username } = useParams();

    const [user, setUser] = useState(null);
    const [creatorProfile, setCreatorProfile] = useState({});
    const [creatorDetails, setCreatorDetails] = useState({});
    const [creatorMedia, setCreatorMedia] = useState({});
    const [socialMediaIconKeys, setSocialMediaIconKeys] = useState({});
    const [socialMediaIcons, setSocialMediaIcons] = useState({});
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [width, setWidth] = useState(500); // Initialize with your old fixed width
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    const ref = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount


    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth);
        }
    }, []);

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

    // Toggle whether to show EditProfilePopup or not
    const toggleEditProfilePopup = () => {
        setShowEditProfile(!showEditProfile);
    }

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
            },
            "Edit Profile Button": {
                style: {
                    cursor: "pointer"
                },
                onClick: toggleEditProfilePopup,
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

    const topFacebookPostsOverrides = () => {
        let post1 = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjaypatelwanted%2Fposts%2Fpfbid0Cq6tifMys3JuzaJ2dDE2bZ7VHNNLc5Jay1aNFx6H5VB2M9Rb19VtS73cmKPuAJTul&show_text=true&width=500" width="500" height="589" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
        let post2 = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjaypatelwanted%2Fposts%2Fpfbid0zQXsWEiq3ts6tBXF3qP8qJjR9pU7XzjuciV3XoTdVVCe1Djwov9sbwDA212CpC3Al&show_text=true&width=500" width="500" height="665" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
        let post3 = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjaypatelwanted%2Fposts%2F1700213693510519%3A1247500499316954&show_text=true&width=500" width="500" height="534" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
        return (
            {
                Post1: {
                    dangerouslySetInnerHTML: { __html: resizeIframe(post1, 0.3 * windowWidth) }
                },
                Post2: {
                    dangerouslySetInnerHTML: { __html: resizeIframe(post2, 0.3 * windowWidth) }
                },
                Post3: {
                    dangerouslySetInnerHTML: { __html: resizeIframe(post3, 0.3 * windowWidth) }
                },
            }
        )
    }

    addFBScript();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', overflowX: 'auto' }}>
            <div style={{ height: 'calc(100vh)', overflowY: 'visible' }}>
                <ProfilePage width="100%" height="100%" creator={creatorProfile} creatorDetails={creatorDetails} overrides={profilePageOverrides(creatorMedia)}></ProfilePage>
            </div>
            {showEditProfile && <EditProfileOverlay creator={creatorProfile} creatorDetails={creatorDetails} toggle={toggleEditProfilePopup} />}

            <div ref={meetCreatorRef}>
                <MeetCreator width="100%"></MeetCreator>
            </div>
            <div>
                <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script> 
                <TopPosts width="100%" overrides={topYoutubePostsOverrides()} />
                <TopPosts width="100%" overrides={topLinkedinPostsOverrides()} />
                <TopPosts width="100%" overrides={topTwitterPostsOverrides()} />
                <TopPosts width="100%" overrides={topFacebookPostsOverrides()} />
            </div>
        </div>
    )
});

export default UserProfile;