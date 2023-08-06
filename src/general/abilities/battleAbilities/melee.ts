import images from "../../../images/images";
import { createBattleAbility } from ".";
import { DamageType } from "../../../enums-and-interfaces/enums";

const battleAbility_fistPunch = createBattleAbility(
    ['Fist punch', '', images.misc.fistPunch], 
    {Stamina: 1}, 
    [1, DamageType.physicalSmashing, 1, 70]
);

const battleAbility_swordSlash = createBattleAbility(
    ['Sword slash', '', images.normalItems.sword], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_leftHandSwordSlash = createBattleAbility(
    ['Left hand sword slash', '', images.normalItems.sword], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_masterSwordSlash = createBattleAbility(
    ['Master sword slash', '', images.normalItems.sword], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 95]
);

const battleAbility_dualSwordsSlash = createBattleAbility(
    ['Dual swords slash', '', images.guildianLearnings.dualSwords], 
    {Stamina: 2}, 
    [3, DamageType.physicalSlashing, 1, 95]
);

const battleAbility_chakramSlash = createBattleAbility(
    ['Chakram slash', '', images.guildianLearnings.chakram], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_masterChakramSlash = createBattleAbility(
    ['Master chakram slash', '', images.guildianLearnings.chakram], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 95]
);

const battleAbility_greataxeSlash = createBattleAbility(
    ['Greataxe slash', '', images.normalItems.greataxe], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_greatswordSlash = createBattleAbility(
    ['Greatsword slash', '', images.guildianLearnings.runicSword], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const melee = {
    battleAbility_fistPunch,
    battleAbility_swordSlash,
    battleAbility_leftHandSwordSlash,
    battleAbility_masterSwordSlash,
    battleAbility_dualSwordsSlash,
    battleAbility_chakramSlash,
    battleAbility_masterChakramSlash,
    battleAbility_greataxeSlash,
    battleAbility_greatswordSlash
}

export default melee