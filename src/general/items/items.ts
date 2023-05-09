import { IItem } from "../../types/interfaces";
import { InventoryPlaces } from "../../types/interfaces";

import images from "../../images/images";
import masteries from "../masteries/masteries";

const item_leatherArmor: IItem = {
    value: 1,
    cost: 100,
    inventoryPlace: InventoryPlaces.armor,
    name: 'Leather armor',
    description: 'Usual leather armor',
    image: images.normalItems.leatherArmor,
    requiredMastery: null
}

const item_steelArmor: IItem = {
    value: 2,
    cost: 200,
    inventoryPlace: InventoryPlaces.armor,
    name: 'Steel armor',
    description: 'Massive steel armor',
    image: images.normalItems.steelArmor,
    requiredMastery: null
}

const item_acidBomd: IItem = {
    value: 1,
    cost: 100,
    inventoryPlace: InventoryPlaces.rightPocket,
    name: 'Acid bomb',
    description: 'Burns without a fire',
    image: images.normalItems.acidBomb,
    requiredMastery: masteries.mastery_bombThrowing
}

const item_healingPotion: IItem = {
    value: 1,
    cost: 100,
    inventoryPlace: InventoryPlaces.leftPocket,
    name: 'Healing potion',
    description: 'Drink of herbs',
    image: images.normalItems.healingPotion,
    requiredMastery: null
}

const item_oakBow: IItem = {
    value: 1,
    cost: 100,
    inventoryPlace: InventoryPlaces.back,
    name: 'Bow',
    description: 'Usual oak bow',
    image: images.normalItems.bow,
    requiredMastery: masteries.mastery_archery
}

const item_oakCrossow: IItem = {
    value: 2,
    cost: 200,
    inventoryPlace: InventoryPlaces.back,
    name: 'Crossbow',
    description: 'Usual oak crossbow',
    image: images.normalItems.crossbow,
    requiredMastery: masteries.mastery_marksmanship
}

const item_steelChakram: IItem = {
    value: 1,
    cost: 200,
    inventoryPlace: InventoryPlaces.belt,
    name: 'Steel chakram',
    description: 'Spinning disk of death',
    image: images.guildianLearnings.chakram,
    requiredMastery: masteries.mastery_chakramThrowing
}

const item_steelSword: IItem = {
    value: 1,
    cost: 100,
    inventoryPlace: InventoryPlaces.rightHand,
    name: 'Steel sword',
    description: 'Usual steel sword',
    image: images.normalItems.sword,
    requiredMastery: masteries.mastery_swordsmanship
}

const item_steelGreataxe: IItem = {
    value: 2,
    cost: 200,
    inventoryPlace: InventoryPlaces.bothHands,
    name: 'Steel greataxe',
    description: 'Massive steel greataxe',
    image: images.normalItems.greataxe,
    requiredMastery: masteries.mastery_brutalForce
}

const item_runicSword: IItem = {
    value: 2,
    cost: 200,
    inventoryPlace: InventoryPlaces.leftHand,
    name: 'Runic sword',
    description: 'Sword covered with runes',
    image: images.guildianLearnings.runicSword,
    requiredMastery: masteries.mastery_swordsmanship
}

const item_apprenticeHat: IItem = {
    value: 1,
    cost: 100,
    inventoryPlace: InventoryPlaces.hat,
    name: 'Apprentice hat',
    description: 'Hat to focus thoughts on studying',
    image: images.wizardItems.apprenticeHat,
    requiredMastery: masteries.mastery_scholarship
}

const item_apprenticeRod: IItem = {
    value: 1,
    cost: 100,
    inventoryPlace: InventoryPlaces.bothHands,
    name: 'Apprentice rod',
    description: 'Rod to help focus magic power',
    image: images.wizardItems.apprenticeRod,
    requiredMastery: masteries.mastery_scholarship
}

const item_flyingCape: IItem = {
    value: 1,
    cost: 200,
    inventoryPlace: InventoryPlaces.back,
    name: 'Flying cape',
    description: 'Cape to make his owner fly',
    image: images.wizardItems.flyingCape,
    requiredMastery: null
}

const item_magisterHat: IItem = {
    value: 2,
    cost: 200,
    inventoryPlace: InventoryPlaces.hat,
    name: 'Magister hat',
    description: 'Hat to hide baldness',
    image: images.wizardItems.magisterHat,
    requiredMastery: masteries.mastery_magisterDegree
}

const item_magisterRobe: IItem = {
    value: 2,
    cost: 200,
    inventoryPlace: InventoryPlaces.armor,
    name: 'Magister robe',
    description: 'Robe to hide thinness',
    image: images.wizardItems.magisterRobe,
    requiredMastery: masteries.mastery_magisterDegree
}

const item_magisterScepter: IItem = {
    value: 2,
    cost: 200,
    inventoryPlace: InventoryPlaces.bothHands,
    name: 'Magister scepter',
    description: 'Scepter to lean on between casting spells',
    image: images.wizardItems.magisterScepter,
    requiredMastery: masteries.mastery_magisterDegree
}

const items = {
    item_leatherArmor,
    item_steelArmor,
    item_acidBomd,
    item_healingPotion,
    item_oakBow,
    item_oakCrossow,
    item_steelChakram,
    item_steelSword,
    item_steelGreataxe,
    item_runicSword,
    item_apprenticeHat,
    item_apprenticeRod,
    item_flyingCape,
    item_magisterHat,
    item_magisterRobe,
    item_magisterScepter
}

export default items