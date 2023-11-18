import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

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

const battleAbility_oakBowShot = createBattleAbility(
    ['Oak bow shot', '', images.normalItems.bow], 
    {Stamina: 1}, 
    [1, DamageType.physicalPiercing, 1, 70]
);

const battleAbility_masterOakBowShot = createBattleAbility(
    ['Master oak bow shot', '', images.normalItems.bow], 
    {Stamina: 1}, 
    [1, DamageType.physicalPiercing, 1, 95]
);

const battleAbility_crossbowShot = createBattleAbility(
    ['Crossbow shot', '', images.normalItems.crossbow], 
    {Blank: 0}, 
    [1, DamageType.physicalPiercing, 1, 60]
);

const battleAbility_masterCrossbowShot = createBattleAbility(
    ['Master crossbow shot', '', images.normalItems.crossbow], 
    {Blank: 0}, 
    [1, DamageType.physicalPiercing, 1, 95]
);

const physicalPiercing = {
    battleAbility_iceShard,
    battleAbility_iceSpear,
    battleAbility_iceHail,
    battleAbility_oakBowShot,
    battleAbility_masterOakBowShot,
    battleAbility_crossbowShot,
    battleAbility_masterCrossbowShot,
}

export default physicalPiercing