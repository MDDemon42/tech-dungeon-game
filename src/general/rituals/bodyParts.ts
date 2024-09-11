import { 
    InventoryPlace, 
    InventorySlotCategory } from "../../enums-and-interfaces/enums";
import { 
    IBattleAbility, 
    IPassiveAbility, 
    IMastery, 
    IRitualBodyPart 
} from "../../enums-and-interfaces/interfaces";
import { fireElementalBodyParts } from "../../gameScreens/FireSite/rituals/bodyParts";

export function createRitualBodyPart(
    commonInfo: [
        name: string,
        description: string,
        image: string,
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
    givenMastery: IMastery | null = null,
    category: InventorySlotCategory = InventorySlotCategory.unchangeable
): IRitualBodyPart {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlaces: inventoryInfo[1],
        priority: inventoryInfo[2],

        abilities: abilityInfo[0],
        passiveAbilities: abilityInfo[1],
        
        requiredStrength: 0,
        givenMastery,
        category,

        requiredMastery: '',
        linkedAbilities: []
    }
}

export const ritualBodyParts = {
    fireElementalBodyParts
}