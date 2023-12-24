import { createGuildItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import abilities from "../../../general/abilities";
import images from "../../../images/images";
import academyMasteries from "../../Academy/masteries";
import guildMasteries from "../masteries";

const runicGreataxe = createGuildItem(
    [
        chrome.i18n.getMessage('runic_greataxe'), 
        chrome.i18n.getMessage('runic_greataxe_item_description'),
        images.guildianLearnings.runicGreataxe
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    academyMasteries.brutalForce.name,
    [
        abilities.battleAbilities.melee.physicalSlashing.runicGreataxeSlash
    ],
    null,
    [
        {
            linkedMastery: guildMasteries.battleRunes.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.iceHail
        }
    ]
)

const runicGreatsword = createGuildItem(
    [
        chrome.i18n.getMessage('runic_greatsword'), 
        chrome.i18n.getMessage('runic_greatsword_item_description'),
        images.guildianLearnings.runicGreatsword
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    academyMasteries.brutalForce.name,
    [
        abilities.battleAbilities.melee.physicalSlashing.runicGreatswordSlash
    ],
    null,
    [
        {
            linkedMastery: guildMasteries.battleRunes.name,
            masterAbility: abilities.battleAbilities.ranged.fire.fireWave
        }
    ]
)

const runicGreathammer = createGuildItem(
    [
        chrome.i18n.getMessage('runic_greathammer'), 
        chrome.i18n.getMessage('runic_greathammer_item_description'),
        images.guildianLearnings.runicGreathammer
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    academyMasteries.brutalForce.name,
    [
        abilities.battleAbilities.melee.physicalSmashing.runicGreathammerSmash
    ],
    null,
    [
        {
            linkedMastery: guildMasteries.battleRunes.name,
            masterAbility: abilities.battleAbilities.ranged.electrical.lightningStrike
        }
    ]
)

const oakCrossow = createGuildItem(
    [
        chrome.i18n.getMessage('oak_crossbow'), 
        chrome.i18n.getMessage('oak_crossbow_item_description'),
        images.normalItems.oakCrossbow
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    '',
    [
        abilities.battleAbilities.ranged.physicalPiercing.crossbowShot
    ],
    null,
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterCrossbowShot
        }
    ]
)

const steelChakram = createGuildItem(
    [
        chrome.i18n.getMessage('steel_chakram'), 
        chrome.i18n.getMessage('steel_chakram_item_description'),
        images.guildianLearnings.chakram
    ],
    [
        2, InventoryPlace.leftHand, 1
    ],
    '',
    [
        abilities.battleAbilities.melee.physicalSlashing.chakramSlash
    ],
    null,
    [
        {
            linkedMastery: guildMasteries.chakramAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedChakramSlash
        },
        {
            linkedMastery: guildMasteries.chakramAffiliation.name,
            masterAbility: abilities.battleAbilities.ranged.physicalSlashing.chakramThrow
        }
    ]
)

const acidBomd = createGuildItem(
    [
        chrome.i18n.getMessage('acid_bomb'), 
        chrome.i18n.getMessage('acid_bomb_item_description'),
        images.normalItems.acidBomb
    ],
    [
        1, InventoryPlace.rightPocket, 1
    ],
    '', 
    [
        abilities.battleAbilities.ranged.acid.acidBombThrow
    ],
    null,
    [
        {
            linkedMastery: guildMasteries.bombThrowing.name,
            masterAbility: abilities.battleAbilities.ranged.acid.masterAcidBombThrow
        }
    ]
)

const weapons = {
    acidBomd,
    oakCrossow,
    runicGreataxe,
    runicGreathammer,
    runicGreatsword,
    steelChakram
}

export default weapons