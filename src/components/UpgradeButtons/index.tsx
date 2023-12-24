import { IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import styles from './index.module.css';

function UpgradeButtons(props: {
    upgradeButtons: IUpgradeButton[],
    listener: (stage: number) => void
}) {
    const {upgradeButtons, listener} = props;

    return (
        <div className={styles.UpgradeButtons}>
            {
                upgradeButtons.map(option => {
                    if (!option.visible) {
                        return null
                    }

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