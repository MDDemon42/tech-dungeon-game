import { useDispatch } from "react-redux";
import { 
    IArmouryItem, ICyber, IGuildItem, 
    IItem, IMutation, IWizardItem 
} from "../../enums-and-interfaces/interfaces";
import styles from './Icons.module.css';
import gameSquad from "../../redux/slices/gameSquad";
import { InventoryPlace, InventorySlotCategory } from "../../enums-and-interfaces/enums";
import inventoryPlaces from "../../general/inventoryPlaces";

const backgroundColorMapping: Record<InventorySlotCategory, string> = {
    [InventorySlotCategory.mutation]: 'rgba(0, 128, 0, 0.25)',
    [InventorySlotCategory.cyber]: 'rgba(128, 128, 128, 0.25)',
    [InventorySlotCategory.item]: 'rgba(0, 0, 128, 0.25)',
    [InventorySlotCategory.nothing]: 'rgba(0, 0, 0, 0)'
}

function InventoryIcon(props: {
    item: IItem | ICyber | IMutation | IWizardItem | IGuildItem | IArmouryItem | null,
    inventoryPlace: InventoryPlace
}) {
    const {item, inventoryPlace} = props;

    const dispatch = useDispatch();

    if (!item) {
        return null
    }    

    let description = inventoryPlaces[inventoryPlace] + ':\n' + item.name;
    if (item.category === InventorySlotCategory.item) {
        description += '\n\nClick to unequip';

        return (
            <button 
                className={styles.CommonIconAsButton}
                onClick={() => dispatch(gameSquad.actions.unequipItem({
                    item, inventoryPlace
                }))}
            >
                <img 
                    src={item.image}
                    title={description}
                    className={styles.CommonIcon_icon}
                    alt={item.name}
                    style={{
                        backgroundColor: backgroundColorMapping[item.category]
                    }}
                />
            </button>
        )
    }

    return (
        <div className={styles.CommonIcon}>
            <img 
                src={item.image}
                title={description}
                className={styles.CommonIcon_icon}
                alt={item.name}
                style={{
                    backgroundColor: backgroundColorMapping[item.category]
                }}
            />
        </div>
    )
}

export default InventoryIcon