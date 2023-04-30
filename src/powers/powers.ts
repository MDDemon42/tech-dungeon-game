import { IPower } from "../types/interfaces";

import images from "../images/images";

const power_telekinesis: IPower = {
    name: 'Telekinesis',
    description: 'Power that can do a lot of things',
    value: 1,
    passive: false,
    image: images.psionInsights.telekinesis
}

const power_guardianAura: IPower = {
    name: 'Guardian aura',
    description: 'Power to weaken enemy`s attacks aimed at everyone in your squad',
    value: 1,
    passive: true,
    image: images.psionInsights.guardianAura
}

const power_guardianField: IPower = {
    name: 'Guardian field',
    description: 'Power to weaken enemy`s attacks aimed at you',
    value: 1,
    passive: true,
    image: images.psionInsights.guardianField
}

const power_intuition: IPower = {
    name: 'Intuition',
    description: 'Power to unintentionally avoid enemy attacks',
    value: 1,
    passive: true,
    image: images.psionInsights.intuition
}

const power_levitation: IPower = {
    name: 'Levitation',
    description: 'Power to pass any obstacles on earth',
    value: 1,
    passive: false,
    image: images.psionInsights.levitation
}

const power_psiBlades: IPower = {
    name: 'Psi-blades',
    description: 'Power to create (and use) blades with your mind',
    value: 1,
    passive: false,
    image: images.psionInsights.psiBlades
}

const power_psiLightning: IPower = {
    name: 'Psi-lightning',
    description: 'Power to create chain lightning with your mind',
    value: 1,
    passive: false,
    image: images.psionInsights.psiLightning
}

const powers: Record<string, IPower> = {
    power_telekinesis,
    power_guardianAura,
    power_guardianField,
    power_intuition,
    power_levitation,
    power_psiBlades,
    power_psiLightning
}

export default powers