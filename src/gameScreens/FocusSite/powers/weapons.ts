import images from "../../../images/images";
import abilities from "../../../general/abilities";
import { createPower } from ".";
import { psiEnergy } from "../masteries";

const power_psiBlade = createPower(
    [
        chrome.i18n.getMessage('psi_blade'),
        chrome.i18n.getMessage('psi_blade_power_description'),
        images.psionInsights.psiBlade
    ],
    [
        psiEnergy.name,
        abilities.battleAbilities.melee.psionic.psiBladeSlash, 
        null
    ],
    ''
)

const power_psiLightning = createPower(
    [
        chrome.i18n.getMessage('psi_lightning'),
        chrome.i18n.getMessage('psi_lightning_power_description'),
        images.psionInsights.psiLightning
    ],
    [
        psiEnergy.name,
        abilities.battleAbilities.ranged.psionic.psiLightning, 
        null
    ],
    ''
)

const weapons = {
    power_psiBlade,
    power_psiLightning
}

export default weapons