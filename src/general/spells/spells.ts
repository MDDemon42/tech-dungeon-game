import { IBattleAbility, ISpell } from "../../enums-and-interfaces/interfaces";
import images from "../../images/images";
import masteries from "../masteries/masteries";
import abilities from "../abilities";
import wizardMasteries from "../masteries/wizard";

function createSpell(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    abilityInfo: [
        requiredMastery: string,
        requiresRod: boolean,
        ability: IBattleAbility | null
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
        chrome.i18n.getMessage('multistrike'),
        chrome.i18n.getMessage('multistrike_spell_description'),
        images.guildianLearnings.multistrike
    ],
    [
        masteries.mastery_swordAffiliation.name,
        false,
        null
    ]
)

const spell_defensiveCharms = createSpell(
    [
        chrome.i18n.getMessage('defensive_charms'),
        chrome.i18n.getMessage('defensive_charms_spell_description'),
        images.wizardSpells.defensiveCharms
    ],
    [
        wizardMasteries.mastery_scholarship.name,
        true,
        null
    ]
)

const spell_defensiveEnchantment = createSpell(
    [
        chrome.i18n.getMessage('defensive_enchantment'),
        chrome.i18n.getMessage('defensive_enchantment_spell_description'),
        images.wizardSpells.defensiveRunes
    ],
    [
        wizardMasteries.mastery_magisterDegree.name,
        true,
        null
    ]
)

const spell_flyingCharms = createSpell(
    [
        chrome.i18n.getMessage('flying_charm'),
        chrome.i18n.getMessage('flying_charm_spell_description'),
        images.wizardSpells.flyingCharms
    ],
    [
        wizardMasteries.mastery_scholarship.name,
        true,
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
        wizardMasteries.mastery_magisterDegree.name,
        true,
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
        wizardMasteries.mastery_scholarship.name,
        true,
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
        wizardMasteries.mastery_magisterDegree.name,
        true,
        null
    ]
)

const spells = {
    spell_multistrike,
    spell_defensiveCharms,
    spell_defensiveEnchantment,
    spell_flyingCharms,
    spell_stoneGolem,
    spell_magicBolt,
    spell_teleport
}

export default spells