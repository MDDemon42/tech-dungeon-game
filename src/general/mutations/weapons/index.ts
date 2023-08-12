import { createMutation } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const mutation_acidSplit = createMutation(
    [
        'Acid split', 
        'Mutation to split acid in your enemy`s face',
        images.mutantEvolvings.acidSplit
    ],
    [
        1, InventoryPlace.chin, 2
    ],
    [
        null, '', null
    ]
)

const mutation_lowerFangs = createMutation(
    [
        'Lower fangs', 
        'Mutation to turn your chin to a cutting machine',
        images.mutantEvolvings.lowerFangs
    ],
    [
        1, InventoryPlace.chin, 1
    ],
    [
        null, '', null
    ]
)

const mutation_claws = createMutation(
    [
        'Claws', 
        'Mutation to rip your opponents apart',
        images.mutantEvolvings.claws
    ],
    [
        1, InventoryPlace.bothHands, 4
    ],
    [
        null, '', null
    ]
)

const mutation_clawLeft = createMutation(
    [
        'Claws', 
        'Mutation to rip your opponents apart',
        images.mutantEvolvings.claws
    ],
    [
        1, InventoryPlace.leftHand, 4
    ],
    [
        null, '', null
    ]    
)

const mutation_clawRight = createMutation(
    [
        'Claws', 
        'Mutation to rip your opponents apart',
        images.mutantEvolvings.claws
    ],
    [
        1, InventoryPlace.rightHand, 4
    ],
    [
        null, '', null
    ]
)

const mutation_horns = createMutation(
    [
        'Horns', 
        'Mutation to use your head as a double-spear',
        images.mutantEvolvings.horns
    ],
    [
        1, InventoryPlace.head, 3
    ],
    [
        null, '', null
    ]
)

const mutation_tail = createMutation(
    [
        'Tail with sting', 
        'Mutation to pierce your victims',
        images.mutantEvolvings.tailWithSting
    ],
    [
        1, InventoryPlace.tail, 1
    ],
    [
        null, '', null
    ]
)

const mutation_pincers = createMutation(
    [
        'Two extra pincers', 
        'Mutation to make holes in you rival',
        images.mutantEvolvings.twoExtraPincers
    ],
    [
        1, InventoryPlace.shoulders, 1
    ],
    [
        null, '', null
    ]
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