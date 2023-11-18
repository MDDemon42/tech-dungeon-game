import { createBattleAbility } from ".";
import { DamageType } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const battleAbility_runicGreatswordSlash = createBattleAbility(
    ['Fire greatsword slash', '', images.guildianLearnings.runicGreatsword], 
    {Mana: 1, Stamina: 2}, 
    [3, DamageType.fire, 1, 70]
);

const battleAbility_runicGreataxeSlash = createBattleAbility(
    ['Cold greataxe slash', '', images.guildianLearnings.runicGreataxe], 
    {Mana: 1, Stamina: 2}, 
    [3, DamageType.cold, 1, 70]
);

const battleAbility_magicBolt = createBattleAbility(
    ['Magic Bolt', '', images.wizardSpells.magicBolt], 
    {Mana: 1}, 
    [1, DamageType.electrical, 1, 85]
);

const battleAbility_iceShard = createBattleAbility(
    ['Ice Shard', '', images.wizardSpells.iceShard], 
    {Mana: 1}, 
    [1, DamageType.physicalPiercing, 1, 70]
);

const battleAbility_iceSpear = createBattleAbility(
    ['Ice Spear', '', images.wizardSpells.iceSpear], 
    {Mana: 2}, 
    [2, DamageType.physicalPiercing, 1, 70]
);

const battleAbility_iceHail = createBattleAbility(
    ['Ice Hail', '', images.wizardSpells.iceHail], 
    {Mana: 2}, 
    [1, DamageType.physicalPiercing, 3, 70]
);

const battleAbility_coldDeath = createBattleAbility(
    ['Cold Death', '', images.wizardSpells.coldDeath], 
    {Mana: 3}, 
    [8, DamageType.cold, 1, 100]
);

const battleAbility_flame = createBattleAbility(
    ['Flame', '', images.wizardSpells.flame], 
    {Mana: 1}, 
    [1, DamageType.fire, 1, 70]
);

const battleAbility_fireball = createBattleAbility(
    ['Fireball', '', images.wizardSpells.fireball], 
    {Mana: 2}, 
    [2, DamageType.fire, 3, 70]
);

const battleAbility_fireWave = createBattleAbility(
    ['Fire Wave', '', images.wizardSpells.fireWave], 
    {Mana: 3}, 
    [2, DamageType.fire, 5, 85]
);

const battleAbility_windBlow = createBattleAbility(
    ['Wind Blow', '', images.wizardSpells.windBlow], 
    {Mana: 1}, 
    [1, DamageType.physicalSmashing, 1, 70]
);

const battleAbility_thunderPunch = createBattleAbility(
    ['Thunder Punch', '', images.wizardSpells.thunderPunch], 
    {Mana: 1, Stamina: 1}, 
    [2, DamageType.physicalSmashing, 1, 70]
);

const battleAbility_airDeprivation = createBattleAbility(
    ['Air Deprivation', '', images.wizardSpells.airDeprivation], 
    {Mana: 3}, 
    [8, DamageType.suffocation, 1, 100]
);

const magic = {
    battleAbility_runicGreatswordSlash,
    battleAbility_runicGreataxeSlash,
    battleAbility_magicBolt,
    battleAbility_iceShard,
    battleAbility_iceSpear,
    battleAbility_iceHail,
    battleAbility_coldDeath,
    battleAbility_flame,
    battleAbility_fireball,
    battleAbility_fireWave,
    battleAbility_windBlow,
    battleAbility_thunderPunch,
    battleAbility_airDeprivation
}

export default magic