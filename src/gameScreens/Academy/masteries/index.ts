import { IMastery } from "../../../enums-and-interfaces/interfaces";
import images from "../../../images/images";

export function createMastery(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    requiredMastery: string
): IMastery {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery
    }
};

const bowAffiliation = createMastery(
    [
        chrome.i18n.getMessage('bow_affiliation'),
        chrome.i18n.getMessage('bow_affiliation_mastery_description'),
        images.normalItems.oakBow
    ],
    ''
);

const swordAffiliation = createMastery(
    [
        chrome.i18n.getMessage('sword_affiliation'),
        chrome.i18n.getMessage('sword_affiliation_mastery_description'),
        images.normalItems.steelSword
    ],
    ''
);

const dualSwords = createMastery(
    [
        chrome.i18n.getMessage('dual_swords'),
        chrome.i18n.getMessage('dual_swords_mastery_description'),
        images.guildianLearnings.dualSwords
    ],
    swordAffiliation.name
);

const brutalForce = createMastery(
    [
        chrome.i18n.getMessage('brutal_force'),
        chrome.i18n.getMessage('brutal_force_mastery_description'),
        images.academyMasteries.brutalForce
    ],
    ''
);

const martialArts = createMastery(
    [
        chrome.i18n.getMessage('martial_arts'),
        chrome.i18n.getMessage('martial_arts_mastery_description'),
        images.academyMasteries.martialArts
    ],
    brutalForce.name
);

const maceAffiliation = createMastery(
    [
        chrome.i18n.getMessage('mace_affiliation'),
        chrome.i18n.getMessage('mace_affiliation_mastery_description'),
        images.normalItems.steelMace
    ],
    ''
);

const spearAffiliation = createMastery(
    [
        chrome.i18n.getMessage('spear_affiliation'),
        chrome.i18n.getMessage('spear_affiliation_mastery_description'),
        images.normalItems.spear
    ],
    ''
);

const sellmanship = createMastery(
    [
        chrome.i18n.getMessage('sellmanship'),
        chrome.i18n.getMessage('sellmanship_mastery_description'),
        images.academyMasteries.sellmanship
    ],
    ''
);

const academyMasteries = {
    bowAffiliation,
    brutalForce,
    dualSwords,
    maceAffiliation,
    martialArts,
    sellmanship,
    spearAffiliation,
    swordAffiliation
}

const basicOptions = [
    academyMasteries.bowAffiliation,
    academyMasteries.brutalForce,
    academyMasteries.sellmanship,
    academyMasteries.spearAffiliation
];

const steelOptions = [
    academyMasteries.martialArts,
    academyMasteries.maceAffiliation,
    academyMasteries.swordAffiliation,
    academyMasteries.dualSwords
];

export const academyOptions: Record<string, IMastery[]> = {
    0: [],
    1: [...basicOptions],
    2: [...steelOptions]
};

export default academyMasteries