import {useNavigate} from 'react-router-dom';
import styles from '../index.module.css';

import StatsScreen from '../components/StatsScreen';

function SettingsPage() {
    const navigation = useNavigate()

    const backButtonListener = () => {
        navigation('/')
    }

    return (
        <div className={styles.extensionPopup}>
            <StatsScreen />
            <div className={styles.extensionPopup_buttonsBlock}>
                <button onClick={backButtonListener}>
                    Back to Main Page
                </button>
            </div>
        </div>
    )
}

export default SettingsPage