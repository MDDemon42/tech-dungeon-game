import SubInventoryScreen from '../../components/SubInventoryScreen';
import { 
    InventoryGameScreens 
} from '../../enums-and-interfaces/enums';
import { ShopWindow } from 'react-bootstrap-icons';
import PatternScreen from '../../components/PatternScreen';

const marketSubScreenMapping = {
    [InventoryGameScreens.market]: {
        requiredStage: 1,
        icon: <ShopWindow size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.market}/>
    }
}

function Market() {
    return <PatternScreen 
        screenName={InventoryGameScreens.market}
        subScreenMapping={marketSubScreenMapping}
    />
}

export default Market