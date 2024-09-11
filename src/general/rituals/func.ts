import { InventoryPlace } from "../../enums-and-interfaces/enums";
import { IBending, IPassiveAbility, IRitual, IRitualBodyPart } from "../../enums-and-interfaces/interfaces";

export function createRitual(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    ritualInfo: [
        healthCost: number,
        requiredMastery: string,
        passiveAbilities: IPassiveAbility[],
        requiredRitual?: string,
        bendings?: IBending[],
        lostInventorySlots?: InventoryPlace[],
        lostInventorySlots?: InventoryPlace[],
        grantedBodyParts?: Partial<Record<InventoryPlace, IRitualBodyPart>>,
        newRaceName?: string
    ]
): IRitual {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        healthCost: ritualInfo[0],
        requiredMastery: ritualInfo[1],
        passiveAbilities: ritualInfo[2],
        requiredRitual: ritualInfo[3] ?? '',
        
        bendings: ritualInfo[4] ?? [],
        lostInventorySlots: ritualInfo[5] ?? [],
        unchangeableInventorySlots: ritualInfo[6] ?? [],
        grantedBodyParts: ritualInfo[7] ?? null,
        newRaceName: ritualInfo[8] ?? ''
    }
}