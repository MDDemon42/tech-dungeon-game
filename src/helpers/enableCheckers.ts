import { InventoryOption, MindOption } from "../enums-and-interfaces/enums";
import { ICharacher, ICyber, IItem, IMastery, IMutation, IPower, ISpell } from "../enums-and-interfaces/interfaces";
import { getBackpacksCapability } from "./backpacksPutter";
import priorityChecker from "./priorityChecker";
import { createNoItem } from "./emptyEssencesCreators";

export function subMindEnableChecker(
    data: IMastery | IPower | ISpell,
    memberMind: string[],
    dataName: MindOption,
    capacity: number,
    posessed: number
): [boolean, string] {
    if (capacity <= posessed) {
        return [false, chrome.i18n.getMessage('smec_capacity', dataName)]
    }

    const posessedCheck = memberMind.includes(data.name);
    if (posessedCheck) {
        return [false, chrome.i18n.getMessage('smec_posessed')]
    }
    
    const requiredMasteryCheck = !!data.requiredMastery ? 
        memberMind.includes(data.requiredMastery) :
        true;
        
    if (!requiredMasteryCheck) {
        return [false, chrome.i18n.getMessage('smec_mastery')]
    }

    if (dataName === MindOption.powers) {
        // @ts-expect-error
        const requiredPowerCheck = !!data.requiredPower ?
            // @ts-expect-error
            memberMind.includes(data.requiredPower) :
            true;

        if (!requiredPowerCheck) {
            return [false, chrome.i18n.getMessage('smec_power')]
        }
    }

    return [true, '']
}

export function subInventoryEnableChecker(
    character: ICharacher,
    datum: IItem | IMutation | ICyber,
    dataName: InventoryOption,
    resource: number
): [boolean, string] {
    const resourceCheck = resource >= datum.cost;
    if (!resourceCheck) {
        return [false, chrome.i18n.getMessage('siec_resources')]
    }

    if (dataName === InventoryOption.items) {
        const nothing = createNoItem().name;
        const currentBackpacksItemsAmount = character.general.backpacks
            .filter((item) => item.name !== nothing).length;
        const getBackpacksCapabilityCheck = currentBackpacksItemsAmount < getBackpacksCapability(character);
        if (!getBackpacksCapabilityCheck) {
            return [false, chrome.i18n.getMessage('siec_backpacks_capability')]
        }
    } else {
        const priorityCheck = priorityChecker(datum);
        if (!priorityCheck) {
            return [false, chrome.i18n.getMessage('siec_priority')]
        }
    }

    if (dataName === InventoryOption.cybers) {
        const memberInventory = character.general.inventory;
        const memberInventoryNames: string[] = [];
        for (let data in memberInventory) {
            memberInventoryNames.push(memberInventory[data].name)
        };

        // @ts-expect-error
        const requiredCyberCheck = !!data.requiredCyber ?
            // @ts-expect-error
            memberInventoryNames.includes(data.requiredCyber) :
            true;

        if (!requiredCyberCheck) {
            return [false, chrome.i18n.getMessage('siec_cyber')]
        }
    }

    return [true, ''] 
}