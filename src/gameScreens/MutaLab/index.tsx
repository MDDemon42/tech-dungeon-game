import SubInventoryScreen from '../../components/SubInventoryScreen';
import { InventoryGameScreens } from '../../enums-and-interfaces/enums';
import { Virus } from 'react-bootstrap-icons';
import PatternScreen from '../../components/PatternScreen';

const mutaLabSubScreenMapping = {
    [InventoryGameScreens.mutaLab]: {
        requiredStage: 1,
        icon: <Virus size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.mutaLab}/>
    } 
}

function MutationLab() {
    return <PatternScreen 
        screenName={InventoryGameScreens.mutaLab}
        subScreenMapping={mutaLabSubScreenMapping}
    />
}

export default MutationLab