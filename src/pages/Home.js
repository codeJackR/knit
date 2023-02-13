import { useNavigate } from 'react-router-dom';
import { ProfileCardCollection } from '../ui-components';
import NavBar from '../ui-components/NavBar';

function Home({ signOut, user }) {
    const navigate = useNavigate();

    const navbarOverrides = (signOut) => {
        if (signOut != null) {
            return (
                {
                    Button: {
                        children: "Sign Out",
                        onClick: () => {
                            signOut();
                            navigate("/");
                        },
                    },
                }
            )
        } else {
            const explorePage = () => {
                navigate("/", {
                    state: {
                        source: "signIn",
                    }
                })
            }
            return (
                {
                    "Button": {
                        onClick: explorePage
                    }
                }
            )
        }
    };

    const profileCardCollectionOverrideItems = (item, index) => {
        return ({
            overrides: {
                Button: {
                    onClick: () => {
                        navigate("/" + item.item.username);
                    }
                }
            }
        })
    };

    return (
        <main>
            <NavBar width="100%" overrides={navbarOverrides(signOut)} />
            <ProfileCardCollection overrideItems={profileCardCollectionOverrideItems} />
        </main>
    );
}

export default Home;
