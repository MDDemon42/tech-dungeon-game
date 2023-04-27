import {useNavigate} from 'react-router-dom';
import styles from '../index.module.css';

function SettingsPage() {
    const navigation = useNavigate()

    const backButtonListener = () => {
        navigation('/')
    }

    return (
        <div className={styles.extensionPopup}>
            <h3>
                Settings Page
            </h3>
            <button onClick={backButtonListener}>
                Back to Main Page
            </button>
        </div>
    )
}

export default SettingsPage