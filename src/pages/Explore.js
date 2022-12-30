import { withAuthenticator } from "@aws-amplify/ui-react";
// import App from "../App";
import { ProfileCardCollection } from "../ui-components";
import NavBar from "../ui-components/NavBar";

function Explore({user, signOut}) {
    const navbarOverrides = {
        "Button": {
            onClick: signOut
        }
    }

    return (
        <main>
            <NavBar width="100%" overrides={navbarOverrides}/>
            <ProfileCardCollection />
        </main>
    )
}

export default withAuthenticator(Explore);
