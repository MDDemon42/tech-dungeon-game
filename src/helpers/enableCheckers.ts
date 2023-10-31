import { InventoryOption, MindOption } from "../enums-and-interfaces/enums";
import { ICyber, IItem, IMastery, IMutation, IPower, ISpell } from "../enums-and-interfaces/interfaces";
import { getBackpacksCapability } from "./backpacksPutter";
import priorityChecker from "./priorityChecker";
import store from "../redux/store";

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
    data: IItem | IMutation | ICyber,
    dataName: InventoryOption,
    resource: number,
    currentBackpacksItemsAmount: number
): [boolean, string] {
    const resourceCheck = resource >= data.cost;
    if (!resourceCheck) {
        return [false, chrome.i18n.getMessage('siec_resources')]
    }

    const members = store.getState().gameSquad.squadMembers;
    if (dataName === InventoryOption.items) {
        const getBackpacksCapabilityCheck = currentBackpacksItemsAmount < getBackpacksCapability(members);
        if (!getBackpacksCapabilityCheck) {
            return [false, chrome.i18n.getMessage('siec_backpacks_capability')]
        }
    } else {
        const priorityCheck = priorityChecker(data);
        if (!priorityCheck) {
            return [false, chrome.i18n.getMessage('siec_priority')]
        }
    }

    if (dataName === InventoryOption.cybers) {
        const index = store.getState().gameSquad.currentlyWatched;
        const member = members[index];
        const memberInventory = member.general.inventory;
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