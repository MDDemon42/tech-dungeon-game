import { ISpell } from "../types/interfaces"

import images from "../images/images"

const spell_multistrike: ISpell = {
    name: 'Multistrike',
    description: 'Spell to attack next enemy several times',
    value: 1,
    image: images.guildianLearnings.multistrike
}

const spell_titanSkin: ISpell = {
    name: 'Titan skin',
    description: 'Spell to make your skin invincible',
    value: 2,
    image: images.guildianLearnings.titanSkinRitual
}

const spells: Record<string, ISpell> = {
    spell_multistrike,
    spell_titanSkin
}

export default spells