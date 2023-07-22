import { createMutation } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const mutation_wings = createMutation(
    [
        'Wings', 
        'Mutation to fly over battlefield',
        images.mutantEvolvings.wings
    ],
    [
        1, InventoryPlace.back, 3
    ],
    [
        null, null, null
    ]
)

const mutation_hooves = createMutation(
    [
        'Hooves', 
        'Mutation to make confident steps',
        images.mutantEvolvings.hooves
    ],
    [
        1, InventoryPlace.legs, 1
    ],
    [
        null, null, null
    ]
)

const other = {
    mutation_hooves,
    mutation_wings
}

export default other