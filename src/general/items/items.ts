import { IItem } from "../../types/interfaces";
import { InventoryPlaces } from "../../types/interfaces";

import images from "../../images/images";
import masteries from "../masteries/masteries";
import abilities from "../abilities";

const item_leatherArmor: IItem = {
    cost: 1,
    inventoryPlace: InventoryPlaces.armor,
    name: 'Leather armor',
    description: 'Usual leather armor',
    image: images.normalItems.leatherArmor,
    ability: null,
    priority: 1
}

const item_steelArmor: IItem = {
    cost: 2,
    inventoryPlace: InventoryPlaces.armor,
    name: 'Steel armor',
    description: 'Massive steel armor',
    image: images.normalItems.steelArmor,
    requiredMastery: masteries.mastery_brutalForce,
    ability: null,
    priority: 2
}

const item_acidBomd: IItem = {
    cost: 1,
    inventoryPlace: InventoryPlaces.rightPocket,
    name: 'Acid bomb',
    description: 'Burns without a fire',
    image: images.normalItems.acidBomb,
    linkedMastery: masteries.mastery_bombThrowing,
    ability: abilities.battleAbilities.battleAbility_acidBombThrow,
    masterAbilities: [abilities.battleAbilities.battleAbility_masterAcidBombThrow],
    priority: 1
}

const item_healingPotion: IItem = {
    cost: 1,
    inventoryPlace: InventoryPlaces.leftPocket,
    name: 'Healing potion',
    description: 'Drink of herbs',
    image: images.normalItems.healingPotion,
    ability: null,
    priority: 1
}

const item_oakBow: IItem = {
    cost: 1,
    inventoryPlace: InventoryPlaces.back,
    name: 'Bow',
    description: 'Usual oak bow',
    image: images.normalItems.bow,
    linkedMastery: masteries.mastery_archery,
    ability: abilities.battleAbilities.battleAbility_oakBowShot,
    masterAbilities: [abilities.battleAbilities.battleAbility_masterOakBowShot],
    priority: 1
}

const item_oakCrossow: IItem = {
    cost: 2,
    inventoryPlace: InventoryPlaces.back,
    name: 'Crossbow',
    description: 'Usual oak crossbow',
    image: images.normalItems.crossbow,
    linkedMastery: masteries.mastery_marksmanship,
    ability: abilities.battleAbilities.battleAbility_crossbowShot,
    masterAbilities: [abilities.battleAbilities.battleAbility_masterCrossbowShot],
    priority: 2
}

const item_steelChakram: IItem = {
    cost: 2,
    inventoryPlace: InventoryPlaces.leftHand,
    name: 'Steel chakram',
    description: 'Spinning disk of death',
    image: images.guildianLearnings.chakram,
    linkedMastery: masteries.mastery_chakramThrowing,
    ability: abilities.battleAbilities.battleAbility_chakramSlash,
    masterAbilities: [
        abilities.battleAbilities.battleAbility_masterChakramSlash,
        abilities.battleAbilities.battleAbility_chakramThrow
    ],
    priority: 1
}

const item_steelSwordRightHand: IItem = {
    cost: 1,
    inventoryPlace: InventoryPlaces.rightHand,
    name: 'Steel sword',
    description: 'Usual steel sword',
    image: images.normalItems.sword,
    linkedMastery: masteries.mastery_swordsmanship,
    ability: abilities.battleAbilities.battleAbility_swordSlash,
    masterAbilities: [abilities.battleAbilities.battleAbility_masterSwordSlash],
    priority: 1
}

const item_steelSwordLeftHand: IItem = {
    cost: 1,
    inventoryPlace: InventoryPlaces.leftHand,
    name: 'Steel sword',
    description: 'Usual steel sword',
    image: images.normalItems.sword,
    requiredMastery: masteries.mastery_dualSwords,
    linkedMastery: masteries.mastery_swordsmanship,
    ability: abilities.battleAbilities.battleAbility_swordSlash,
    masterAbilities: [abilities.battleAbilities.battleAbility_masterSwordSlash],
    priority: 1
}

const item_steelShield: IItem = {
    cost: 1,
    inventoryPlace: InventoryPlaces.leftHand,
    name: 'Steel shield',
    description: 'Usual steel shield',
    image: images.normalItems.shield,
    ability: null,
    priority: 1
}

const item_steelGreataxe: IItem = {
    cost: 2,
    inventoryPlace: InventoryPlaces.bothHands,
    name: 'Steel greataxe',
    description: 'Massive steel greataxe',
    image: images.normalItems.greataxe,
    requiredMastery: masteries.mastery_brutalForce,
    ability: abilities.battleAbilities.battleAbility_greataxeSlash,
    priority: 2
}

const item_runicGreatsword: IItem = {
    cost: 2,
    inventoryPlace: InventoryPlaces.bothHands,
    name: 'Runic greatsword',
    description: 'Massive sword covered with runes',
    image: images.guildianLearnings.runicSword,
    requiredMastery: masteries.mastery_brutalForce,
    ability: abilities.battleAbilities.battleAbility_greatswordSlash,
    linkedMastery: masteries.mastery_runicWeapons,
    masterAbilities: [
        abilities.battleAbilities.battleAbility_greatswordSlash,
        abilities.battleAbilities.battleAbility_runicGreatswordSlash
    ],
    priority: 2
}

const item_apprenticeHat: IItem = {
    cost: 1,
    inventoryPlace: InventoryPlaces.head,
    name: 'Apprentice hat',
    description: 'Hat to focus thoughts on studying',
    image: images.wizardItems.apprenticeHat,
    requiredMastery: masteries.mastery_scholarship,
    ability: null,
    priority: 1
}

const item_apprenticeRod: IItem = {
    cost: 1,
    inventoryPlace: InventoryPlaces.bothHands,
    name: 'Apprentice rod',
    description: 'Rod to help focus magic power',
    image: images.wizardItems.apprenticeRod,
    requiredMastery: masteries.mastery_scholarship,
    ability: null,
    priority: 2
}

const item_flyingCape: IItem = {
    cost: 2,
    inventoryPlace: InventoryPlaces.back,
    name: 'Flying cape',
    description: 'Cape to make his owner fly',
    image: images.wizardItems.flyingCape,
    ability: null,
    priority: 2
}

const item_magisterHat: IItem = {
    cost: 2,
    inventoryPlace: InventoryPlaces.head,
    name: 'Magister hat',
    description: 'Hat to hide baldness',
    image: images.wizardItems.magisterHat,
    requiredMastery: masteries.mastery_magisterDegree,
    ability: null,
    priority: 2
}

const item_magisterRobe: IItem = {
    cost: 2,
    inventoryPlace: InventoryPlaces.armor,
    name: 'Magister robe',
    description: 'Robe to hide thinness',
    image: images.wizardItems.magisterRobe,
    requiredMastery: masteries.mastery_magisterDegree,
    ability: null,
    priority: 2
}

const item_magisterScepter: IItem = {
    cost: 2,
    inventoryPlace: InventoryPlaces.bothHands,
    name: 'Magister scepter',
    description: 'Scepter to lean on between casting spells',
    image: images.wizardItems.magisterScepter,
    requiredMastery: masteries.mastery_magisterDegree,
    ability: null,
    priority: 3
}

const items = {
    item_leatherArmor,
    item_steelArmor,
    item_acidBomd,
    item_healingPotion,
    item_oakBow,
    item_oakCrossow,
    item_steelChakram,
    item_steelSwordRightHand,
    item_steelSwordLeftHand,
    item_steelShield,
    item_steelGreataxe,
    item_runicGreatsword,
    item_apprenticeHat,
    item_apprenticeRod,
    item_flyingCape,
    item_magisterHat,
    item_magisterRobe,
    item_magisterScepter
}

export default items