import { Item } from "../../types/item";

import images from "../../images/images";

const item_oakBow: Item = {
    value: 1,
    cost: 100,
    disabled: false,
    name: 'Bow',
    description: 'Usual oak bow',
    image: images.normalItems.bow
}

const item_oakCrossow: Item = {
    value: 2,
    cost: 200,
    disabled: false,
    name: 'Crossbow',
    description: 'Usual oak crossbow',
    image: images.normalItems.crossbow
}

const item_steelChakram: Item = {
    value: 2,
    cost: 200,
    disabled: false,
    name: 'Steel chakram',
    description: 'Spinning disk of death',
    image: images.guildianLearnings.chakram
}

const range = {
    item_oakBow,
    item_oakCrossow,
    item_steelChakram
}

export default range