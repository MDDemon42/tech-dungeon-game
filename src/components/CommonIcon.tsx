import styles from '../index.module.css';
import { BodyParts, DamageTypes, IMastery, InventoryPlaces } from '../types/interfaces';

function CommonIcon(props: {
    item: {
        image: any,
        name: string,
        description: string,
        value?: number,
        cost?: number,
        requiredMastery?: IMastery | null,
        passive?: boolean,
        inventoryPlace?: InventoryPlaces,
        bodyPart?: BodyParts,
        manaCost?: number,
        focusCost?: number,
        staminaCost?: number,
        damage?: number,
        damageType?: DamageTypes,
        hitChance?: number,
        targetAmount?: number
    }
}) {
    const {item} = props;

    let description = item.name + '\n\n' 
    
    if (item.description.length > 0) {
        description += item.description + '\n';
    }
    
    if (item.value) {
        description += '\nValue: ' + item.value;
    }

    if (item.cost) {
        description += '\nCost: ' + item.cost;
    }

    if (item.requiredMastery) {
        description += '\nRequired mastery: ' + item.requiredMastery.name;
    }

    if (item.passive) {
        description += '\nPassive: ' + item.passive;
    }

    if (item.inventoryPlace) {
        description += '\nInventory place: ' + item.inventoryPlace;
    }

    if (item.bodyPart) {
        description += '\nBody part: ' + item.bodyPart;
    }

    if (item.manaCost && item.manaCost > 0) {
        description += '\Mana cost: ' + item.manaCost;
    }

    if (item.focusCost && item.focusCost > 0) {
        description += '\nFocus cost: ' + item.focusCost;
    }

    if (item.staminaCost && item.staminaCost > 0) {
        description += '\nStamina cost: ' + item.staminaCost;
    }

    if (item.damage && item.damage > 0) {
        description += '\nDamage: ' + item.damage;
    }

    if (item.damageType) {
        description += '\nDamage type: ' + item.damageType;
    }

    if (item.hitChance) {
        description += '\nHit chance: ' + item.hitChance;
    }

    if (item.targetAmount) {
        description += '\nTarget amount: ' + item.targetAmount;
    }

    return(
        <div>
            <img 
                src={item.image}
                title={description}
                className={styles.commonIcon}
                alt={description}
            /> 
        </div>
    )
}

export default CommonIcon