import SubMindScreen from '../../components/SubMindScreen/SubMindScreen';
import { SchoolGameScreens } from '../../enums-and-interfaces/enums';
import { IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import { Book } from 'react-bootstrap-icons';
import PatternScreen from '../../components/PatternScreen';

const academySubScreenMapping = {
    [SchoolGameScreens.academy]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={SchoolGameScreens.academy}/>
    }
}

const academyUpgradeButtons = (stage: number, extraStage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('modernize_academy_task_title'),
        stage: 2,
        disabled: stage % 2 === 0 && extraStage === 2,
        visible: stage % 2 !== 0
    }
];

function Academy() {
    return <PatternScreen 
        screenName={SchoolGameScreens.academy}
        upgradeButtonsFunc={academyUpgradeButtons}
        subScreenMapping={academySubScreenMapping}
    />
}

export default Academy