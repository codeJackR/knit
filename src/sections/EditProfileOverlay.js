import { EditProfilePopup } from '../ui-components';
import { StorageManager } from '@aws-amplify/ui-react-storage';

function EditProfileOverlay({ user, toggle }) {

    const editProfilePopupOverrides = () => {
        var result = {
            "EditProfileFrame": {
                overrides: {
                    "Icon": {
                        style: {
                            cursor: "pointer"
                        },
                        onClick: toggle,
                    }
                }
            }
        }
        return result
    }

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999, // ensure the popup appears on top of all other content
        }}>
            <EditProfilePopup overrides={editProfilePopupOverrides()} />
            <StorageManager accessLevel='public' acceptedFileTypes={["image/*", "image/x-canon-cr2"]} variation="drop"></StorageManager>
        </div>
    );
}

export { EditProfileOverlay };

