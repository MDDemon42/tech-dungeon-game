import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_swordSlash = createBattleAbility(
    ['Sword slash', '', images.normalItems.steelSword], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_affiliatedSwordSlash = createBattleAbility(
    ['Sword slash', '', images.normalItems.steelSword], 
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

const battleAbility_steelGreataxeSlash = createBattleAbility(
    ['Greataxe slash', '', images.normalItems.steelGreataxe], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_runicGreataxeSlash = createBattleAbility(
    ['Greataxe slash', '', images.guildianLearnings.runicGreataxe], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_steelGreatswordSlash = createBattleAbility(
    ['Greatsword slash', '', images.normalItems.steelGreatsword], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_runicGreatswordSlash = createBattleAbility(
    ['Greatsword slash', '', images.guildianLearnings.runicGreatsword], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_ripApartMinor = createBattleAbility(
    ['Rip Apart (minor)', '', images.mutantEvolvings.ripApart], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_ripApartMere = createBattleAbility(
    ['Rip Apart (mere)', '', images.mutantEvolvings.ripApart], 
    {Stamina: 3}, 
    [3, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_ripApartMajor = createBattleAbility(
    ['Rip Apart (major)', '', images.mutantEvolvings.ripApart], 
    {Stamina: 4}, 
    [4, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_ripApartMonstrous = createBattleAbility(
    ['Rip Apart (monstrous)', '', images.mutantEvolvings.ripApart], 
    {Stamina: 5}, 
    [5, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_axeSlash = createBattleAbility(
    ['Axe slash', '', images.normalItems.steelAxe], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_affiliatedAxeSlash = createBattleAbility(
    ['Axe slash', '', images.normalItems.steelAxe], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 95]
);

const battleAbility_doubleAxeSlash = createBattleAbility(
    ['Double axe slash', '', images.normalItems.doubleAxeSlash], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
); 

const battleAbility_affiliatedDoubleAxeSlash = createBattleAbility(
    ['Double axe slash', '', images.normalItems.doubleAxeSlash], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 95]
); 

const physicalSlashing = {
    battleAbility_axeSlash,
    battleAbility_affiliatedAxeSlash,
    battleAbility_doubleAxeSlash,
    battleAbility_affiliatedDoubleAxeSlash,
    battleAbility_swordSlash,
    battleAbility_affiliatedSwordSlash,
    battleAbility_dualSwordsSlash,
    battleAbility_chakramSlash,
    battleAbility_masterChakramSlash,
    battleAbility_ripApartMinor,
    battleAbility_ripApartMere,
    battleAbility_ripApartMajor,
    battleAbility_ripApartMonstrous,
    battleAbility_steelGreataxeSlash,
    battleAbility_runicGreataxeSlash,
    battleAbility_steelGreatswordSlash,
    battleAbility_runicGreatswordSlash,
}

export default physicalSlashing