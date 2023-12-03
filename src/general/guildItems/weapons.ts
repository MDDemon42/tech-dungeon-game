import { InventoryPlace } from "../../enums-and-interfaces/enums";
import { IBattleAbility, IGuildItem, IPassiveAbility } from "../../enums-and-interfaces/interfaces";
import images from "../../images/images";
import abilities from "../abilities";
import guildMasteries from "../masteries/guild";
import masteries from "../masteries/masteries";

export function createGuildItem(
    commonInfo: [
        name: string,
        description: string,
        image: string
    ],
    inventoryInfo: [
        cost: number,
        inventoryPlace: InventoryPlace,
        priority: number
    ],
    abilityInfo: [
        requiredMastery: string,
        ability: IBattleAbility | null,
        linkedMastery: string,
        masterAbilities: IBattleAbility[] | null,
        passiveAbility: IPassiveAbility | null
    ]       
): IGuildItem {
    return {
        name: commonInfo[0],
        description: commonInfo[1],
        image: commonInfo[2],

        cost: inventoryInfo[0],
        inventoryPlace: inventoryInfo[1],
        priority: inventoryInfo[2],

        requiredMastery: abilityInfo[0],
        ability: abilityInfo[1],
        linkedMastery: abilityInfo[2],
        masterAbilities: abilityInfo[3],
        passiveAbility: abilityInfo[4]
    }
}

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
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreataxeSlash,
        guildMasteries.mastery_battleRunes.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreataxeSlash,
            abilities.battleAbilities.melee.cold.battleAbility_runicGreataxeSlash
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
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreatswordSlash,
        guildMasteries.mastery_battleRunes.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreatswordSlash,
            abilities.battleAbilities.melee.fire.battleAbility_runicGreatswordSlash
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
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSmashing.battleAbility_runicGreathammerSmash,
        guildMasteries.mastery_battleRunes.name,
        [
            abilities.battleAbilities.melee.physicalSmashing.battleAbility_runicGreathammerSmash,
            abilities.battleAbilities.melee.electrical.battleAbility_runicGreathammerSmash
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
        '', abilities.battleAbilities.ranged.physicalPiercing.battleAbility_crossbowShot,
        guildMasteries.mastery_marksmanship.name,
        [abilities.battleAbilities.ranged.physicalPiercing.battleAbility_masterCrossbowShot],
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
        '', abilities.battleAbilities.melee.physicalSlashing.battleAbility_chakramSlash,
        guildMasteries.mastery_chakramAffiliation.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.battleAbility_affiliatedChakramSlash,
            abilities.battleAbilities.ranged.physicalSlashing.battleAbility_chakramThrow
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
        '', abilities.battleAbilities.ranged.acid.battleAbility_acidBombThrow,
        guildMasteries.mastery_bombThrowing.name, 
        [abilities.battleAbilities.ranged.acid.battleAbility_masterAcidBombThrow],
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