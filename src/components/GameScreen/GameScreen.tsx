import styles from './GameScreen.module.css';
import gameScreens from '../../redux/slices/gameScreen';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../enums-and-interfaces/interfaces';
import { GameScreens, MindOption, InventoryOption } from '../../enums-and-interfaces/enums';
import SubInventoryScreen from '../SubInventoryScreen/SubInventoryScreen';
import SubMindScreen from '../SubMindScreen/SubMindScreen';
import { HouseDoor } from 'react-bootstrap-icons';
import VillageMap from '../VillageMap/VillageMap';

function GameScreen() {
    const screen = useSelector((store: IStore) => store.gameScreen.screen);
    const dispatch = useDispatch();

    const screens: Record<GameScreens, JSX.Element> = {
        [GameScreens.academy]: <SubMindScreen dataName={MindOption.masteries}/>,
        [GameScreens.cyberLab]: <SubInventoryScreen dataName={InventoryOption.cybers}/>,
        [GameScreens.focusSite]: <SubMindScreen dataName={MindOption.powers}/>,
        [GameScreens.market]: <SubInventoryScreen dataName={InventoryOption.items}/>,
        [GameScreens.mutationLab]: <SubInventoryScreen dataName={InventoryOption.mutations}/>,
        [GameScreens.spellShop]: <SubMindScreen dataName={MindOption.spells}/>,
        [GameScreens.villageMap]: <VillageMap />
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