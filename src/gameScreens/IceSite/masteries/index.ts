import { IMastery } from "../../../enums-and-interfaces/interfaces";
import { createMastery } from "../../Academy/masteries";
import images from "../../../images/images";

const coldAffiliation = createMastery(
    [
        chrome.i18n.getMessage('cold_affiliation'),
        chrome.i18n.getMessage('cold_affiliation_mastery_description'),
        images.elementBendings.coldAffiliation
    ],
    ''
);

const freezingStrikes = createMastery(
    [
        chrome.i18n.getMessage('freezing_strikes'),
        chrome.i18n.getMessage('freezing_strikes_mastery_description'),
        images.elementBendings.freezingStrikes
    ],
    coldAffiliation.name
);

const coldMasteries = {
    coldAffiliation,
    freezingStrikes
}

export const iceSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [coldMasteries.coldAffiliation],
    11: [coldMasteries.freezingStrikes]
}

export default coldMasteries