import { UserParam, DamageType } from "../../../enums-and-interfaces/enums";
import { IPassiveAbility } from "../../../enums-and-interfaces/interfaces";
import armor from "./armor/armor";

export function createPassiveAbility(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    bonusMaxParams: {
        [UserParam.health]?: number,
        [UserParam.mana]?: number,
        [UserParam.focus]?: number,
        [UserParam.stamina]?: number,
        [UserParam.blank]?: number
    } | null,
    bonusResistances: {
        [DamageType.physicalSlashing]?: number,
        [DamageType.physicalSmashing]?: number,
        [DamageType.physicalPiercing]?: number,
        [DamageType.suffocation]?: number,
        [DamageType.fire]?: number,
        [DamageType.electrical]?: number,
        [DamageType.psionic]?: number,
        [DamageType.acid]?: number,
        [DamageType.cold]?: number,
    } | null,
    bonusDodge?: number
): IPassiveAbility {
    return {
        name: commonInfo[0], 
        description: commonInfo[1], 
        image: commonInfo[2],

        bonusMaxParams,

        bonusResistances,

        bonusDodge
    }
}

const passiveAbilities = {
    armor
}

export default passiveAbilities