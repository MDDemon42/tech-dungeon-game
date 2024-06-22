import { 
    InventoryGameScreens, 
    InventoryPlace, 
    MindGameScreens, 
    MindOption, 
    RitualGameScreens, 
    SchoolGameScreens 
} from "../enums-and-interfaces/enums";
import { 
    IBending, ICharacher, ICyber, 
    IItem, IMastery, IMutation, 
    IPower, IRitual, ISpell 
} from "../enums-and-interfaces/interfaces";
import priorityChecker from "./priorityChecker";
import { createNoItem } from "./emptyEssencesCreators";
import rituals from "../gameScreens/Guild/rituals";
import { upperCaseFirstLetter } from "../pages/PopupPages/MainPage";

export function bendingEnableChecker(
    bending: IBending,
    memberMind: string[],
    capacity: number,
    posessed: number
): [boolean, string] {
    if (capacity <= posessed) {
        return [false, chrome.i18n.getMessage('smec_capacity', 'Bendings')]
    }

    const alreadyPosessed = memberMind.includes(bending.name);
    if (alreadyPosessed) {
        return [false, chrome.i18n.getMessage('smec_posessed')]
    }
    
    const hasRequiredMastery = !!bending.requiredMastery ? 
        memberMind.includes(bending.requiredMastery) :
        true;
        
    if (!hasRequiredMastery) {
        return [false, chrome.i18n.getMessage('smec_mastery')]
    }

    const hasRequiredBending = !!bending.requiredBending ?
        memberMind.includes(bending.requiredBending) :
        true;

    if (!hasRequiredBending) {
        return [false, chrome.i18n.getMessage('smec_bending')]
    }

    return [true, '']
}

const screenNameCapacityMappings: Record<MindGameScreens, MindOption> = {
    [SchoolGameScreens.academy]: MindOption.masteries,
    [RitualGameScreens.airRituals]: MindOption.rituals,
    [SchoolGameScreens.airSchool]: MindOption.masteries,
    [RitualGameScreens.fireRituals]: MindOption.rituals,
    [SchoolGameScreens.fireSchool]: MindOption.masteries,
    [RitualGameScreens.focusRituals]: MindOption.rituals,
    [SchoolGameScreens.focusSchool]: MindOption.masteries,
    [SchoolGameScreens.focusSite]: MindOption.powers,
    [RitualGameScreens.guildRituals]: MindOption.rituals,
    [SchoolGameScreens.guildSchool]: MindOption.masteries,
    [RitualGameScreens.iceRituals]: MindOption.rituals,
    [SchoolGameScreens.iceSchool]: MindOption.masteries,
    [SchoolGameScreens.spellSchool]: MindOption.masteries,
    [SchoolGameScreens.wizardSchool]: MindOption.masteries
}

export function subMindEnableChecker(
    data: IMastery | IPower | ISpell | IRitual,
    memberMind: string[],
    screenName: MindGameScreens,
    capacity: number,
    posessed: number
): [boolean, string] {
    if (capacity <= posessed) {
        return [false, chrome.i18n.getMessage(
            'smec_capacity', 
            upperCaseFirstLetter(screenNameCapacityMappings[screenName])
        )]
    }

    const alreadyPosessed = memberMind.includes(data.name);
    if (alreadyPosessed) {
        return [false, chrome.i18n.getMessage('smec_posessed')]
    }
    
    const hasRequiredMastery = !!data.requiredMastery ? 
        memberMind.includes(data.requiredMastery) :
        true;
        
    if (!hasRequiredMastery) {
        return [false, chrome.i18n.getMessage('smec_mastery')]
    }

    if (screenName === SchoolGameScreens.focusSite) {
        // @ts-expect-error
        const hasRequiredPower = !!data.requiredPower ?
            // @ts-expect-error
            memberMind.includes(data.requiredPower) :
            true;

        if (!hasRequiredPower) {
            return [false, chrome.i18n.getMessage('smec_power')]
        }
    }

    if (screenName.includes('Ritual')) {
        // @ts-expect-error
        const hasEnoughHealth = !!data.healthCost >= capacity;

        if (hasEnoughHealth) {
            return [false, chrome.i18n.getMessage('smec_health_cost')]
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
    const hasEnoughResources = resource >= datum.cost;
    if (!hasEnoughResources) {
        return [false, chrome.i18n.getMessage('siec_resources')]
    }

    if (
        screenName === InventoryGameScreens.market ||
        screenName === InventoryGameScreens.guildShop ||
        screenName === InventoryGameScreens.wizardShop ||
        screenName === InventoryGameScreens.armoury ||
        screenName === InventoryGameScreens.tropheyField
    ) {
        const nothing = createNoItem().name;
        const maxBackpacksItemsAmount = character.general.backpacks.length;
        const currentBackpacksItemsAmount = character.general.backpacks
            .filter((item) => item.name !== nothing).length;
        const backpacksHaveFreeSlots = currentBackpacksItemsAmount < maxBackpacksItemsAmount;
        if (!backpacksHaveFreeSlots) {
            return [false, chrome.i18n.getMessage('siec_backpacks_capability')]
        }
    } else {
        const hasMorePriority = priorityChecker(datum);
        if (!hasMorePriority) {
            return [false, chrome.i18n.getMessage('siec_priority')]
        }
    }

    if (
        screenName === InventoryGameScreens.cyberLab ||
        screenName === InventoryGameScreens.mutaLab
    ) {
        const memberRitualNames = character.general.mind.rituals.map(ritual => ritual.name);
        const hasTitanSkin = memberRitualNames.includes(rituals.titanSkin.name);

        if (hasTitanSkin) {
            return [false, chrome.i18n.getMessage('siec_titanSkin')]
        }
    }

    if (screenName === InventoryGameScreens.cyberLab) {
        const memberInventory = character.general.inventory;
        const memberInventoryNames: string[] = [];
        for (const name in memberInventory) {
            const position = name as InventoryPlace;
            memberInventoryNames.push(memberInventory[position]?.name || '')
        };

        // @ts-expect-error
        const hasRequiredCyber = !!datum.requiredCyber ?
            // @ts-expect-error
            memberInventoryNames.includes(datum.requiredCyber) :
            true;

        if (!hasRequiredCyber) {
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
    const hasRequiredMastery = !!item.requiredMastery ? 
        memberMasteries.includes(item.requiredMastery) :
        true;

    if (!hasRequiredMastery) {
        return [false, chrome.i18n.getMessage('smec_mastery')]
    }

    const hasMorePriority = priorityChecker(item);
    if (!hasMorePriority) {
        return [false, chrome.i18n.getMessage('siec_priority')]
    }

    const hasEnoughStrength = memberAvailableStrength >= item.requiredStrength;
    if (!hasEnoughStrength) {
        return [false, chrome.i18n.getMessage('siec_strength')]
    }

    return [true, '']
}