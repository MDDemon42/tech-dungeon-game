import {useNavigate} from 'react-router-dom';
import styles from './StartPage.module.css';

function SettingsPage() {
    const navigation = useNavigate()

    const backButtonListener = () => {
        navigation('/')
    }

    return (
        <div className={styles.Popup}>
            <div className={styles.Popup_buttonsBlock}>
                <button 
                    onClick={backButtonListener}
                >
                    {chrome.i18n.getMessage('settings_page_back_to_main_page')}
                </button>
            </div>
        </div>
    )
}

export default SettingsPage