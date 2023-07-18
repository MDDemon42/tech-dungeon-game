import { createItem } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../types/interfaces"
import abilities from "../../abilities"
import masteries from "../../masteries/masteries"

const item_apprenticeRod = createItem(
    'Apprentice rod', 'Rod to help concentrate magic',
    images.wizardItems.apprenticeRod,
    1, InventoryPlaces.bothHands,
    masteries.mastery_scholarship,
    null, null, null, 2
)

const item_magisterScepter = createItem(
    'Magister scepter', 'Scepter to lean on between casting spells',
    images.wizardItems.magisterScepter,
    2, InventoryPlaces.bothHands,
    masteries.mastery_magisterDegree,
    null, null, null, 3
)

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

const item_oakBow = createItem(
    'Bow', 'Usual oak bow',
    images.normalItems.bow, 
    1, InventoryPlaces.bothHands,
    null, abilities.battleAbilities.ranged.battleAbility_oakBowShot,
    masteries.mastery_archery,
    [abilities.battleAbilities.ranged.battleAbility_masterOakBowShot],
    2
)

const item_oakCrossow = createItem(
    'Crossbow', 'Usual oak crossbow',
    images.normalItems.crossbow,
    2, InventoryPlaces.bothHands,
    null, abilities.battleAbilities.ranged.battleAbility_crossbowShot,
    masteries.mastery_marksmanship,
    [abilities.battleAbilities.ranged.battleAbility_masterCrossbowShot],
    2
)

const item_steelChakram = createItem(
    'Steel chakram', 'Spinning disk of death',
    images.guildianLearnings.chakram,
    2, InventoryPlaces.leftHand,
    null, abilities.battleAbilities.melee.battleAbility_chakramSlash,
    masteries.mastery_chakramThrowing,
    [
        abilities.battleAbilities.melee.battleAbility_masterChakramSlash,
        abilities.battleAbilities.ranged.battleAbility_chakramThrow
    ],
    1
)

const item_acidBomd = createItem(
    'Acid bomb', 'Burns without a fire',
    images.normalItems.acidBomb,
    1, InventoryPlaces.rightPocket,
    null, abilities.battleAbilities.ranged.battleAbility_acidBombThrow,
    masteries.mastery_bombThrowing, 
    [abilities.battleAbilities.ranged.battleAbility_masterAcidBombThrow],
    1
)

const weapons = {
    item_apprenticeRod,
    item_magisterScepter,
    item_steelSwordRightHand,
    item_steelSwordLeftHand,
    item_steelGreataxe,
    item_runicGreatsword,
    item_oakBow,
    item_oakCrossow,
    item_steelChakram,
    item_acidBomd
}

export default weapons