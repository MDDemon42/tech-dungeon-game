import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const swordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('sword_slash'), 
        '', 
        images.normalItems.steelSword
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedSwordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('sword_slash'), 
        '', 
        images.normalItems.steelSword
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const dualSwordsSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('dual_sword_slash'), 
        '', 
        images.guildianLearnings.dualSwords
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 3},
    [1, 95]
);

const chakramSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('chakram_slash'), 
        '', 
        images.guildianLearnings.chakram
    ], 
    {Stamina: 1},
    {[DamageType.physicalSlashing]: 1}, 
    [1, 70]
);

const affiliatedChakramSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('chakram_slash'), 
        '', 
        images.guildianLearnings.chakram
    ],
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1}, 
    [1, 95]
);

const steelGreataxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greataxe_slash'), 
        '', 
        images.normalItems.steelGreataxe
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2}, 
    [1, 70]
);

const runicGreataxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greataxe_slash'), 
        '', 
        images.guildianLearnings.runicGreataxe
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2}, 
    [1, 70]
);

const steelGreatswordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greatsword_slash'), 
        '', 
        images.normalItems.steelGreatsword
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2}, 
    [1, 70]
);

const runicGreatswordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greatsword_slash'),
        '', 
        images.guildianLearnings.runicGreatsword
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2}, 
    [1, 70]
);

const axeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('axe_slash'), 
        '', 
        images.normalItems.axe
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
);

const affiliatedAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('axe_slash'),  
        '', 
        images.normalItems.axe
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 95]
);

const doubleAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('double_axe_slash'),   
        '', 
        images.normalItems.doubleAxeSlash
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
); 

const affiliatedDoubleAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('double_axe_slash'),
        '', 
        images.normalItems.doubleAxeSlash
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 95]
); 

const cyberClawSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('cyber_claw_slash'),
        '', 
        images.cyborgDetails.cyberClaw
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
); 

const treeCutterSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('tree_cutter_slash'),
        '', 
        images.cyborgDetails.treeCutter
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
); 

const leftClawSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('left_claw_slash'),
        '', 
        images.mutantEvolvings.claws
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
); 

const rightClawSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('right_claw_slash'),
        '', 
        images.mutantEvolvings.claws
    ], 
    {Stamina: 1}, 
    {[DamageType.physicalSlashing]: 1},
    [1, 70]
); 

const bothClawsSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('both_claws_slash'),
        '', 
        images.mutantEvolvings.claws
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
); 

const raptorJump = createBattleAbility(
    [
        chrome.i18n.getMessage('raptor_jump'),
        '', 
        images.mutantEvolvings.raptorLegs
    ], 
    {Stamina: 2}, 
    {[DamageType.physicalSlashing]: 2},
    [1, 70]
); 

const physicalSlashing = {
    axeSlash,
    affiliatedAxeSlash,
    doubleAxeSlash,
    affiliatedDoubleAxeSlash,
    swordSlash,
    affiliatedSwordSlash,
    dualSwordsSlash,
    chakramSlash,
    affiliatedChakramSlash,
    steelGreataxeSlash,
    runicGreataxeSlash,
    steelGreatswordSlash,
    runicGreatswordSlash,

    cyberClawSlash,
    treeCutterSlash,
    leftClawSlash,
    rightClawSlash,
    bothClawsSlash,
    raptorJump
}

export default physicalSlashing