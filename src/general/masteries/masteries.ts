import { IMastery } from "../../interfaces/interfaces";
import images from "../../images/images";

function createMastery(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    requiredMastery: IMastery | null
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
    null
)

const mastery_marksmanship = createMastery(
    [
        'Marksmanship',
        'Mastery in not missing shooting with crossbow',
        images.normalItems.crossbow
    ],
    null
)

const mastery_swordsmanship = createMastery(
    [
        'Swordsmanship',
        'Mastery in slashing and stabbing with efficiency',
        images.normalItems.sword
    ],
    null
)

const mastery_dualSwords = createMastery(
    [
        'Dual swords',
        'Mastery in slashing and stabbing with swords in both hands',
        images.guildianLearnings.dualSwords
    ],
    mastery_swordsmanship
)

const mastery_brutalForce = createMastery(
    [
        'Brutal force',
        'Mastery in smashing and beheading your enemies',
        images.guildianLearnings.brutalForce
    ],
    null
)

const mastery_bombThrowing = createMastery(
    [
        'Bomb throwing',
        'Mastery in throwing bombs accurately',
        images.normalItems.acidBomb
    ],
    null
)

const mastery_chakramThrowing = createMastery(
    [
        'Chakram throwing',
        'Mastery in throwing chakram at multiple enemies',
        images.guildianLearnings.chakram
    ],
    null
)

const mastery_runicWeapons = createMastery(
    [
        'Runic weapons',
        'Mastery in activating runes on weapons',
        images.guildianLearnings.runicSword
    ],
    null
)

const mastery_scholarship = createMastery(
    [
        'Scholarship',
        'Mastery to read really boring books',
        images.wizardItems.apprenticeHat
    ],
    null
)

const mastery_magisterDegree = createMastery(
    [
        'Magister degree',
        'Mastery of knowing everything but living',
        images.wizardItems.magisterHat
    ],
    mastery_scholarship
)

const mastery_meditativeInsights = createMastery(
    [
        'Meditative insights',
        'Mastery to gain control over inner powers',
        images.psionInsights.intuition
    ],
    null
)

const mastery_psiEnergy = createMastery(
    [
        'Psi-energy',
        'Mastery to gain control over psi-energy',
        images.psionInsights.psiLightning
    ],
    mastery_meditativeInsights
)

const masteries = {
    mastery_archery,
    mastery_marksmanship,
    mastery_swordsmanship,
    mastery_dualSwords,
    mastery_brutalForce,
    mastery_bombThrowing,
    mastery_chakramThrowing,
    mastery_runicWeapons,
    mastery_scholarship,
    mastery_magisterDegree,
    mastery_meditativeInsights,
    mastery_psiEnergy
}

export default masteries