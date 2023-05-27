import { EditProfilePopup } from '../ui-components';
import { StorageManager } from '@aws-amplify/ui-react-storage';

export function EditProfileOverlay({ creator, creatorDetails, toggle }) {

    const editProfilePopupOverrides = () => {
        var result = {
            "EditProfilePopup": {
                maxWidth: "100%",
            },
            "EditProfileFrame": {
                maxWidth: "100%",
            },
            "Content": {
                maxWidth: "100%",
            },

            "Icon": {
                style: {
                    cursor: "pointer"
                },
                onClick: toggle,
            },
            "Input38043080": {
                children: <StorageManager accessLevel='public' acceptedFileTypes={["image/*", "image/x-canon-cr2"]} variation="drop"></StorageManager>
            },
            "Input38043075": {
                children: <StorageManager accessLevel='public' acceptedFileTypes={["image/*", "image/x-canon-cr2"]} variation="drop"></StorageManager>
            },
        }
        return result
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw', 
            height: '100vh',
            overflow: 'auto', // to make the content scrollable if it overflows
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 9999, // ensure the popup appears on top of all other content
        }}>
            <EditProfilePopup width='100vw' overrides={editProfilePopupOverrides()} />
        </div>
    );
}
