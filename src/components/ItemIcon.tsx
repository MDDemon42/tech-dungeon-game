import styles from '../index.module.css';
import { Item } from "../types/item";

function ItemIcon(props: {
    item: Item
}) {
    const {item} = props;

    return (
        <div className={styles.itemsScreen_item}>
            <img 
                src={item.image}
                title={item.description}
            />
            {item.name}
        </div>
    )
}

export default ItemIcon