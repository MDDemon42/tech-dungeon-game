import SubInventoryScreen from '../../components/SubInventoryScreen';
import { GameScreens, InventoryGameScreens } from '../../enums-and-interfaces/enums';
import { IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import PatternScreen from '../../components/PatternScreen';
import { Tools } from 'react-bootstrap-icons';

const cyberLabSubScreenMapping = {
    [InventoryGameScreens.cyberLab]: {
        requiredStage: 1,
        icon: <Tools size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.cyberLab}/>
    }
}

const cyberLabUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('high_energy_cybers_task_title'),
        stage: 2,
        disabled: stage % 2 ===0,
        visible: stage % 2 !==0
    },
    {
        title: chrome.i18n.getMessage('nano_cybers_task_title'),
        stage: 3,
        disabled: stage % 3 ===0,
        visible: stage % 3 !==0
    },
];

function CyberLab() {
    return <PatternScreen 
        screenName={GameScreens.cyberLab}
        upgradeButtonsFunc={cyberLabUpgradeButtons}
        subScreenMapping={cyberLabSubScreenMapping}
    />
}

export default CyberLab