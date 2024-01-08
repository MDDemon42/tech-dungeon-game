import { useDispatch } from "react-redux";
import { 
    IArmouryItem, ICyber, IGuildItem, 
    IItem, IMutation, IWizardItem 
} from "../../enums-and-interfaces/interfaces";
import styles from './Icons.module.css';
import gameSquad from "../../redux/slices/gameSquad";
import { InventoryPlace } from "../../enums-and-interfaces/enums";

function InventoryIcon(props: {
    item: IItem | ICyber | IMutation | IWizardItem | IGuildItem | IArmouryItem | null,
    inventoryPlace: InventoryPlace
}) {
    const {item, inventoryPlace} = props;

    const dispatch = useDispatch();

    if (!item) {
        return null
    }

    const isItem = !item.description.includes('Cyber') &&
        !item.description.includes('Кибер') &&
        !item.description.includes('Mutation') &&
        !item.description.includes('Мутация') &&
        !item.name.includes('Nothing') &&
        !item.name.includes('Пока');

    let description = inventoryPlace + '\n' + item.name;
    if (isItem) {
        description += '\nClick to unequip';

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
            />
        </div>
    )
}

export default InventoryIcon