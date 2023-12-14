import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const flame = createBattleAbility(
    [
        chrome.i18n.getMessage('flame'), 
        '', 
        images.elementBendings.flame
    ], 
    {Mana: 1}, 
    {[DamageType.fire]: 1},
    [1, 70]
);

const fireBall = createBattleAbility(
    [
        chrome.i18n.getMessage('fire_ball'), 
        '', 
        images.elementBendings.fireball
    ], 
    {Mana: 2}, 
    {[DamageType.fire]: 2},
    [3, 70]
);

const fireWave = createBattleAbility(
    [
        chrome.i18n.getMessage('fire_wave'), 
        '', 
        images.elementBendings.fireWave
    ], 
    {Mana: 3}, 
    {[DamageType.fire]: 2},
    [5, 85]
);

const laserShot = createBattleAbility(
    [
        chrome.i18n.getMessage('laser_shot'), 
        '', 
        images.cyborgDetails.laser
    ], 
    {Blank: 0}, 
    {[DamageType.fire]: 1},
    [1, 70]
);

const rocketLaunch = createBattleAbility(
    [
        chrome.i18n.getMessage('rocket_launch'), 
        '', 
        images.cyborgDetails.rocketLauncher
    ], 
    {Blank: 0}, 
    {[DamageType.fire]: 1},
    [5, 70]
);

const fire = {
    flame,
    fireBall,
    fireWave,
    laserShot,
    rocketLaunch
}

export default fire