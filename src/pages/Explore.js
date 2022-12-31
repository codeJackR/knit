import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';
import { ProfileCardCollection } from "../ui-components";
import NavBar from "../ui-components/NavBar";

function Explore(props) {

    const navigate = useNavigate();
    
    var navbarOverrides = (signOut) => {

        return (
            {
                "Button": {
                    children: "Sign Out",
                    onClick: () => {
                        signOut()
                        navigate("/")
                    }
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
