import styles from '../index.module.css';

import BattleScreen from "../components/BattleScreen";
import MarketScreen from '../components/MarketScreen';
import SpellShopScreen from '../components/SpellShopScreen';
import FocusSiteScreen from '../components/FocusSiteScreen';
import AcademyScreen from '../components/AcademyScreen';
import CyberLabScreen from '../components/CyberLabScreen';
import MutationLabScreen from '../components/MutationLabScreen';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../types/interfaces';
import gameScreens from '../redux/slices/gameScreens';

const screens: Record<string, JSX.Element> = {
    'battle': <BattleScreen />,
    'market': <MarketScreen/>,
    'academy': <AcademyScreen/>,
    'spellshop': <SpellShopScreen/>,
    'focussite': <FocusSiteScreen/>,
    'cyberlab': <CyberLabScreen/>,
    'mutationlab': <MutationLabScreen/>
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
            <div>
                {
                    Object.keys(screens).map(item => (
                        <button onClick={() => changeScreenButtonListener(item)}>
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default GameScreen