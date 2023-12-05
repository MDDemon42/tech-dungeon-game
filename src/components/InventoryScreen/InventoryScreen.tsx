import styles from './InventoryScreen.module.css';
import images from "../../images/images";
import mutations from "../../general/mutations";
import cybers from "../../general/cybers";
import items from "../../general/items";
import powers from "../../general/powers";
import { ICharacher } from '../../enums-and-interfaces/interfaces';
import { createEmptyInventory, createNoItem } from '../../helpers/emptyEssencesCreators';
import wizardItems from '../../general/wizardItems';
import guildItems from '../../general/guildItems';
import rituals from '../../general/rituals/rituals';
import masteries from '../../general/masteries/masteries';

function InventoryScreen(props: {
    character: ICharacher,
    battle: boolean
}) {
    const {character, battle} = props;
    const {general, params} = character;
    const masteriesUserNames = general.mind.masteries.map(mastery => mastery.name);
    const powersUserNames = general.mind.powers.map(power => power.name);
    const ritualsUserNames = general.mind.rituals.map(ritual => ritual.name);
    const inventory = general.inventory ? general.inventory : createEmptyInventory();

    const width = battle ? '150px' : '355px';
    const height = battle ? '160px' : '370px';

    let inventoryBack = null;
    switch (inventory.back.name) {
        case mutations.other.mutation_wings.name:
            inventoryBack = <img src={images.bodyElements.wings} alt={chrome.i18n.getMessage('wings')} />;
            break;
        case wizardItems.other.wizardItem_flyingCape.name:
            inventoryBack = <img src={images.bodyElements.flyingCape} alt={chrome.i18n.getMessage('flying_cape')} />;
            break;
        default:
            break;
    }

    let inventoryTail = null;
    switch (inventory.tail.name) {
        case mutations.weapons.mutation_tailWithSting.name:
            inventoryTail = <img src={images.bodyElements.tailWithSting} alt={chrome.i18n.getMessage('tail_with_sting')} />;
            break;
        default:
            break;
    }

    let inventoryLegs = [];
    switch (inventory.legs.name) {
        case mutations.other.mutation_hooves.name:
            inventoryLegs.push(<img src={images.bodyElements.hooves} alt={chrome.i18n.getMessage('hooves')} />);
            break;
        case mutations.weapons.mutation_raptorLegs.name:
            inventoryLegs.push(<img src={images.bodyElements.raptorLegs} alt={chrome.i18n.getMessage('raptor_legs')} />);
            break;
        default:
            inventoryLegs = [
                ritualsUserNames.includes(rituals.ritual_titanSkin.name) ?
                    <img src={images.bodyElements.titanLegs} alt='titanLegs' /> :
                    masteriesUserNames.includes(masteries.mastery_brutalForce.name) ?
                        <img src={images.bodyElements.brutalLegs} alt='brutalLegs' /> :
                        <img src={images.bodyElements.legs} alt='legs' />,
                powersUserNames.includes(powers.other.power_levitation.name) ?
                    <img src={images.bodyElements.levitation} alt={chrome.i18n.getMessage('levitation')} /> : null,
                inventory.skin.name === cybers.armors.cyber_nanoMatrix.name ?
                    <img src={images.bodyElements.nanoMatrixLegs} alt='nanoMatrixLegs' /> :
                    inventory.skin.name === cybers.armors.cyber_nanoVest.name ?
                        <img src={images.bodyElements.nanoVestLegs} alt='nanoVestLegs' /> : null,
                inventory.legs.name === cybers.other.cyber_reactiveFeet.name ?
                    <img src={images.bodyElements.reactiveFeet} alt={chrome.i18n.getMessage('reactive_feet')} /> : null
            ]
            break;
    }

    let inventorySkin = [];
    switch (inventory.skin.name) {
        case cybers.armors.cyber_nanoMatrix.name:
            inventorySkin.push(<img src={images.bodyElements.nanoMatrixTorso} alt={chrome.i18n.getMessage('nano_matrix')} />);
            break;
        case cybers.armors.cyber_nanoVest.name:
            inventorySkin.push(<img src={images.bodyElements.nanoVestTorso} alt={chrome.i18n.getMessage('nano_vest')} />);
            break;
        case mutations.armors.mutation_scales.name:
            inventorySkin.push(<img src={images.bodyElements.scalesTorso} alt={chrome.i18n.getMessage('scales')} />);
            break;
        case mutations.armors.mutation_fur.name:
            inventorySkin.push(<img src={images.bodyElements.furTorso} alt={chrome.i18n.getMessage('fur')} />);
            break;
        default:
            inventorySkin = [
                ritualsUserNames.includes(rituals.ritual_titanSkin.name) ?
                    <img src={images.bodyElements.titanTorso} alt='titanTorso' /> :
                    masteriesUserNames.includes(masteries.mastery_brutalForce.name) ?
                        <img src={images.bodyElements.brutalTorso} alt='brutalTorso' /> :
                        <img src={images.bodyElements.torso} alt='torso' />,
                powersUserNames.includes(powers.armors.power_guardianAura.name) ?
                    <img src={images.bodyElements.guardianAura} alt={chrome.i18n.getMessage('guardian_aura')} /> :
                    powersUserNames.includes(powers.armors.power_guardianField.name) ?
                        <img src={images.bodyElements.guardianField} alt={chrome.i18n.getMessage('guardian_field')} /> : null,
                powersUserNames.includes(powers.weapons.power_psiBlade.name) ?
                    <img src={images.bodyElements.psiBlade} alt={chrome.i18n.getMessage('psi_blade')} /> : null,
                powersUserNames.includes(powers.weapons.power_psiLightning.name) ?
                    <img src={images.bodyElements.psiLightning} alt={chrome.i18n.getMessage('psi_lightning')} /> : null
            ];
            break;
    }
    inventorySkin.push(<img src={images.bodyElements.belt} alt='belt' />)

    let inventoryShoulders = null;
    switch (inventory.shoulders.name) {
        case cybers.weapons.cyber_rocketLauncher.name:
            inventoryShoulders = <img src={images.bodyElements.rocketLauncher} alt={chrome.i18n.getMessage('rocket_launcher')} />;
            break;
        case mutations.weapons.mutation_pincers.name:
            inventoryShoulders = <img src={images.bodyElements.pincers} alt={chrome.i18n.getMessage('pincers')} />;
            break;
        default:
            break;
    }

    let inventoryArmor = null;
    switch (inventory.armor.name) {
        case wizardItems.armors.wizardItem_magisterRobe.name:
            inventoryArmor = <img src={images.bodyElements.magisterRobe} alt={chrome.i18n.getMessage('magister_robe')} />;
            break;
        case items.armors.item_steelArmor.name:
            inventoryArmor = <img src={images.bodyElements.steelArmor} alt={chrome.i18n.getMessage('steel_armor')} />;
            break;
        case items.armors.item_leatherArmor.name:
            inventoryArmor = <img src={images.bodyElements.leatherArmor} alt={chrome.i18n.getMessage('leather_armor')} />;
            break;
        default:
            break;
    }

    let inventoryRightPocket = null;
    switch (inventory.rightPocket.name) {
        case guildItems.weapons.guildItem_acidBomd.name:
            inventoryRightPocket = <img src={images.bodyElements.acidBomb} alt={chrome.i18n.getMessage('acid_bomb')} />;
            break;
        default:
            break;
    }

    let inventoryLeftPocket = null;
    switch (inventory.leftPocket.name) {
        case items.other.item_healingPotion.name:
            inventoryLeftPocket = <img src={images.bodyElements.healingPotion} alt={chrome.i18n.getMessage('healing_potion')} />;
            break;
        default:
            break;
    }

    let inventoryHead = [
        <img src={images.bodyElements.head} alt='head' />
    ];
    if (powersUserNames.includes(powers.other.power_telekinesis.name)) {
        inventoryHead.push(<img src={images.bodyElements.telekinesis} alt={chrome.i18n.getMessage('telekinesis')} />);
    }
    switch (inventory.chin.name) {
        case mutations.weapons.mutation_acidSplit.name:
            inventoryHead.push(<img src={images.bodyElements.acidSplit} alt={chrome.i18n.getMessage('acid_split')} />);
            break;
        case mutations.weapons.mutation_lowerFangs.name:
            inventoryHead.push(<img src={images.bodyElements.lowerFangs} alt={chrome.i18n.getMessage('lower_fangs')} />);
            break;
        default:
            break;
    }
    if (powersUserNames.includes(powers.other.power_intuition.name)) {
        inventoryHead.push(<img src={images.bodyElements.intuition} alt={chrome.i18n.getMessage('intuition')} />);
    }
    switch (inventory.head.name) {
        case mutations.weapons.mutation_horns.name:
            inventoryHead.push(<img src={images.bodyElements.horns} alt={chrome.i18n.getMessage('horns')} />);
            break;
        default:
            break;
    }

    let inventoryHat = null;
    switch (inventory.hat.name) {
        case wizardItems.armors.wizardItem_magisterHat.name:
            inventoryHat = <img src={images.bodyElements.magisterHat} alt={chrome.i18n.getMessage('magister_hat')} />;
            break;
        case wizardItems.armors.wizardItem_apprenticeHat.name:
            inventoryHat = <img src={images.bodyElements.apprenticeHat} alt={chrome.i18n.getMessage('apprentice_hat')} />;
            break;
        default:
            break;
    }
                    
    let inventoryLeftHand = null;
    switch (inventory.leftHand.name) {
        case cybers.weapons.cyber_laser.name:
            inventoryLeftHand = <img src={images.bodyElements.laser} alt={chrome.i18n.getMessage('laser')} />;
            break;
        case mutations.weapons.mutation_clawLeft.name:
            inventoryLeftHand = <img src={images.bodyElements.clawLeft} alt={chrome.i18n.getMessage('claws')} />;
            break;
        case items.weapons.item_steelSwordLeftHand.name:
            inventoryLeftHand = <img src={images.bodyElements.steelSwordLeftHand} alt={chrome.i18n.getMessage('steel_sword')} />;
            break;
        case items.weapons.item_axeLeftHand.name:
            inventoryLeftHand = <img src={images.bodyElements.axeLeftHand} alt={chrome.i18n.getMessage('axe')} />;
            break;
        case items.armors.item_steelShield.name:
            inventoryLeftHand = <img src={images.bodyElements.steelShield} alt={chrome.i18n.getMessage('steel_shield')} />;
            break;
        case guildItems.weapons.guildItem_steelChakram.name:
            inventoryLeftHand = <img src={images.bodyElements.chakram} alt={chrome.i18n.getMessage('steel_chakram')} />;
            break;
        default:
            break;
    }

    let inventoryRightHand = null;
    switch (inventory.rightHand.name) {
        case cybers.weapons.cyber_energyWhip.name:
            inventoryRightHand = <img src={images.bodyElements.energyWhip} alt={chrome.i18n.getMessage('energy_whip')} />;
            break;
        case cybers.weapons.cyber_energyFist.name:
            inventoryRightHand = <img src={images.bodyElements.energyFist} alt={chrome.i18n.getMessage('energy_fist')} />;
            break;
        case mutations.weapons.mutation_clawRight.name:
            inventoryRightHand = <img src={images.bodyElements.clawRight} alt={chrome.i18n.getMessage('claws')} />;
            break;
        case items.weapons.item_steelSwordRightHand.name:
            inventoryRightHand = <img src={images.bodyElements.steelSwordRightHand} alt={chrome.i18n.getMessage('steel_sword')} />;
            break;
        case items.weapons.item_axeRightHand.name:
            inventoryRightHand = <img src={images.bodyElements.axeRightHand} alt={chrome.i18n.getMessage('axe')} />;
            break;
        case items.weapons.item_steelMace.name:
            inventoryRightHand = <img src={images.bodyElements.steelMace} alt={chrome.i18n.getMessage('steel_mace')} />;
            break;
        case items.weapons.item_spear.name:
            inventoryRightHand = <img src={images.bodyElements.spear} alt={chrome.i18n.getMessage('spear')} />;
            break;
        default:
            break;
    }

    let inventoryBothHands = null;
    switch (inventory.bothHands.name) {
        case mutations.weapons.mutation_claws.name: 
            inventoryBothHands = [
                <img src={images.bodyElements.clawRight} alt={chrome.i18n.getMessage('claws')} />,
                <img src={images.bodyElements.clawLeft} alt={chrome.i18n.getMessage('claws')} />
            ];
            break;
        case guildItems.weapons.guildItem_runicGreataxe.name:
            inventoryBothHands = [
                <img src={images.bodyElements.runicGreataxe} alt={chrome.i18n.getMessage('runic_greataxe')} />,
            ];
            break;
        case items.weapons.item_steelGreataxe.name:
            inventoryBothHands = [
                <img src={images.bodyElements.steelGreataxe} alt={chrome.i18n.getMessage('steel_greataxe')} />,
                <img src={images.bodyElements.rightHand} alt='rightHand' />
            ];
            break;
        case wizardItems.weapons.wizardItem_magisterScepter.name:
            inventoryBothHands = [
                <img src={images.bodyElements.magisterScepter} alt={chrome.i18n.getMessage('magister_scepter')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        case wizardItems.weapons.wizardItem_apprenticeRod.name:
            inventoryBothHands = [
                <img src={images.bodyElements.apprenticeRod} alt={chrome.i18n.getMessage('apprentice_rod')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        case items.weapons.item_oakBow.name:
            inventoryBothHands = [
                <img src={images.bodyElements.oakBow} alt={chrome.i18n.getMessage('oak_bow')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        case guildItems.weapons.guildItem_oakCrossow.name:
            inventoryBothHands = [
                <img src={images.bodyElements.oakCrossbow} alt={chrome.i18n.getMessage('oak_crossbow')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        case guildItems.weapons.guildItem_runicGreathammer.name:
            inventoryBothHands = [
                <img src={images.bodyElements.runicGreathammer} alt={chrome.i18n.getMessage('runic_greatsword')} />,
            ];
            break;
        case items.weapons.item_steelGreathammer.name:
            inventoryBothHands = [
                <img src={images.bodyElements.steelGreathammer} alt={chrome.i18n.getMessage('steel_greatsword')} />,
            ];
            break;
        case guildItems.weapons.guildItem_runicGreatsword.name:
            inventoryBothHands = [
                <img src={images.bodyElements.runicGreatsword} alt={chrome.i18n.getMessage('runic_greatsword')} />,
            ];
            break;
        case items.weapons.item_steelGreatsword.name:
            inventoryBothHands = [
                <img src={images.bodyElements.steelGreatsword} alt={chrome.i18n.getMessage('steel_greatsword')} />,
                <img src={images.bodyElements.leftHand} alt='leftHand' />
            ];
            break;
        default:
            inventoryBothHands = [];
            if (inventory.rightHand.name === createNoItem().name) {
                inventoryBothHands.push(<img src={images.bodyElements.rightHand} alt='rightHand' />);
            }
            if (inventory.leftHand.name === createNoItem().name) {
                inventoryBothHands.push(<img src={images.bodyElements.leftHand} alt='leftHand' />);
            }            
            break;
    }

    return (
        <div 
            className={styles.InventoryScreen} 
            style={{width, height}}
            title={params.name}
        >                   
            { inventoryBack }
            { inventoryTail }
            { inventoryLegs }
            { inventorySkin }
            { inventoryShoulders }
            { inventoryArmor }
            { inventoryRightPocket }
            { inventoryLeftPocket }
            { inventoryHead }
            { inventoryHat }
            { inventoryLeftHand }
            { inventoryRightHand }  
            { inventoryBothHands }          
        </div>
    )
}

export default InventoryScreen