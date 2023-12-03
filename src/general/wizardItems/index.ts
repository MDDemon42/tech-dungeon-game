import weapons from "./weapons";
import armors from "./armors";
import other from "./other";
import { InventoryPlace } from "../../enums-and-interfaces/enums";
import { IBattleAbility, IPassiveAbility, IWizardItem } from "../../enums-and-interfaces/interfaces";

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
        ability: IBattleAbility | null,
        passiveAbility: IPassiveAbility | null
    ]    
): IWizardItem {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlace: inventoryInfo[1],
        priority: inventoryInfo[2],

        ability: abilityInfo[0],
        passiveAbility: abilityInfo[1]
    }
}

const wizardItems = {
    armors,
    other,
    weapons
}

export default wizardItems