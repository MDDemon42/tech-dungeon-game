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

const mastery_archery = createMastery(
    [
        'Archery',
        'Mastery in not missing shooting with bow',
        images.normalItems.bow
    ],
    ''
)

const mastery_marksmanship = createMastery(
    [
        'Marksmanship',
        'Mastery in not missing shooting with crossbow',
        images.normalItems.crossbow
    ],
    ''
)

const mastery_swordAffiliation = createMastery(
    [
        'Sword affiliation',
        'Mastery in gain full control over sword',
        images.normalItems.steelSword
    ],
    ''
)

const mastery_dualSwords = createMastery(
    [
        'Dual swords',
        'Mastery in slashing and stabbing with swords in both hands',
        images.guildianLearnings.dualSwords
    ],
    mastery_swordAffiliation.name
)

const mastery_brutalForce = createMastery(
    [
        'Brutal force',
        'Mastery in smashing and beheading your enemies',
        images.guildianLearnings.brutalForce
    ],
    ''
)

const mastery_bombThrowing = createMastery(
    [
        'Bomb throwing',
        'Mastery in throwing bombs accurately',
        images.normalItems.acidBomb
    ],
    ''
)

const mastery_chakramThrowing = createMastery(
    [
        'Chakram throwing',
        'Mastery in throwing chakram at multiple enemies',
        images.guildianLearnings.chakram
    ],
    ''
)

const mastery_runicWeapons = createMastery(
    [
        'Runic weapons',
        'Mastery in activating runes on weapons',
        images.guildianLearnings.runicGreatsword
    ],
    ''
)

const mastery_scholarship = createMastery(
    [
        'Scholarship',
        'Mastery to read really boring books',
        images.wizardItems.apprenticeHat
    ],
    ''
)

const mastery_magisterDegree = createMastery(
    [
        'Magister degree',
        'Mastery of knowing everything but living',
        images.wizardItems.magisterHat
    ],
    mastery_scholarship.name
)

const mastery_meditativeInsights = createMastery(
    [
        'Meditative insights',
        'Mastery to gain control over inner powers',
        images.psionInsights.intuition
    ],
    ''
)

const mastery_psiEnergy = createMastery(
    [
        'Psi-energy',
        'Mastery to gain control over psi-energy',
        images.psionInsights.psiLightning
    ],
    mastery_meditativeInsights.name
)

const mastery_senseOfCold = createMastery(
    [
        'Sense of cold',
        'Mastery to gain control over ice',
        images.wizardSpells.senseOfCold
    ],
    ''
)

const mastery_senseOfFlame = createMastery(
    [
        'Sense of flame',
        'Mastery to gain control over fire',
        images.wizardSpells.flame
    ],
    ''
)

const mastery_senseOfWind = createMastery(
    [
        'Sense of wind',
        'Mastery to gain control over air flows',
        images.wizardSpells.senseOfWind
    ],
    ''
)

const mastery_axeAffiliation = createMastery(
    [
        'Axe affiliation',
        'Mastery to gain full control over axes',
        images.normalItems.doubleAxeSlash
    ],
    ''
)

const mastery_maceAffiliation = createMastery(
    [
        'Mace affiliation',
        'Mastery to gain full control over mace',
        images.normalItems.steelMace
    ],
    ''
)

const mastery_spearAffiliation = createMastery(
    [
        'Spear affiliation',
        'Mastery to gain full control over spear',
        images.normalItems.steelSpear
    ],
    ''
)

const mastery_sellmanship = createMastery(
    [
        'Sellmanship',
        'Mastery to sell items for real price',
        images.misc.sellmanship
    ],
    ''
)

const masteries = {
    mastery_archery,
    mastery_axeAffiliation,
    mastery_marksmanship,
    mastery_dualSwords,
    mastery_brutalForce,
    mastery_bombThrowing,
    mastery_chakramThrowing,
    mastery_runicWeapons,
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