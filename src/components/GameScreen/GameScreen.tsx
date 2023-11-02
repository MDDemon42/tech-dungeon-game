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

    const screens: Record<GameScreens, {
        screen: JSX.Element,
        text: string
    }> = {
        [GameScreens.academy]: {
            screen: <SubMindScreen dataName={MindOption.masteries}/>,
            text: chrome.i18n.getMessage('academy_to')
        },
        [GameScreens.cyberLab]: {
            screen: <SubInventoryScreen dataName={InventoryOption.cybers}/>,
            text: chrome.i18n.getMessage('cyber_lab_to')
        },
        [GameScreens.focusSite]: {
            screen: <SubMindScreen dataName={MindOption.powers}/>,
            text: chrome.i18n.getMessage('focus_site_to')
        },
        [GameScreens.market]: {
            screen: <SubInventoryScreen dataName={InventoryOption.items}/>, 
            text: chrome.i18n.getMessage('market_to')
        },
        [GameScreens.mutationLab]: {
            screen: <SubInventoryScreen dataName={InventoryOption.mutations}/>,
            text: chrome.i18n.getMessage('mutation_lab_to')
        },
        [GameScreens.spellShop]: {
            screen: <SubMindScreen dataName={MindOption.spells}/>,
            text: chrome.i18n.getMessage('spell_shop_to')
        }
    }
    
    function changeScreenButtonListener(item: string) {
        dispatch(gameScreens.actions.changeScreen(item));
    }

    return (
        <div className={styles.GameScreen}>
            {
                screens[screen].screen
            }
            <div className={styles.GameScreen_buttonsBlock}>
                <button onClick={() => navigate('/battle')}>
                    {chrome.i18n.getMessage('to_battle_screen_button_text')}
                </button>
                {
                    Object.keys(screens).map(item => (
                        <button onClick={() => changeScreenButtonListener(item)}>
                            {screens[item as GameScreens].text}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default GameScreen