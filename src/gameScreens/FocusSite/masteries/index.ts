import { IMastery } from "../../../enums-and-interfaces/interfaces";
import { createMastery } from "../../Academy/masteries";
import images from "../../../images/images";

export const meditativeInsights = createMastery(
    [
        chrome.i18n.getMessage('meditative_insights'),
        chrome.i18n.getMessage('meditative_insights_mastery_description'),
        images.psionInsights.meditativeInsights
    ],
    ''
);

export const psiEnergy = createMastery(
    [
        chrome.i18n.getMessage('psi_energy'),
        chrome.i18n.getMessage('psi_energy_mastery_description'),
        images.psionInsights.psiEnergy
    ],
    meditativeInsights.name
);

export const focusSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [meditativeInsights],
    3: [psiEnergy]
}