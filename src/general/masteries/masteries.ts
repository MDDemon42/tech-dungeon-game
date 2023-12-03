import { IMastery } from "../../enums-and-interfaces/interfaces";
import images from "../../images/images";

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
}

const mastery_bowAffiliation = createMastery(
    [
        chrome.i18n.getMessage('bow_affiliation'),
        chrome.i18n.getMessage('bow_affiliation_mastery_description'),
        images.normalItems.oakBow
    ],
    ''
)

const mastery_swordAffiliation = createMastery(
    [
        chrome.i18n.getMessage('sword_affiliation'),
        chrome.i18n.getMessage('sword_affiliation_mastery_description'),
        images.normalItems.steelSword
    ],
    ''
)

const mastery_dualSwords = createMastery(
    [
        chrome.i18n.getMessage('dual_swords'),
        chrome.i18n.getMessage('dual_swords_mastery_description'),
        images.guildianLearnings.dualSwords
    ],
    mastery_swordAffiliation.name
)

const mastery_brutalForce = createMastery(
    [
        chrome.i18n.getMessage('brutal_force'),
        chrome.i18n.getMessage('brutal_force_mastery_description'),
        images.guildianLearnings.brutalForce
    ],
    ''
)

const mastery_axeAffiliation = createMastery(
    [
        chrome.i18n.getMessage('axe_affiliation'),
        chrome.i18n.getMessage('axe_affiliation_mastery_description'),
        images.normalItems.axe
    ],
    ''
)

const mastery_maceAffiliation = createMastery(
    [
        chrome.i18n.getMessage('mace_affiliation'),
        chrome.i18n.getMessage('mace_affiliation_mastery_description'),
        images.normalItems.steelMace
    ],
    ''
)

const mastery_spearAffiliation = createMastery(
    [
        chrome.i18n.getMessage('spear_affiliation'),
        chrome.i18n.getMessage('spear_affiliation_mastery_description'),
        images.normalItems.spear
    ],
    ''
)

const mastery_sellmanship = createMastery(
    [
        chrome.i18n.getMessage('sellmanship'),
        chrome.i18n.getMessage('sellmanship_mastery_description'),
        images.misc.sellmanship
    ],
    ''
)

const masteries = {
    mastery_bowAffiliation,
    mastery_axeAffiliation,
    mastery_dualSwords,
    mastery_brutalForce,
    mastery_maceAffiliation,
    mastery_sellmanship,
    mastery_spearAffiliation,
    mastery_swordAffiliation
}

export default masteries