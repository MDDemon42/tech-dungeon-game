import { 
    BodyParts, 
    IInventory, 
    IItem, IMutation, 
    IStore, 
    InventoryPlaces
} from "../types/interfaces";

import styles from '../index.module.css';
import images from "../images/images";
import CommonScreen from "./CommonScreen";
import { upperCaseFirstLetter } from "../pages/MainPage";
import { useSelector } from "react-redux";

function InventoryScreen() {
    const user = useSelector((state: IStore) => state.userParams);
    const generalUser = useSelector((state: IStore) => state.generalUser);

    const noItem: IMutation & IItem = {
        name: 'Nothing yet',
        description: 'Nothing at all',
        bodyPart: BodyParts.head,
        value: 0,
        cost: 0,
        inventoryPlace: InventoryPlaces.belt,
        image: images.classIcons.noIcon,
        requiredMastery: null
    }

    const inventory = {
        head: noItem,
        chin: noItem,
        armor: noItem,
        skin: noItem,
        back: noItem,
        shoulders: noItem,
        belt: noItem,
        leftPocket: noItem,
        rightPocket: noItem,
        tail: noItem,
        legs: noItem,
        leftHand: noItem,
        rightHand: noItem,
        bothHands: noItem
    } as IInventory;

    generalUser?.items?.forEach(item => {
        inventory[item.inventoryPlace] = item;
    })

    generalUser?.mutations?.forEach(item => {
        inventory[item.bodyPart] = item;
    })

    generalUser?.cybers?.forEach(item => {
        inventory[item.bodyPart] = item;
    })

    return (
        <div className={[
            styles.gamePage_component,
            styles.inventory
        ].join(' ')}>
            <CommonScreen 
                name={'masteries'} 
                user={true} 
                vertical={true}
                inventory={true}
            /> 
            <div>
                <div className={styles.inventory_header}>
                    <h3>
                        {user.name} the {upperCaseFirstLetter(user.icon)} lvl. {user.level}
                    </h3>
                </div>
                <div className={styles.inventory_line}>
                    <img 
                        src={inventory.head.image}
                        title={inventory.head.name + '\n' + inventory.head.description}
                        className={styles.commonIcon}
                    />
                </div>
                <div className={styles.inventory_line}>
                    <img 
                        src={inventory.chin.image}
                        title={inventory.chin.name + '\n' + inventory.chin.description}
                        className={styles.commonIcon}
                    />
                </div>
                <div className={styles.inventory_line}>
                    <img 
                        src={inventory.armor.image}
                        title={inventory.armor.name + '\n' + inventory.armor.description}
                        className={styles.commonIcon}
                    />
                    <img 
                        src={inventory.skin.image}
                        title={inventory.skin.name + '\n' + inventory.skin.description}
                        className={styles.commonIcon}
                    />
                    <img 
                        src={inventory.back.image}
                        title={inventory.back.name + '\n' + inventory.back.description}
                        className={styles.commonIcon}
                    />
                    <img 
                        src={inventory.shoulders.image}
                        title={inventory.shoulders.name + '\n' + inventory.shoulders.description}
                        className={styles.commonIcon}
                    />
                </div>
                <div className={styles.inventory_line__hands}>
                    <img 
                        src={inventory.rightHand.image}
                        title={inventory.rightHand.name + '\n' + inventory.rightHand.description}
                        className={styles.commonIcon}
                    />
                    <img 
                        src={inventory.bothHands.image}
                        title={inventory.bothHands.name + '\n' + inventory.bothHands.description}
                        className={styles.commonIcon}
                    />
                    <img 
                        src={inventory.leftHand.image}
                        title={inventory.leftHand.name + '\n' + inventory.leftHand.description}
                        className={styles.commonIcon}
                    />
                </div>
                <div className={styles.inventory_line}>
                    <img 
                        src={inventory.belt.image}
                        title={inventory.belt.name + '\n' + inventory.belt.description}
                        className={styles.commonIcon}
                    />
                    <img 
                        src={inventory.tail.image}
                        title={inventory.tail.name + '\n' + inventory.tail.description}
                        className={styles.commonIcon}
                    />
                </div>
                <div className={styles.inventory_line}>
                    <img 
                        src={inventory.rightPocket.image}
                        title={inventory.rightPocket.name + '\n' + inventory.rightPocket.description}
                        className={styles.commonIcon}
                    />       
                    <img 
                        src={inventory.leftPocket.image}
                        title={inventory.leftPocket.name + '\n' + inventory.leftPocket.description}
                        className={styles.commonIcon}
                    />         
                </div>
                <div className={styles.inventory_line}>
                    <img 
                        src={inventory.legs.image}
                        title={inventory.legs.name + '\n' + inventory.legs.description}
                        className={styles.commonIcon}
                    />
                </div>
                <CommonScreen 
                    name={'spells'} 
                    user={true} 
                    vertical={false}
                    inventory={true}
                />
            </div>
            <CommonScreen 
                name={'powers'} 
                user={true} 
                vertical={true}
                inventory={true}
            />
        </div>
    )
}

export default InventoryScreen