import { IMastery } from "../../../enums-and-interfaces/interfaces";
import { createMastery } from "../../Academy/masteries";
import images from "../../../images/images";

const fireAffiliation = createMastery(
    [
        chrome.i18n.getMessage('flame_affiliation'),
        chrome.i18n.getMessage('flame_affiliation_mastery_description'),
        images.elementBendings.flame
    ],
    ''
);

const enflamedStrikes = createMastery(
    [
        chrome.i18n.getMessage('enflamed_strikes'),
        chrome.i18n.getMessage('enflamed_strikes_mastery_description'),
        images.elementBendings.enflamedStrikes
    ],
    fireAffiliation.name
);

const fireMasteries = {
    fireAffiliation,
    enflamedStrikes
}

export const fireSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [fireMasteries.fireAffiliation],
    5: [fireMasteries.enflamedStrikes]
}

export default fireMasteries