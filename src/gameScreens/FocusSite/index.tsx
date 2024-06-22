import { 
    RitualGameScreens, 
    SchoolGameScreens, 
    SquadGameScreens 
} from "../../enums-and-interfaces/enums";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { IUpgradeButton } from "../../enums-and-interfaces/interfaces";
import PatternScreen from "../../components/PatternScreen";
import { Book, Eye, Person, PersonUp } from "react-bootstrap-icons";
import SubSquadScreen from "../../components/SubSquadScreen";

const focusSiteSubScreenMapping = {
    [SchoolGameScreens.focusSchool]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={SchoolGameScreens.focusSchool}/>
    },
    [SchoolGameScreens.focusSite]: {
        requiredStage: 1,
        icon: <Eye size={36} />,
        screen: <SubMindScreen screenName={SchoolGameScreens.focusSite}/>
    },
    [SquadGameScreens.psionRooms]: {
        requiredStage: 1,
        icon: <Person size={36} />,
        screen: <SubSquadScreen screenName={SquadGameScreens.psionRooms}/>
    },
    [RitualGameScreens.focusRituals]: {
        requiredStage: 11,
        icon: <PersonUp size={36} />,
        screen: <SubMindScreen screenName={RitualGameScreens.focusRituals}/>
    }
}

const focusSiteUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('deepest_insights'),
        stage: 2,
        disabled: stage % 2 === 0,
        visible: stage % 2 !== 0
    },
    {
        title: chrome.i18n.getMessage('psi_energy'),
        stage: 3,
        disabled: stage % 3 === 0,
        visible: stage % 3 !== 0
    },
    {
        title: chrome.i18n.getMessage('empowered_strikes'),
        stage: 5,
        disabled: stage % 5 === 0,
        visible: stage % 5 !== 0
    },
    {
        title: chrome.i18n.getMessage('psi_infused_strikes'),
        stage: 7,
        disabled: stage % 7 === 0,
        visible: stage % 3 === 0 && stage % 7 !== 0
    },
    {
        title: chrome.i18n.getMessage('focus_rituals'),
        stage: 11,
        disabled: stage % 11 === 0,
        visible: stage % 11 !== 0
    }
];

function FocusSite() {
    return <PatternScreen 
        screenName={SchoolGameScreens.focusSite}
        upgradeButtonsFunc={focusSiteUpgradeButtons}
        subScreenMapping={focusSiteSubScreenMapping}
    />
}

export default FocusSite