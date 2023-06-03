import { 
    BodyParts, 
    IInventory, 
    IItem, 
    IMutation, 
    IStore, 
    InventoryPlaces
} from "../types/interfaces";

import styles from '../index.module.css';
import images from "../images/images";
import CommonScreen from "./CommonScreen";
import { upperCaseFirstLetter } from "../pages/MainPage";
import {useSelector} from "react-redux";

function InventoryScreen() {
    const user = useSelector((state: IStore) => state.userParams);
    const generalUser = useSelector((state: IStore) => state.generalUser);
    // TODO: fix new items disappear 

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
        hat: noItem,
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
        <div className={styles.gamePage_componentsBlock}>
            <div className={[
                styles.gamePage_component,
                styles.inventory
            ].join(' ')}>
                <CommonScreen 
                    name={'masteries'} 
                    vertical={true}
                /> 
                <div>
                    <div className={styles.inventory_body}>
                        <p>
                            Money: {user.money}
                        </p>
                        <img src={images.body}/>
                    </div>
                    <div className={styles.inventory_header}>
                        <h3>
                            {user.name} the {upperCaseFirstLetter(user.icon)} lvl. {user.level}
                        </h3>
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.head.image}
                            title={inventory.head.name}
                            className={styles.commonIcon}
                        />
                        <img 
                            src={inventory.hat.image}
                            title={inventory.hat.name}
                            className={styles.commonIcon}
                        />
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.shoulders.image}
                            title={inventory.shoulders.name}
                            className={styles.commonIcon}
                        />
                        <img 
                            src={inventory.chin.image}
                            title={inventory.chin.name}
                            className={styles.commonIcon}
                        />
                        <img 
                            src={inventory.back.image}
                            title={inventory.back.name}
                            className={styles.commonIcon}
                        />
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.armor.image}
                            title={inventory.armor.name}
                            className={styles.commonIcon}
                        />
                        <img 
                            src={inventory.skin.image}
                            title={inventory.skin.name}
                            className={styles.commonIcon}
                        />
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.rightHand.image}
                            title={inventory.rightHand.name}
                            className={styles.commonIcon}
                        />
                        <img 
                            src={inventory.bothHands.image}
                            title={inventory.bothHands.name}
                            className={styles.commonIcon}
                        />
                        <img 
                            src={inventory.leftHand.image}
                            title={inventory.leftHand.name}
                            className={styles.commonIcon}
                        />
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.belt.image}
                            title={inventory.belt.name}
                            className={styles.commonIcon}
                        />
                        <img 
                            src={inventory.tail.image}
                            title={inventory.tail.name}
                            className={styles.commonIcon}
                        />
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.rightPocket.image}
                            title={inventory.rightPocket.name}
                            className={styles.commonIcon}
                        />       
                        <img 
                            src={inventory.leftPocket.image}
                            title={inventory.leftPocket.name}
                            className={styles.commonIcon}
                        />         
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.legs.image}
                            title={inventory.legs.name}
                            className={styles.commonIcon}
                        />
                    </div>
                    <CommonScreen 
                        name={'spells'} 
                        vertical={false}
                    />
                </div>
                <CommonScreen 
                    name={'powers'} 
                    vertical={true}
                />
            </div>
        </div>
    )
}

export default InventoryScreen