import styles from '../index.module.css';

import StatsScreen from "../components/StatsScreen";
import CommonScreen from '../components/CommonScreen';
import BattleScreen from "../components/BattleScreen";

function GamePage() {   
    return (
        <div className={styles.gamePage}>
            <div className={styles.gamePage_componentsBlock}>
                <StatsScreen />
                <CommonScreen name={'items'}/>
                <CommonScreen name={'abilities'}/> 
                <CommonScreen name={'spells'}/>
            </div>
            <div className={styles.gamePage_mainBlock}>
                <BattleScreen />
            </div>
        </div>
    )
}

export default GamePage