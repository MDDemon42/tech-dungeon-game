import { Item } from "../../types/item";

import images from "../../images/images";

const item_steelSword: Item = {
    value: 1,
    cost: 100,
    disabled: false,
    name: 'Steel sword',
    description: 'Usual steel sword',
    image: images.normalItems.sword
}

const item_steelGreataxe: Item = {
    value: 2,
    cost: 200,
    disabled: false,
    name: 'Steel greataxe',
    description: 'Massive steel greataxe',
    image: images.normalItems.greataxe
}

const item_runicSword: Item = {
    value: 2,
    cost: 200,
    disabled: false,
    name: 'Runic sword',
    description: 'Sword covered with runes',
    image: images.guildianLearnings.runicSword
}

const melee = {
    item_steelSword,
    item_steelGreataxe,
    item_runicSword
}

export default melee