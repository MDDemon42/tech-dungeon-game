import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_flame = createBattleAbility(
    [
        chrome.i18n.getMessage('flame'), 
        '', 
        images.elementBendings.flame
    ], 
    {Mana: 1}, 
    [1, DamageType.fire, 1, 70]
);

const battleAbility_fireball = createBattleAbility(
    [
        chrome.i18n.getMessage('fire_ball'), 
        '', 
        images.elementBendings.fireball
    ], 
    {Mana: 2}, 
    [2, DamageType.fire, 3, 70]
);

const battleAbility_fireWave = createBattleAbility(
    [
        chrome.i18n.getMessage('fire_wave'), 
        '', 
        images.elementBendings.fireWave
    ], 
    {Mana: 3}, 
    [2, DamageType.fire, 5, 85]
);

const fire = {
    battleAbility_flame,
    battleAbility_fireball,
    battleAbility_fireWave,
}

export default fire