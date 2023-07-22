import styles from './GameScreen.module.css';
import BattleScreen from "../BattleScreen/BattleScreen";
import SubMindScreen from '../SubMindScreen/SubMindScreen';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../enums-and-interfaces/interfaces';
import gameScreens from '../../redux/slices/gameScreen';
import SubInventoryScreen from '../SubInventoryScreen/SubInventoryScreen';
import { MindOption, InventoryOption, GameScreens } from '../../enums-and-interfaces/enums';

function GameScreen() {
    const screen = useSelector((store: IStore) => store.gameScreen.screen);
    const dispatch = useDispatch();

    function changeScreenButtonListener(item: string) {
        dispatch(gameScreens.actions.changeScreen(item))
    }

    const screens: Record<GameScreens, JSX.Element> = {
        [GameScreens.academy]: <SubMindScreen dataName={MindOption.masteries}/>,
        [GameScreens.battle]: <BattleScreen />,
        [GameScreens.cyberLab]: <SubInventoryScreen dataName={InventoryOption.cybers}/>,
        [GameScreens.focusSite]: <SubMindScreen dataName={MindOption.powers}/>,
        [GameScreens.market]: <SubInventoryScreen dataName={InventoryOption.items}/>,
        [GameScreens.mutationLab]: <SubInventoryScreen dataName={InventoryOption.mutations}/>,
        [GameScreens.spellShop]: <SubMindScreen dataName={MindOption.spells}/>
    }

    function keyToButtonText(key: string) {
        return 'To ' + key.replace('_', ' ') + '!';
    }

    return (
        <div className={styles.GameScreen}>
            {
                screens[screen]
            }
            <div className={styles.GameScreen_buttonsBlock}>
                {
                    Object.keys(screens).map(item => (
                        <button onClick={() => changeScreenButtonListener(item)}>
                            {keyToButtonText(item)}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default GameScreen