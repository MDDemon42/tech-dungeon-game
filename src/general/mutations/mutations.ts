import { IMutation, InventoryPlaces } from "../../types/interfaces";

import images from "../../images/images";

const mutation_acidSplit: IMutation = {
    name: 'Acid split',
    description: 'Mutation to split acid in your enemy`s face',
    inventoryPlace: InventoryPlaces.chin,
    cost: 1,
    image: images.mutantEvolvings.acidSplit,
    priority: 1
}

const mutation_claws: IMutation = {
    name: 'Claws',
    description: 'Mutation to rip your opponents apart',
    inventoryPlace: InventoryPlaces.bothHands,
    cost: 1,
    image: images.mutantEvolvings.claws,
    priority: 4
}

const mutation_clawLeft: IMutation = {
    name: 'Claws',
    description: 'Mutation to rip your opponents apart',
    inventoryPlace: InventoryPlaces.leftHand,
    cost: 1,
    image: images.mutantEvolvings.claws,
    priority: 4
}

const mutation_clawRight: IMutation = {
    name: 'Claws',
    description: 'Mutation to rip your opponents apart',
    inventoryPlace: InventoryPlaces.rightHand,
    cost: 1,
    image: images.mutantEvolvings.claws,
    priority: 4
}

const mutation_horns: IMutation = {
    name: 'Horns',
    description: 'Mutation to use your head as a double-spear',
    inventoryPlace: InventoryPlaces.head,
    cost: 1,
    image: images.mutantEvolvings.horns,
    priority: 3
}

const mutation_scales: IMutation = {
    name: 'Scales',
    description: 'Mutation to make your skin much tougher',
    inventoryPlace: InventoryPlaces.skin,
    cost: 1,
    image: images.mutantEvolvings.scales,
    priority: 1
}

const mutation_tailWithSting: IMutation = {
    name: 'Tail with sting',
    description: 'Mutation to pierce your victims',
    inventoryPlace: InventoryPlaces.tail,
    cost: 1,
    image: images.mutantEvolvings.tailWithSting,
    priority: 1
}

const mutation_twoExtraPincers: IMutation = {
    name: 'Two extra pincers',
    description: 'Mutation to make holes in you rival',
    inventoryPlace: InventoryPlaces.shoulders,
    cost: 1,
    image: images.mutantEvolvings.twoExtraPincers,
    priority: 1
}

const mutation_wings: IMutation = {
    name: 'Wings',
    description: 'Mutation to fly over battlefield',
    inventoryPlace: InventoryPlaces.back,
    cost: 1,
    image: images.mutantEvolvings.wings,
    priority: 3
}

const mutation_hooves: IMutation = {
    name: 'Hooves',
    description: 'Mutation to make confident steps',
    inventoryPlace: InventoryPlaces.legs,
    cost: 1,
    image: images.mutantEvolvings.hooves,
    priority: 1
}

const mutations = {
    mutation_acidSplit,
    mutation_claws,
    mutation_clawLeft,
    mutation_clawRight,
    mutation_horns,
    mutation_scales,
    mutation_tailWithSting,
    mutation_twoExtraPincers,
    mutation_wings,
    mutation_hooves
}

export default mutations