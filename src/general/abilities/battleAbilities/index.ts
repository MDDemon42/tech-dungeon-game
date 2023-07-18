import { DamageTypes, IBattleAbility, UserParam } from "../../../types/interfaces"
import magic from "./magic";
import melee from "./melee";
import ranged from "./ranged";
import power from "./power";

export function createBattleAbility(
    name: string,
    description: string,
    image: any,
    costs: {
        [UserParam.health]?: number,
        [UserParam.mana]?: number,
        [UserParam.focus]?: number,
        [UserParam.stamina]?: number,
        [UserParam.blank]?: number        
    },
    damage: number,
    damageType: DamageTypes,
    targetAmount: number,
    hitChance: number    
): IBattleAbility {
    return {
        name, description, image,
        costs,
        damage, damageType, targetAmount, hitChance
    }
}

const battleAbilities = {
    melee,
    ranged,
    magic,
    power
}

export default battleAbilities