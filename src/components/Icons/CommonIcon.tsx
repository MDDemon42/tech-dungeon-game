import styles from './Icons.module.css';
import { AbilityTarget, DamageType, InventoryPlace, UserParam } from '../../enums-and-interfaces/enums';
import { IPassiveAbility } from '../../enums-and-interfaces/interfaces';
import inventoryPlaces from '../../general/inventoryPlaces';

const abilityTargetMapping: Record<AbilityTarget, string> = {
    [AbilityTarget.enemy]: chrome.i18n.getMessage('target_enemy'),
    [AbilityTarget.place]: chrome.i18n.getMessage('target_place'),
    [AbilityTarget.self]: chrome.i18n.getMessage('target_self')
}

function CommonIcon(props: {
    item: {
        image: any,
        name: string,
        description: string,
        value?: number,
        cost?: number,
        requiredBending?: string,
        requiredMastery?: string,
        requiredPower?: string,
        requiredCyber?: string,
        requiredRitual?: string,
        passive?: boolean,
        inventoryPlaces?: InventoryPlace[]
        costs?: {
            [UserParam.health]?: number,
            [UserParam.mana]?: number,
            [UserParam.focus]?: number,
            [UserParam.stamina]?: number,
            [UserParam.blank]?: number        
        },
        damage?: {
            [DamageType.acid]?: number,
            [DamageType.cold]?: number,
            [DamageType.electrical]?: number,
            [DamageType.fire]?: number,
            [DamageType.physicalPiercing]?: number,
            [DamageType.physicalSlashing]?: number,
            [DamageType.physicalSmashing]?: number,
            [DamageType.psionic]?: number,
            [DamageType.suffocation]?: number
        },
        hitChance?: number,
        target?: AbilityTarget,
        targetAmount?: number,
        healthCost?: number,
        passiveAbilities?: IPassiveAbility[] | null
        bonusResistances?: Partial<Record<DamageType, number>>
    },
    disableReason?: string
}) {
    const {item, disableReason} = props;

    let description = item.name + '\n' 
    
    if (item.description.length > 0) {
        description += '\n' + item.description;
    }

    if (item.passiveAbilities) {
        for (const passiveAbility of item.passiveAbilities) {
            description += '\n' + passiveAbility.description;
        }
    }
    
    if (
        item.value || item.cost || item.requiredMastery ||
        item.passive || item.inventoryPlaces || item.damage
    ) {
        description += '\n';
    }

    if (item.value) {
        description += '\n' + chrome.i18n.getMessage('cid_value') + item.value;
    }

    if (item.cost) {
        description += '\n' + chrome.i18n.getMessage('cid_cost') + item.cost;
    }

    if (item.healthCost) {
        description += '\n' + chrome.i18n.getMessage('cid_health_cost') + item.healthCost;
    }

    if (item.requiredBending) {
        description += '\n' + chrome.i18n.getMessage('cid_required_bending') + item.requiredBending;
    }

    if (item.requiredMastery) {
        description += '\n' + chrome.i18n.getMessage('cid_required_mastery') + item.requiredMastery;
    }

    if (item.requiredPower) {
        description += '\n' + chrome.i18n.getMessage('cid_required_power') + item.requiredPower;
    }

    if (item.requiredCyber) {
        description += '\n' + chrome.i18n.getMessage('cid_required_cyber') + item.requiredCyber;
    }

    if (item.requiredRitual) {
        description += '\n' + chrome.i18n.getMessage('cid_required_ritual') + item.requiredRitual;
    }

    if (item.passive) {
        description += '\n' + chrome.i18n.getMessage('cid_passive') + item.passive;
    }

    if (item.inventoryPlaces) {
        description += '\n' + chrome.i18n.getMessage('cid_inventory_place') + 
            item.inventoryPlaces.map(place => inventoryPlaces[place]).join(', ');
    }

    if (item.damage) {
        for (const key in item.damage) {
            const damageType = key as DamageType;
            description += '\n' + chrome.i18n.getMessage('cid_damage', 
                [String(item.damage[damageType]), String(damageType)]
            );
        }
    }

    if (item.bonusResistances) {
        for (const key in item.bonusResistances) {
            const damageType = key as DamageType;
            description += '\n' + chrome.i18n.getMessage('', 
                [String(item.bonusResistances[damageType]), String(damageType)]
            );
        }
    }

    if (item.hitChance) {
        description += '\n' + chrome.i18n.getMessage('cid_hit_chance') + item.hitChance;
    }

    if (item.target) {
        description += '\n' + chrome.i18n.getMessage('cid_target') + abilityTargetMapping[item.target];
    }

    if (item.targetAmount) {
        description += '\n' + chrome.i18n.getMessage('cid_target_amount') + item.targetAmount;
    }

    if (!!disableReason) {
        description += '\n\n' + chrome.i18n.getMessage('cid_not_allowed') + disableReason;
    }

    return <img 
        src={item.image}
        title={description}
        className={styles.CommonIcon_icon}
        alt={item.name}
    />
}

export default CommonIcon