import { createItem } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../types/interfaces"
import abilities from "../../abilities"
import masteries from "../../masteries/masteries"

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

const ranged = {
    item_oakBow,
    item_oakCrossow,
    item_steelChakram,
    item_acidBomd
}

export default ranged