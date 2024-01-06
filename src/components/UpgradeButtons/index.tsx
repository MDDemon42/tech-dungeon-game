import { IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import styles from './index.module.css';

function UpgradeButtons(props: {
    upgradeButtons: IUpgradeButton[],
    listener: (stage: number) => void
}) {
    const {upgradeButtons, listener} = props;

    const visibleUpgradeButtons = upgradeButtons.filter(button => button.visible);

    if (visibleUpgradeButtons.length === 0) {
        return null
    }

    return (
        <div className={styles.UpgradeButtons}>
            {
                visibleUpgradeButtons.map(option => {
                    return (
                        <button 
                            onClick={() => listener(option.stage)}
                            disabled={option.disabled}
                        >
                            {option.title}
                        </button>
                )})
            } 
        </div>
    )
}

export default UpgradeButtons