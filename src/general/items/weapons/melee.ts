import { createItem } from "..";
import images from "../../../images/images";
import { InventoryPlaces } from "../../../types/interfaces";
import abilities from "../../abilities";
import masteries from "../../masteries/masteries";

const item_steelSwordRightHand = createItem(
    'Steel sword', 'Usual steel sword',
    images.normalItems.sword,
    1, InventoryPlaces.rightHand,
    null, abilities.battleAbilities.melee.battleAbility_swordSlash,
    masteries.mastery_swordsmanship,
    [abilities.battleAbilities.melee.battleAbility_masterSwordSlash],
    1
)

const item_steelSwordLeftHand = createItem(
    'Left hand steel sword', 'Left hand steel sword',
    images.normalItems.sword,
    1, InventoryPlaces.leftHand,
    masteries.mastery_dualSwords,
    abilities.battleAbilities.melee.battleAbility_leftHandSwordSlash,
    masteries.mastery_swordsmanship,
    [abilities.battleAbilities.melee.battleAbility_masterSwordSlash],
    1
)

const item_steelGreataxe = createItem(
    'Steel greataxe', 'Massive steel greataxe',
    images.normalItems.greataxe,
    2, InventoryPlaces.bothHands,
    masteries.mastery_brutalForce,
    abilities.battleAbilities.melee.battleAbility_greataxeSlash,
    null, null, 2
)

const item_runicGreatsword = createItem(
    'Runic greatsword', 'Massive sword covered with runes',
    images.guildianLearnings.runicSword,
    2, InventoryPlaces.bothHands,
    masteries.mastery_brutalForce,
    abilities.battleAbilities.melee.battleAbility_greatswordSlash,
    masteries.mastery_runicWeapons,
    [
        abilities.battleAbilities.melee.battleAbility_greatswordSlash,
        abilities.battleAbilities.magic.battleAbility_runicGreatswordSlash
    ],
    2
)

const melee = {
    item_steelSwordRightHand,
    item_steelSwordLeftHand,
    item_steelGreataxe,
    item_runicGreatsword
}

export default melee