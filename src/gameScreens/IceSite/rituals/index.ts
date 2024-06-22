import abilities from "../../../general/abilities";
import { createRitual } from "../../../general/rituals/func";
import coldMasteries from "../masteries";
import images from "../../../images/images";
import { IRitual } from "../../../enums-and-interfaces/interfaces";

const coldVessel = createRitual(
    [
        chrome.i18n.getMessage('cold_vessel'),
        chrome.i18n.getMessage('cold_vessel_ritual_description'),
        images.elementBendings.coldVessel
    ],
    [
        1,
        coldMasteries.coldAffiliation.name,
        [abilities.passiveAbilities.rituals.coldVessel]
    ]
);

const iceRituals = {
    coldVessel
}

export const iceRitualOptions: Record<string, IRitual[]> = {
    0: [],
    13: [iceRituals.coldVessel]
};

export default iceRituals