import styles from './GameScreen.module.css';
import gameScreens from '../../redux/slices/gameScreen';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../enums-and-interfaces/interfaces';
import { GameScreens } from '../../enums-and-interfaces/enums';
import { HouseDoor } from 'react-bootstrap-icons';
import Academy from '../../screens/../screens/Academy/Academy';
import AirSite from '../../screens/../screens/AirSite/AirSite';
import CyberLab from '../../screens/../screens/CyberLab/CyberLab';
import FireSite from '../../screens/../screens/FireSite/FireSite';
import FocusSite from '../../screens/../screens/FocusSite/FocusSite';
import Guild from '../../screens/../screens/Guild/Guild';
import IceSite from '../../screens/../screens/IceSite/IceSite';
import Market from '../../screens/../screens/Market/Market';
import MutationLab from '../../screens/../screens/MutationLab/MutationLab';
import VillageMap from '../../screens/../screens/VillageMap/VillageMap';
import WizardSchool from '../../screens/../screens/WizardSchool/WizardSchool';

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
        [GameScreens.mutaLab]: <MutationLab />,
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