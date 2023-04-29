import images from "../../images/images";
import { Ability } from "../../types/ability";

const {normalItems} = images;

const ability_archery: Ability = {
    name: 'Archery',
    description: 'Ability to not miss shooting with bow',
    passive: true,
    learned: false,
    disabled: true,
    image: normalItems.bow
}

const ability_marksmanship: Ability = {
    name: 'Marksmanship',
    description: 'Ability to not miss shooting with crossbow',
    passive: true,
    learned: false,
    disabled: true,
    image: normalItems.crossbow
}

const ability_swordsmanship: Ability = {
    name: 'Swordsmanship',
    description: 'Ability to slash and stab with efficiency',
    passive: true,
    learned: false,
    disabled: true,
    image: normalItems.sword
}

const ability_brutalForce: Ability = {
    name: 'Brutal force',
    description: 'Ability to smash and behead your enemies',
    passive: true,
    learned: false,
    disabled: true,
    image: normalItems.greataxe
}

const ability_bombThrowing: Ability = {
    name: 'Bomb throwing',
    description: 'Ability to throw bombs accurately',
    passive: true,
    learned: false,
    disabled: true,
    image: normalItems.acidBomb
}

const normal = [
    ability_archery,
    ability_marksmanship,
    ability_swordsmanship,
    ability_brutalForce,
    ability_bombThrowing
]

export default normal