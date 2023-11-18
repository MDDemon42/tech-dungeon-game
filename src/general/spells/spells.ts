import { IAbility, ISpell } from "../../enums-and-interfaces/interfaces";
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
        requiredMastery: string,
        requiresRod: boolean,
        requiresBothHands: boolean,
        ability: IAbility | null
    ]
): ISpell {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        requiredMastery: abilityInfo[0],
        requiresRod: abilityInfo[1],
        requiresBothHands: abilityInfo[2],
        ability: abilityInfo[3]
    }
}

const spell_multistrike = createSpell(
    [
        'Multistrike',
        'Spell to attack next enemy several times',
        images.guildianLearnings.multistrike
    ],
    [
        masteries.mastery_swordsmanship.name,
        false,
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
        masteries.mastery_magisterDegree.name,
        false,
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
        masteries.mastery_scholarship.name,
        true,
        false,
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
        masteries.mastery_magisterDegree.name,
        true,
        false,
        null
    ]
)

const spell_iceShard = createSpell(
    [
        'Ice Shard',
        'Spell to pierce an enemy with ice shard',
        images.wizardSpells.iceShard
    ],
    [
        masteries.mastery_senseOfCold.name,
        false,
        true,
        abilities.battleAbilities.ranged.physicalPiercing.battleAbility_iceShard
    ]
)

const spell_iceSpear = createSpell(
    [
        'Ice Spear',
        'Spell to pierce an enemy with ice spear',
        images.wizardSpells.iceSpear
    ],
    [
        masteries.mastery_senseOfCold.name,
        false,
        true,
        abilities.battleAbilities.ranged.physicalPiercing.battleAbility_iceShard
    ]
)

const spell_iceHail = createSpell(
    [
        'Ice Hail',
        'Spell to pierce a group of enemies with ice shards',
        images.wizardSpells.iceHail
    ],
    [
        masteries.mastery_senseOfCold.name,
        false,
        true,
        abilities.battleAbilities.ranged.physicalPiercing.battleAbility_iceHail
    ]
)

const spell_coldDeath = createSpell(
    [
        'Cold Death',
        'Spell to turn an enemy dead and cold',
        images.wizardSpells.coldDeath
    ],
    [
        masteries.mastery_senseOfCold.name,
        false,
        true,
        abilities.battleAbilities.ranged.cold.battleAbility_coldDeath
    ]
)

const spell_flame = createSpell(
    [
        'Flame',
        'Spell to roast an enemy with fire',
        images.wizardSpells.flame
    ],
    [
        masteries.mastery_senseOfFlame.name,
        false,
        true,
        abilities.battleAbilities.ranged.fire.battleAbility_flame
    ]
)

const spell_fireball = createSpell(
    [
        'Fireball',
        'Spell to clash a group of enemies with fire',
        images.wizardSpells.fireball
    ],
    [
        masteries.mastery_senseOfFlame.name,
        false,
        true,
        abilities.battleAbilities.ranged.fire.battleAbility_fireball
    ]
)

const spell_fireWave = createSpell(
    [
        'Fire Wave',
        'Spell to burn out a group of enemies',
        images.wizardSpells.fireWave
    ],
    [
        masteries.mastery_senseOfFlame.name,
        false,
        true,
        abilities.battleAbilities.ranged.fire.battleAbility_fireWave
    ]
)

const spell_windBlow = createSpell(
    [
        'Wind Blow',
        'Spell to show an enemy devastating wind',
        images.wizardSpells.windBlow
    ],
    [
        masteries.mastery_senseOfWind.name,
        false,
        true,
        abilities.battleAbilities.ranged.physicalSmashing.battleAbility_windBlow
    ]
)

const spell_thunderPunch = createSpell(
    [
        'Thunder Punch',
        'Spell to smash an enemy up to thunder crambls',
        images.wizardSpells.thunderPunch
    ],
    [
        masteries.mastery_senseOfWind.name,
        false,
        true,
        abilities.battleAbilities.melee.physicalSmashing.battleAbility_thunderPunch
    ]
)

const spell_airDeprivation = createSpell(
    [
        'Air Deprivation',
        'Spell to make an enemy airless and lifeless',
        images.wizardSpells.airDeprivation
    ],
    [
        masteries.mastery_senseOfWind.name,
        false,
        true,
        abilities.battleAbilities.ranged.suffocation.battleAbility_airDeprivation
    ]
)

const spell_flyingCharms = createSpell(
    [
        'Flying charms',
        'Spell to make anybody fly. Casted via rod or staff',
        images.wizardSpells.flyingCharms
    ],
    [
        masteries.mastery_scholarship.name,
        true,
        false,
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
        masteries.mastery_magisterDegree.name,
        true,
        false,
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
        masteries.mastery_scholarship.name,
        true,
        false,
        abilities.battleAbilities.ranged.electrical.battleAbility_magicBolt
    ]
)

const spell_teleport = createSpell(
    [
        'Teleport',
        'Spell to be somewhere else. Casted via rod or staff',
        images.wizardSpells.teleport
    ],
    [
        masteries.mastery_magisterDegree.name,
        true,
        false,
        null
    ]
)

const spells = {
    spell_multistrike,
    spell_titanSkin,
    spell_defensiveCharms,
    spell_defensiveRunes,
    spell_iceShard,
    spell_iceSpear,
    spell_iceHail,
    spell_coldDeath,
    spell_flame,
    spell_fireball,
    spell_fireWave,
    spell_windBlow,
    spell_thunderPunch,
    spell_airDeprivation,
    spell_flyingCharms,
    spell_golem,
    spell_magicBolt,
    spell_teleport
}

export default spells