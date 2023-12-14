import images from "../../../images/images";
import abilities from "../../../general/abilities";
import { createPower } from ".";
import { meditativeInsights } from "../masteries";

const power_guardianField = createPower(
    [
        chrome.i18n.getMessage('guardian_field'),
        chrome.i18n.getMessage('guardian_field_power_description'),
        images.psionInsights.guardianField
    ], 
    [
        meditativeInsights.name,
        null,
        [abilities.passiveAbilities.armor.guardianField]
    ],
    ''
)

const power_guardianAura = createPower(
    [
        chrome.i18n.getMessage('guardian_aura'),
        chrome.i18n.getMessage('guardian_aura_power_description'),
        images.psionInsights.guardianAura
    ], 
    [
        meditativeInsights.name,
        null, null
    ],
    power_guardianField.name
)

const armors = {
    power_guardianField,
    power_guardianAura
}

export default armors
