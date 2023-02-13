import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';

async function IsUserSignedIn() {
    try {
        await Auth.currentAuthenticatedUser();
        return true;
    } catch {
        return false;
    }
}
export { IsUserSignedIn };