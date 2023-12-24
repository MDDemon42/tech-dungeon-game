import images from "../../../images/images";
import { createMastery } from "../../Academy/masteries";

const axeAffiliation = createMastery(
    [
        chrome.i18n.getMessage('axe_affiliation'),
        chrome.i18n.getMessage('axe_affiliation_mastery_description'),
        images.armouryItems.battleAxe
    ],
    ''
);

const mansionMasteries = {
    axeAffiliation
}

export default mansionMasteries