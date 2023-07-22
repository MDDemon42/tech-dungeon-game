import { createBattleAbility } from ".";
import { DamageType } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const battleAbility_acidBombThrow = createBattleAbility(
    ['Acid bomb throw', '', images.normalItems.acidBomb], 
    {Blank: 0}, 
    [1, DamageType.acid, 1, 70]
);

const battleAbility_masterAcidBombThrow = createBattleAbility(
    ['Master acid bomb throw', '', images.normalItems.acidBomb], 
    {Blank: 0}, 
    [1, DamageType.acid, 1, 95]
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

const battleAbility_chakramThrow = createBattleAbility(
    ['Chakram throw', '', images.guildianLearnings.chakram], 
    {Blank: 0}, 
    [1, DamageType.physicalSlashing, 2, 70]
);

const ranged = {
    battleAbility_acidBombThrow,
    battleAbility_masterAcidBombThrow,
    battleAbility_oakBowShot,
    battleAbility_masterOakBowShot,
    battleAbility_crossbowShot,
    battleAbility_masterCrossbowShot,
    battleAbility_chakramThrow
}

export default ranged