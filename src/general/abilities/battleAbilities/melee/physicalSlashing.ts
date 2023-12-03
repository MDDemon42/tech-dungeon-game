import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_swordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('sword_slash'), 
        '', 
        images.normalItems.steelSword
    ], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_affiliatedSwordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('sword_slash'), 
        '', 
        images.normalItems.steelSword
    ], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 95]
);

const battleAbility_dualSwordsSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('dual_sword_slash'), 
        '', 
        images.guildianLearnings.dualSwords
    ], 
    {Stamina: 2}, 
    [3, DamageType.physicalSlashing, 1, 95]
);

const battleAbility_chakramSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('chakram_slash'), 
        '', 
        images.guildianLearnings.chakram
    ], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_affiliatedChakramSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('chakram_slash'), 
        '', 
        images.guildianLearnings.chakram
    ],
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 95]
);

const battleAbility_steelGreataxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greataxe_slash'), 
        '', 
        images.normalItems.steelGreataxe
    ], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_runicGreataxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greataxe_slash'), 
        '', 
        images.guildianLearnings.runicGreataxe
    ], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_steelGreatswordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greatsword_slash'), 
        '', 
        images.normalItems.steelGreatsword
    ], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_runicGreatswordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('greatsword_slash'),
        '', 
        images.guildianLearnings.runicGreatsword
    ], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_ripApartMinor = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_minor'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_ripApartMere = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_mere'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 3}, 
    [3, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_ripApartMajor = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_major'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 4}, 
    [4, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_ripApartMonstrous = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_monstrous'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 5}, 
    [5, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_axeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('axe_slash'), 
        '', 
        images.normalItems.axe
    ], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 70]
);

const battleAbility_affiliatedAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('axe_slash'),  
        '', 
        images.normalItems.axe
    ], 
    {Stamina: 1}, 
    [1, DamageType.physicalSlashing, 1, 95]
);

const battleAbility_doubleAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('double_axe_slash'),   
        '', 
        images.normalItems.doubleAxeSlash
    ], 
    {Stamina: 2}, 
    [2, DamageType.physicalSlashing, 1, 70]
); 

const battleAbility_affiliatedDoubleAxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('double_axe_slash'),
        '', 
        images.normalItems.doubleAxeSlash
    ], 
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
    battleAbility_affiliatedChakramSlash,
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