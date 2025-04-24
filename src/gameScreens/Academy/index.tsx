import SubMindScreen from '../../components/SubMindScreen/SubMindScreen';
import { SchoolGameScreens } from '../../enums-and-interfaces/enums';
import { Book } from 'react-bootstrap-icons';
import PatternScreen from '../../components/PatternScreen';

const academySubScreenMapping = {
    [SchoolGameScreens.academy]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={SchoolGameScreens.academy}/>
    }
}

function Academy() {
    return <PatternScreen 
        screenName={SchoolGameScreens.academy}
        subScreenMapping={academySubScreenMapping}
    />
}

export default Academy