import { GameScreens, InventoryGameScreens, MansionScreens } from '../../enums-and-interfaces/enums';
import { IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import { 
    ChatRightHeart, Hammer
} from 'react-bootstrap-icons';
import LivingRoom from './LivingRoom';
import SubInventoryScreen from '../../components/SubInventoryScreen/SubInventoryScreen';
import PatternScreen from '../../components/PatternScreen';

const mansionSubScreenMapping = {
    [MansionScreens.livingRoom]: {
        requiredStage: 1,
        icon: <ChatRightHeart size={36} />,
        screen: <LivingRoom />
    },
    [InventoryGameScreens.armoury]: {
        requiredStage: 5,
        icon: <Hammer size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.armoury}/>
    }       
}

const mansionUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('build_cottege_task_title'),
        stage: 2,
        disabled: stage % 2 === 0,
        visible: stage % 2 !== 0
    },
    {
        title: chrome.i18n.getMessage('build_mansion_task_title'),
        stage: 3,
        disabled: stage % 3 === 0,
        visible: stage % 2 === 0 && stage % 3 !== 0
    },
    {
        title: chrome.i18n.getMessage('build_armoury_task_title'),
        stage: 5,
        disabled: stage % 5 === 0,
        visible: stage % 5 !== 0
    },
    {
        title: chrome.i18n.getMessage('musket_options_task_title'),
        stage: 7,
        disabled: stage % 7 === 0,
        visible: stage % 5 === 0 && stage % 7 !== 0
    },
    {
        title: chrome.i18n.getMessage('rifle_options_task_title'),
        stage: 17,
        disabled: stage % 17 === 0,
        visible: stage % 7 === 0 && stage % 17 !== 0
    },
    {
        title: chrome.i18n.getMessage('battle_options_task_title'),
        stage: 11,
        disabled: stage % 11 === 0,
        visible: stage % 5 === 0 && stage % 11 !== 0
    },
    {
        title: chrome.i18n.getMessage('mage_options_task_title'),
        stage: 13,
        disabled: stage % 13 === 0,
        visible: stage % 5 === 0 && stage % 13 !== 0
    }
];

function Mansion() {
    return <PatternScreen 
        screenName={GameScreens.mansion}
        upgradeButtonsFunc={mansionUpgradeButtons}
        subScreenMapping={mansionSubScreenMapping}
    />
}

export default Mansion