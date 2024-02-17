import { createMutation } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../../general/abilities";

const skinWings = createMutation(
    [
        chrome.i18n.getMessage('skin_wings'), 
        chrome.i18n.getMessage('wings_mutation_description'),
        images.mutantEvolvings.skinWings
    ],
    [
        1, [InventoryPlace.back], 3
    ],
    [
        null, null
    ]
);

const featherWings = createMutation(
    [
        chrome.i18n.getMessage('feather_wings'), 
        chrome.i18n.getMessage('wings_mutation_description'),
        images.mutantEvolvings.featherWings
    ],
    [
        1, [InventoryPlace.back], 3
    ],
    [
        null, null
    ]
);

const hooves = createMutation(
    [
        chrome.i18n.getMessage('hooves'), 
        chrome.i18n.getMessage('hooves_mutation_description'),
        images.mutantEvolvings.hooves
    ],
    [
        1, [InventoryPlace.legs], 1
    ],
    [
        null, 
        [abilities.passiveAbilities.mutations.hooves]
    ]    
);

const extraArms = createMutation(
    [
        chrome.i18n.getMessage('extra_arms'), 
        chrome.i18n.getMessage('extra_arms_mutation_description'),
        images.mutantEvolvings.extraArms
    ],
    [
        1, [InventoryPlace.shoulders], 2
    ],
    [
        null, 
        null
    ]    
);

const dragonEyes = createMutation(
    [
        chrome.i18n.getMessage('dragon_eyes'), 
        chrome.i18n.getMessage('dragon_eyes_mutation_description'),
        images.mutantEvolvings.dragonEyes
    ],
    [
        1, [InventoryPlace.eyes], 1
    ],
    [
        null, 
        null
    ]    
);

const other = {
    dragonEyes,
    extraArms,
    featherWings,
    hooves,
    skinWings
}

export default other