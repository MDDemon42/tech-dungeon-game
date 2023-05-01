import styles from '../index.module.css';

import StatsScreen from "../components/StatsScreen";
import CommonScreen from '../components/CommonScreen';
import BattleScreen from "../components/BattleScreen";
import InventoryScreen from '../components/InventoryScreen';

function GamePage() {   
    return (
        <div className={styles.gamePage}>
            <div className={styles.gamePage_componentsBlock}>
                <InventoryScreen />
            </div>
            <div className={styles.gamePage_mainBlock}>
                <BattleScreen />
                <CommonScreen name={'items'} user={false} vertical={false}/>
                <CommonScreen name={'abilities'} user={false} vertical={false}/> 
                <CommonScreen name={'spells'} user={false} vertical={false}/>
                <CommonScreen name={'powers'} user={false} vertical={false}/>
                <CommonScreen name={'cybers'} user={false} vertical={false}/>
                <CommonScreen name={'mutations'} user={false} vertical={false}/>
            </div>
        </div>
    )
}

export default GamePage