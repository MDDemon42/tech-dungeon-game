import styles from './Icons.module.css';
import { IMastery } from '../../enums-and-interfaces/interfaces';
import ParamIcon from './ParamIcon';
import { DamageType, InventoryPlace, UserParam } from '../../enums-and-interfaces/enums';

function CommonIcon(props: {
    item: {
        image: any,
        name: string,
        description: string,
        value?: number,
        cost?: number,
        requiredMastery?: string,
        requiredPower?: string,
        requiredCyber?: string,
        passive?: boolean,
        inventoryPlace?: InventoryPlace
        costs?: {
            [UserParam.health]?: number,
            [UserParam.mana]?: number,
            [UserParam.focus]?: number,
            [UserParam.stamina]?: number,
            [UserParam.blank]?: number        
        },
        damage?: number,
        damageType?: DamageType,
        hitChance?: number,
        targetAmount?: number
    },
    disableReason?: string
}) {
    const {item, disableReason} = props;

    let description = item.name + '\n' 
    
    if (item.description.length > 0) {
        description += '\n' + item.description;
    }
    
    if (
        item.value || item.cost || item.requiredMastery ||
        item.passive || item.inventoryPlace || item.damage
    ) {
        description += '\n';
    }

    if (item.value) {
        description += '\n' + chrome.i18n.getMessage('cid_value') + item.value;
    }

    if (item.cost) {
        description += '\n' + chrome.i18n.getMessage('cid_cost') + item.cost;
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

    if (item.passive) {
        description += '\n' + chrome.i18n.getMessage('cid_passive') + item.passive;
    }

    if (item.inventoryPlace) {
        description += '\n' + chrome.i18n.getMessage('cid_inventory_place') + item.inventoryPlace;
    }

    if (item.damage && item.damage > 0) {
        description += '\n' + chrome.i18n.getMessage('cid_damage') + item.damage;
    }

    if (item.damageType) {
        description += '\n' + chrome.i18n.getMessage('cid_damage_type') + item.damageType;
    }

    if (item.hitChance) {
        description += '\n' + chrome.i18n.getMessage('cid_hit_chance') + item.hitChance;
    }

    if (item.targetAmount) {
        description += '\n' + chrome.i18n.getMessage('cid_target_amount') + item.targetAmount;
    }

    if (!!disableReason) {
        description += '\n\n' + chrome.i18n.getMessage('cid_not_allowed') + disableReason;
    }

    const damageColors = {
        [DamageType.acid]: 'lightgreen',
        [DamageType.electrical]: 'yellow',
        [DamageType.fire]: 'orange',
        [DamageType.physicalSlashing]: 'lightblue',
        [DamageType.physicalSmashing]: 'darkblue',
        [DamageType.physicalPiercing]: 'blue',
        [DamageType.psionic]: 'pink',
        [DamageType.cold]: 'aqua'
    }

    const manaCost = item.costs?.Mana!;
    const focusCost = item.costs?.Focus!;
    const staminaCost = item.costs?.Stamina!;
    const healthCost = item.costs?.[UserParam.health]!;

    return(
        <div className={styles.CommonIcon}>
            {
                item.damage! > 0 ?
                    <div className={styles.CommonIcon_damage}>
                        <span 
                            style={{color: damageColors[item.damageType!]}}
                        >
                            {item.damage}
                        </span> 
                        <span style={{color: item.hitChance! >= 90 ? 'gold' : 'grey'}}>
                            {item.hitChance}
                        </span>
                    </div> : 
                    null
            }
            <img 
                src={item.image}
                title={description}
                className={styles.CommonIcon_icon}
                alt={item.name}
            /> 
            <div className={styles.CommonIcon_costs}>
                {
                    healthCost > 0 ?
                        <div>
                            {
                                [...Array(healthCost)].map(icon => <ParamIcon param='health'/>)
                            }
                        </div> : 
                        null
                }
                {
                    manaCost > 0 ?
                        <div>
                            {
                                [...Array(manaCost)].map(icon => <ParamIcon param='mana'/>)
                            }
                        </div> : 
                        null
                }
                {
                    focusCost > 0 ?
                        <div>
                            {
                                [...Array(focusCost)].map(icon => <ParamIcon param='focus'/>)
                            }
                        </div> : 
                        null
                }
                {
                    staminaCost > 0 ?
                        <div>
                            {
                                [...Array(staminaCost)].map(icon => <ParamIcon param='stamina'/>)
                            }
                        </div> : 
                        null
                }
            </div>
        </div>
    )
}

export default CommonIcon