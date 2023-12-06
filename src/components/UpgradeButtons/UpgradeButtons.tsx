import styles from './UpgradeButtons.module.css';

function UpgradeButtons(props: {
    upgradeButtons: {
        title: string,
        stage: number,
        disabled: boolean
    }[],
    listener: (stage: number) => void
}) {
    const {upgradeButtons, listener} = props;

    return (
        <div className={styles.UpgradeButtons}>
            {
                upgradeButtons.map(option => (
                    <button 
                        onClick={() => listener(option.stage)}
                        disabled={option.disabled}
                    >
                        {option.title}
                    </button>
                ))
            } 
        </div>
    )
}

export default UpgradeButtons