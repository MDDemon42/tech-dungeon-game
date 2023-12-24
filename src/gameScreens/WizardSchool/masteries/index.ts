import { IMastery } from "../../../enums-and-interfaces/interfaces"
import images from "../../../images/images"
import { createMastery } from "../../Academy/masteries"

const scholarship = createMastery(
    [
        chrome.i18n.getMessage('scholarship'),
        chrome.i18n.getMessage('scholarship_mastery_description'),
        images.wizardItems.apprenticeHat
    ],
    ''
)

const magisterDegree = createMastery(
    [
        chrome.i18n.getMessage('magister_degree'),
        chrome.i18n.getMessage('magister_degree_mastery_description'),
        images.wizardItems.magisterHat
    ],
    scholarship.name
)

const wizardMasteries = {
    scholarship,
    magisterDegree
}

export const wizardSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [wizardMasteries.scholarship],
    2: [wizardMasteries.magisterDegree]
}

export default wizardMasteries