import images from "../../../images/images";
import abilities from "../../../general/abilities";
import { createPower } from ".";
import { meditativeInsights } from "../masteries";

const power_telekinesis = createPower(
    [
        chrome.i18n.getMessage('telekinesis'),
        chrome.i18n.getMessage('telekinesis_power_description'),
        images.psionInsights.telekinesis
    ],
    [
        meditativeInsights.name,
        null, null
    ],
    ''
)

const power_intuition = createPower(
    [
        chrome.i18n.getMessage('intuition'),
        chrome.i18n.getMessage('intuition_power_description'),
        images.psionInsights.intuition
    ],
    [
        meditativeInsights.name,
        null,
        [abilities.passiveAbilities.armor.intuition]
    ],
    ''    
)

const power_levitation = createPower(
    [
        chrome.i18n.getMessage('levitation'),
        chrome.i18n.getMessage('levitation_power_description'),
        images.psionInsights.levitation
    ],
    [
        meditativeInsights.name,
        null, null
    ],
    ''
)

const other = {
    power_telekinesis,
    power_intuition,
    power_levitation
}

export default other