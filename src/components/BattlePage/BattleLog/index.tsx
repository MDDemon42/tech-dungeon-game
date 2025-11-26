import { IBattlePageState } from '../../../enums-and-interfaces/interfaces';
import styles from './index.module.css';

const BattleLog = (props: {
    battlePageState: IBattlePageState
}) => {
    const {battlePageState} = props;

    return (
        <div className={styles.BattleLog}>
            {
                battlePageState.log.map(log => (
                    <div className={styles.BattleLog_log}> 
                        {log}
                    </div>
                ))
            }
        </div>
    )
}

export default BattleLog