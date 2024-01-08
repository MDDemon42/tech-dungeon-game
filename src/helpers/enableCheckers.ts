import { BendingGameScreens, InventoryGameScreens, MindGameScreens } from "../enums-and-interfaces/enums";
import { 
    IBending, ICharacher, ICyber, 
    IItem, IMastery, IMutation, 
    IPower, ISpell 
} from "../enums-and-interfaces/interfaces";
import priorityChecker from "./priorityChecker";
import { createNoItem } from "./emptyEssencesCreators";
import rituals from "../gameScreens/Guild/rituals";

export function bendingEnableChecker(
    bending: IBending,
    memberMind: string[],
    screenName: BendingGameScreens,
    capacity: number,
    posessed: number
): [boolean, string] {
    if (capacity <= posessed) {
        return [false, chrome.i18n.getMessage('smec_capacity', screenName)]
    }

    const posessedCheck = memberMind.includes(bending.name);
    if (posessedCheck) {
        return [false, chrome.i18n.getMessage('smec_posessed')]
    }
    
    const requiredMasteryCheck = !!bending.requiredMastery ? 
        memberMind.includes(bending.requiredMastery) :
        true;
        
    if (!requiredMasteryCheck) {
        return [false, chrome.i18n.getMessage('smec_mastery')]
    }

    const requiredBendingCheck = !!bending.requiredBending ?
        memberMind.includes(bending.requiredBending) :
        true;

    if (!requiredBendingCheck) {
        return [false, chrome.i18n.getMessage('smec_bending')]
    }

    return [true, '']
}

export function subMindEnableChecker(
    data: IMastery | IPower | ISpell,
    memberMind: string[],
    screenName: MindGameScreens,
    capacity: number,
    posessed: number
): [boolean, string] {
    if (capacity <= posessed) {
        return [false, chrome.i18n.getMessage('smec_capacity', screenName)]
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

    if (screenName === MindGameScreens.focusSite) {
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
    screenName: InventoryGameScreens,
    resource: number
): [boolean, string] {
    const resourceCheck = resource >= datum.cost;
    if (!resourceCheck) {
        return [false, chrome.i18n.getMessage('siec_resources')]
    }

    if (
        screenName === InventoryGameScreens.market ||
        screenName === InventoryGameScreens.guildShop ||
        screenName === InventoryGameScreens.wizardShop ||
        screenName === InventoryGameScreens.armoury
    ) {
        const nothing = createNoItem().name;
        const maxBackpacksItemsAmount = character.general.backpacks.length;
        const currentBackpacksItemsAmount = character.general.backpacks
            .filter((item) => item.name !== nothing).length;
        const getBackpacksCapabilityCheck = currentBackpacksItemsAmount < maxBackpacksItemsAmount;
        if (!getBackpacksCapabilityCheck) {
            return [false, chrome.i18n.getMessage('siec_backpacks_capability')]
        }
    } else {
        const priorityCheck = priorityChecker(datum);
        if (!priorityCheck) {
            return [false, chrome.i18n.getMessage('siec_priority')]
        }
    }

    if (
        screenName === InventoryGameScreens.cyberLab ||
        screenName === InventoryGameScreens.mutaLab
    ) {
        const memberRitualNames = character.general.mind.rituals.map(ritual => ritual.name);
        const titanSkinCheck = memberRitualNames.includes(rituals.titanSkin.name);

        if (titanSkinCheck) {
            return [false, chrome.i18n.getMessage('siec_titanSkin')]
        }
    }

    if (screenName === InventoryGameScreens.cyberLab) {
        const memberInventory = character.general.inventory;
        const memberInventoryNames: string[] = [];
        for (let data in memberInventory) {
            memberInventoryNames.push(memberInventory[data]?.name || '')
        };

        // @ts-expect-error
        const requiredCyberCheck = !!datum.requiredCyber ?
            // @ts-expect-error
            memberInventoryNames.includes(datum.requiredCyber) :
            true;

        if (!requiredCyberCheck) {
            return [false, chrome.i18n.getMessage('siec_cyber')]
        }
    }    

    return [true, ''] 
}

export function backpacksItemEnableChecker(
    item: IItem,
    memberMasteries: string[],
    memberAvailableStrength: number
): [boolean, string] {
    const requiredMasteryCheck = !!item.requiredMastery ? 
        memberMasteries.includes(item.requiredMastery) :
        true;

    if (!requiredMasteryCheck) {
        return [false, chrome.i18n.getMessage('smec_mastery')]
    }

    const priorityCheck = priorityChecker(item);
    if (!priorityCheck) {
        return [false, chrome.i18n.getMessage('siec_priority')]
    }

    const strengthCheck = memberAvailableStrength >= item.requiredStrength;
    if (!strengthCheck) {
        return [false, chrome.i18n.getMessage('siec_strength')]
    }

    return [true, '']
}