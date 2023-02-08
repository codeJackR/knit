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
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <NavBar width="100%" overrides={navbarOverrides(signOut)} />
          <ProfileCardCollection overrideItems={profileCardCollectionOverrideItems} />
        </main>
      )}
    </Authenticator>
  );
}

export default Explore;
