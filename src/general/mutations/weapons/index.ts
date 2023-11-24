import { createMutation } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../abilities";

const mutation_acidSplit = createMutation(
    [
        chrome.i18n.getMessage('acid_split'), 
        chrome.i18n.getMessage('acid_split_mutation_description'),
        images.mutantEvolvings.acidSplit
    ],
    [
        1, InventoryPlace.chin, 2
    ],
    [
        null, '', null
    ], 
    null
)

const mutation_lowerFangs = createMutation(
    [
        chrome.i18n.getMessage('lower_fangs'), 
        chrome.i18n.getMessage('lower_fangs_mutation_description'),
        images.mutantEvolvings.lowerFangs
    ],
    [
        1, InventoryPlace.chin, 1
    ],
    [
        null, '', null
    ], 
    null
)

const mutation_claws = createMutation(
    [
        chrome.i18n.getMessage('claws'), 
        chrome.i18n.getMessage('claws_mutation_description'),
        images.mutantEvolvings.claws
    ],
    [
        1, InventoryPlace.bothHands, 4
    ],
    [
        null, '', null
    ], 
    null
)

const mutation_clawLeft = createMutation(
    [
        chrome.i18n.getMessage('claws'), 
        chrome.i18n.getMessage('claws_mutation_description'),
        images.mutantEvolvings.claws
    ],
    [
        1, InventoryPlace.leftHand, 4
    ],
    [
        null, '', null
    ], 
    null
)

const mutation_clawRight = createMutation(
    [
        chrome.i18n.getMessage('claws'), 
        chrome.i18n.getMessage('claws_mutation_description'),
        images.mutantEvolvings.claws
    ],
    [
        1, InventoryPlace.rightHand, 4
    ],
    [
        null, '', null
    ], 
    null
)

const mutation_horns = createMutation(
    [
        chrome.i18n.getMessage('horns'), 
        chrome.i18n.getMessage('horns_mutation_description'),
        images.mutantEvolvings.horns
    ],
    [
        1, InventoryPlace.head, 3
    ],
    [
        null, '', null
    ], 
    null
)

const mutation_tailWithSting = createMutation(
    [
        chrome.i18n.getMessage('tail_with_sting'), 
        chrome.i18n.getMessage('tail_with_sting_mutation_description'),
        images.mutantEvolvings.tailWithSting
    ],
    [
        1, InventoryPlace.tail, 1
    ],
    [
        null, '', null
    ], 
    abilities.passiveAbilities.armor.passiveAbility_tailWithSting
)

const mutation_pincers = createMutation(
    [
        chrome.i18n.getMessage('pincers'), 
        chrome.i18n.getMessage('pincers_mutation_description'),
        images.mutantEvolvings.twoExtraPincers
    ],
    [
        1, InventoryPlace.shoulders, 1
    ],
    [
        null, '', null
    ], 
    null
)

const mutation_raptorLegs = createMutation(
    [
        chrome.i18n.getMessage('raptor_legs'), 
        chrome.i18n.getMessage('raptor_legs_mutation_description'),
        images.mutantEvolvings.raptorLegs
    ],
    [
        1, InventoryPlace.legs, 1
    ],
    [
        null, '', null
    ], 
    null
)

const weapons = {
    mutation_acidSplit,
    mutation_clawLeft,
    mutation_clawRight,
    mutation_claws,
    mutation_horns,
    mutation_lowerFangs,
    mutation_pincers,
    mutation_raptorLegs,
    mutation_tailWithSting
}

export default weapons