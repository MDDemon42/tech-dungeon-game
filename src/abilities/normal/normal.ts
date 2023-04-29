import images from "../../images/images";
import { Ability } from "../../types/ability";

const {normalItems} = images;

const ability_archery: Ability = {
    name: 'Archery',
    description: 'Ability to not miss shooting with bow',
    passive: true,
    value: 1,
    learned: false,
    disabled: true,
    image: normalItems.bow
}

const ability_marksmanship: Ability = {
    name: 'Marksmanship',
    description: 'Ability to not miss shooting with crossbow',
    passive: true,
    value: 2,
    learned: false,
    disabled: true,
    image: normalItems.crossbow
}

const normal = [
    ability_archery,
    ability_marksmanship
]

export default normal