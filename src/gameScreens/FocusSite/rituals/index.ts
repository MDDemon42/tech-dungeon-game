import abilities from "../../../general/abilities";
import { createRitual } from "../../../general/rituals/func";
import psionMasteries from "../masteries";
import images from "../../../images/images";
import { IRitual } from "../../../enums-and-interfaces/interfaces";

const cosmoChakra = createRitual(
    [
        chrome.i18n.getMessage('cosmo_chakra'),
        chrome.i18n.getMessage('cosmo_chakra_ritual_description'),
        images.psionInsights.cosmoChakra
    ],
    [
        1,
        psionMasteries.meditativeInsights.name,
        [abilities.passiveAbilities.rituals.cosmoChakra]
    ]
);

const focusRituals = {
    cosmoChakra
}

export const focusRitualOptions: Record<string, IRitual[]> = {
    0: [],
    11: [focusRituals.cosmoChakra]
};

export default focusRituals