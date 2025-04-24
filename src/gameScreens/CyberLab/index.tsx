import SubInventoryScreen from '../../components/SubInventoryScreen';
import { InventoryGameScreens } from '../../enums-and-interfaces/enums';
import PatternScreen from '../../components/PatternScreen';
import { Tools } from 'react-bootstrap-icons';

const cyberLabSubScreenMapping = {
    [InventoryGameScreens.cyberLab]: {
        requiredStage: 1,
        icon: <Tools size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.cyberLab}/>
    }
}


function CyberLab() {
    return <PatternScreen 
        screenName={InventoryGameScreens.cyberLab}
        subScreenMapping={cyberLabSubScreenMapping}
    />
}

export default CyberLab