import { IBattleAbility, ISpell } from "../../../enums-and-interfaces/interfaces";
import images from "../../../images/images";
import abilities from "../../../general/abilities";
import wizardMasteries from "../masteries";
import academyMasteries from "../../Academy/masteries";

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

const multistrike = createSpell(
    [
        chrome.i18n.getMessage('multistrike'),
        chrome.i18n.getMessage('multistrike_spell_description'),
        images.guildianLearnings.multistrike
    ],
    [
        academyMasteries.swordAffiliation.name,
        false,
        null
    ]
)

const defensiveCharms = createSpell(
    [
        chrome.i18n.getMessage('defensive_charms'),
        chrome.i18n.getMessage('defensive_charms_spell_description'),
        images.wizardSpells.defensiveCharms
    ],
    [
        wizardMasteries.scholarship.name,
        true,
        null
    ]
)

const defensiveEnchantment = createSpell(
    [
        chrome.i18n.getMessage('defensive_enchantment'),
        chrome.i18n.getMessage('defensive_enchantment_spell_description'),
        images.wizardSpells.defensiveRunes
    ],
    [
        wizardMasteries.magisterDegree.name,
        true,
        null
    ]
)

const flyingCharms = createSpell(
    [
        chrome.i18n.getMessage('flying_charm'),
        chrome.i18n.getMessage('flying_charm_spell_description'),
        images.wizardSpells.flyingCharms
    ],
    [
        wizardMasteries.scholarship.name,
        true,
        null
    ]
)

const stoneGolem = createSpell(
    [
        chrome.i18n.getMessage('stone_golem'),
        chrome.i18n.getMessage('stone_golem_spell_description'),
        images.wizardSpells.stoneGolem
    ],
    [
        wizardMasteries.magisterDegree.name,
        true,
        null
    ]
)

const magicBolt = createSpell(
    [
        chrome.i18n.getMessage('electrical_bolt'),
        chrome.i18n.getMessage('electrical_bolt_spell_description'),
        images.wizardSpells.magicBolt
    ],
    [
        wizardMasteries.scholarship.name,
        true,
        abilities.battleAbilities.ranged.electrical.magicBolt
    ]
)

const teleport = createSpell(
    [
        chrome.i18n.getMessage('teleport'),
        chrome.i18n.getMessage('teleport_spell_description'),
        images.wizardSpells.teleport
    ],
    [
        wizardMasteries.magisterDegree.name,
        true,
        null
    ]
)

const spells = {
    multistrike,
    defensiveCharms,
    defensiveEnchantment,
    flyingCharms,
    stoneGolem,
    magicBolt,
    teleport
}

const appreticeSpells = [
    spells.magicBolt,
    spells.defensiveCharms,
    spells.flyingCharms,
];

const magisterSpells = [
    spells.stoneGolem,
    spells.teleport,
    spells.defensiveEnchantment,
]

export const spellSchoolOptions: Record<string, ISpell[]> = {
    0: [],
    1: [...appreticeSpells],
    2: [...magisterSpells] 
};

export default spells