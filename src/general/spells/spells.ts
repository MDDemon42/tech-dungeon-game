import { ISpell } from "../../types/interfaces"
import images from "../../images/images"
import masteries from "../masteries/masteries"
import abilities from "../abilities"
import items from "../items/items"

const spell_multistrike: ISpell = {
    name: 'Multistrike',
    description: 'Spell to attack next enemy several times',
    image: images.guildianLearnings.multistrike,
    requiredMastery: masteries.mastery_swordsmanship
}

const spell_titanSkin: ISpell = {
    name: 'Titan skin',
    description: 'Spell to make skin almost invincible',
    image: images.guildianLearnings.titanSkinRitual,
    requiredMastery: masteries.mastery_magisterDegree
}

const spell_defensiveCharms: ISpell = {
    name: 'Defensive charms',
    description: 'Spell to protect one of your buddies from usual attack. Casted via rod or staff',
    image: images.wizardSpells.defensiveCharms,
    requiredMastery: masteries.mastery_scholarship
}

const spell_defensiveRunes: ISpell = {
    name: 'Defensive runes',
    description: 'Spell to protect one of your buddies from severe attack. Casted via rod or staff',
    image: images.wizardSpells.defensiveRunes,
    requiredMastery: masteries.mastery_magisterDegree
}

const spell_fireball: ISpell = {
    name: 'Fireball',
    description: 'Spell to clash a group of enemies with fire. Casted via rod or staff',
    image: images.wizardSpells.fireball,
    requiredMastery: masteries.mastery_magisterDegree,
    ability: abilities.battleAbilities.battleAbilities_fireball,
    requiresRod: true
}

const spell_flyingCharms: ISpell = {
    name: 'Flying charms',
    description: 'Spell to make anybody fly. Casted via rod or staff',
    image: images.wizardSpells.flyingCharms,
    requiredMastery: masteries.mastery_scholarship
}

const spell_golem: ISpell = {
    name: 'Golem',
    description: 'Spell to make a bunch of stones alive. Casted via rod or staff',
    image: images.wizardSpells.golem,
    requiredMastery: masteries.mastery_magisterDegree
}

const spell_magicBolt: ISpell = {
    name: 'Magic bolt',
    description: 'Spell to make one enemy hurt. Casted via rod or staff',
    image: images.wizardSpells.magicBolt,
    requiredMastery: masteries.mastery_scholarship,
    ability: abilities.battleAbilities.battleAbilities_magicBolt,
    requiresRod: true
}

const spell_teleport: ISpell = {
    name: 'Teleport',
    description: 'Spell to be somewhere else. Casted via rod or staff',
    image: images.wizardSpells.teleport,
    requiredMastery: masteries.mastery_magisterDegree
}

const spells = {
    spell_multistrike,
    spell_titanSkin,
    spell_defensiveCharms,
    spell_defensiveRunes,
    spell_fireball,
    spell_flyingCharms,
    spell_golem,
    spell_magicBolt,
    spell_teleport
}

export default spells