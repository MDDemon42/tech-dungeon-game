import { IAbility, IPower } from "../../enums-and-interfaces/interfaces";
import images from "../../images/images";
import masteries from "../masteries/masteries";
import abilities from "../abilities";

function createPower(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    abilityInfo: [
        requiredMastery: string,
        ability: IAbility | null
    ],
    requiredPower: string
): IPower {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery: abilityInfo[0],
        ability: abilityInfo[1],

        requiredPower
    }
}

const power_telekinesis = createPower(
    [
        'Telekinesis',
        'Power that can do a lot of things',
        images.psionInsights.telekinesis
    ],
    [
        masteries.mastery_meditativeInsights.name,
        null
    ],
    ''
)

const power_guardianField = createPower(
    [
        'Guardian field',
        'Power to weaken enemy`s attacks aimed at you',
        images.psionInsights.guardianField
    ], 
    [
        masteries.mastery_meditativeInsights.name,
        null
    ],
    ''
)

const power_guardianAura = createPower(
    [
        'Guardian aura',
        'Power to weaken enemy`s attacks aimed at everyone in your squad',
        images.psionInsights.guardianAura
    ], 
    [
        masteries.mastery_meditativeInsights.name,
        null
    ],
    power_guardianField.name
)

const power_intuition = createPower(
    [
        'Intuition',
        'Power to unintentionally avoid enemy attacks',
        images.psionInsights.intuition
    ],
    [
        masteries.mastery_meditativeInsights.name,
        null
    ],
    ''
)

const power_levitation = createPower(
    [
        'Levitation',
        'Power to pass any obstacles on earth',
        images.psionInsights.levitation
    ],
    [
        masteries.mastery_meditativeInsights.name,
        null
    ],
    ''
)

const power_psiBlade = createPower(
    [
        'Psi-blade',
        'Power to create (and use) blade with your mind',
        images.psionInsights.psiBlade
    ],
    [
        masteries.mastery_psiEnergy.name,
        abilities.battleAbilities.melee.psionic.battleAbility_psiBladeSlash
    ],
    ''
)

const power_psiLightning = createPower(
    [
        'Psi-lightning',
        'Power to create chain lightning with your mind',
        images.psionInsights.psiLightning
    ],
    [
        masteries.mastery_psiEnergy.name,
        abilities.battleAbilities.ranged.psionic.battleAbility_psiLightning
    ],
    ''
)

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