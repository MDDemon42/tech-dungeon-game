import { 
    BendingGameScreens, 
    RitualGameScreens, 
    SchoolGameScreens, 
    SquadGameScreens 
} from "../../enums-and-interfaces/enums";
import BendingScreen from "../../components/BendingScreen/BendingScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { IUpgradeButton } from "../../enums-and-interfaces/interfaces";
import { Book, Person, Spellcheck, PersonUp } from "react-bootstrap-icons";
import SubSquadScreen from "../../components/SubSquadScreen";
import PatternScreen from "../../components/PatternScreen";

const iceSiteSubScreenMapping = {
    [SchoolGameScreens.iceSchool]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={SchoolGameScreens.iceSchool}/>
    },
    [BendingGameScreens.iceSite]: {
        requiredStage: 1,
        icon: <Spellcheck size={36} />,
        screen: <BendingScreen screenName={BendingGameScreens.iceSite}/>
    },
    [SquadGameScreens.cryomancerRooms]: {
        requiredStage: 1,
        icon: <Person size={36} />,
        screen: <SubSquadScreen screenName={SquadGameScreens.cryomancerRooms}/>
    },
    [RitualGameScreens.iceRituals]: {
        requiredStage: 13,
        icon: <PersonUp size={36} />,
        screen: <SubMindScreen screenName={RitualGameScreens.iceRituals}/>
    }
}

const iceSiteUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('ice_shard'),
        stage: 2,
        disabled: stage % 2 === 0,
        visible: stage % 2 !== 0
    },
    {
        title: chrome.i18n.getMessage('ice_spear'),
        stage: 3,
        disabled: stage % 3 === 0,
        visible: stage % 2 === 0 && stage % 3 !== 0
    },
    {
        title: chrome.i18n.getMessage('ice_hail'),
        stage: 5,
        disabled: stage % 5 === 0,
        visible: stage % 2 === 0 && stage % 5 !== 0
    },
    {
        title: chrome.i18n.getMessage('cold_death'),
        stage: 7,
        disabled: stage % 7 === 0,
        visible: stage % 7 !== 0
    },
    {
        title: chrome.i18n.getMessage('freezing_strikes'),
        stage: 11,
        disabled: stage % 11 === 0,
        visible: stage % 11 !== 0
    },
    {
        title: chrome.i18n.getMessage('ice_rituals'),
        stage: 13,
        disabled: stage % 13 === 0,
        visible: stage % 13 !== 0
    }
];

function IceSite() {
    return <PatternScreen 
        screenName={BendingGameScreens.iceSite}
        upgradeButtonsFunc={iceSiteUpgradeButtons}
        subScreenMapping={iceSiteSubScreenMapping}
    />
}

export default IceSite