import { DataStore } from 'aws-amplify';
import { Creator, CreatorDetails } from '../models';
import { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Storage } from "@aws-amplify/storage"

// Set the pageSize property to 100
Storage.configure({
    AWSS3: {
        pageSize: 100,
    }
});

function SaveNewUser(hooks) {

    const { signInStatus } = useAuthenticator(context => [context.route]);

    useEffect(() => {
        const getUser = async () => {
            const currentUser = await Auth.currentAuthenticatedUser();
            hooks.setUser(currentUser);
        };

        getUser();
    }, []);

    useEffect(() => {
        if (hooks.user && signInStatus !== 'signedIn') {
            const creatorInfo = {
                id: hooks.user.attributes.sub,
                username: hooks.user.attributes.preferred_username,
                email_id: hooks.user.attributes.email,
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
    }, [signInStatus]);

}

async function getCreatorByUsername(username) {
    const result = await DataStore.query(Creator, (c) => c.and(c => [
        c.username.eq(username)
    ]))
    return result;
}

function GetCreatorByUsername(hooks, username) {
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getCreatorByUsername(username);
                hooks.setCreatorProfile(result[0]);
                hooks.setLoading(false);
            } catch (err) {
                hooks.setError(err);
                hooks.setLoading(false);
            }
        }
        fetchData();
    }, [username]);
}

async function getCreatorDetailsByID(id) {
    const result = await DataStore.query(CreatorDetails, (c) => c.and(c => [
        c.creator_id.eq(id)
    ]))
    return result;
}

function GetCreatorDetailsByID(hooks, id) {
    useEffect(() => {
        async function fetchData() {
            try {
                if (id) {
                    const result = await getCreatorDetailsByID(id);
                    hooks.setCreatorDetails(result[0]);
                    hooks.setLoading(false);
                }
            } catch (err) {
                hooks.setError(err);
                hooks.setLoading(false);
            }
        }
        fetchData();
    }, [id]);
}

async function getCreatorMediaByID(id) {
    const coverPhoto = await Storage.get('CreatorMedia/' + id + '/CoverPhoto', {
        level: 'public',
        expires: 60
    });
    const profilePhoto = await Storage.get('CreatorMedia/' + id + '/ProfilePhoto', {
        level: 'public',
        expires: 60
    });
    return {
        CoverPhoto: coverPhoto,
        ProfilePhoto: profilePhoto,
    };
}

function GetCreatorMediaByID(hooks, id) {
    useEffect(() => {
        async function fetchData() {
            try {
                if (id) {
                    const result = await getCreatorMediaByID(id);
                    hooks.setCreatorMedia(result);
                    hooks.setLoading(false);
                }
            } catch (err) {
                hooks.setError(err);
                hooks.setLoading(false);
            }
        }
        fetchData();
    }, [id]);
}

async function getSocialMediaIconKeys(hooks) {
    const result = await Storage.list('SocialMediaIcons', {
        level: 'public',
    });
    return result
}

async function getSocialMediaIcons(hooks) {
    var result = {}
    for (let index = 0; index < hooks.socialMediaIconKeys.results.length; index++) {
        const element = hooks.socialMediaIconKeys.results[index].key;
        const socialMediaPlatform = element.substring(element.lastIndexOf("/") + 1);
        if (socialMediaPlatform !== "") {
            const socialMediaIconURL = await Storage.get(element, {
                level: 'public',
                expires: 60,
            });
            result[socialMediaPlatform] = socialMediaIconURL
        }
    }
    return result;
}

function GetSocialMediaIcons(hooks, id) {
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getSocialMediaIconKeys(hooks);
                hooks.setSocialMediaIconKeys(result);
                hooks.setLoading(false);
            } catch (err) {
                hooks.setError(err);
                hooks.setLoading(false);
            }
        }
        fetchData();
    }, []);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getSocialMediaIcons(hooks);
                hooks.setSocialMediaIcons(result);
                hooks.setLoading(false);
            } catch (err) {
                hooks.setError(err);
                hooks.setLoading(false);
            }
        }
        if (hooks.socialMediaIconKeys) {
            fetchData();
        }
    }, [hooks.socialMediaIconKeys]);
}

export { GetSocialMediaIcons, GetCreatorMediaByID, GetCreatorDetailsByID, GetCreatorByUsername, SaveNewUser };