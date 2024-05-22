import { IMastery } from "../../../enums-and-interfaces/interfaces";
import { createMastery } from "../../../general/masteries";
import images from "../../../images/images";

const windAffiliation = createMastery(
    [
        chrome.i18n.getMessage('wind_affiliation'),
        chrome.i18n.getMessage('wind_affiliation_mastery_description'),
        images.elementBendings.windAffiliation
    ],
    ''
);

const electrifiedStrikes = createMastery(
    [
        chrome.i18n.getMessage('electrified_strikes'),
        chrome.i18n.getMessage('electrified_strikes_mastery_description'),
        images.elementBendings.thunderPunch
    ],
    windAffiliation.name
);

const airMasteries = {
    windAffiliation,
    electrifiedStrikes
}

export const airSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [airMasteries.windAffiliation],
    5: [airMasteries.electrifiedStrikes]
};

export default airMasteries