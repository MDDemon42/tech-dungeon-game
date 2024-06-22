import abilities from "../../../general/abilities";
import { createRitual } from "../../../general/rituals/func";
import airMasteries from "../masteries";
import images from "../../../images/images";
import { IRitual } from "../../../enums-and-interfaces/interfaces";

const airVessel = createRitual(
    [
        chrome.i18n.getMessage('air_vessel'),
        chrome.i18n.getMessage('air_vessel_ritual_description'),
        images.elementBendings.airVessel
    ],
    [
        1,
        airMasteries.windAffiliation.name,
        [abilities.passiveAbilities.rituals.airVessel]
    ]
);

const airRituals = {
    airVessel
}

export const airRitualOptions: Record<string, IRitual[]> = {
    0: [],
    7: [airRituals.airVessel]
};

export default airRituals