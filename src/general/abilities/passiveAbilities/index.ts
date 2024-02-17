import { UserParam, DamageType } from "../../../enums-and-interfaces/enums";
import { IPassiveAbility } from "../../../enums-and-interfaces/interfaces";
import images from "../../../images/images";
import armor from "./armor";
import cybers from "./cybers";
import mutations from "./mutations";
import psionics from "./psionics";
import rituals from "./rituals";
import weapons from "./weapons";

export function createPassiveAbility(
    commonInfo: [
        name: string,
        description: string,
    ],
    bonusMaxParams: Partial<Record<UserParam, number>> | null,
    bonusResistances: Partial<Record<DamageType, number>> | null,
    bonusDodge: number
): IPassiveAbility {
    return {
        name: commonInfo[0], 
        description: commonInfo[1], 
        image: images.classIcons.noIcon,

        bonusMaxParams,
        bonusResistances,
        bonusDodge
    }
}

const passiveAbilities = {
    armor,
    cybers,
    mutations,
    psionics,
    rituals,
    weapons
}

export default passiveAbilities