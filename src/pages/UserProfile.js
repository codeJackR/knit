import { useParams } from 'react-router-dom';
import GetUserByUsername from './../datastore/user'

export const UserProfile = (props) => {

    let { username } = useParams();
    const user = GetUserByUsername(username)

    if (user === "loading") {
        return <div>Loading...</div>;
    }

    if (user === "error") {
        return <div>Error...</div>;
    }

    return (
        <div> Welcome {user.email_id}! </div>
    )
}

export default UserProfile;