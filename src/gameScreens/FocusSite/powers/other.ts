import images from "../../../images/images";
import abilities from "../../../general/abilities";
import { createPower } from ".";
import psionMasteries from "../masteries";

const telekinesis = createPower(
    [
        chrome.i18n.getMessage('telekinesis'),
        chrome.i18n.getMessage('telekinesis_power_description'),
        images.psionInsights.telekinesis
    ],
    [
        psionMasteries.meditativeInsights.name,
        [
            abilities.battleAbilities.ranged.physicalSmashing.telekineticDisarm,
            abilities.battleAbilities.ranged.physicalSmashing.telekineticPush,
            abilities.battleAbilities.ranged.physicalSmashing.telekineticPressure,
            abilities.battleAbilities.ranged.suffocation.telekineticChoke
        ], 
        null
    ],
    ''
)

const intuition = createPower(
    [
        chrome.i18n.getMessage('intuition'),
        chrome.i18n.getMessage('intuition_power_description'),
        images.psionInsights.intuition
    ],
    [
        psionMasteries.meditativeInsights.name,
        null,
        [abilities.passiveAbilities.psionics.intuition]
    ],
    ''    
)

const hypnosis = createPower(
    [
        chrome.i18n.getMessage('hypnosis'),
        chrome.i18n.getMessage('hypnosis_power_description'),
        images.psionInsights.hypnosis
    ],
    [
        psionMasteries.meditativeInsights.name,
        null,
        null
    ],
    ''    
)

const levitation = createPower(
    [
        chrome.i18n.getMessage('levitation'),
        chrome.i18n.getMessage('levitation_power_description'),
        images.psionInsights.levitation
    ],
    [
        psionMasteries.meditativeInsights.name,
        null, null
    ],
    ''
)

const other = {
    hypnosis,
    intuition,
    levitation,
    telekinesis
}

export default other