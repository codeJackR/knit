import { useNavigate } from 'react-router-dom';
import { ProfileCardCollection } from '../ui-components';
import NavBar from '../ui-components/NavBar';

function Home() {
    const navigate = useNavigate();

    const explorePage = () => {
        navigate("/explore")
    }

    const NavbarOverrides = () => {
        return (
            {
                "Button": {
                    onClick: explorePage
                }
            }
        )
    }

    return (
        <main>
            <NavBar width="100%" overrides={NavbarOverrides()} />
            <ProfileCardCollection />
        </main>
    );
}

export default Home;
