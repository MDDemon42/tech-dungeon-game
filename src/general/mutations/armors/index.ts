import { createMutation } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../interfaces/interfaces"

const mutation_scales = createMutation(
    [
        'Scales', 
        'Mutation to make your skin much tougher',
        images.mutantEvolvings.scales
    ],
    [
        1, InventoryPlaces.skin, 1
    ],
    [
        null, null, null
    ]
)

const armors = {
    mutation_scales
}

export default armors