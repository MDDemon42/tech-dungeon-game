import { 
    BendingGameScreens, 
    RitualGameScreens, 
    SchoolGameScreens, 
    SquadGameScreens 
} from "../../enums-and-interfaces/enums";
import BendingScreen from "../../components/BendingScreen/BendingScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { IUpgradeButton } from "../../enums-and-interfaces/interfaces";
import { Book, Spellcheck, Person, PersonUp } from "react-bootstrap-icons";
import SubSquadScreen from "../../components/SubSquadScreen";
import PatternScreen from "../../components/PatternScreen";

const airSiteSubScreenMapping = {
    [SchoolGameScreens.airSchool]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={SchoolGameScreens.airSchool}/>
    },
    [BendingGameScreens.airSite]: {
        requiredStage: 1,
        icon: <Spellcheck size={36} />,
        screen: <BendingScreen screenName={BendingGameScreens.airSite}/>
    },
    [SquadGameScreens.aerotheurgRooms]: {
        requiredStage: 1,
        icon: <Person size={36} />,
        screen: <SubSquadScreen screenName={SquadGameScreens.aerotheurgRooms}/>
    },
    [RitualGameScreens.airRituals]: {
        requiredStage: 7,
        icon: <PersonUp size={36} />,
        screen: <SubMindScreen screenName={RitualGameScreens.airRituals}/>
    }
}

const airSiteUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('thunder_punch'),
        stage: 2,
        disabled: stage % 2 === 0 ,
        visible: stage % 2 !== 0
    },
    {
        title: chrome.i18n.getMessage('air_deprivation'),
        stage: 3,
        disabled: stage % 3 === 0,
        visible: stage % 3 !== 0
    },
    {
        title: chrome.i18n.getMessage('electrified_strikes'),
        stage: 5,
        disabled: stage % 5 === 0,
        visible: stage % 2 === 0 && stage % 5 !== 0
    },
    {
        title: chrome.i18n.getMessage('air_rituals'),
        stage: 7,
        disabled: stage % 7 === 0,
        visible: stage % 7 !== 0
    }
];

function AirSite() {
    return <PatternScreen 
        screenName={BendingGameScreens.airSite}
        upgradeButtonsFunc={airSiteUpgradeButtons}
        subScreenMapping={airSiteSubScreenMapping}
    />
}

export default AirSite