import { InventoryOption, MindOption } from "../enums-and-interfaces/enums";
import { ICharacher, ICyber, IItem, IMastery, IMutation, IPower, ISpell } from "../enums-and-interfaces/interfaces";
import { backpacksCapability } from "./backpacksPutter";
import priorityChecker from "./priorityChecker";

export function subMindEnableChecker(
    data: IMastery | IPower | ISpell,
    memberMind: string[],
    dataName: MindOption,
    capacity: number,
    posessed: number
): [boolean, string] {
    if (capacity <= posessed) {
        return [false, 'Your mind cannot contain any more ' + dataName]
    }

    const posessedCheck = memberMind.includes(data.name);
    if (posessedCheck) {
        return [false, 'Already posessed']
    }
    
    const requiredMasteryCheck = !!data.requiredMastery ? 
        memberMind.includes(data.requiredMastery.name) :
        true;
        
    if (!requiredMasteryCheck) {
        return [false, 'Does not have required mastery']
    }

    return [true, '']
}

export function subInventoryEnableChecker(
    data: IItem | IMutation | ICyber,
    dataName: InventoryOption,
    resource: number,
    currentBackpacksItemsAmount: number,
    members: Record<string, ICharacher>
): [boolean, string] {
    const resourceCheck = resource >= data.cost;
    if (!resourceCheck) {
        return [false, 'Not enough resouces']
    }

    if (dataName === InventoryOption.items) {
        const backpacksCapabilityCheck = currentBackpacksItemsAmount < backpacksCapability(members);
        if (!backpacksCapabilityCheck) {
            return [false, 'Not enough space in backpacks']
        }
    } else {
        const priorityCheck = priorityChecker(data);
        if (!priorityCheck) {
            return [false, 'Better equipment in use']
        }
    }

    return [true, ''] 
}