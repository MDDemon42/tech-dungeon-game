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
        chrome.i18n.getMessage('multistrike'),
        chrome.i18n.getMessage('multistrike_spell_description'),
        images.guildianLearnings.multistrike
    ],
    [
        masteries.mastery_swordAffiliation.name,
        false,
        false,
        null
    ]
)

const spell_titanSkin = createSpell(
    [
        chrome.i18n.getMessage('titan_skin'),
        chrome.i18n.getMessage('titan_skin_spell_description'),
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
        chrome.i18n.getMessage('defensive_charm'),
        chrome.i18n.getMessage('defensive_charm_spell_description'),
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
        chrome.i18n.getMessage('defensive_enchantment'),
        chrome.i18n.getMessage('defensive_enchantment_spell_description'),
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
        chrome.i18n.getMessage('ice_shard'),
        chrome.i18n.getMessage('ice_shard_spell_description'),
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
        chrome.i18n.getMessage('ice_spear'),
        chrome.i18n.getMessage('ice_spear_spell_description'),
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
        chrome.i18n.getMessage('ice_hail'),
        chrome.i18n.getMessage('ice_hail_spell_description'),
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
        chrome.i18n.getMessage('cold_death'),
        chrome.i18n.getMessage('cold_death_spell_description'),
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
        chrome.i18n.getMessage('flame'),
        chrome.i18n.getMessage('flame_spell_description'),
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
        chrome.i18n.getMessage('fire_ball'),
        chrome.i18n.getMessage('fire_ball_spell_description'),
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
        chrome.i18n.getMessage('fire_wave'),
        chrome.i18n.getMessage('fire_wave_spell_description'),
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
        chrome.i18n.getMessage('wind_blow'),
        chrome.i18n.getMessage('wind_blow_spell_description'),
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
        chrome.i18n.getMessage('thunder_punch'),
        chrome.i18n.getMessage('thunder_punch_spell_description'),
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
        chrome.i18n.getMessage('air_deprivation'),
        chrome.i18n.getMessage('air_deprivation_spell_description'),
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
        chrome.i18n.getMessage('flying_charm'),
        chrome.i18n.getMessage('flying_charm_spell_description'),
        images.wizardSpells.flyingCharms
    ],
    [
        masteries.mastery_scholarship.name,
        true,
        false,
        null
    ]
)

const spell_stoneGolem = createSpell(
    [
        chrome.i18n.getMessage('stone_golem'),
        chrome.i18n.getMessage('stone_golem_spell_description'),
        images.wizardSpells.stoneGolem
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
        chrome.i18n.getMessage('electrical_bolt'),
        chrome.i18n.getMessage('electrical_bolt_spell_description'),
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
        chrome.i18n.getMessage('teleport'),
        chrome.i18n.getMessage('teleport_spell_description'),
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
    spell_stoneGolem,
    spell_magicBolt,
    spell_teleport
}

export default spells