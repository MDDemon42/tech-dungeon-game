import SubInventoryScreen from '../../components/SubInventoryScreen';
import { GameScreens, InventoryGameScreens, SquadGameScreens } from '../../enums-and-interfaces/enums';
import { IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import { ShopWindow, CupHot } from 'react-bootstrap-icons';
import PatternScreen from '../../components/PatternScreen';
import SubSquadScreen from '../../components/SubSquadScreen';

const marketSubScreenMapping = {
    [InventoryGameScreens.market]: {
        requiredStage: 1,
        icon: <ShopWindow size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.market}/>
    },
    [SquadGameScreens.tavern]: {
        requiredStage: 1,
        icon: <CupHot size={36} />,
        screen: <SubSquadScreen screenName={SquadGameScreens.tavern}/>
    }
}

const marketUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('modernize_market_task_title'),
        stage: 2,
        disabled: stage > 1,
        visible: stage % 2 !== 0
    }
];

function Market() {
    return <PatternScreen 
        screenName={GameScreens.market}
        upgradeButtonsFunc={marketUpgradeButtons}
        subScreenMapping={marketSubScreenMapping}
    />
}

export default Market