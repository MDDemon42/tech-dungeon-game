import { IMastery } from "../../../enums-and-interfaces/interfaces"
import images from "../../../images/images"
import { createMastery } from "../../Academy/masteries"

const mastery_scholarship = createMastery(
    [
        chrome.i18n.getMessage('scholarship'),
        chrome.i18n.getMessage('scholarship_mastery_description'),
        images.wizardItems.apprenticeHat
    ],
    ''
)

const mastery_magisterDegree = createMastery(
    [
        chrome.i18n.getMessage('magister_degree'),
        chrome.i18n.getMessage('magister_degree_mastery_description'),
        images.wizardItems.magisterHat
    ],
    mastery_scholarship.name
)

const wizardMasteries = {
    mastery_scholarship,
    mastery_magisterDegree
}

export const wizardSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [wizardMasteries.mastery_scholarship],
    2: [wizardMasteries.mastery_magisterDegree]
}

export default wizardMasteries