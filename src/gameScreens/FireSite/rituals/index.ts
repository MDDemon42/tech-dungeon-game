import abilities from "../../../general/abilities";
import { createRitual } from "../../../general/rituals/func";
import fireMasteries from "../masteries";
import images from "../../../images/images";
import { IRitual } from "../../../enums-and-interfaces/interfaces";

const fireVessel = createRitual(
    [
        chrome.i18n.getMessage('fire_vessel'),
        chrome.i18n.getMessage('fire_vessel_ritual_description'),
        images.elementBendings.fireVessel
    ],
    [
        2,
        fireMasteries.fireAffiliation.name,
        [abilities.passiveAbilities.rituals.fireVessel]
    ]
);

const fireRituals = {
    fireVessel
}

export const fireRitualOptions: Record<string, IRitual[]> = {
    0: [],
    7: [fireRituals.fireVessel]
};

export default fireRituals