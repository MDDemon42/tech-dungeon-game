import { 
    RitualGameScreens, 
    SchoolGameScreens
} from "../../enums-and-interfaces/enums";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import PatternScreen from "../../components/PatternScreen";
import { Book, Eye, PersonUp } from "react-bootstrap-icons";

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
    [RitualGameScreens.focusRituals]: {
        requiredStage: 11,
        icon: <PersonUp size={36} />,
        screen: <SubMindScreen screenName={RitualGameScreens.focusRituals}/>
    }
}

function FocusSite() {
    return <PatternScreen 
        screenName={SchoolGameScreens.focusSite}
        subScreenMapping={focusSiteSubScreenMapping}
    />
}

export default FocusSite