import { 
    InventoryGameScreens, 
    RitualGameScreens, 
    SchoolGameScreens, 
    SquadGameScreens 
} from "../../enums-and-interfaces/enums";
import SubInventoryScreen from "../../components/SubInventoryScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { IUpgradeButton } from "../../enums-and-interfaces/interfaces";
import { 
    Book, Shop, PersonUp, Person
} from 'react-bootstrap-icons';
import PatternScreen from "../../components/PatternScreen";
import SubSquadScreen from "../../components/SubSquadScreen";

const guildSubScreenMapping = {
    [SchoolGameScreens.guildSchool]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={SchoolGameScreens.guildSchool}/>
    },
    [RitualGameScreens.guildRituals]: {
        requiredStage: 2,
        icon: <PersonUp size={36} />,
        screen: <SubMindScreen screenName={RitualGameScreens.guildRituals}/>
    },
    [InventoryGameScreens.guildShop]: {
        requiredStage: 1,
        icon: <Shop size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.guildShop}/>
    },
    [SquadGameScreens.guildianRooms]: {
        requiredStage: 1,
        icon: <Person size={36} />,
        screen: <SubSquadScreen screenName={SquadGameScreens.guildianRooms}/>
    }
}

const guildUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('runes_and_rituals_task_title'),
        stage: 2,
        disabled: stage !== 1,
        visible: stage % 2 !== 0
    }
];

function Guild() {
    return <PatternScreen 
        screenName={SchoolGameScreens.guildSchool}
        upgradeButtonsFunc={guildUpgradeButtons}
        subScreenMapping={guildSubScreenMapping}
    />
}

export default Guild