import { InventoryPlace } from "../../enums-and-interfaces/enums";
import { ICharacher } from "../../enums-and-interfaces/interfaces";
import InventoryIcon from "../Icons/InventoryIcon";
import styles from './index.module.css';

function OldFashionInventoryScreen(props: {
    character: ICharacher
}) {
    const {character} = props;
    const inventory = character.general.inventory;
    const inventoryParts: (keyof typeof InventoryPlace)[] = [
        'hat', 'head', 'chin',
        'extraRightHand', 'extraLeftHand', 
        'shoulders', 'back', 'armor', 'skin',
        'rightHand', 'bothHands', 'leftHand',
        'leftPocket', 'belt', 'rightPocket',
        'telekinesisRightHand', 'legs', 'tail', 'telekinesisLeftHand', 
    ];

    return (
        <div className={styles.OldFashionInventoryScreen}>
            {
                inventoryParts.map(part => (
                    <div className={styles[part]}>
                        <InventoryIcon 
                            item={inventory[part]} 
                            inventoryPlace={InventoryPlace[part]}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default OldFashionInventoryScreen