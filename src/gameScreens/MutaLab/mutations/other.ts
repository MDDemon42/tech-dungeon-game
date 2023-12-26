import { createMutation } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../../general/abilities";

const wings = createMutation(
    [
        chrome.i18n.getMessage('wings'), 
        chrome.i18n.getMessage('wings_mutation_description'),
        images.mutantEvolvings.wings
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
        [abilities.passiveAbilities.armor.hooves]
    ]    
);

const extraArms = createMutation(
    [
        chrome.i18n.getMessage('extra_arms'), 
        chrome.i18n.getMessage('extra_arms_mutation_description'),
        images.mutantEvolvings.extraArms
    ],
    [
        1, [InventoryPlace.shoulders], 1
    ],
    [
        null, 
        null
    ]    
);

const other = {
    extraArms,
    hooves,
    wings
}

export default other