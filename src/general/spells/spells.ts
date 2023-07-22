import { IAbility, IMastery, ISpell } from "../../enums-and-interfaces/interfaces";
import images from "../../images/images";
import masteries from "../masteries/masteries";
import abilities from "../abilities";

function createSpell(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    abilityInfo: [
        requiredMastery: IMastery | null,
        requiresRod: boolean,
        ability: IAbility | null
    ]
): ISpell {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery: abilityInfo[0],
        requiresRod: abilityInfo[1],
        ability: abilityInfo[2]
    }
}

const spell_multistrike = createSpell(
    [
        'Multistrike',
        'Spell to attack next enemy several times',
        images.guildianLearnings.multistrike
    ],
    [
        masteries.mastery_swordsmanship,
        false,
        null
    ]
)

const spell_titanSkin = createSpell(
    [
        'Titan skin',
        'Spell to make skin almost invincible',
        images.guildianLearnings.titanSkinRitual
    ],
    [
        masteries.mastery_magisterDegree,
        false,
        null
    ]
)

const spell_defensiveCharms = createSpell(
    [
        'Defensive charms',
        'Spell to protect one of your buddies from usual attack. Casted via rod or staff',
        images.wizardSpells.defensiveCharms
    ],
    [
        masteries.mastery_scholarship,
        true,
        null
    ]
)

const spell_defensiveRunes = createSpell(
    [
        'Defensive runes',
        'Spell to protect one of your buddies from severe attack. Casted via rod or staff',
        images.wizardSpells.defensiveRunes
    ],
    [
        masteries.mastery_magisterDegree,
        true,
        null
    ]
)

const spell_fireball = createSpell(
    [
        'Fireball',
        'Spell to clash a group of enemies with fire. Casted via rod or staff',
        images.wizardSpells.fireball
    ],
    [
        masteries.mastery_magisterDegree,
        true,
        abilities.battleAbilities.magic.battleAbility_fireball
    ]
)

const spell_flyingCharms = createSpell(
    [
        'Flying charms',
        'Spell to make anybody fly. Casted via rod or staff',
        images.wizardSpells.flyingCharms
    ],
    [
        masteries.mastery_scholarship,
        true,
        null
    ]
)

const spell_golem = createSpell(
    [
        'Golem',
        'Spell to make a bunch of stones alive. Casted via rod or staff',
        images.wizardSpells.golem
    ],
    [
        masteries.mastery_magisterDegree,
        true,
        null
    ]
)

const spell_magicBolt = createSpell(
    [
        'Magic bolt',
        'Spell to make one enemy hurt. Casted via rod or staff',
        images.wizardSpells.magicBolt
    ],
    [
        masteries.mastery_scholarship,
        true,
        abilities.battleAbilities.magic.battleAbility_magicBolt
    ]
)

const spell_teleport = createSpell(
    [
        'Teleport',
        'Spell to be somewhere else. Casted via rod or staff',
        images.wizardSpells.teleport
    ],
    [
        masteries.mastery_magisterDegree,
        true,
        null
    ]
)

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