import { Authenticator } from "@aws-amplify/ui-react";
import Home from "./Home";
import { useLocation } from "react-router-dom";

function PostSignIn({ signOut, user }) {
  const location = useLocation();
  if (location.state == null) {
    return (
      < main >
        <Home />
      </main >
    )
  } else if (location.state.source === "signIn") {
    return (
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <Home signOut={signOut} user={user} />
          </main>
        )}
      </Authenticator>
    )
  }
}

export default PostSignIn;
