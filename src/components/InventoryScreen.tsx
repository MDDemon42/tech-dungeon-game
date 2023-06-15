import { IStore } from "../types/interfaces";
import styles from '../index.module.css';
import images from "../images/images";
import CommonScreen from "./CommonScreen";
import {useSelector} from "react-redux";
import { emptyInventory, noItem } from "../redux/slices/generalUser";

function InventoryScreen() {
    const user = useSelector((state: IStore) => state.userParams);
    const generalUser = useSelector((state: IStore) => state.generalUser);

    const inventory = generalUser.inventory ? generalUser.inventory : emptyInventory();

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
                            Health: {user.health}
                        </p>
                        <p>
                            Mana: {user.mana}
                        </p>
                        <p>
                            Focus: {user.focus}
                        </p>
                        <p>
                            Diamonds: {user.diamonds}
                        </p>
                        <p>
                            Mecha-cores: {user.mechaCores}
                        </p>
                        <p>
                            Muta-genes: {user.mutaGenes}
                        </p>
                        <img src={images.body} alt='body'/>
                    </div>
                    <div className={styles.inventory_header}>
                        <h3>
                            {user.name} level {user.level}
                        </h3>
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.head.image}
                            title={inventory.head.name}
                            className={styles.commonIcon}
                            alt='head'
                        />
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.shoulders.image}
                            title={inventory.shoulders.name}
                            className={styles.commonIcon}
                            alt='shoulders'
                        />
                        <img 
                            src={inventory.chin.image}
                            title={inventory.chin.name}
                            className={styles.commonIcon}
                            alt='chin'
                        />
                        <img 
                            src={inventory.back.image}
                            title={inventory.back.name}
                            className={styles.commonIcon}
                            alt='back'
                        />
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.armor.image}
                            title={inventory.armor.name}
                            className={styles.commonIcon}
                            alt='armor'
                        />
                        <img 
                            src={inventory.skin.image}
                            title={inventory.skin.name}
                            className={styles.commonIcon}
                            alt='skin'
                        />
                    </div>
                    <div className={styles.inventory_line}>
                        {
                            inventory.bothHands.name !== noItem.name ?
                            <img 
                                src={inventory.bothHands.image}
                                title={inventory.bothHands.name}
                                className={styles.commonIcon}
                                alt='bothHands'
                            /> :
                            <>
                                <img 
                                    src={inventory.rightHand.image}
                                    title={inventory.rightHand.name}
                                    className={styles.commonIcon}
                                    alt='rightHand'
                                />
                                <img 
                                    src={inventory.leftHand.image}
                                    title={inventory.leftHand.name}
                                    className={styles.commonIcon}
                                    alt='leftHand'
                                />
                            </>
                        }
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.belt.image}
                            title={inventory.belt.name}
                            className={styles.commonIcon}
                            alt='belt'
                        />
                        <img 
                            src={inventory.tail.image}
                            title={inventory.tail.name}
                            className={styles.commonIcon}
                            alt='tail'
                        />
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.rightPocket.image}
                            title={inventory.rightPocket.name}
                            className={styles.commonIcon}
                            alt='rightPocket'
                        />       
                        <img 
                            src={inventory.leftPocket.image}
                            title={inventory.leftPocket.name}
                            className={styles.commonIcon}
                            alt='leftPocket'
                        />         
                    </div>
                    <div className={styles.inventory_line}>
                        <img 
                            src={inventory.legs.image}
                            title={inventory.legs.name}
                            className={styles.commonIcon}
                            alt='legs'
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