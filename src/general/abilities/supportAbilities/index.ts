import { 
    UserParam, 
    DamageType, 
    AbilityTarget 
} from "../../../enums-and-interfaces/enums";
import { ISupportAbility } from "../../../enums-and-interfaces/interfaces";

import armor from "./armor";

export function createSupportAbility(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    costs: Partial<Record<UserParam, number>>,
    bonusResistances: Partial<Record<DamageType, number>>,
    damageInfo: [
        hitChance: number,
        target?: AbilityTarget,
    ],       
): ISupportAbility {
    return {
        name: commonInfo[0], 
        description: commonInfo[1], 
        image: commonInfo[2],

        costs,

        bonusResistances,

        hitChance: damageInfo[0],
        target: damageInfo[1] ? damageInfo[1] : AbilityTarget.self,
    }
}

const supportAbilities = {
    armor
}

export default supportAbilities