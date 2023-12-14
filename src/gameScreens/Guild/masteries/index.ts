import { IMastery } from "../../../enums-and-interfaces/interfaces";
import images from "../../../images/images";
import { createMastery } from "../../Academy/masteries";

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
        images.guildianLearnings.battleRunes
    ],
    ''
)

const mastery_empoweredStrikes = createMastery(
    [
        chrome.i18n.getMessage('empowered_strikes'),
        chrome.i18n.getMessage('empowered_strikes_mastery_description'),
        images.guildianLearnings.empoweredStrikes
    ],
    ''
)

const mastery_marksmanship = createMastery(
    [
        chrome.i18n.getMessage('marksmanship'),
        chrome.i18n.getMessage('marksmanship_mastery_description'),
        images.normalItems.oakCrossbow
    ],
    ''
)

const guildMasteries = {
    mastery_battleRunes,
    mastery_bombThrowing,
    mastery_chakramAffiliation,
    mastery_empoweredStrikes,
    mastery_marksmanship
}

const basicOptions = [
    guildMasteries.mastery_bombThrowing,
    guildMasteries.mastery_chakramAffiliation,
    guildMasteries.mastery_empoweredStrikes,
    guildMasteries.mastery_marksmanship
];

const runes = [
    guildMasteries.mastery_battleRunes
]

export const guildSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [...basicOptions],
    2: [...runes]
};

export default guildMasteries