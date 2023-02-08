import { useParams } from 'react-router-dom';

export const UserProfile = (props) => {
    let { username } = useParams();
    debugger;
    return (
        <div> Welcome {username}! </div>
    )
}

export default UserProfile;