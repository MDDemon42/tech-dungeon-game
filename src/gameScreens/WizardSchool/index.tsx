import { GameScreens, InventoryGameScreens, MindGameScreens, SquadGameScreens } from "../../enums-and-interfaces/enums";
import SubInventoryScreen from "../../components/SubInventoryScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { IUpgradeButton } from "../../enums-and-interfaces/interfaces";
import { 
    Book, Person, Shop, Spellcheck
} from 'react-bootstrap-icons';
import SubSquadScreen from "../../components/SubSquadScreen";
import PatternScreen from "../../components/PatternScreen";

const wizardSchoolSubScreenMapping = {
    [MindGameScreens.wizardSchool]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={MindGameScreens.wizardSchool}/>
    },
    [MindGameScreens.spellSchool]: {
        requiredStage: 1,
        icon: <Spellcheck size={36} />,
        screen: <SubMindScreen screenName={MindGameScreens.spellSchool}/>
    },
    [InventoryGameScreens.wizardShop]: {
        requiredStage: 1,
        icon: <Shop size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.wizardShop}/>
    },
    [SquadGameScreens.apprenticeRooms]: {
        requiredStage: 1,
        icon: <Person size={36} />,
        screen: <SubSquadScreen screenName={SquadGameScreens.apprenticeRooms}/>
    }
}

const wizardSchoolUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('librarium'),
        stage: 2,
        disabled: stage !== 1,
        visible: stage % 2 !== 0
    }
];

function WizardSchool() {
    return <PatternScreen 
        screenName={GameScreens.wizardSchool}
        upgradeButtonsFunc={wizardSchoolUpgradeButtons}
        subScreenMapping={wizardSchoolSubScreenMapping}
    />
}

export default WizardSchool