import images from "../../../images/images";
import abilities from "../../../general/abilities";
import { createPower } from ".";
import psionMasteries from "../masteries";

const guardianField = createPower(
    [
        chrome.i18n.getMessage('guardian_field'),
        chrome.i18n.getMessage('guardian_field_power_description'),
        images.psionInsights.guardianField
    ], 
    [
        psionMasteries.meditativeInsights.name,
        null,
        [abilities.passiveAbilities.psionics.guardianField]
    ],
    ''
)

const guardianAura = createPower(
    [
        chrome.i18n.getMessage('guardian_aura'),
        chrome.i18n.getMessage('guardian_aura_power_description'),
        images.psionInsights.guardianAura
    ], 
    [
        psionMasteries.meditativeInsights.name,
        null, null
    ],
    guardianField.name
)

const armors = {
    guardianField,
    guardianAura
}

export default armors
