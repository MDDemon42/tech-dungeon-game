import {useNavigate} from 'react-router-dom';
import styles from '../index.module.css';

function SettingsPage() {
    const navigation = useNavigate()

    const backButtonListener = () => {
        navigation('/')
    }

    return (
        <div className={
            [
                styles.extensionPopup,
                styles.border
            ].join(' ')
        }>
            <div className={styles.extensionPopup_buttonsBlock}>
                <button 
                    className={styles.border}
                    onClick={backButtonListener}
                >
                    Back to Main Page
                </button>
            </div>
        </div>
    )
}

export default SettingsPage