import { IBattleAbility, IPassiveAbility, IPower } from "../../enums-and-interfaces/interfaces";
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
        ability: IBattleAbility | null
    ],
    requiredPower: string,
    passiveAbility: IPassiveAbility | null
): IPower {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery: abilityInfo[0],
        ability: abilityInfo[1],

        requiredPower,

        passiveAbility
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
    '', null
)

const power_guardianField = createPower(
    [
        chrome.i18n.getMessage('guardian_field'),
        chrome.i18n.getMessage('guardian_field_item_description'),
        images.psionInsights.guardianField
    ], 
    [
        masteries.mastery_meditativeInsights.name,
        null
    ],
    '',
    abilities.passiveAbilities.armor.passiveAbility_guardianField
)

const power_guardianAura = createPower(
    [
        'Guardian aura',
        'Power to weaken any enemy`s attack aimed at you',
        images.psionInsights.guardianAura
    ], 
    [
        masteries.mastery_meditativeInsights.name,
        null
    ],
    power_guardianField.name, null
)

const power_intuition = createPower(
    [
        chrome.i18n.getMessage('intuition'),
        chrome.i18n.getMessage('intuition_item_description'),
        images.psionInsights.intuition
    ],
    [
        masteries.mastery_meditativeInsights.name,
        null
    ],
    '',
    abilities.passiveAbilities.armor.passiveAbility_intuition
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
    '', null
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
    '', null
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
    '', null
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