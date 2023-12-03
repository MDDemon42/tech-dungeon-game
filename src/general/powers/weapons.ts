import images from "../../images/images";
import abilities from "../abilities";
import { createPower } from ".";
import psionMasteries from "../masteries/psion";

const power_psiBlade = createPower(
    [
        chrome.i18n.getMessage('psi_blade'),
        chrome.i18n.getMessage('psi_blade_power_description'),
        images.psionInsights.psiBlade
    ],
    [
        psionMasteries.mastery_psiEnergy.name,
        abilities.battleAbilities.melee.psionic.battleAbility_psiBladeSlash, 
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
        psionMasteries.mastery_psiEnergy.name,
        abilities.battleAbilities.ranged.psionic.battleAbility_psiLightning, 
        null
    ],
    ''
)

const weapons = {
    power_psiBlade,
    power_psiLightning
}

export default weapons