import { useEffect, useState } from 'react';
import styles from '../index.module.css';
import { Item } from '../types/item';

import ItemIcon from './ItemIcon';

function ItemsScreen() {
    const [items, setItems] = useState([] as Item[]);

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                setItems(result['tech-dungeon-game'].items)
            });
    }, []);

    return (
        <div className={styles.gamePage_component}>
            Items:
            <div className={styles.itemsScreen}>
                {
                    items && items.length > 0 ? 
                        items.map(item => (
                            <ItemIcon item={item}/>
                        )) :
                        <p>
                            No items yet
                        </p>
                }
            </div>
        </div>
    )
}

export default ItemsScreen