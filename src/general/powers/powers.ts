import { IPower } from "../../types/interfaces";

import images from "../../images/images";
import masteries from "../masteries/masteries";

const power_telekinesis: IPower = {
    name: 'Telekinesis',
    description: 'Power that can do a lot of things',
    value: 1,
    passive: false,
    image: images.psionInsights.telekinesis,
    cost: 1,
    requiredMastery: masteries.mastery_meditativeInsights
}

const power_guardianAura: IPower = {
    name: 'Guardian aura',
    description: 'Power to weaken enemy`s attacks aimed at everyone in your squad',
    value: 1,
    passive: true,
    image: images.psionInsights.guardianAura,
    cost: 0,
    requiredMastery: masteries.mastery_meditativeInsights
}

const power_guardianField: IPower = {
    name: 'Guardian field',
    description: 'Power to weaken enemy`s attacks aimed at you',
    value: 1,
    passive: true,
    image: images.psionInsights.guardianField,
    cost: 0,
    requiredMastery: masteries.mastery_meditativeInsights
}

const power_intuition: IPower = {
    name: 'Intuition',
    description: 'Power to unintentionally avoid enemy attacks',
    value: 1,
    passive: true,
    image: images.psionInsights.intuition,
    cost: 0,
    requiredMastery: masteries.mastery_meditativeInsights
}

const power_levitation: IPower = {
    name: 'Levitation',
    description: 'Power to pass any obstacles on earth',
    value: 1,
    passive: false,
    image: images.psionInsights.levitation,
    cost: 0,
    requiredMastery: masteries.mastery_meditativeInsights
}

const power_psiBlade: IPower = {
    name: 'Psi-blade',
    description: 'Power to create (and use) blade with your mind',
    value: 1,
    passive: false,
    image: images.psionInsights.psiBlade,
    cost: 1,
    requiredMastery: masteries.mastery_psiEnergy
}

const power_psiLightning: IPower = {
    name: 'Psi-lightning',
    description: 'Power to create chain lightning with your mind',
    value: 1,
    passive: false,
    image: images.psionInsights.psiLightning,
    cost: 2,
    requiredMastery: masteries.mastery_psiEnergy
}

const powers = {
    power_telekinesis,
    power_guardianAura,
    power_guardianField,
    power_intuition,
    power_levitation,
    power_psiBlade,
    power_psiLightning
}

export default powers