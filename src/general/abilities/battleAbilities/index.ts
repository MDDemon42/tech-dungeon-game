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
    costs: Partial<Record<UserParam, number>>,
    damage: Partial<Record<DamageType, number>>,
    damageInfo: [
        targetAmount: number,
        hitChance: number,
        target?: AbilityTarget,
    ],
    throwing: boolean = false       
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