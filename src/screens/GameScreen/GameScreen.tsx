import styles from './GameScreen.module.css';
import gameScreens from '../../redux/slices/gameScreen';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../enums-and-interfaces/interfaces';
import { GameScreens } from '../../enums-and-interfaces/enums';
import { HouseDoor } from 'react-bootstrap-icons';
import Academy from '../Academy/Academy';
import AirSite from '../AirSite/AirSite';
import CyberLab from '../CyberLab/CyberLab';
import FireSite from '../FireSite/FireSite';
import FocusSite from '../FocusSite/FocusSite';
import Guild from '../Guild/Guild';
import IceSite from '../IceSite/IceSite';
import Market from '../Market/Market';
import MutationLab from '../MutationLab/MutationLab';
import VillageMap from '../VillageMap/VillageMap';
import WizardSchool from '../WizardSchool/WizardSchool';

function GameScreen() {
    const screen = useSelector((store: IStore) => store.gameScreen.screen);
    const dispatch = useDispatch();

    const screens: Partial<Record<GameScreens, JSX.Element>> = {
        [GameScreens.academy]: <Academy />,
        [GameScreens.airSchool]: <AirSite />,
        [GameScreens.cyberLab]: <CyberLab />,
        [GameScreens.fireSchool]: <FireSite />,
        [GameScreens.focusSchool]: <FocusSite />,
        [GameScreens.guildSchool]: <Guild />,
        [GameScreens.iceSchool]: <IceSite />,
        [GameScreens.market]: <Market />,
        [GameScreens.mutationLab]: <MutationLab />,
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