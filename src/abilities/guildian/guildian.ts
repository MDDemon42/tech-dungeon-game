import images from "../../images/images";
import { Ability } from "../../types/ability";

const {guildianLearnings} = images;

const ability_chakramThrowing: Ability = {
    name: 'Chakram throwing',
    description: 'Ability to not throw chakram at multiple enemies',
    passive: true,
    learned: false,
    disabled: true,
    image: guildianLearnings.chakram
}

const ability_multistrikeSpell: Ability = {
    name: 'Multistrike',
    description: 'Spell to attack next enemy several times',
    passive: false,
    learned: false,
    disabled: true,
    image: guildianLearnings.multistrike
}

const ability_titanSkinSpell: Ability = {
    name: 'Titan skin',
    description: 'Spell to make your skin invincible',
    passive: false,
    learned: false,
    disabled: true,
    image: guildianLearnings.titanSkinRitual
}

const guildian = [
    ability_chakramThrowing,
    ability_multistrikeSpell,
    ability_titanSkinSpell
]

export default guildian