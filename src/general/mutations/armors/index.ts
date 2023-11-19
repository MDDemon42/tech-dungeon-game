import { createMutation } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../abilities";

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
    ], 
    abilities.passiveAbilities.armor.passiveAbility_scales
)

const mutation_fur = createMutation(
    [
        'Fur', 
        'Mutation to make your skin much hairer',
        images.mutantEvolvings.fur
    ],
    [
        1, InventoryPlace.skin, 1
    ],
    [
        null, '', null
    ], 
    abilities.passiveAbilities.armor.passiveAbility_fur
)

const armors = {
    mutation_scales,
    mutation_fur
}

export default armors