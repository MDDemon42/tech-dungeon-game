import styles from '../index.module.css';
import { BodyParts, IMastery, InventoryPlaces } from '../types/interfaces';

function CommonIcon(props: {
    item: {
        image: any,
        name: string,
        description: string,
        value?: number,
        cost?: number,
        requiredMastery?: IMastery | null,
        passive?: boolean,
        inventoryPlace?: InventoryPlaces,
        bodyPart?: BodyParts
    }
}) {
    const {item} = props;

    let description = item.name + '\n\n' + item.description + '\n';
    
    if (item.value) {
        description += '\nValue: ' + item.value;
    }

    if (item.cost) {
        description += '\nCost: ' + item.cost;
    }

    if (item.requiredMastery) {
        description += '\nRequired mastery: ' + item.requiredMastery.name;
    }

    if (item.passive) {
        description += '\nPassive: ' + item.passive;
    }

    if (item.inventoryPlace) {
        description += '\nInventory place: ' + item.inventoryPlace;
    }

    if (item.bodyPart) {
        description += '\nBody part: ' + item.bodyPart;
    }

    return(
        <div>
            <img 
                src={item.image}
                title={description}
                className={styles.commonIcon}
                alt={description}
            /> 
        </div>
    )
}

export default CommonIcon