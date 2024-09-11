import abilities from "../../../general/abilities";
import { createRitual } from "../../../general/rituals/func";
import fireMasteries from "../masteries";
import { pyrokinesis } from "../bendings";
import images from "../../../images/images";
import { IRitual } from "../../../enums-and-interfaces/interfaces";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import { fireElementalBodyParts } from "./bodyParts";

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

const fireElemental = createRitual(
    [
        chrome.i18n.getMessage('fire_elemental'),
        chrome.i18n.getMessage('fire_elemental_ritual_description'),
        images.elementBendings.fireElemental
    ],
    [
        3,
        fireMasteries.fireAffiliation.name,
        [abilities.passiveAbilities.rituals.fireElemental],
        fireVessel.name,
        [
            pyrokinesis.flame,
            pyrokinesis.fireBall,
            pyrokinesis.flameShield,
            pyrokinesis.fireWave
        ],
        [
            InventoryPlace.extraLeftHand,
            InventoryPlace.extraRightHand,
            InventoryPlace.leftHipItem,
            InventoryPlace.rightHipItem,
        ],
        [
            InventoryPlace.armor,
            InventoryPlace.back,
            InventoryPlace.backItem,
            InventoryPlace.belt,
            InventoryPlace.bothHands,
            InventoryPlace.chin,
            InventoryPlace.eyes,
            InventoryPlace.hat,
            InventoryPlace.head,
            InventoryPlace.leftHand,
            InventoryPlace.leftHip,
            InventoryPlace.leftPocket,
            InventoryPlace.rightHand,
            InventoryPlace.rightHip,
            InventoryPlace.rightPocket,
            InventoryPlace.shoulders,
            InventoryPlace.shouldersItem,
            InventoryPlace.tail
        ],
        {
            [InventoryPlace.legs]: fireElementalBodyParts.fireElementalLegs,
            [InventoryPlace.skin]: fireElementalBodyParts.fireElementalTorso
        },
        chrome.i18n.getMessage('fire_elemental')
    ]
);

const fireRituals = {
    fireVessel,
    fireElemental
}

export const fireRitualOptions: Record<string, IRitual[]> = {
    0: [],
    7: [fireRituals.fireVessel, fireElemental]
};

export default fireRituals