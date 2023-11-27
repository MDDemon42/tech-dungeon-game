import { useDispatch } from "react-redux";
import { 
    MortarboardFill, 
    Capsule, 
    Gear, 
    Eye, 
    Gem, 
    Magic, 
    EmojiAngryFill 
} from 'react-bootstrap-icons';
import gameScreens from '../../redux/slices/gameScreen';
import { GameScreens } from "../../enums-and-interfaces/enums";
import styles from './VillageMap.module.css';
import { useNavigate } from "react-router-dom";
import { ReactElement } from "react";

function VillageMap() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const screenTexts: Partial<Record<GameScreens, {
        text: string,
        icon: ReactElement
    }>> = {
        [GameScreens.academy]: {
            text: chrome.i18n.getMessage('academy_to'),
            icon: <MortarboardFill size={25}/>
        },
        [GameScreens.cyberLab]: {
            text: chrome.i18n.getMessage('cyber_lab_to'),
            icon: <Gear size={25}/>
        },
        [GameScreens.focusSite]: {
            text: chrome.i18n.getMessage('focus_site_to'),
            icon: <Eye size={25}/>
        },
        [GameScreens.market]: {
            text: chrome.i18n.getMessage('market_to'),
            icon: <Gem size={25}/>
        },
        [GameScreens.mutationLab]: {
            text: chrome.i18n.getMessage('mutation_lab_to'),
            icon: <Capsule size={25}/>
        },
        [GameScreens.spellShop]: {
            text: chrome.i18n.getMessage('spell_shop_to'),
            icon: <Magic size={25}/>
        }
    }

    function goToListener(item: string) {
        dispatch(gameScreens.actions.changeScreen(item));
    }

    return (
        <div className={styles.VillageMap}>
            {
                Object.keys(screenTexts).map(item => (
                    <button 
                        onClick={() => goToListener(item)} 
                        className={styles['VillageMap_icon_' + item]}
                        title={screenTexts[item as GameScreens]?.text}
                    >
                        {screenTexts[item as GameScreens]?.icon}
                    </button>
                ))
            }
            <button 
                onClick={() => navigate('/battle')}
                className={styles.VillageMap_icon_Battle}
                title={chrome.i18n.getMessage('to_battle_screen_button_text')}
            >
                <EmojiAngryFill size={25}/>
            </button>
        </div>
    )
}

export default VillageMap