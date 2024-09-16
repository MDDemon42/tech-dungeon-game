import styles from './Icons.module.css';
import ParamIcon from './ParamIcon';
import { AbilityTarget, DamageType, InventoryPlace, UserParam } from '../../enums-and-interfaces/enums';
import { IPassiveAbility } from '../../enums-and-interfaces/interfaces';
import CommonIcon from './CommonIcon';

function AbilityIcon(props: {
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

    const costs: {
        name: keyof typeof UserParam,
        cost: number
    }[] = [
        {
            name: 'mana',
            cost: item.costs?.[UserParam.mana] ?? 0
        },
        {
            name: 'health',
            cost: item.costs?.[UserParam.health] ?? 0
        },
        {
            name: 'focus',
            cost: item.costs?.[UserParam.focus] ?? 0
        },
        {
            name: 'stamina',
            cost: item.costs?.[UserParam.stamina] ?? 0
        }
    ];

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
            <CommonIcon item={item} disableReason={disableReason} />
            <div className={styles.CommonIcon_costs}>
                {
                    costs.map(item => 
                        item.cost > 0 ?
                            <div>
                                {
                                    [...Array(item.cost)].map(_ => <ParamIcon param={item.name}/>)
                                }
                            </div> :
                            null
                    )
                }
            </div>
        </div>
    )
}

export default AbilityIcon