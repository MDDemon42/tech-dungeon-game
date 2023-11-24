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
        chrome.i18n.getMessage('telekinesis'),
        chrome.i18n.getMessage('telekinesis_power_description'),
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
        chrome.i18n.getMessage('guardian_field_power_description'),
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
        chrome.i18n.getMessage('guardian_aura'),
        chrome.i18n.getMessage('guardian_aura_power_description'),
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
        chrome.i18n.getMessage('intuition_power_description'),
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
        chrome.i18n.getMessage('levitation'),
        chrome.i18n.getMessage('levitation_power_description'),
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
        chrome.i18n.getMessage('psi_blade'),
        chrome.i18n.getMessage('psi_blade_power_description'),
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
        chrome.i18n.getMessage('psi_lightning'),
        chrome.i18n.getMessage('psi_lightning_power_description'),
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