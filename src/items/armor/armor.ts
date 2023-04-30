import { Item } from "../../types/item";

import images from "../../images/images";

const item_leatherArmor: Item = {
    value: 1,
    cost: 100,
    disabled: false,
    name: 'Leather armor',
    description: 'Usual leather armor',
    image: images.normalItems.leatherArmor
}

const item_steelArmor: Item = {
    value: 2,
    cost: 200,
    disabled: false,
    name: 'Steel armor',
    description: 'Massive steel armor',
    image: images.normalItems.steelArmor
}

const armor = {
    item_leatherArmor,
    item_steelArmor
}

export default armor