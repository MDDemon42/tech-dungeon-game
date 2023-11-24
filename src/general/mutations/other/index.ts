import { createMutation } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../abilities";

const mutation_wings = createMutation(
    [
        chrome.i18n.getMessage('wings'), 
        chrome.i18n.getMessage('wings_mutation_description'),
        images.mutantEvolvings.wings
    ],
    [
        1, InventoryPlace.back, 3
    ],
    [
        null, '', null
    ], 
    null
)

const mutation_hooves = createMutation(
    [
        chrome.i18n.getMessage('hooves'), 
        chrome.i18n.getMessage('hooves_mutation_description'),
        images.mutantEvolvings.hooves
    ],
    [
        1, InventoryPlace.legs, 1
    ],
    [
        null, '', null
    ], 
    abilities.passiveAbilities.armor.passiveAbility_hooves
)

const other = {
    mutation_hooves,
    mutation_wings
}

export default other