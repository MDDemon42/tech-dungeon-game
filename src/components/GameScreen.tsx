import styles from '../index.module.css';
import BattleScreen from "../components/BattleScreen";
import SpellShopScreen from '../components/SpellShopScreen';
import FocusSiteScreen from '../components/FocusSiteScreen';
import AcademyScreen from '../components/AcademyScreen';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../types/interfaces';
import gameScreens from '../redux/slices/gameScreens';
import SubInventoryScreen from './SubInventoryScreen';

const screens: Record<string, JSX.Element> = {
    'battle': <BattleScreen />,
    'market': <SubInventoryScreen dataName='items'/>,
    'academy': <AcademyScreen/>,
    'spellshop': <SpellShopScreen/>,
    'focussite': <FocusSiteScreen/>,
    'cyberlab': <SubInventoryScreen dataName='cybers'/>,
    'mutationlab': <SubInventoryScreen dataName='mutations'/>
}

const screensButtonTexts: Record<string, string> = {
    'battle': 'To battle!',
    'market': 'To Market',
    'academy': 'To Academy',
    'spellshop': 'To Spell Shop',
    'focussite': 'To Focus Site',
    'cyberlab': 'To Cyber Lab',
    'mutationlab': 'To Mutation Lab'
}

function GameScreen() {
    const screen = useSelector((store: IStore) => store.gameScreens.screen);
    const dispatch = useDispatch();

    function changeScreenButtonListener(item: string) {
        dispatch(gameScreens.actions.changeScreen(item))
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
                            {screensButtonTexts[item]}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default GameScreen