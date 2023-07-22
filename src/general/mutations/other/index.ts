import { createMutation } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../interfaces/interfaces"

const mutation_wings = createMutation(
    [
        'Wings', 
        'Mutation to fly over battlefield',
        images.mutantEvolvings.wings
    ],
    [
        1, InventoryPlaces.back, 3
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
        1, InventoryPlaces.legs, 1
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