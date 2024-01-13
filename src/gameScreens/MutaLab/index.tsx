import SubInventoryScreen from '../../components/SubInventoryScreen/SubInventoryScreen';
import { GameScreens, InventoryGameScreens } from '../../enums-and-interfaces/enums';
import { IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import { Virus } from 'react-bootstrap-icons';
import PatternScreen from '../../components/PatternScreen';

const mutaLabSubScreenMapping = {
    [InventoryGameScreens.mutaLab]: {
        requiredStage: 1,
        icon: <Virus size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.mutaLab}/>
    } 
}

const mutaLabUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('beast_genes_task_title'),
        stage: 2,
        disabled: stage % 2 === 0,
        visible: stage % 2 !== 0
    },
    {
        title: chrome.i18n.getMessage('reptiloid_genes_task_title'),
        stage: 3,
        disabled: stage % 3 === 0,
        visible: stage % 3 !== 0
    },
    {
        title: chrome.i18n.getMessage('insectoid_genes_task_title'),
        stage: 5,
        disabled: stage % 5 === 0,
        visible: stage % 5 !== 0
    }
];

function MutationLab() {
    return <PatternScreen 
        screenName={GameScreens.mutaLab}
        upgradeButtonsFunc={mutaLabUpgradeButtons}
        subScreenMapping={mutaLabSubScreenMapping}
    />
}

export default MutationLab