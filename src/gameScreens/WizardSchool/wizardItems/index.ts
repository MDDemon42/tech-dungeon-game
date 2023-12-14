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
        inventoryPlace: InventoryPlace,
        priority: number
    ],
    abilityInfo: [
        abilities: IBattleAbility[] | null,
        passiveAbilities: IPassiveAbility[] | null
    ]    
): IWizardItem {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlace: inventoryInfo[1],
        priority: inventoryInfo[2],

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
    wizardItems.weapons.wizardItem_apprenticeRod,
    wizardItems.armors.wizardItem_apprenticeHat
]

const magisterStuff = [
    wizardItems.weapons.wizardItem_magisterScepter,
    wizardItems.armors.wizardItem_magisterHat,
    wizardItems.armors.wizardItem_magisterRobe,
    wizardItems.other.wizardItem_flyingCape
]

export const wizardShopOptions: Record<string, IWizardItem[]> = {
    0: [],
    1: [...apprenticeStuff],
    2: [...magisterStuff]
}

export default wizardItems