import { 
    InventoryGameScreens, 
    RitualGameScreens, 
    SchoolGameScreens,
} from "../../enums-and-interfaces/enums";
import SubInventoryScreen from "../../components/SubInventoryScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { 
    Book, Shop, PersonUp
} from 'react-bootstrap-icons';
import PatternScreen from "../../components/PatternScreen";

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
    }
}

function Guild() {
    return <PatternScreen 
        screenName={SchoolGameScreens.guildSchool}
        subScreenMapping={guildSubScreenMapping}
    />
}

export default Guild