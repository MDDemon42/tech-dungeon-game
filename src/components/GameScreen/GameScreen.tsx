import styles from './GameScreen.module.css';
import gameScreens from '../../redux/slices/gameScreen';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../enums-and-interfaces/interfaces';
import { GameScreens } from '../../enums-and-interfaces/enums';
import { HouseDoor } from 'react-bootstrap-icons';
import Academy from '../../gameScreens/Academy';
import AirSite from '../../gameScreens/AirSite/';
import CyberLab from '../../gameScreens/CyberLab';
import FireSite from '../../gameScreens/FireSite';
import FocusSite from '../../gameScreens/FocusSite';
import Guild from '../../gameScreens/Guild';
import IceSite from '../../gameScreens/IceSite/';
import Market from '../../gameScreens/Market';
import MutaLab from '../../gameScreens/MutaLab';
import VillageMap from '../../gameScreens/VillageMap';
import WizardSchool from '../../gameScreens/WizardSchool';

function GameScreen() {
    const screen = useSelector((store: IStore) => store.gameScreen.screen);
    const dispatch = useDispatch();

    const screens: Partial<Record<GameScreens, JSX.Element>> = {
        [GameScreens.academy]: <Academy />,
        [GameScreens.airSite]: <AirSite />,
        [GameScreens.cyberLab]: <CyberLab />,
        [GameScreens.fireSite]: <FireSite />,
        [GameScreens.focusSite]: <FocusSite />,
        [GameScreens.guildSchool]: <Guild />,
        [GameScreens.iceSite]: <IceSite />,
        [GameScreens.market]: <Market />,
        [GameScreens.mutaLab]: <MutaLab />,
        [GameScreens.villageMap]: <VillageMap />,
        [GameScreens.wizardSchool]: <WizardSchool />,
    }

    return (
        <div className={styles.GameScreen}>
            {
                screen !== GameScreens.villageMap && <button 
                    className={styles.GameScreen_villageButton}
                    onClick={() => dispatch(gameScreens.actions.changeScreen(GameScreens.villageMap))}
                    title={chrome.i18n.getMessage('back_to_village')}
                >
                    <HouseDoor size={25}/>
                </button>
            }
            <div className={styles.GameScreen_screen}>
                {screens[screen]}  
            </div>
        </div>
    )
}

export default GameScreen