import { createMutation } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../types/interfaces"

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

const other = {
    mutation_hooves,
    mutation_wings
}

export default other