import { 
    BendingGameScreens, 
    RitualGameScreens, 
    SchoolGameScreens
} from "../../enums-and-interfaces/enums";
import BendingScreen from "../../components/BendingScreen/BendingScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { Book, Spellcheck, PersonUp } from "react-bootstrap-icons";
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
    [RitualGameScreens.airRituals]: {
        requiredStage: 7,
        icon: <PersonUp size={36} />,
        screen: <SubMindScreen screenName={RitualGameScreens.airRituals}/>
    }
}

function AirSite() {
    return <PatternScreen 
        screenName={BendingGameScreens.airSite}
        subScreenMapping={airSiteSubScreenMapping}
    />
}

export default AirSite