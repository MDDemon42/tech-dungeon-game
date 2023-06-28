import styles from '../index.module.css';
import { DamageTypes, IMastery, InventoryPlaces, UserParam } from '../types/interfaces';
import ParamIcon from './ParamIcon';

function CommonIcon(props: {
    item: {
        image: any,
        name: string,
        description: string,
        value?: number,
        cost?: number,
        requiredMastery?: IMastery | null,
        passive?: boolean,
        inventoryPlace?: InventoryPlaces
        costs?: {
            [UserParam.health]?: number,
            [UserParam.mana]?: number,
            [UserParam.focus]?: number,
            [UserParam.stamina]?: number,
            [UserParam.blank]?: number        
        },
        damage?: number,
        damageType?: DamageTypes,
        hitChance?: number,
        targetAmount?: number
    }
}) {
    const {item} = props;

    let description = item.name + '\n' 
    
    if (item.description.length > 0) {
        description += '\n' + item.description + '\n';
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

    const damageColors = {
        [DamageTypes.acid]: 'lightgreen',
        [DamageTypes.electrical]: 'yellow',
        [DamageTypes.fire]: 'orange',
        [DamageTypes.physical]: 'lightblue',
        [DamageTypes.psionic]: 'pink'
    }

    const manaCost = item.costs?.Mana!;
    const focusCost = item.costs?.Focus!;
    const staminaCost = item.costs?.Stamina!;
    const healthCost = item.costs?.[UserParam.health]!;

    return(
        <div style={{position: 'relative'}}>
            {
                item.damage! > 0 ?
                    <div className={styles.commonIcon_damage}>
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
                className={styles.commonIcon}
                alt={item.name}
            /> 
            <div className={styles.commonIcon_costs}>
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