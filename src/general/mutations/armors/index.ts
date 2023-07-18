import { createMutation } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../types/interfaces"

const mutation_scales = createMutation(
    'Scales', 'Mutation to make your skin much tougher',
    1, InventoryPlaces.skin,
    images.mutantEvolvings.scales, 1
)

const armors = {
    mutation_scales
}

export default armors