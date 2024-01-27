import { InventoryPlace } from "../../enums-and-interfaces/enums";
import { ICharacher } from "../../enums-and-interfaces/interfaces";
import InventoryIcon from "../Icons/InventoryIcon";
import styles from './index.module.css';

function OldFashionInventoryScreen(props: {
    character: ICharacher
}) {
    const {character} = props;
    const inventory = character.general.inventory;
    const inventoryParts = Object.values(InventoryPlace);

    return (
        <div className={styles.OldFashionInventoryScreen}>
            {
                inventoryParts.map(part => (
                    <div className={styles[part]}>
                        <InventoryIcon 
                            item={inventory[part]} 
                            inventoryPlace={part}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default OldFashionInventoryScreen