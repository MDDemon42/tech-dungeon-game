import { IMastery } from "../../../enums-and-interfaces/interfaces";
import images from "../../../images/images";
import { createMastery } from "../../../general/masteries";

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
        images.normalItems.pierceStick
    ],
    ''
);

const axeAffiliation = createMastery(
    [
        chrome.i18n.getMessage('axe_affiliation'),
        chrome.i18n.getMessage('axe_affiliation_mastery_description'),
        images.normalItems.axe
    ],
    ''
);

const shieldAffiliation = createMastery(
    [
        chrome.i18n.getMessage('shield_affiliation'),
        chrome.i18n.getMessage('shield_affiliation_mastery_description'),
        images.normalItems.woodenShield
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
    axeAffiliation,
    bowAffiliation,
    brutalForce,
    maceAffiliation,
    martialArts,
    sellmanship,
    shieldAffiliation,
    spearAffiliation,
    swordAffiliation
}

const basicOptions = [
    academyMasteries.axeAffiliation,
    academyMasteries.bowAffiliation,
    academyMasteries.brutalForce,
    academyMasteries.sellmanship,
    academyMasteries.shieldAffiliation,
    academyMasteries.spearAffiliation
];

const steelOptions = [
    academyMasteries.martialArts,
    academyMasteries.maceAffiliation,
    academyMasteries.swordAffiliation
];

export const academyOptions: Record<string, IMastery[]> = {
    0: [],
    1: [...basicOptions],
    2: [...steelOptions]
};

export default academyMasteries