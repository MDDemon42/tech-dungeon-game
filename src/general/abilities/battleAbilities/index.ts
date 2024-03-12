import { IBattleAbility } from "../../../enums-and-interfaces/interfaces";
import melee from "./melee";
import ranged from "./ranged";
import { AbilityTarget, DamageType, UserParam } from "../../../enums-and-interfaces/enums";

export function createBattleAbility(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    costs: {
        [UserParam.health]?: number,
        [UserParam.mana]?: number,
        [UserParam.focus]?: number,
        [UserParam.stamina]?: number,
        [UserParam.blank]?: number        
    },
    damage: {
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
    damageInfo: [
        targetAmount: number,
        hitChance: number,
        target?: AbilityTarget,
    ],
    throwing?: boolean        
): IBattleAbility {
    return {
        name: commonInfo[0], 
        description: commonInfo[1], 
        image: commonInfo[2],

        costs,

        damage,

        targetAmount: damageInfo[0],
        hitChance: damageInfo[1],
        target: damageInfo[2] ? damageInfo[2] : AbilityTarget.enemy,

        throwing
    }
}

const battleAbilities = {
    melee,
    ranged
}

export default battleAbilities