import { createArmouryItem } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import abilities from "../../../general/abilities";
import images from "../../../images/images";
import academyMasteries from "../../Academy/masteries";
import guildMasteries from "../../Guild/masteries";
import crafts from "../crafts";

const musket = createArmouryItem(
    [
        chrome.i18n.getMessage('musket'),
        chrome.i18n.getMessage('musket_item_description'),
        images.armouryItems.musket
    ],
    [
        2, [InventoryPlace.bothHands], 1
    ],
    [
        '', 1,
        crafts.guns.craftMusket
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.musketShot,
        abilities.battleAbilities.melee.physicalSmashing.musketButtHit
    ], 
    null, 
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterMusketShot
        }
    ]
);

const battleMusket = createArmouryItem(
    [
        chrome.i18n.getMessage('battle_musket'),
        chrome.i18n.getMessage('battle_musket_item_description'),
        images.armouryItems.battleMusket
    ],
    [
        3, [InventoryPlace.bothHands], 1
    ],
    [
        '', 2,
        crafts.guns.craftBattleMusket
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.battleMusketShot,
        abilities.battleAbilities.melee.physicalSmashing.battleMusketButtHit,
        abilities.battleAbilities.melee.physicalPiercing.battleMusketPierce
    ], 
    null, 
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterBattleMusketShot
        }
    ]
);

const pistol = createArmouryItem(
    [
        chrome.i18n.getMessage('pistol'),
        chrome.i18n.getMessage('pistol_item_description'),
        images.armouryItems.pistol
    ],
    [
        2, 
        [
            InventoryPlace.rightHipItem, 
            InventoryPlace.leftHipItem, 
            InventoryPlace.rightHand
        ], 
        1
    ],
    [
        '', 0,
        crafts.guns.craftPistol
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.pistolShot
    ], 
    null, 
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.pistolShot
        }
    ]
);

const battlePistol = createArmouryItem(
    [
        chrome.i18n.getMessage('battle_pistol'),
        chrome.i18n.getMessage('battle_pistol_item_description'),
        images.armouryItems.battlePistol
    ],
    [
        3, [InventoryPlace.rightHand], 1
    ],
    [
        '', 1,
        crafts.guns.craftBattlePistol
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.battlePistolShot
    ], 
    null, 
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterBattlePistolShot
        }
    ]
);

const revolver = createArmouryItem(
    [
        chrome.i18n.getMessage('revolver'),
        chrome.i18n.getMessage('revolver_item_description'),
        images.armouryItems.revolver
    ],
    [
        3, 
        [
            InventoryPlace.rightHipItem, 
            InventoryPlace.leftHipItem,
            InventoryPlace.rightHand, 
            InventoryPlace.leftHand
        ], 
        1
    ],
    [
        '', 0,
        crafts.guns.craftRevolver
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.revolverDoubleShot
    ], 
    null, 
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterRevolverDoubleShot
        }
    ]
);

const battleRevolver = createArmouryItem(
    [
        chrome.i18n.getMessage('battle_revolver'),
        chrome.i18n.getMessage('battle_revolver_item_description'),
        images.armouryItems.battleRevolver
    ],
    [
        4, 
        [
            InventoryPlace.rightHand, 
            InventoryPlace.leftHand
        ], 
        1
    ],
    [
        '', 1,
        crafts.guns.craftBattleRevolver
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.battleRevolverDoubleShot,
        abilities.battleAbilities.melee.physicalSlashing.battleRevolverSlash
    ], 
    null, 
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterBattleRevolverDoubleShot
        },
        {
            linkedMastery: academyMasteries.swordAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedBattleRevolverSlash
        }
    ]
);

const rifle = createArmouryItem(
    [
        chrome.i18n.getMessage('rifle'),
        chrome.i18n.getMessage('rifle_item_description'),
        images.armouryItems.rifle
    ],
    [
        3, [InventoryPlace.bothHands], 1
    ],
    [
        '', 1,
        crafts.guns.craftRifle
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.rifleDoubleShot,
        abilities.battleAbilities.melee.physicalSmashing.rifleButtHit
    ], 
    null, 
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterRifleDoubleShot
        }
    ]
);

const battleRifle = createArmouryItem(
    [
        chrome.i18n.getMessage('battle_rifle'),
        chrome.i18n.getMessage('battle_rifle_item_description'),
        images.armouryItems.battleRifle
    ],
    [
        4, [InventoryPlace.bothHands], 1
    ],
    [
        '', 2,
        crafts.guns.craftBattleRifle
    ],
    [
        abilities.battleAbilities.ranged.physicalPiercing.battleRifleDoubleShot,
        abilities.battleAbilities.melee.physicalSmashing.battleRifleButtHit,
        abilities.battleAbilities.melee.physicalSlashing.battleRifleSlash
    ], 
    null, 
    [
        {
            linkedMastery: guildMasteries.marksmanship.name,
            masterAbility: abilities.battleAbilities.ranged.physicalPiercing.masterBattleRifleDoubleShot
        },
        {
            linkedMastery: academyMasteries.axeAffiliation.name,
            masterAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedBattleRifleSlash
        }
    ]
);

const guns = {
    musket,
    battleMusket,
    pistol,
    battlePistol,
    revolver,
    battleRevolver,
    rifle,
    battleRifle
}

export default guns