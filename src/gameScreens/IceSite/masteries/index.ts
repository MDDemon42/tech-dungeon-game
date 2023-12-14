import { IMastery } from "../../../enums-and-interfaces/interfaces";
import { createMastery } from "../../Academy/masteries";
import images from "../../../images/images";

export const senseOfCold = createMastery(
    [
        chrome.i18n.getMessage('cold_affiliation'),
        chrome.i18n.getMessage('cold_affiliation_mastery_description'),
        images.elementBendings.senseOfCold
    ],
    ''
);

export const iceSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [senseOfCold]
}