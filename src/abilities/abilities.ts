import { IAbility } from "../types/interfaces";

import images from "../images/images";

const ability_archery: IAbility = {
    name: 'Archery',
    description: 'Ability to not miss shooting with bow',
    image: images.normalItems.bow
}

const ability_marksmanship: IAbility = {
    name: 'Marksmanship',
    description: 'Ability to not miss shooting with crossbow',
    image: images.normalItems.crossbow
}

const ability_swordsmanship: IAbility = {
    name: 'Swordsmanship',
    description: 'Ability to slash and stab with efficiency',
    image: images.normalItems.sword
}

const ability_brutalForce: IAbility = {
    name: 'Brutal force',
    description: 'Ability to smash and behead your enemies',
    image: images.normalItems.greataxe
}

const ability_bombThrowing: IAbility = {
    name: 'Bomb throwing',
    description: 'Ability to throw bombs accurately',
    image: images.normalItems.acidBomb
}

const ability_guardianAura: IAbility = {
    name: 'Guardian aura',
    description: 'Ability to weaken enemy`s attacks aimed at you',
    image: images.psionInsights.guardianAura
}

const ability_chakramThrowing: IAbility = {
    name: 'Chakram throwing',
    description: 'Ability to not throw chakram at multiple enemies',
    image: images.guildianLearnings.chakram
}

const abilities: Record<string, IAbility> = {
    ability_archery,
    ability_marksmanship,
    ability_swordsmanship,
    ability_brutalForce,
    ability_bombThrowing,
    ability_guardianAura,
    ability_chakramThrowing
}

export default abilities