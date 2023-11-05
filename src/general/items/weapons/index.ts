import { createItem } from "..";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../abilities";
import masteries from "../../masteries/masteries";

const item_apprenticeRod = createItem(
    [
        'Apprentice rod', 
        'Rod to help concentrate magic',
        images.wizardItems.apprenticeRod
    ],
    [
        1, InventoryPlace.bothHands, 2
    ],
    [
        masteries.mastery_scholarship.name,
        null, '', null
    ]
)

const item_magisterScepter = createItem(
    [
        'Magister scepter', 
        'Scepter to lean on between casting spells',
        images.wizardItems.magisterScepter
    ],
    [
        2, InventoryPlace.bothHands, 3
    ],
    [
        masteries.mastery_magisterDegree.name,
        null, '', null
    ]
)

const item_steelSwordRightHand = createItem(
    [
        'Steel sword', 
        'Usual steel sword',
        images.normalItems.sword
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    [
        '', abilities.battleAbilities.melee.battleAbility_swordSlash,
        masteries.mastery_swordsmanship.name,
        [abilities.battleAbilities.melee.battleAbility_masterSwordSlash]
    ]
)

const item_steelSwordLeftHand = createItem(
    [
        'Left hand steel sword', 
        'Left hand steel sword',
        images.normalItems.sword
    ],
    [
        1, InventoryPlace.leftHand, 1
    ],
    [
        masteries.mastery_dualSwords.name,
        abilities.battleAbilities.melee.battleAbility_leftHandSwordSlash,
        masteries.mastery_swordsmanship.name,
        [abilities.battleAbilities.melee.battleAbility_masterSwordSlash]
    ]
)

const item_steelGreataxe = createItem(
    [
        'Steel greataxe', 
        'Massive steel greataxe',
        images.normalItems.greataxe
    ],
    [
        2, InventoryPlace.bothHands, 2
    ],
    [
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.battleAbility_greataxeSlash,
        '', null
    ]
)

const item_steelGreatsword = createItem(
    [
        'Steel greatsword', 
        'Massive steel greatsword',
        images.guildianLearnings.runicSword
    ],
    [
        2, InventoryPlace.bothHands, 2
    ],
    [
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.battleAbility_greatswordSlash,
        '', null
    ]
)

const item_runicGreatsword = createItem(
    [
        'Runic greatsword', 
        'Massive sword covered with runes',
        images.guildianLearnings.runicSword
    ],
    [
        2, InventoryPlace.bothHands, 2
    ],
    [
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.battleAbility_greatswordSlash,
        masteries.mastery_runicWeapons.name,
        [
            abilities.battleAbilities.melee.battleAbility_greatswordSlash,
            abilities.battleAbilities.magic.battleAbility_runicGreatswordSlash
        ]
    ]
)

const item_oakBow = createItem(
    [
        'Bow', 
        'Usual oak bow',
        images.normalItems.bow
    ], 
    [
        1, InventoryPlace.bothHands, 2
    ],
    [
        '', abilities.battleAbilities.ranged.battleAbility_oakBowShot,
        masteries.mastery_archery.name,
        [abilities.battleAbilities.ranged.battleAbility_masterOakBowShot]
    ]
)

const item_oakCrossow = createItem(
    [
        'Crossbow', 
        'Usual oak crossbow',
        images.normalItems.crossbow
    ],
    [
        2, InventoryPlace.bothHands, 2
    ],
    [
        '', abilities.battleAbilities.ranged.battleAbility_crossbowShot,
        masteries.mastery_marksmanship.name,
        [abilities.battleAbilities.ranged.battleAbility_masterCrossbowShot]
    ]
)

const item_steelChakram = createItem(
    [
        'Steel chakram', 
        'Spinning disk of death',
        images.guildianLearnings.chakram
    ],
    [
        2, InventoryPlace.leftHand, 1
    ],
    [
        '', abilities.battleAbilities.melee.battleAbility_chakramSlash,
        masteries.mastery_chakramThrowing.name,
        [
            abilities.battleAbilities.melee.battleAbility_masterChakramSlash,
            abilities.battleAbilities.ranged.battleAbility_chakramThrow
        ]
    ]
)

const item_acidBomd = createItem(
    [
        'Acid bomb', 
        'Burns without a fire',
        images.normalItems.acidBomb
    ],
    [
        1, InventoryPlace.rightPocket, 1
    ],
    [
        '', abilities.battleAbilities.ranged.battleAbility_acidBombThrow,
        masteries.mastery_bombThrowing.name, 
        [abilities.battleAbilities.ranged.battleAbility_masterAcidBombThrow]
    ]
)

const weapons = {
    item_apprenticeRod,
    item_magisterScepter,
    item_steelSwordRightHand,
    item_steelSwordLeftHand,
    item_steelGreataxe,
    item_steelGreatsword,
    item_runicGreatsword,
    item_oakBow,
    item_oakCrossow,
    item_steelChakram,
    item_acidBomd
}

export default weapons