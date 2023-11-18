import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

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

const fire = {
    battleAbility_flame,
    battleAbility_fireball,
    battleAbility_fireWave,
}

export default fire