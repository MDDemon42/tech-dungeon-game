import { IMastery } from "../../../enums-and-interfaces/interfaces";
import { createMastery } from "../../Academy/masteries";
import images from "../../../images/images";

export const senseOfWind = createMastery(
    [
        chrome.i18n.getMessage('wind_affiliation'),
        chrome.i18n.getMessage('wind_affiliation_mastery_description'),
        images.elementBendings.senseOfWind
    ],
    ''
);

export const airSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [senseOfWind]
};