import { IMastery } from "../../types/interfaces";

import images from "../../images/images";

const mastery_archery: IMastery = {
    name: 'Archery',
    description: 'Mastery in not missing shooting with bow',
    image: images.normalItems.bow
}

const mastery_marksmanship: IMastery = {
    name: 'Marksmanship',
    description: 'Mastery in not missing shooting with crossbow',
    image: images.normalItems.crossbow
}

const mastery_swordsmanship: IMastery = {
    name: 'Swordsmanship',
    description: 'Mastery in slashing and stabbing with efficiency',
    image: images.normalItems.sword
}

const mastery_brutalForce: IMastery = {
    name: 'Brutal force',
    description: 'Mastery in smashing and beheading your enemies',
    image: images.normalItems.greataxe
}

const mastery_bombThrowing: IMastery = {
    name: 'Bomb throwing',
    description: 'Mastery in throwing bombs accurately',
    image: images.normalItems.acidBomb
}

const mastery_chakramThrowing: IMastery = {
    name: 'Chakram throwing',
    description: 'Mastery in throwing chakram at multiple enemies',
    image: images.guildianLearnings.chakram
}

const mastery_scholarship: IMastery = {
    name: 'Scholarship',
    description: 'Mastery to read really boring books',
    image: images.wizardItems.apprenticeHat
}

const mastery_magisterDegree: IMastery = {
    name: 'Magister degree',
    description: 'Mastery of knowing everything but living',
    image: images.wizardItems.magisterHat
}

const mastery_psiEnergy: IMastery = {
    name: 'Psi-energy',
    description: 'Mastery to gain control over psi-energy',
    image: images.psionInsights.psiLightning
}

const mastery_meditativeInsights: IMastery = {
    name: 'Meditative insights',
    description: 'Mastery to gain control over inner powers',
    image: images.psionInsights.intuition
}

const masteries = {
    mastery_archery,
    mastery_marksmanship,
    mastery_swordsmanship,
    mastery_brutalForce,
    mastery_bombThrowing,
    mastery_chakramThrowing,
    mastery_scholarship,
    mastery_magisterDegree,
    mastery_psiEnergy,
    mastery_meditativeInsights
}

export default masteries