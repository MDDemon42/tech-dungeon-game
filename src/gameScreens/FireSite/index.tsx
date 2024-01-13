import { BendingGameScreens, GameScreens, MindGameScreens, SquadGameScreens } from "../../enums-and-interfaces/enums";
import BendingScreen from "../../components/BendingScreen/BendingScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { IUpgradeButton } from "../../enums-and-interfaces/interfaces";
import { Book, Spellcheck, Person } from "react-bootstrap-icons";
import SubSquadScreen from "../../components/SubSquadScreen";
import PatternScreen from "../../components/PatternScreen";

const fireSiteSubScreenMapping = {
    [MindGameScreens.fireSchool]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={MindGameScreens.fireSchool}/>
    },
    [BendingGameScreens.fireSite]: {
        requiredStage: 1,
        icon: <Spellcheck size={36} />,
        screen: <BendingScreen screenName={BendingGameScreens.fireSite}/>
    },
    [SquadGameScreens.pyrokineticRooms]: {
        requiredStage: 1,
        icon: <Person size={36} />,
        screen: <SubSquadScreen screenName={SquadGameScreens.pyrokineticRooms}/>
    }
}

const fireSiteUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('fire_ball'),
        stage: 2,
        disabled: stage % 2 === 0,
        visible: stage % 2 !== 0
    },
    {
        title: chrome.i18n.getMessage('fire_wave'),
        stage: 3,
        disabled: stage % 3 === 0,
        visible: stage % 3 !== 0
    },
    {
        title: chrome.i18n.getMessage('enflamed_strikes'),
        stage: 5,
        disabled: stage % 5 === 0,
        visible: stage % 5 !== 0
    },
];

function FireSite() {
    return <PatternScreen 
        screenName={GameScreens.fireSite}
        upgradeButtonsFunc={fireSiteUpgradeButtons}
        subScreenMapping={fireSiteSubScreenMapping}
    />
}

export default FireSite