import styles from '../index.module.css';
import BattleScreen from "../components/BattleScreen";
import SpellShopScreen from '../components/SpellShopScreen';
import FocusSiteScreen from '../components/FocusSiteScreen';
import AcademyScreen from '../components/AcademyScreen';
import { useSelector, useDispatch } from 'react-redux';
import { GameScreens, IStore } from '../types/interfaces';
import gameScreens from '../redux/slices/gameScreen';
import SubInventoryScreen from './SubInventoryScreen';

function GameScreen() {
    const screen = useSelector((store: IStore) => store.gameScreen.screen);
    const dispatch = useDispatch();

    function changeScreenButtonListener(item: string) {
        dispatch(gameScreens.actions.changeScreen(item))
    }

    const screens: Record<GameScreens, JSX.Element> = {
        [GameScreens.academy]: <AcademyScreen/>,
        [GameScreens.battle]: <BattleScreen />,
        [GameScreens.cyberLab]: <SubInventoryScreen dataName='cybers'/>,
        [GameScreens.focusSite]: <FocusSiteScreen/>,
        [GameScreens.market]: <SubInventoryScreen dataName='items'/>,
        [GameScreens.mutationLab]: <SubInventoryScreen dataName='mutations'/>,
        [GameScreens.spellShop]: <SpellShopScreen/>
    }

    function keyToButtonText(key: string) {
        return 'To ' + key.replace('_', ' ') + '!';
    }

    return (
        <div className={styles.gamePage_mainBlock}>
            {
                screens[screen]
            }
            <div className={styles.gamePage_mainBlock_buttonsBlock}>
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