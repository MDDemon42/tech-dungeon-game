import styles from '../index.module.css';

import MarketScreen from '../components/MarketScreen';
import CommonScreen from '../components/CommonScreen';
import BattleScreen from "../components/BattleScreen";
import InventoryScreen from '../components/InventoryScreen';
import SpellShopScreen from '../components/SpellShopScreen';
import FocusSiteScreen from '../components/FocusSiteScreen';
import AcademyScreen from '../components/AcademyScreen';
import CyberLabScreen from '../components/CyberLabScreen';
import MutationLabScreen from '../components/MutationLabScreen';

function GamePage() {   
    return (
        <div className={styles.gamePage}>
            <div className={styles.gamePage_componentsBlock}>
                <InventoryScreen />
            </div>
            <div className={styles.gamePage_mainBlock}>
                <BattleScreen />
                <MarketScreen/>
                <AcademyScreen/>
                <SpellShopScreen/>
                <FocusSiteScreen/>
                <CyberLabScreen/>
                <MutationLabScreen/>
            </div>
        </div>
    )
}

export default GamePage