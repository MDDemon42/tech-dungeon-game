import { 
    BendingGameScreens, 
    RitualGameScreens, 
    SchoolGameScreens
} from "../../enums-and-interfaces/enums";
import BendingScreen from "../../components/BendingScreen/BendingScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { Book, Spellcheck, PersonUp } from "react-bootstrap-icons";
import PatternScreen from "../../components/PatternScreen";

const fireSiteSubScreenMapping = {
    [SchoolGameScreens.fireSchool]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={SchoolGameScreens.fireSchool}/>
    },
    [BendingGameScreens.fireSite]: {
        requiredStage: 1,
        icon: <Spellcheck size={36} />,
        screen: <BendingScreen screenName={BendingGameScreens.fireSite}/>
    },
    [RitualGameScreens.fireRituals]: {
        requiredStage: 7,
        icon: <PersonUp size={36} />,
        screen: <SubMindScreen screenName={RitualGameScreens.fireRituals}/>
    }
}

function FireSite() {
    return <PatternScreen 
        screenName={BendingGameScreens.fireSite}
        subScreenMapping={fireSiteSubScreenMapping}
    />
}

export default FireSite