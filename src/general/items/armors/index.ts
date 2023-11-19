import { createItem } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../abilities";
import masteries from "../../masteries/masteries";

const item_apprenticeHat = createItem(
    [
        'Apprentice hat',
        'Hat to focus thoughts on studying',
        images.wizardItems.apprenticeHat
    ], 
    [
        1, InventoryPlace.hat, 1
    ],
    [
        masteries.mastery_scholarship.name,
        null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_apprenticeHat
)

const item_flyingCape = createItem(
    [
        'Flying cape', 
        'Cape to make his owner fly',
        images.wizardItems.flyingCape
    ],
    [
        2, InventoryPlace.back, 2
    ],
    [
        '', null, '', null
    ],
    null
)

const item_magisterHat = createItem(
    [
        'Magister hat', 
        'Hat to hide baldness',
        images.wizardItems.magisterHat
    ],
    [
        2, InventoryPlace.hat, 2
    ],
    [
        masteries.mastery_magisterDegree.name,
        null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_magisterHat
)

const item_magisterRobe = createItem(
    [
        'Magister robe', 
        'Robe to hide thinness',
        images.wizardItems.magisterRobe
    ],
    [
        2, InventoryPlace.armor, 2
    ],
    [
        masteries.mastery_magisterDegree.name,
        null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_magisterRobe
)

const item_leatherArmor = createItem(
    [
        'Leather armor', 
        'Usual leather armor',
        images.normalItems.leatherArmor
    ],
    [
        1, InventoryPlace.armor, 1
    ],
    [
        '', null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_leatherArmor
)

const item_steelArmor = createItem(
    [
        'Steel armor', 
        'Massive steel armor',
        images.normalItems.steelArmor
    ], 
    [
        2, InventoryPlace.armor, 2
    ],
    [
        masteries.mastery_brutalForce.name, 
        null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_steelArmor
)

const item_steelShield = createItem(
    [
        'Steel shield', 
        'Usual steel shield',
        images.normalItems.steelShield
    ],
    [
        1, InventoryPlace.leftHand, 1
    ],
    [
        '', null, '', null
    ],
    abilities.passiveAbilities.armor.passiveAbility_steelShield
)

const armors = {
    item_apprenticeHat,
    item_flyingCape,
    item_magisterHat,
    item_magisterRobe,
    item_leatherArmor,
    item_steelArmor,
    item_steelShield
}

export default armors