import images from "../../images/images"
import { createMastery } from "./masteries"

const mastery_senseOfCold = createMastery(
    [
        chrome.i18n.getMessage('cold_affiliation'),
        chrome.i18n.getMessage('cold_affiliation_mastery_description'),
        images.elementBendings.senseOfCold
    ],
    ''
)

const mastery_senseOfFlame = createMastery(
    [
        chrome.i18n.getMessage('flame_affiliation'),
        chrome.i18n.getMessage('flame_affiliation_mastery_description'),
        images.elementBendings.flame
    ],
    ''
)

const mastery_senseOfWind = createMastery(
    [
        chrome.i18n.getMessage('wind_affiliation'),
        chrome.i18n.getMessage('wind_affiliation_mastery_description'),
        images.elementBendings.senseOfWind
    ],
    ''
)

const elementsMasteries = {
    mastery_senseOfCold,
    mastery_senseOfFlame,
    mastery_senseOfWind
}

export default elementsMasteries