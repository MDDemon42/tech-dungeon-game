import { IMutation, InventoryPlaces } from "../../types/interfaces";

import images from "../../images/images";

function createMutation(
    name: string,
    description: string,
    cost: number,
    inventoryPlace: InventoryPlaces,
    image: string,
    priority: number
): IMutation {
    return {
        name,
        description,
        cost,
        inventoryPlace,
        image,
        priority,
        linkedMastery: null,
        masterAbilities: null
    }
}

const mutation_acidSplit = createMutation(
    'Acid split', 'Mutation to split acid in your enemy`s face',
    1, InventoryPlaces.chin,
    images.mutantEvolvings.acidSplit, 2
)

const mutation_lowerFangs = createMutation(
    'Lower fangs', 'Mutation to turn your chin to a cutting machine',
    1, InventoryPlaces.chin,
    images.mutantEvolvings.lowerFangs, 1
)

const mutation_claws = createMutation(
    'Claws', 'Mutation to rip your opponents apart',
    1, InventoryPlaces.bothHands,
    images.mutantEvolvings.claws, 4
)

const mutation_clawLeft = createMutation(
    'Claws', 'Mutation to rip your opponents apart',
    1, InventoryPlaces.leftHand,
    images.mutantEvolvings.claws, 4
)

const mutation_clawRight = createMutation(
    'Claws', 'Mutation to rip your opponents apart',
    1, InventoryPlaces.rightHand,
    images.mutantEvolvings.claws, 4
)

const mutation_horns = createMutation(
    'Horns', 'Mutation to use your head as a double-spear',
    1, InventoryPlaces.head,
    images.mutantEvolvings.horns, 3
)

const mutation_scales = createMutation(
    'Scales', 'Mutation to make your skin much tougher',
    1, InventoryPlaces.skin,
    images.mutantEvolvings.scales, 1
)

const mutation_tail = createMutation(
    'Tail with sting', 'Mutation to pierce your victims',
    1, InventoryPlaces.tail,
    images.mutantEvolvings.tailWithSting, 1
)

const mutation_pincers = createMutation(
    'Two extra pincers', 'Mutation to make holes in you rival',
    1, InventoryPlaces.shoulders,
    images.mutantEvolvings.twoExtraPincers, 1
)

const mutation_wings = createMutation(
    'Wings', 'Mutation to fly over battlefield',
    1, InventoryPlaces.back,
    images.mutantEvolvings.wings, 3
)

const mutation_hooves = createMutation(
    'Hooves', 'Mutation to make confident steps',
    1, InventoryPlaces.legs,
    images.mutantEvolvings.hooves, 1
)

const mutations = {
    mutation_acidSplit,
    mutation_lowerFangs,
    mutation_claws,
    mutation_clawLeft,
    mutation_clawRight,
    mutation_horns,
    mutation_scales,
    mutation_tail,
    mutation_pincers,
    mutation_wings,
    mutation_hooves
}

export default mutations