import styles from './GameScreen.module.css';
import gameScreens from '../../redux/slices/gameScreen';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../enums-and-interfaces/interfaces';
import { GameScreens, MindOption, InventoryOption } from '../../enums-and-interfaces/enums';
import SubInventoryScreen from '../SubInventoryScreen/SubInventoryScreen';
import SubMindScreen from '../SubMindScreen/SubMindScreen';
import { useNavigate } from 'react-router-dom';

function GameScreen() {
    const screen = useSelector((store: IStore) => store.gameScreen.screen);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const screens: Record<GameScreens, JSX.Element> = {
        [GameScreens.academy]: <SubMindScreen dataName={MindOption.masteries}/>,
        [GameScreens.cyberLab]: <SubInventoryScreen dataName={InventoryOption.cybers}/>,
        [GameScreens.focusSite]: <SubMindScreen dataName={MindOption.powers}/>,
        [GameScreens.market]: <SubInventoryScreen dataName={InventoryOption.items}/>,
        [GameScreens.mutationLab]: <SubInventoryScreen dataName={InventoryOption.mutations}/>,
        [GameScreens.spellShop]: <SubMindScreen dataName={MindOption.spells}/>
    }
    
    function changeScreenButtonListener(item: string) {
        dispatch(gameScreens.actions.changeScreen(item));
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
                <button onClick={() => navigate('/battle')}>
                    To battle!
                </button>
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