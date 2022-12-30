import { Authenticator } from "@aws-amplify/ui-react";
// import App from "../App";
import { ProfileCardCollection } from "../ui-components";
import NavBar from "../ui-components/NavBar";

function Explore() {
    const navbarOverrides = (signOut) => {
        return (
            {
                "Button": {
                    onClick: signOut
                }
            }
        )
    }

    return (
        <Authenticator>
            {({ signOut, user }) => (
                <main>
                    <NavBar width="100%" overrides={navbarOverrides(signOut)}/>
                    <ProfileCardCollection />
                </main>
            )}
        </Authenticator>
    )
}

export default Explore;
