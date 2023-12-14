import { IMastery } from "../../../enums-and-interfaces/interfaces";
import { createMastery } from "../../Academy/masteries";
import images from "../../../images/images";

export const senseOfFlame = createMastery(
    [
        chrome.i18n.getMessage('flame_affiliation'),
        chrome.i18n.getMessage('flame_affiliation_mastery_description'),
        images.elementBendings.flame
    ],
    ''
);

export const fireSchoolOptions: Record<string, IMastery[]> = {
    0: [],
    1: [senseOfFlame]
}