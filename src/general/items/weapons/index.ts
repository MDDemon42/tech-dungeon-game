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

const item_steelAxeRightHand = createItem(
    [
        'Steel axe', 
        'Usual steel axe',
        images.normalItems.steelAxe
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    [
        '', abilities.battleAbilities.melee.physicalSlashing.battleAbility_axeSlash,
        masteries.mastery_axeAffiliation.name, 
        [abilities.battleAbilities.melee.physicalSlashing.battleAbility_affiliatedAxeSlash]
    ]
)

const item_steelAxeLeftHand = createItem(
    [
        'Steel axe', 
        'Usual steel axe',
        images.normalItems.steelAxe
    ],
    [
        1, InventoryPlace.leftHand, 1
    ],
    [
        '', abilities.battleAbilities.melee.physicalSlashing.battleAbility_axeSlash,
        masteries.mastery_axeAffiliation.name, 
        [abilities.battleAbilities.melee.physicalSlashing.battleAbility_affiliatedAxeSlash]
    ]
)

const item_steelSwordRightHand = createItem(
    [
        'Steel sword', 
        'Usual steel sword',
        images.normalItems.steelSword
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    [
        '', abilities.battleAbilities.melee.physicalSlashing.battleAbility_swordSlash,
        masteries.mastery_swordsmanship.name,
        [abilities.battleAbilities.melee.physicalSlashing.battleAbility_masterSwordSlash]
    ]
)

const item_steelSwordLeftHand = createItem(
    [
        'Left hand steel sword', 
        'Left hand steel sword',
        images.normalItems.steelSword
    ],
    [
        1, InventoryPlace.leftHand, 1
    ],
    [
        masteries.mastery_dualSwords.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_swordSlash,
        masteries.mastery_swordsmanship.name,
        [abilities.battleAbilities.melee.physicalSlashing.battleAbility_masterSwordSlash]
    ]
)

const item_steelMace = createItem(
    [
        'Steel mace', 
        'Usual steel mace',
        images.normalItems.steelMace
    ],
    [
        1, InventoryPlace.rightHand, 1
    ],
    [
        '', abilities.battleAbilities.melee.physicalSmashing.battleAbility_maceSmash,
        masteries.mastery_maceAffiliation.name, 
        [abilities.battleAbilities.melee.physicalSmashing.battleAbility_affiliatedMaceSmash]
    ]
)

const item_steelGreataxe = createItem(
    [
        'Steel greataxe', 
        'Massive steel greataxe',
        images.normalItems.steelGreataxe
    ],
    [
        2, InventoryPlace.bothHands, 2
    ],
    [
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_steelGreataxeSlash,
        '', null
    ]
)

const item_runicGreataxe = createItem(
    [
        'Runic greataxe', 
        'Massive greataxe covered with runes',
        images.guildianLearnings.runicGreataxe
    ],
    [
        2, InventoryPlace.bothHands, 2
    ],
    [
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreataxeSlash,
        masteries.mastery_runicWeapons.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreataxeSlash,
            abilities.battleAbilities.melee.cold.battleAbility_runicGreataxeSlash
        ]
    ]
)

const item_steelGreatsword = createItem(
    [
        'Steel greatsword', 
        'Massive steel greatsword',
        images.normalItems.steelGreatsword
    ],
    [
        2, InventoryPlace.bothHands, 2
    ],
    [
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_steelGreatswordSlash,
        '', null
    ]
)

const item_runicGreatsword = createItem(
    [
        'Runic greatsword', 
        'Massive greatsword covered with runes',
        images.guildianLearnings.runicGreatsword
    ],
    [
        2, InventoryPlace.bothHands, 2
    ],
    [
        masteries.mastery_brutalForce.name,
        abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreatswordSlash,
        masteries.mastery_runicWeapons.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.battleAbility_runicGreatswordSlash,
            abilities.battleAbilities.melee.fire.battleAbility_runicGreatswordSlash
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
        '', abilities.battleAbilities.ranged.physicalPiercing.battleAbility_oakBowShot,
        masteries.mastery_archery.name,
        [abilities.battleAbilities.ranged.physicalPiercing.battleAbility_masterOakBowShot]
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
        '', abilities.battleAbilities.ranged.physicalPiercing.battleAbility_crossbowShot,
        masteries.mastery_marksmanship.name,
        [abilities.battleAbilities.ranged.physicalPiercing.battleAbility_masterCrossbowShot]
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
        '', abilities.battleAbilities.melee.physicalSlashing.battleAbility_chakramSlash,
        masteries.mastery_chakramThrowing.name,
        [
            abilities.battleAbilities.melee.physicalSlashing.battleAbility_masterChakramSlash,
            abilities.battleAbilities.ranged.physicalSlashing.battleAbility_chakramThrow
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
        '', abilities.battleAbilities.ranged.acid.battleAbility_acidBombThrow,
        masteries.mastery_bombThrowing.name, 
        [abilities.battleAbilities.ranged.acid.battleAbility_masterAcidBombThrow]
    ]
)

const weapons = {
    item_apprenticeRod,
    item_magisterScepter,
    item_steelAxeRightHand,
    item_steelAxeLeftHand,
    item_steelGreataxe,
    item_steelGreatsword,
    item_steelMace,
    item_steelSwordRightHand,
    item_steelSwordLeftHand,
    item_runicGreataxe,
    item_runicGreatsword,
    item_oakBow,
    item_oakCrossow,
    item_steelChakram,
    item_acidBomd
}

export default weapons