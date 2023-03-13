import { DataStore } from 'aws-amplify';
import { Creator, CreatorDetails } from '../models';
import { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Storage } from "@aws-amplify/storage"

function SaveNewUser(hooks) {

    const { signInStatus } = useAuthenticator(context => [context.route]);

    useEffect(() => {
        const getUser = async () => {
            const currentUser = await Auth.currentAuthenticatedUser();
            hooks.setUser(currentUser);
        };

        getUser();
    }, [hooks]);

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
    }, [hooks, signInStatus]);

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
    }, [hooks, username]);
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
                const result = await getCreatorDetailsByID(id);
                hooks.setCreatorDetails(result[0]);
                hooks.setLoading(false);
            } catch (err) {
                hooks.setError(err);
                hooks.setLoading(false);
            }
        }
        fetchData();
    }, [hooks, id]);
}

async function getCreatorMediaByID(id) {
    const backgroundImage = await Storage.get('CreatorMedia/' + id + '/backgroundImage', {
        level: 'public',
        expires: 60
    });
    return {
        BackgroundImage: backgroundImage,
    };
}

function GetCreatorMediaByID(hooks, id) {
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getCreatorMediaByID(id);
                hooks.setCreatorMedia(result);
                hooks.setLoading(false);
            } catch (err) {
                hooks.setError(err);
                hooks.setLoading(false);
            }
        }
        fetchData();
    }, [hooks, id]);
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
            try {
                const socialMediaIconURL = await Storage.get(element, {
                    level: 'public',
                    expires: 60,
                });
                result[socialMediaPlatform] = socialMediaIconURL
            } catch (err) {
                hooks.setError(err);
                hooks.setLoading(false);
            }
        }
    }
    return result;
}

function GetSocialMediaIcons(hooks) {
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
    }, [hooks]);
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
    }, [hooks]);
}

export { GetSocialMediaIcons, GetCreatorMediaByID, GetCreatorDetailsByID, GetCreatorByUsername, SaveNewUser };