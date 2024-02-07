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
    [InventorySlotCategory.nothing]: 'rgba(0, 0, 0, 0)',
    [InventorySlotCategory.resource]: 'rgba(0, 0, 0, 0)'
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

    let clickHandler = () => {};
    let description = inventoryPlaces[inventoryPlace] + ':\n' + item.name;
    const customStyle = {
        backgroundColor: backgroundColorMapping[item.category],
        outline: 'unset',
        outlineOffset: '0',
        cursor: 'default'
    }

    if (item.category === InventorySlotCategory.item) {
        description += '\n\nClick to unequip';
        clickHandler = () => dispatch(gameSquad.actions.unequipItem({
            item, inventoryPlace
        }));
        customStyle['outline'] = '1px solid black';
        customStyle['outlineOffset'] = '-3px';
        customStyle['cursor'] = 'pointer';
    }

    return (
        <div 
            className={styles.CommonIcon}
            onClick={clickHandler}
        >
            <img 
                src={item.image}
                title={description}
                className={styles.CommonIcon_icon}
                alt={item.name}
                style={customStyle}
            />
        </div>
    )
}

export default InventoryIcon