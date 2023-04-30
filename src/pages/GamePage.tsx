import styles from '../index.module.css';

import StatsScreen from "../components/StatsScreen";
import CommonScreen from '../components/CommonScreen';
import BattleScreen from "../components/BattleScreen";

function GamePage() {   
    return (
        <div className={styles.gamePage}>
            <div className={styles.gamePage_componentsBlock}>
                <StatsScreen />
                <CommonScreen name={'items'} user={true}/>
                <CommonScreen name={'abilities'} user={true}/> 
                <CommonScreen name={'spells'} user={true}/>
                <CommonScreen name={'powers'} user={true}/>
                <CommonScreen name={'cybers'} user={true}/>
                <CommonScreen name={'mutations'} user={true}/>
            </div>
            <div className={styles.gamePage_mainBlock}>
                <BattleScreen />
                <CommonScreen name={'items'} user={false}/>
                <CommonScreen name={'abilities'} user={false}/> 
                <CommonScreen name={'spells'} user={false}/>
                <CommonScreen name={'powers'} user={false}/>
                <CommonScreen name={'cybers'} user={false}/>
                <CommonScreen name={'mutations'} user={false}/>
            </div>
        </div>
    )
}

export default GamePage