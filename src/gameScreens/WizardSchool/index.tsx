import { 
    InventoryGameScreens, 
    SchoolGameScreens
} from "../../enums-and-interfaces/enums";
import SubInventoryScreen from "../../components/SubInventoryScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { 
    Book, Shop, Spellcheck
} from 'react-bootstrap-icons';
import PatternScreen from "../../components/PatternScreen";

const wizardSchoolSubScreenMapping = {
    [SchoolGameScreens.wizardSchool]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={SchoolGameScreens.wizardSchool}/>
    },
    [SchoolGameScreens.spellSchool]: {
        requiredStage: 1,
        icon: <Spellcheck size={36} />,
        screen: <SubMindScreen screenName={SchoolGameScreens.spellSchool}/>
    },
    [InventoryGameScreens.wizardShop]: {
        requiredStage: 1,
        icon: <Shop size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.wizardShop}/>
    }
}

function WizardSchool() {
    return <PatternScreen 
        screenName={SchoolGameScreens.wizardSchool}
        subScreenMapping={wizardSchoolSubScreenMapping}
    />
}

export default WizardSchool