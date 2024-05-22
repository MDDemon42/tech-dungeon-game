import { IMastery } from "../../../enums-and-interfaces/interfaces";
import images from "../../../images/images";
import { createMastery } from "../../../general/masteries";

const bombThrowing = createMastery(
    [
        chrome.i18n.getMessage('bomb_throwing'),
        chrome.i18n.getMessage('bomb_throwing_mastery_description'),
        images.normalItems.acidBomb
    ],
    ''
)

const chakramAffiliation = createMastery(
    [
        chrome.i18n.getMessage('chakram_affiliation'),
        chrome.i18n.getMessage('chakram_affiliation_mastery_description'),
        images.guildianLearnings.chakram
    ],
    ''
)

const battleRunes = createMastery(
    [
        chrome.i18n.getMessage('battle_runes'),
        chrome.i18n.getMessage('battle_runes_mastery_description'),
        images.guildianLearnings.battleRunes
    ],
    ''
)

const marksmanship = createMastery(
    [
        chrome.i18n.getMessage('marksmanship'),
        chrome.i18n.getMessage('marksmanship_mastery_description'),
        images.normalItems.oakCrossbow
    ],
    ''
)

const guildMasteries = {
    battleRunes,
    bombThrowing,
    chakramAffiliation,
    marksmanship
}

const basicOptions = [
    guildMasteries.bombThrowing,
    guildMasteries.chakramAffiliation,
    guildMasteries.marksmanship
];

const runes = [
    guildMasteries.battleRunes
]

export const guildSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [...basicOptions],
    2: [...runes]
};

export default guildMasteries