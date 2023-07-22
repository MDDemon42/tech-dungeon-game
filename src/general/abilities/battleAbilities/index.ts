import { DamageTypes, IBattleAbility, UserParam } from "../../../interfaces/interfaces"
import magic from "./magic";
import melee from "./melee";
import ranged from "./ranged";
import power from "./power";

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
    damageInfo: [
        damage: number,
        damageType: DamageTypes,
        targetAmount: number,
        hitChance: number
    ]        
): IBattleAbility {
    return {
        name: commonInfo[0], 
        description: commonInfo[1], 
        image: commonInfo[2],

        costs,

        damage: damageInfo[0], 
        damageType: damageInfo[1], 
        targetAmount: damageInfo[2],
        hitChance: damageInfo[3]
    }
}

const battleAbilities = {
    melee,
    ranged,
    magic,
    power
}

export default battleAbilities