import styles from './GameScreen.module.css';
import BattleScreen from "../BattleScreen/BattleScreen";
import SubMindScreen from '../SubMindScreen/SubMindScreen';
import { useSelector, useDispatch } from 'react-redux';
import { GameScreens, IStore, InventoryOptions, MindOptions } from '../../interfaces/interfaces';
import gameScreens from '../../redux/slices/gameScreen';
import SubInventoryScreen from '../SubInventoryScreen/SubInventoryScreen';

function GameScreen() {
    const screen = useSelector((store: IStore) => store.gameScreen.screen);
    const dispatch = useDispatch();

    function changeScreenButtonListener(item: string) {
        dispatch(gameScreens.actions.changeScreen(item))
    }

    const screens: Record<GameScreens, JSX.Element> = {
        [GameScreens.academy]: <SubMindScreen dataName={MindOptions.masteries}/>,
        [GameScreens.battle]: <BattleScreen />,
        [GameScreens.cyberLab]: <SubInventoryScreen dataName={InventoryOptions.cybers}/>,
        [GameScreens.focusSite]: <SubMindScreen dataName={MindOptions.powers}/>,
        [GameScreens.market]: <SubInventoryScreen dataName={InventoryOptions.items}/>,
        [GameScreens.mutationLab]: <SubInventoryScreen dataName={InventoryOptions.mutations}/>,
        [GameScreens.spellShop]: <SubMindScreen dataName={MindOptions.spells}/>
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