import { IMastery } from "../../types/interfaces";

import images from "../../images/images";

const mastery_archery: IMastery = {
    name: 'Archery',
    description: 'Mastery in not missing shooting with bow',
    image: images.normalItems.bow,
    requiredMastery: null
}

const mastery_marksmanship: IMastery = {
    name: 'Marksmanship',
    description: 'Mastery in not missing shooting with crossbow',
    image: images.normalItems.crossbow,
    requiredMastery: null
}

const mastery_swordsmanship: IMastery = {
    name: 'Swordsmanship',
    description: 'Mastery in slashing and stabbing with efficiency',
    image: images.normalItems.sword,
    requiredMastery: null
}

const mastery_dualSwords: IMastery = {
    name: 'Dual swords',
    description: 'Mastery in slashing and stabbing with swords in both hands',
    image: images.guildianLearnings.dualSwords,
    requiredMastery: mastery_swordsmanship
}

const mastery_brutalForce: IMastery = {
    name: 'Brutal force',
    description: 'Mastery in smashing and beheading your enemies',
    image: images.guildianLearnings.brutalForce,
    requiredMastery: null
}

const mastery_bombThrowing: IMastery = {
    name: 'Bomb throwing',
    description: 'Mastery in throwing bombs accurately',
    image: images.normalItems.acidBomb,
    requiredMastery: null
}

const mastery_chakramThrowing: IMastery = {
    name: 'Chakram throwing',
    description: 'Mastery in throwing chakram at multiple enemies',
    image: images.guildianLearnings.chakram,
    requiredMastery: null
}

const mastery_runicWeapons: IMastery = {
    name: 'Runic weapons',
    description: 'Mastery in activating runes on weapons',
    image: images.guildianLearnings.runicSword,
    requiredMastery: null
}

const mastery_scholarship: IMastery = {
    name: 'Scholarship',
    description: 'Mastery to read really boring books',
    image: images.wizardItems.apprenticeHat,
    requiredMastery: null
}

const mastery_magisterDegree: IMastery = {
    name: 'Magister degree',
    description: 'Mastery of knowing everything but living',
    image: images.wizardItems.magisterHat,
    requiredMastery: mastery_scholarship
}

const mastery_meditativeInsights: IMastery = {
    name: 'Meditative insights',
    description: 'Mastery to gain control over inner powers',
    image: images.psionInsights.intuition,
    requiredMastery: null
}

const mastery_psiEnergy: IMastery = {
    name: 'Psi-energy',
    description: 'Mastery to gain control over psi-energy',
    image: images.psionInsights.psiLightning,
    requiredMastery: mastery_meditativeInsights
}

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