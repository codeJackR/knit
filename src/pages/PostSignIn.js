import { Authenticator } from "@aws-amplify/ui-react";
import Home from "./Home";

function PostSignIn(props) {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Home signOut={signOut} user={user} />
        </main>
      )}
    </Authenticator>
  );
}

export default PostSignIn;
