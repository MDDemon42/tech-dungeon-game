import { IMastery } from "../../../enums-and-interfaces/interfaces";
import { createMastery } from "../../Academy/masteries";
import images from "../../../images/images";

const meditativeInsights = createMastery(
    [
        chrome.i18n.getMessage('meditative_insights'),
        chrome.i18n.getMessage('meditative_insights_mastery_description'),
        images.psionInsights.meditativeInsights
    ],
    ''
);

const empoweredStrikes = createMastery(
    [
        chrome.i18n.getMessage('empowered_strikes'),
        chrome.i18n.getMessage('empowered_strikes_mastery_description'),
        images.psionInsights.empoweredStrikes
    ],
    meditativeInsights.name
)

const psiEnergy = createMastery(
    [
        chrome.i18n.getMessage('psi_energy'),
        chrome.i18n.getMessage('psi_energy_mastery_description'),
        images.psionInsights.psiEnergy
    ],
    meditativeInsights.name
);

const psiInfusedStrikes = createMastery(
    [
        chrome.i18n.getMessage('psi_infused_strikes'),
        chrome.i18n.getMessage('psi_infused_strikes_mastery_description'),
        images.psionInsights.psiInfusedStrikes
    ],
    psiEnergy.name
);

const psionMasteries = {
    empoweredStrikes,
    meditativeInsights,
    psiEnergy,    
    psiInfusedStrikes
}

export const focusSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [psionMasteries.meditativeInsights],
    3: [psionMasteries.psiEnergy],
    5: [psionMasteries.empoweredStrikes],
    7: [psionMasteries.psiInfusedStrikes]
}

export default psionMasteries