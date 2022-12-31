import { Authenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
// import App from "../App";
import { ProfileCardCollection } from "../ui-components";
import NavBar from "../ui-components/NavBar";

function Explore(props) {

    var navbarOverrides = (signOut) => {
        return (
            {
                "Button": {
                    children: "Log Out",
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
