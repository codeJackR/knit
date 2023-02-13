import { Auth } from 'aws-amplify';

async function IsUserSignedIn() {
    try {
        await Auth.currentAuthenticatedUser();
        return true;
    } catch {
        return false;
    }
}

export default IsUserSignedIn;