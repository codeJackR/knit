import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { ProfileCardCollection } from "../ui-components";
import NavBar from "../ui-components/NavBar";

function Explore(props) {
  const navigate = useNavigate();

  const navbarOverrides = (signOut) => {
    return {
      Button: {
        children: "Sign Out",
        onClick: () => {
          signOut();
          navigate("/");
        },
      },
    };
  };

  const profileCardCollectionOverrides = () => {
    return {
      Button: {
        onClick: () => {
          navigate(props.username);
        },
      },
    };
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <NavBar width="100%" overrides={navbarOverrides(signOut)} />
          <ProfileCardCollection overrides={profileCardCollectionOverrides} />
        </main>
      )}
    </Authenticator>
  );
}

export default Explore;
