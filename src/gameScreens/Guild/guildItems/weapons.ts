import { createGuildItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import abilities from "../../../general/abilities";
import images from "../../../images/images";
import academyMasteries from "../../Academy/masteries";
import guildMasteries from "../masteries";

const guildItem_runicGreataxe = createGuildItem(
    [
        chrome.i18n.getMessage('runic_greataxe'), 
        chrome.i18n.getMessage('runic_greataxe_item_description'),
        images.guildianLearnings.runicGreataxe
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        academyMasteries.mastery_brutalForce.name,
        [abilities.battleAbilities.melee.physicalSlashing.runicGreataxeSlash],
        guildMasteries.mastery_battleRunes.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.runicGreataxeSlash,
            abilities.battleAbilities.melee.mixed.runicGreataxeSlash
        ],
        null
    ]
)

const guildItem_runicGreatsword = createGuildItem(
    [
        chrome.i18n.getMessage('runic_greatsword'), 
        chrome.i18n.getMessage('runic_greatsword_item_description'),
        images.guildianLearnings.runicGreatsword
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        academyMasteries.mastery_brutalForce.name,
        [abilities.battleAbilities.melee.physicalSlashing.runicGreatswordSlash],
        guildMasteries.mastery_battleRunes.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.runicGreatswordSlash,
            abilities.battleAbilities.melee.mixed.runicGreatswordSlash
        ],
        null
    ]
)

const guildItem_runicGreathammer = createGuildItem(
    [
        chrome.i18n.getMessage('runic_greathammer'), 
        chrome.i18n.getMessage('runic_greathammer_item_description'),
        images.guildianLearnings.runicGreathammer
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        academyMasteries.mastery_brutalForce.name,
        [abilities.battleAbilities.melee.physicalSmashing.runicGreathammerSmash],
        guildMasteries.mastery_battleRunes.name,
        [
            abilities.battleAbilities.melee.physicalSmashing.runicGreathammerSmash,
            abilities.battleAbilities.melee.mixed.runicGreathammerSmash
        ],
        null
    ]
)

const guildItem_oakCrossow = createGuildItem(
    [
        chrome.i18n.getMessage('oak_crossbow'), 
        chrome.i18n.getMessage('oak_crossbow_item_description'),
        images.normalItems.oakCrossbow
    ],
    [
        2, InventoryPlace.bothHands, 1
    ],
    [
        '', 
        [abilities.battleAbilities.ranged.physicalPiercing.crossbowShot],
        guildMasteries.mastery_marksmanship.name,
        [abilities.battleAbilities.ranged.physicalPiercing.masterCrossbowShot],
        null
    ]
)

const guildItem_steelChakram = createGuildItem(
    [
        chrome.i18n.getMessage('steel_chakram'), 
        chrome.i18n.getMessage('steel_chakram_item_description'),
        images.guildianLearnings.chakram
    ],
    [
        2, InventoryPlace.leftHand, 1
    ],
    [
        '', 
        [abilities.battleAbilities.melee.physicalSlashing.chakramSlash],
        guildMasteries.mastery_chakramAffiliation.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.affiliatedChakramSlash,
            abilities.battleAbilities.ranged.physicalSlashing.chakramThrow
        ], 
        null
    ]
)

const guildItem_acidBomd = createGuildItem(
    [
        chrome.i18n.getMessage('acid_bomb'), 
        chrome.i18n.getMessage('acid_bomb_item_description'),
        images.normalItems.acidBomb
    ],
    [
        1, InventoryPlace.rightPocket, 1
    ],
    [
        '', 
        [abilities.battleAbilities.ranged.acid.acidBombThrow],
        guildMasteries.mastery_bombThrowing.name, 
        [abilities.battleAbilities.ranged.acid.masterAcidBombThrow],
        null
    ]
)

const weapons = {
    guildItem_acidBomd,
    guildItem_oakCrossow,
    guildItem_runicGreataxe,
    guildItem_runicGreathammer,
    guildItem_runicGreatsword,
    guildItem_steelChakram
}

export default weapons