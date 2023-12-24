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
        null, null
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
        [abilities.passiveAbilities.armor.intuition]
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
    telekinesis,
    intuition,
    levitation
}

export default other