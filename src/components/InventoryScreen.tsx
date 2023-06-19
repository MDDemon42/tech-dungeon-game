import { IStore } from "../types/interfaces";
import styles from '../index.module.css';
import images from "../images/images";
import CommonScreen from "./CommonScreen";
import {useSelector} from "react-redux";
import { emptyInventory, noItem } from "../redux/slices/generalUser";
import mutations from "../general/mutations/mutations";
import cybers from "../general/cybers/cybers";
import items from "../general/items/items";

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
                <div className={styles.inventory_screen}>
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
                        {
                            inventory.back.name === mutations.mutation_wings.name ?
                                <img src={images.bodyElements.wings} alt='wings'/> :
                                inventory.back.name === items.item_flyingCape.name ?
                                    <img src={images.bodyElements.cape} alt='cape'/> :
                                    inventory.back.name === items.item_oakCrossow.name ?
                                        <img src={images.bodyElements.oakCrossbow} alt='oakCrossbow'/> :
                                        inventory.back.name === items.item_oakBow.name ?
                                            <img src={images.bodyElements.oakBow} alt='oakBow'/> : null
                        }
                        {
                            inventory.tail.name === mutations.mutation_tailWithSting.name ?
                                <img src={images.bodyElements.tail} alt='tail'/> : null
                        }
                        {
                            inventory.legs.name === mutations.mutation_hooves.name ?
                                <img src={images.bodyElements.hooves} alt='hooves'/> :
                                [
                                    <img src={images.bodyElements.legs} alt='legs'/>,
                                    inventory.skin.name === cybers.cyber_nanoMatrix.name ?
                                        <img src={images.bodyElements.nanoMatrixLegs} alt='nanoMatrixLegs'/> :
                                        inventory.skin.name === cybers.cyber_nanoVest.name ?
                                            <img src={images.bodyElements.nanoVestLegs} alt='nanoVestLegs'/> :
                                            inventory.skin.name === mutations.mutation_scales.name ?
                                                <img src={images.bodyElements.scalesLegs} alt='scalesLegs'/> : null
                                ]                                
                        }
                        {
                            inventory.legs.name === cybers.cyber_reactiveFeet.name ?
                                <img src={images.bodyElements.reactiveFeet} alt='reactiveFeet'/> : null
                        }
                        {
                            inventory.skin.name === cybers.cyber_nanoMatrix.name ?
                                <img src={images.bodyElements.nanoMatrixTorso} alt='nanoMatrixTorso'/> :
                                inventory.skin.name === cybers.cyber_nanoVest.name ?
                                    <img src={images.bodyElements.nanoVestTorso} alt='nanoVestTorso'/> :
                                    inventory.skin.name === mutations.mutation_scales.name ?
                                        <img src={images.bodyElements.scalesTorso} alt='scalesTorso'/> :
                                        <img src={images.bodyElements.torso} alt='torso'/>
                        }
                        {
                            inventory.shoulders.name === cybers.cyber_rocket.name ?
                                <img src={images.bodyElements.rocket} alt='rocket'/> :
                                inventory.shoulders.name === mutations.mutation_twoExtraPincers.name ?
                                    <img src={images.bodyElements.pincers} alt='pincers'/> : null
                        }
                        {
                            inventory.armor.name === items.item_magisterRobe.name ?
                                <img src={images.bodyElements.magisterRobe} alt='magisterRobe'/> :
                                inventory.armor.name === items.item_steelArmor.name ?
                                    <img src={images.bodyElements.steelArmor} alt='steelArmor'/> :
                                    inventory.armor.name === items.item_leatherArmor.name ?
                                        <img src={images.bodyElements.leatherArmor} alt='leatherArmor'/> : null 
                        }
                        {
                            inventory.rightPocket.name === items.item_acidBomd.name ?
                                <img src={images.bodyElements.acidBomb} alt='acidBomb'/> : null
                        }
                        {
                            inventory.leftPocket.name === items.item_healingPotion.name ?
                                <img src={images.bodyElements.healingPotion} alt='healingPotion'/> : null
                        }
                                                
                                                {
                            inventory.leftHand.name === cybers.cyber_laser.name ?
                                <img src={images.bodyElements.laser} alt='laser'/> :
                                (
                                    inventory.bothHands.name === mutations.mutation_claws.name ||
                                    inventory.leftHand.name === mutations.mutation_clawLeft.name
                                ) ?
                                    <img src={images.bodyElements.clawLeft} alt='clawLeft'/> :
                                    inventory.bothHands.name === items.item_steelGreataxe.name ?
                                        <img src={images.bodyElements.steelGreataxe} alt='steelGreataxe'/> :
                                        inventory.leftHand.name === items.item_steelSwordLeftHand.name ?
                                            <img src={images.bodyElements.steelSwordLeftHand} alt='steelSwordLeftHand'/> :
                                            inventory.leftHand.name === items.item_steelShield.name ?
                                                <img src={images.bodyElements.steelShield} alt='steelShield'/> :
                                                [
                                                    inventory.leftHand.name === items.item_steelChakram.name ?
                                                        <img src={images.bodyElements.chakram} alt='chakram'/> : null,
                                                    <img src={images.bodyElements.leftHand} alt='leftHand'/>
                                                ]
                        }
                        {
                            inventory.rightHand.name === cybers.cyber_energyWhip.name ?
                                <img src={images.bodyElements.energyWhip} alt='energyWhip'/> :
                                inventory.rightHand.name === cybers.cyber_powerFist.name ?
                                    <img src={images.bodyElements.powerFist} alt='powerFist'/> :
                                    (
                                        inventory.bothHands.name === mutations.mutation_claws.name ||
                                        inventory.rightHand.name === mutations.mutation_clawRight.name
                                    ) ?
                                        <img src={images.bodyElements.clawRight} alt='clawRight'/> :
                                        inventory.bothHands.name === items.item_magisterScepter.name ?
                                            <img src={images.bodyElements.magisterScepter} alt='magisterScepter'/> :
                                            inventory.bothHands.name === items.item_runicGreatsword.name ?
                                                <img src={images.bodyElements.runicGreatsword} alt='runicGreatsword'/> :
                                                inventory.bothHands.name === items.item_apprenticeRod.name ?
                                                    <img src={images.bodyElements.apprenticeRod} alt='apprenticeRod'/> :
                                                    inventory.rightHand.name === items.item_steelSwordRightHand.name ?
                                                        <img src={images.bodyElements.steelSwordRightHand} alt='steelSwordRightHand'/> :
                                                        <img src={images.bodyElements.rightHand} alt='rightHand'/>
                        }
                        <img src={images.bodyElements.head} alt='head'/>
                        {
                            inventory.chin.name === mutations.mutation_acidSplit.name ?
                                <img src={images.bodyElements.acidSplit} alt='acidSplit'/> : null
                        }
                        {
                            inventory.head.name === mutations.mutation_horns.name ?
                                <img src={images.bodyElements.horns} alt='horns'/> :
                                inventory.head.name === items.item_magisterHat.name ?
                                    <img src={images.bodyElements.magisterHat} alt='magisterHat'/> :
                                    inventory.head.name === items.item_apprenticeHat.name ?
                                        <img src={images.bodyElements.apprenticeHat} alt='apprenticeHat'/> : null
                        }
                    </div>
                    <div className={styles.inventory_header}>
                        <h3>
                            {user.name} level {user.level}
                        </h3>
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