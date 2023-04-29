import styles from '../index.module.css';

import StatsScreen from "../components/StatsScreen";
import ItemsScreen from "../components/ItemsScreen";
import AbilitiesScreen from "../components/AbilitiesScreen";
import BattleScreen from "../components/BattleScreen";

function GamePage() {   
    return (
        <div className={styles.gamePage}>
            <div className={styles.gamePage_componentsBlock}>
                <StatsScreen />
                <ItemsScreen />
                <AbilitiesScreen /> 
            </div>
            <div className={styles.gamePage_mainBlock}>
                <BattleScreen />
            </div>
        </div>
    )
}

export default GamePage