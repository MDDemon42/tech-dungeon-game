import { 
    BendingGameScreens, 
    CommonGameScreens, 
    InventoryGameScreens, 
    SchoolGameScreens 
} from "../../enums-and-interfaces/enums";
import { 
    EmojiDizzy,
    MortarboardFill, Virus, 
    Tools, Eye, Magic, 
    Fire,
    Wind, Snow2, Bank2,
    HouseFill, ShopWindow,
} from 'react-bootstrap-icons';
import { IVillageMapScreenMapping } from "../../enums-and-interfaces/interfaces";

const screenMappings: IVillageMapScreenMapping = {
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
    [CommonGameScreens.mansion]: {
        requiredScreen: CommonGameScreens.villageMap,
        requiredStage: 0,
        title: chrome.i18n.getMessage('mansion_to'),
        icon: <HouseFill size={25}/>,
        houses: []
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
    [InventoryGameScreens.tropheyField]: {
        requiredScreen: CommonGameScreens.villageMap,
        requiredStage: 111,
        title: chrome.i18n.getMessage('trophey_field_to'),
        icon: <EmojiDizzy size={25}/>,
        houses: [0]
    },        
    [SchoolGameScreens.wizardSchool]: {
        requiredScreen: SchoolGameScreens.academy,
        requiredStage: 1,
        title: chrome.i18n.getMessage('wizard_school_to'),
        icon: <Magic size={25}/>,
        houses: [18, 19]
    },    
}

export default screenMappings