import { Item } from "../../types/item";

import images from "../../images/images";

const item_acidBomd: Item = {
    value: 1,
    cost: 100,
    disabled: false,
    name: 'Acid bomb',
    description: 'Burns without a fire',
    image: images.normalItems.acidBomb
}

const item_healingPotion: Item = {
    value: 1,
    cost: 100,
    disabled: false,
    name: 'Healing potion',
    description: 'Drink of herbs',
    image: images.normalItems.healingPotion
}

const extra = {
    item_acidBomd,
    item_healingPotion
}

export default extra