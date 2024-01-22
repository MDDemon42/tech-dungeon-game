import styles from './Icons.module.css';
import ParamIcon from './ParamIcon';
import { DamageType, InventoryPlace, UserParam } from '../../enums-and-interfaces/enums';
import { IPassiveAbility } from '../../enums-and-interfaces/interfaces';
import inventoryPlaces from '../../general/inventoryPlaces';

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
        targetAmount?: number,
        passiveAbilities?: IPassiveAbility[] | null
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
        [DamageType.suffocation]: 'lighyellow',
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
                !!item.damage ?
                    <>
                        <div className={styles.CommonIcon_damagesColumn}>
                            {
                                Object.keys(item.damage).map(key =>
                                    <span 
                                        style={{color: damageColors[key as DamageType]}}
                                    >
                                        {item.damage?.[key as DamageType]}
                                    </span>
                                )
                            }                            
                        </div>
                        <span className={styles.CommonIcon_hitChance}
                            style={{color: item.hitChance! >= 90 ? 'gold' : 'grey'}}
                        >
                            {item.hitChance}
                        </span>
                    </> : 
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