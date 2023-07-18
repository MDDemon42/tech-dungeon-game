import styles from '../index.module.css';
import images from "../images/images";
import mutations from "../general/mutations/mutations";
import cybers from "../general/cybers/cybers";
import items from "../general/items";
import powers from "../general/powers/powers";
import { ICharacher } from '../types/interfaces';
import { emptyInventory } from '../general/characters/characters';

function InventoryScreen(props: {
    character: ICharacher,
    battle: boolean
}) {
    const {character, battle} = props;
    const {general} = character;
    const powersUserNames = general.powers.map(power => power.name);
    const inventory = general.inventory ? general.inventory : emptyInventory();

    const width = battle ? '150px' : '355px';
    const height = battle ? '160px' : '370px';

    return (
        <div className={styles.inventory_body} style={{width, height}}>       
            {
                inventory.bothHands.name === items.weapons.ranged.item_oakBow.name ?
                    <img src={images.bodyElements.oakBow} alt='oakBow' /> : null
            }                
            {
                inventory.back.name === mutations.mutation_wings.name ?
                    <img src={images.bodyElements.wings} alt='wings' /> :
                    inventory.back.name === items.armors.forMage.item_flyingCape.name ?
                        <img src={images.bodyElements.cape} alt='cape' /> : null
            }
            {
                inventory.tail.name === mutations.mutation_tail.name ?
                    <img src={images.bodyElements.tail} alt='tail' /> : null
            }
            {
                inventory.legs.name === mutations.mutation_hooves.name ?
                    <img src={images.bodyElements.hooves} alt='hooves' /> :
                    [
                        <img src={images.bodyElements.legs} alt='legs' />,
                        powersUserNames.includes(powers.power_levitation.name) ?
                            <img src={images.bodyElements.levitation} alt='levitation' /> : null,
                        inventory.skin.name === cybers.cyber_nanoMatrix.name ?
                            <img src={images.bodyElements.nanoMatrixLegs} alt='nanoMatrixLegs' /> :
                            inventory.skin.name === cybers.cyber_nanoVest.name ?
                                <img src={images.bodyElements.nanoVestLegs} alt='nanoVestLegs' /> : null
                    ]                                
            }
            {
                inventory.legs.name === cybers.cyber_reactiveFeet.name ?
                    <img src={images.bodyElements.reactiveFeet} alt='reactiveFeet' /> : null
            }
            {
                inventory.skin.name === cybers.cyber_nanoMatrix.name ?
                    <img src={images.bodyElements.nanoMatrixTorso} alt='nanoMatrixTorso' /> :
                    inventory.skin.name === cybers.cyber_nanoVest.name ?
                        <img src={images.bodyElements.nanoVestTorso} alt='nanoVestTorso' /> :
                        inventory.skin.name === mutations.mutation_scales.name ?
                            <img src={images.bodyElements.scalesTorso} alt='scalesTorso' /> :
                            [
                                <img src={images.bodyElements.torso} alt='torso' />,
                                powersUserNames.includes(powers.power_guardianAura.name) ?
                                    <img src={images.bodyElements.guardianAura} alt='guardianAura' /> :
                                    powersUserNames.includes(powers.power_guardianField.name) ?
                                        <img src={images.bodyElements.guardianField} alt='guardianField' /> : null,
                                powersUserNames.includes(powers.power_psiBlade.name) ?
                                    <img src={images.bodyElements.psiBlade} alt='psiBlade' /> : null,
                                powersUserNames.includes(powers.power_psiLightning.name) ?
                                    <img src={images.bodyElements.psiLightning} alt='psiLightning' /> : null,
                            ]
            }
            <img src={images.bodyElements.belt} alt='belt' />
            {
                inventory.shoulders.name === cybers.cyber_rocket.name ?
                    <img src={images.bodyElements.rocket} alt='rocket' /> :
                    inventory.shoulders.name === mutations.mutation_pincers.name ?
                        <img src={images.bodyElements.pincers} alt='pincers' /> : null
            }
            {
                inventory.armor.name === items.armors.forMage.item_magisterRobe.name ?
                    <img src={images.bodyElements.magisterRobe} alt='magisterRobe' /> :
                    inventory.armor.name === items.armors.forWarrior.item_steelArmor.name ?
                        <img src={images.bodyElements.steelArmor} alt='steelArmor' /> :
                        inventory.armor.name === items.armors.forWarrior.item_leatherArmor.name ?
                            <img src={images.bodyElements.leatherArmor} alt='leatherArmor' /> : null 
            }
            {
                inventory.rightPocket.name === items.weapons.ranged.item_acidBomd.name ?
                    <img src={images.bodyElements.acidBomb} alt='acidBomb' /> : null
            }
            {
                inventory.leftPocket.name === items.item_healingPotion.name ?
                    <img src={images.bodyElements.healingPotion} alt='healingPotion' /> : null
            }
                                    
                                    {
                inventory.leftHand.name === cybers.cyber_laser.name ?
                    <img src={images.bodyElements.laser} alt='laser' /> :
                    (
                        inventory.bothHands.name === mutations.mutation_claws.name ||
                        inventory.leftHand.name === mutations.mutation_clawLeft.name
                    ) ?
                        <img src={images.bodyElements.clawLeft} alt='clawLeft' /> :
                        inventory.bothHands.name === items.weapons.melee.item_steelGreataxe.name ?
                            <img src={images.bodyElements.steelGreataxe} alt='steelGreataxe' /> :
                            inventory.leftHand.name === items.weapons.melee.item_steelSwordLeftHand.name ?
                                <img src={images.bodyElements.steelSwordLeftHand} alt='steelSwordLeftHand' /> :
                                inventory.leftHand.name === items.armors.forWarrior.item_steelShield.name ?
                                    <img src={images.bodyElements.steelShield} alt='steelShield' /> :
                                    [
                                        inventory.leftHand.name === items.weapons.ranged.item_steelChakram.name ?
                                            <img src={images.bodyElements.chakram} alt='chakram' /> : null,
                                        <img src={images.bodyElements.leftHand} alt='leftHand' />
                                    ]
            }
            {
                inventory.rightHand.name === cybers.cyber_energyWhip.name ?
                    <img src={images.bodyElements.energyWhip} alt='energyWhip' /> :
                    inventory.rightHand.name === cybers.cyber_powerFist.name ?
                        <img src={images.bodyElements.powerFist} alt='powerFist' /> :
                        (
                            inventory.bothHands.name === mutations.mutation_claws.name ||
                            inventory.rightHand.name === mutations.mutation_clawRight.name
                        ) ?
                            <img src={images.bodyElements.clawRight} alt='clawRight' /> :
                            inventory.bothHands.name === items.weapons.magic.item_magisterScepter.name ?
                                <img src={images.bodyElements.magisterScepter} alt='magisterScepter' /> :
                                inventory.bothHands.name === items.weapons.melee.item_runicGreatsword.name ?
                                    <img src={images.bodyElements.runicGreatsword} alt='runicGreatsword' /> :
                                    inventory.bothHands.name === items.weapons.ranged.item_oakCrossow.name ?
                                        <img src={images.bodyElements.oakCrossbow} alt='oakCrossbow' /> :
                                        inventory.bothHands.name === items.weapons.magic.item_apprenticeRod.name ?
                                            <img src={images.bodyElements.apprenticeRod} alt='apprenticeRod' /> :
                                            inventory.rightHand.name === items.weapons.melee.item_steelSwordRightHand.name ?
                                                <img src={images.bodyElements.steelSwordRightHand} alt='steelSwordRightHand' /> :
                                                <img src={images.bodyElements.rightHand} alt='rightHand' />
            }
            <img src={images.bodyElements.head} alt='head' />
            {
                powersUserNames.includes(powers.power_telekinesis.name) ?
                    <img src={images.bodyElements.telekinesis} alt='telekinesis' /> : null
            }
            {
                inventory.chin.name === mutations.mutation_acidSplit.name ?
                    <img src={images.bodyElements.acidSplit} alt='acidSplit' /> :
                    inventory.chin.name === mutations.mutation_lowerFangs.name ? 
                        <img src={images.bodyElements.lowerFangs} alt='lowerFangs' /> : null
            }
            {
                powersUserNames.includes(powers.power_intuition.name) ?
                    <img src={images.bodyElements.intuition} alt='intuition' /> : null
            }
            {
                inventory.head.name === mutations.mutation_horns.name ?
                    <img src={images.bodyElements.horns} alt='horns' /> :
                    inventory.head.name === items.armors.forMage.item_magisterHat.name ?
                        <img src={images.bodyElements.magisterHat} alt='magisterHat' /> :
                        inventory.head.name === items.armors.forMage.item_apprenticeHat.name ?
                            <img src={images.bodyElements.apprenticeHat} alt='apprenticeHat' /> : null
            }
        </div>
    )
}

export default InventoryScreen