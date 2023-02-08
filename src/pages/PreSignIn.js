import Home from "./Home";

function PreSignIn({ signOut, user }) {
    return (
        <main>
            <Home signOut={signOut} user={user} />
        </main>
    );
}

export default PreSignIn;
