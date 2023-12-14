import { UserParam, DamageType } from "../../../enums-and-interfaces/enums";
import { IPassiveAbility } from "../../../enums-and-interfaces/interfaces";
import armor from "./armor/armor";
import cyber from "./cyber";

export function createPassiveAbility(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    bonusMaxParams: Partial<Record<UserParam, number>> | null,
    bonusResistances: Partial<Record<DamageType, number>> | null,
    bonusDodge: number
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
    armor,
    cyber
}

export default passiveAbilities