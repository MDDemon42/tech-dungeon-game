import images from "../../images/images"
import { createMastery } from "./masteries"

const mastery_meditativeInsights = createMastery(
    [
        chrome.i18n.getMessage('meditative_insights'),
        chrome.i18n.getMessage('meditative_insights_mastery_description'),
        images.psionInsights.intuition
    ],
    ''
)

const mastery_psiEnergy = createMastery(
    [
        chrome.i18n.getMessage('psi_energy'),
        chrome.i18n.getMessage('psi_energy_mastery_description'),
        images.psionInsights.psiLightning
    ],
    mastery_meditativeInsights.name
)

const psionMasteries = {
    mastery_meditativeInsights,
    mastery_psiEnergy
}

export default psionMasteries