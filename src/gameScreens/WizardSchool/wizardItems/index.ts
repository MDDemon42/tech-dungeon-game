import weapons from "./weapons";
import armors from "./armors";
import other from "./other";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import { IBattleAbility, IPassiveAbility, IWizardItem } from "../../../enums-and-interfaces/interfaces";

export function createWizardItem(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    inventoryInfo: [
        cost: number,
        inventoryPlaces: InventoryPlace[],
        priority: number
    ],
    abilityInfo: [
        abilities: IBattleAbility[] | null,
        passiveAbilities: IPassiveAbility[] | null
    ],    
    requiredStrength: number = 0
): IWizardItem {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlaces: inventoryInfo[1],
        priority: inventoryInfo[2],

        requiredStrength,

        abilities: abilityInfo[0],
        passiveAbilities: abilityInfo[1]
    }
}

const wizardItems = {
    armors,
    other,
    weapons
}

const apprenticeStuff = [
    wizardItems.weapons.apprenticeRod,
    wizardItems.armors.apprenticeHat
]

const magisterStuff = [
    wizardItems.weapons.magisterScepter,
    wizardItems.armors.magisterHat,
    wizardItems.armors.magisterRobe,
    wizardItems.other.wizardItem_flyingCape
]

export const wizardShopOptions: Record<string, IWizardItem[]> = {
    0: [],
    1: [...apprenticeStuff],
    2: [...magisterStuff]
}

export default wizardItems