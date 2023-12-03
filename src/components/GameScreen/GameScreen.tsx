import styles from './GameScreen.module.css';
import gameScreens from '../../redux/slices/gameScreen';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../enums-and-interfaces/interfaces';
import { GameScreens, MindGameScreens, InventoryGameScreens } from '../../enums-and-interfaces/enums';
import SubInventoryScreen from '../SubInventoryScreen/SubInventoryScreen';
import SubMindScreen from '../SubMindScreen/SubMindScreen';
import { HouseDoor } from 'react-bootstrap-icons';
import VillageMap from '../VillageMap/VillageMap';
import WizardSchool from '../WizardSchool/WizardSchool';
import AirSite from '../AirSite/AirSite';
import FireSite from '../FireSite/FireSite';
import IceSite from '../IceSite/IceSite';
import FocusSite from '../FocusSite/FocusSite';
import Guild from '../Guild/Guild';

function GameScreen() {
    const screen = useSelector((store: IStore) => store.gameScreen.screen);
    const dispatch = useDispatch();

    const screens: Partial<Record<GameScreens, JSX.Element>> = {
        [GameScreens.academy]: <SubMindScreen screenName={MindGameScreens.academy}/>,
        [GameScreens.cyberLab]: <SubInventoryScreen screenName={InventoryGameScreens.cyberLab}/>,
        [GameScreens.focusSchool]: <FocusSite />,
        [GameScreens.market]: <SubInventoryScreen screenName={InventoryGameScreens.market}/>,
        [GameScreens.mutationLab]: <SubInventoryScreen screenName={InventoryGameScreens.mutationLab}/>,
        [GameScreens.wizardSchool]: <WizardSchool />,
        [GameScreens.villageMap]: <VillageMap />,
        [GameScreens.airSchool]: <AirSite />,
        [GameScreens.fireSchool]: <FireSite />,
        [GameScreens.iceSchool]: <IceSite />,
        [GameScreens.guildSchool]: <Guild />
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
            {
                screens[screen]
            }        
        </div>
    )
}

export default GameScreen