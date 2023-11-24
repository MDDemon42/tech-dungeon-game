import { IMastery } from "../../enums-and-interfaces/interfaces";
import images from "../../images/images";

function createMastery(
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
        images.normalItems.bow
    ],
    ''
)

const mastery_marksmanship = createMastery(
    [
        chrome.i18n.getMessage('marksmanship'),
        chrome.i18n.getMessage('marksmanship_mastery_description'),
        images.normalItems.crossbow
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

const mastery_bombThrowing = createMastery(
    [
        chrome.i18n.getMessage('bomb_throwing'),
        chrome.i18n.getMessage('bomb_throwing_mastery_description'),
        images.normalItems.acidBomb
    ],
    ''
)

const mastery_chakramAffiliation = createMastery(
    [
        chrome.i18n.getMessage('chakram_affiliation'),
        chrome.i18n.getMessage('chakram_affiliation_mastery_description'),
        images.guildianLearnings.chakram
    ],
    ''
)

const mastery_battleRunes = createMastery(
    [
        chrome.i18n.getMessage('battle_runes'),
        chrome.i18n.getMessage('battle_runes_mastery_description'),
        images.guildianLearnings.runicGreatsword
    ],
    ''
)

const mastery_scholarship = createMastery(
    [
        chrome.i18n.getMessage('scholarship'),
        chrome.i18n.getMessage('scholarship_mastery_description'),
        images.wizardItems.apprenticeHat
    ],
    ''
)

const mastery_magisterDegree = createMastery(
    [
        chrome.i18n.getMessage('magister_degree'),
        chrome.i18n.getMessage('magister_degree_mastery_description'),
        images.wizardItems.magisterHat
    ],
    mastery_scholarship.name
)

const mastery_meditativeInsights = createMastery(
    [
        chrome.i18n.getMessage('meditative_insights'),
        chrome.i18n.getMessage('meditative_insights_mastery_description'),
        images.psionInsights.intuition
    ],
    ''
)

const mastery_psiEnergy = createMastery(
    [
        chrome.i18n.getMessage('psi_energy'),
        chrome.i18n.getMessage('psi_energy_mastery_description'),
        images.psionInsights.psiLightning
    ],
    mastery_meditativeInsights.name
)

const mastery_senseOfCold = createMastery(
    [
        chrome.i18n.getMessage('cold_affiliation'),
        chrome.i18n.getMessage('cold_affiliation_mastery_description'),
        images.wizardSpells.senseOfCold
    ],
    ''
)

const mastery_senseOfFlame = createMastery(
    [
        chrome.i18n.getMessage('flame_affiliation'),
        chrome.i18n.getMessage('flame_affiliation_mastery_description'),
        images.wizardSpells.flame
    ],
    ''
)

const mastery_senseOfWind = createMastery(
    [
        chrome.i18n.getMessage('wind_affiliation'),
        chrome.i18n.getMessage('wind_affiliation_mastery_description'),
        images.wizardSpells.senseOfWind
    ],
    ''
)

const mastery_axeAffiliation = createMastery(
    [
        chrome.i18n.getMessage('axe_affiliation'),
        chrome.i18n.getMessage('axe_affiliation_mastery_description'),
        images.normalItems.doubleAxeSlash
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
        images.normalItems.steelSpear
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
    mastery_marksmanship,
    mastery_dualSwords,
    mastery_brutalForce,
    mastery_bombThrowing,
    mastery_chakramAffiliation,
    mastery_battleRunes,
    mastery_scholarship,
    mastery_magisterDegree,
    mastery_maceAffiliation,
    mastery_meditativeInsights,
    mastery_psiEnergy,
    mastery_sellmanship,
    mastery_senseOfCold,
    mastery_senseOfFlame,
    mastery_senseOfWind,
    mastery_spearAffiliation,
    mastery_swordAffiliation
}

export default masteries