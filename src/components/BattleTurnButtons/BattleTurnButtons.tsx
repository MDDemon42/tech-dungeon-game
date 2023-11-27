import { 
    HouseDoor, 
    LayerBackward, 
    SkipForward 
} from 'react-bootstrap-icons';
import styles from './BattleTurnButtons.module.css';

function BattleTurnButtons(props: {
    listeners: {
        navigateHome: () => void,
        deselectMember: () => void,
        nextTurn: () => void
    },
    disableReasons: {
        deselectMember: boolean
    }
}) {
    const {listeners, disableReasons} = props;

    return <div className={styles.BattleTurnButtons}>
        <button 
            onClick={listeners.navigateHome}
            title={chrome.i18n.getMessage('back_to_village')}
        >
            <HouseDoor size={15}/>
        </button>
        <button 
            disabled={disableReasons.deselectMember}
            onClick={listeners.deselectMember}
            title={chrome.i18n.getMessage('battle_page_deselect_member')}
        >
            <LayerBackward size={15}/>                
        </button>
        <button 
            onClick={listeners.nextTurn}
            title={chrome.i18n.getMessage('battle_page_next_turn')}
        >
            <SkipForward size={15}/>
        </button>
    </div>
}

export default BattleTurnButtons