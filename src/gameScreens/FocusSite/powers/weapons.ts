import images from "../../../images/images";
import abilities from "../../../general/abilities";
import { createPower } from ".";
import psionMasteries from "../masteries";

const psiBlade = createPower(
    [
        chrome.i18n.getMessage('psi_blade'),
        chrome.i18n.getMessage('psi_blade_power_description'),
        images.psionInsights.psiBlade
    ],
    [
        psionMasteries.psiEnergy.name,
        [
            abilities.battleAbilities.melee.psionic.psiBladeSlash
        ], 
        null
    ]
);

const psiJavelin = createPower(
    [
        chrome.i18n.getMessage('psi_javelin'),
        chrome.i18n.getMessage('psi_javelin_power_description'),
        images.psionInsights.psiJavelin
    ],
    [
        psionMasteries.psiEnergy.name,
        [
            abilities.battleAbilities.ranged.psionic.psiJavelin
        ], 
        null
    ]
);

const psiLightning = createPower(
    [
        chrome.i18n.getMessage('psi_lightning'),
        chrome.i18n.getMessage('psi_lightning_power_description'),
        images.psionInsights.psiLightning
    ],
    [
        psionMasteries.psiEnergy.name,
        [
            abilities.battleAbilities.ranged.psionic.psiLightning
        ], 
        null
    ]
);

const voidCrash = createPower(
    [
        chrome.i18n.getMessage('void_crash'),
        chrome.i18n.getMessage('void_crash_power_description'),
        images.psionInsights.voidCrash
    ],
    [
        psionMasteries.psiEnergy.name,
        [
            abilities.battleAbilities.ranged.psionic.voidCrash
        ], 
        null
    ]
);

const weapons = {
    psiBlade,
    psiJavelin,
    psiLightning,
    voidCrash
}

export default weapons