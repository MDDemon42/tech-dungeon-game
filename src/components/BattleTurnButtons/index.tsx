import { HouseDoor } from 'react-bootstrap-icons';
import styles from './index.module.css';

function BattleTurnButtons(props: {
    listeners: {
        navigateHome: () => void,
    }
}) {
    const {listeners} = props;

    return <div className={styles.BattleTurnButtons}>
        <button 
            onClick={listeners.navigateHome}
            title={chrome.i18n.getMessage('back_to_village')}
        >
            <HouseDoor size={15}/>
        </button>
    </div>
}

export default BattleTurnButtons