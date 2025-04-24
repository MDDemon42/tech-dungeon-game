import { useDispatch } from "react-redux";
import { 
    MortarboardFill, Virus, 
    Tools, Eye, Magic, 
    EmojiAngryFill, Fire,
    Wind, Snow2, Bank2,
    ShopWindow
} from 'react-bootstrap-icons';
import gameScreens from '../../redux/slices/gameScreen';
import { 
    BendingGameScreens, 
    CommonGameScreens, 
    GameScreens, 
    InventoryGameScreens, 
    SchoolGameScreens 
} from "../../enums-and-interfaces/enums";
import styles from './index.module.css';
import { useNavigate } from "react-router-dom";
import { ReactElement } from "react";
import images from "../../images/images";
import { useSelector } from "react-redux";
import { IStore } from "../../enums-and-interfaces/interfaces";
import InteractiveItemOnMap from "./InteractiveObjectOnMap";

export const screenMappings: Partial<Record<GameScreens, {
    title: string,
    icon: ReactElement,
    houses: number[],
    requiredScreen: GameScreens,
    requiredStage: number
}>> = {
    [SchoolGameScreens.academy]: {
        requiredScreen: InventoryGameScreens.market,
        requiredStage: 1,
        title: chrome.i18n.getMessage('academy_to'),
        icon: <MortarboardFill size={25}/>,
        houses: [10, 11, 12, 13]
    },
    [BendingGameScreens.airSite]: {
        requiredScreen: SchoolGameScreens.guildSchool,
        requiredStage: 1,
        title: chrome.i18n.getMessage('air_site_to'),
        icon: <Wind size={25}/>,
        houses: [7]
    },
    [InventoryGameScreens.cyberLab]: {
        requiredScreen: CommonGameScreens.villageMap,
        requiredStage: 0,
        title: chrome.i18n.getMessage('cyber_lab_to'),
        icon: <Tools size={25}/>,
        houses: [20]
    },        
    [BendingGameScreens.fireSite]: {
        requiredScreen: SchoolGameScreens.guildSchool,
        requiredStage: 1,
        title: chrome.i18n.getMessage('fire_site_to'),
        icon: <Fire size={25}/>,
        houses: [8]
    },
    [SchoolGameScreens.focusSite]: {
        requiredScreen: SchoolGameScreens.guildSchool,
        requiredStage: 1,
        title: chrome.i18n.getMessage('focus_site_to'),
        icon: <Eye size={25}/>,
        houses: [9]
    },
    [SchoolGameScreens.guildSchool]: {
        requiredScreen: InventoryGameScreens.market,
        requiredStage: 1,
        title: chrome.i18n.getMessage('guild_to'),
        icon: <Bank2 size={25}/>,
        houses: [14, 15, 16, 17]
    },
    [BendingGameScreens.iceSite]: {
        requiredScreen: SchoolGameScreens.guildSchool,
        requiredStage: 1,
        title: chrome.i18n.getMessage('ice_site_to'),
        icon: <Snow2 size={25}/>,
        houses: [6]
    },
    [InventoryGameScreens.market]: {
        requiredScreen: CommonGameScreens.villageMap,
        requiredStage: 0,
        title: chrome.i18n.getMessage('market_to'),
        icon: <ShopWindow size={25}/>,
        houses: [0, 1, 2, 3, 4, 5]
    },
    [InventoryGameScreens.mutaLab]: {
        requiredScreen: CommonGameScreens.villageMap,
        requiredStage: 0,
        title: chrome.i18n.getMessage('muta_lab_to'),
        icon: <Virus size={25}/>,
        houses: [20]
    }, 
    [SchoolGameScreens.wizardSchool]: {
        requiredScreen: SchoolGameScreens.academy,
        requiredStage: 1,
        title: chrome.i18n.getMessage('wizard_school_to'),
        icon: <Magic size={25}/>,
        houses: [18, 19]
    },    
}

function VillageMap() {
    const villageMapStage = useSelector((store: IStore) => store.gameStage.Village_Map.stage);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function goToListener(item: string) {
        dispatch(gameScreens.actions.changeScreen(item));
    }

    return (
        <div className={styles.VillageMap}>
            <img alt='map' src={images.misc.map}/>
            {
                Object.keys(screenMappings).map(item => {
                    return <InteractiveItemOnMap
                        listener={() => goToListener(item)}
                        item={item}
                        title={screenMappings[item as GameScreens]?.title || ''}
                        icon={screenMappings[item as GameScreens]?.icon || <></>}
                        houses={screenMappings[item as GameScreens]?.houses || []}
                    />
                })
            }
            {
                villageMapStage !== 0 && 
                <button 
                    onClick={() => navigate('/battle')}
                    className={styles.VillageMap_icon_Battle}
                    title={chrome.i18n.getMessage('to_battle_screen_button_title')}
                >
                    <EmojiAngryFill size={25}/>
                </button>
            }            
        </div>
    )
}

export default VillageMap