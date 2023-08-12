import { createMutation } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const mutation_scales = createMutation(
    [
        'Scales', 
        'Mutation to make your skin much tougher',
        images.mutantEvolvings.scales
    ],
    [
        1, InventoryPlace.skin, 1
    ],
    [
        null, '', null
    ]
)

const armors = {
    mutation_scales
}

export default armors