import { createMutation } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../types/interfaces"

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

const weapons = {
    mutation_acidSplit,
    mutation_clawLeft,
    mutation_clawRight,
    mutation_claws,
    mutation_horns,
    mutation_lowerFangs,
    mutation_pincers,
    mutation_tail
}

export default weapons