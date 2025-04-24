import styles from './index.module.css';
import gameScreens from '../../redux/slices/gameScreen';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../enums-and-interfaces/interfaces';
import { 
    BendingGameScreens, 
    CommonGameScreens, 
    GameScreens, 
    InventoryGameScreens, 
    SchoolGameScreens 
} from '../../enums-and-interfaces/enums';
import { Arrow90degLeft } from 'react-bootstrap-icons';
import Academy from '../../gameScreens/Academy';
import AirSite from '../../gameScreens/AirSite';
import CyberLab from '../../gameScreens/CyberLab';
import FireSite from '../../gameScreens/FireSite';
import FocusSite from '../../gameScreens/FocusSite';
import Guild from '../../gameScreens/Guild';
import IceSite from '../../gameScreens/IceSite';
import Market from '../../gameScreens/Market';
import MutaLab from '../../gameScreens/MutaLab';
import VillageMap from '../../gameScreens/VillageMap';
import WizardSchool from '../../gameScreens/WizardSchool';

function GameScreen() {
    const screen = useSelector((store: IStore) => store.gameScreen.screen);
    const dispatch = useDispatch();

    const screens: Partial<Record<GameScreens, JSX.Element>> = {
        [SchoolGameScreens.academy]: <Academy />,
        [BendingGameScreens.airSite]: <AirSite />,
        [InventoryGameScreens.cyberLab]: <CyberLab />,
        [BendingGameScreens.fireSite]: <FireSite />,
        [SchoolGameScreens.focusSite]: <FocusSite />,
        [SchoolGameScreens.guildSchool]: <Guild />,
        [BendingGameScreens.iceSite]: <IceSite />,
        [InventoryGameScreens.market]: <Market />,
        [InventoryGameScreens.mutaLab]: <MutaLab />,
        [CommonGameScreens.villageMap]: <VillageMap />,
        [SchoolGameScreens.wizardSchool]: <WizardSchool />,
    }

    return (
        <div className={styles.GameScreen}>
            {
                screen !== CommonGameScreens.villageMap && <button 
                    className={styles.GameScreen_villageButton}
                    onClick={() => dispatch(gameScreens.actions.changeScreen(CommonGameScreens.villageMap))}
                    title={chrome.i18n.getMessage('back_to_village')}
                >
                    <Arrow90degLeft size={25}/>
                </button>
            }
            <div className={styles.GameScreen_screen}>
                {screens[screen]}  
            </div>
        </div>
    )
}

export default GameScreen