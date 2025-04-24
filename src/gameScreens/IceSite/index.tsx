import { 
    BendingGameScreens, 
    RitualGameScreens, 
    SchoolGameScreens
} from "../../enums-and-interfaces/enums";
import BendingScreen from "../../components/BendingScreen/BendingScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import { Book, Spellcheck, PersonUp } from "react-bootstrap-icons";
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
    [RitualGameScreens.iceRituals]: {
        requiredStage: 13,
        icon: <PersonUp size={36} />,
        screen: <SubMindScreen screenName={RitualGameScreens.iceRituals}/>
    }
}

function IceSite() {
    return <PatternScreen 
        screenName={BendingGameScreens.iceSite}
        subScreenMapping={iceSiteSubScreenMapping}
    />
}

export default IceSite