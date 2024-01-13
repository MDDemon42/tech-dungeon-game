import SubInventoryScreen from '../../components/SubInventoryScreen/SubInventoryScreen';
import { GameScreens, InventoryGameScreens } from '../../enums-and-interfaces/enums';
import { IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import { ShopWindow } from 'react-bootstrap-icons';
import PatternScreen from '../../components/PatternScreen';

const marketSubScreenMapping = {
    [InventoryGameScreens.market]: {
        requiredStage: 1,
        icon: <ShopWindow size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.market}/>
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