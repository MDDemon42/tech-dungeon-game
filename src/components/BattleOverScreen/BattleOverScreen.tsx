import { BattleResult } from '../../enums-and-interfaces/enums';
import styles from './BattleOverScreen.module.css';

function BattleOverScreen(props: {
    result: BattleResult,
    listener: () => void
}) {
    const {result, listener} = props;

    const resultMappings: Record<BattleResult, {
        title: string,
        subTitle: string
    }> = {
        [BattleResult.none]: {
            title: '',
            subTitle: ''
        },
        [BattleResult.win]: {
            title: 'Victory!',
            subTitle: 'All enemies are dead'
        },
        [BattleResult.lose]: {
            title: 'This game is over.',
            subTitle: 'The whole squad is dead.'
        }
    }

    return (
        <div className={styles.BattleOverScreen}>
            <div className={styles.BattleOverScreen_info}>
                <h2>
                    {resultMappings[result].title}
                </h2>
                <h3>
                    {resultMappings[result].subTitle}
                </h3>
                <button onClick={listener}>
                    Ok
                </button>
            </div>            
        </div>
    )
}

export default BattleOverScreen