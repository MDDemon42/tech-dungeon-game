import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const windBlow = createBattleAbility(
    [
        chrome.i18n.getMessage('wind_blow'), 
        '', 
        images.elementBendings.windBlow
    ], 
    {Mana: 1}, 
    {[DamageType.physicalSmashing]: 1},
    [1, 70]
);

const telekineticPush = createBattleAbility(
    [
        chrome.i18n.getMessage('telekinetic_push'), 
        '', 
        images.misc.fistPunch
    ], 
    {Focus: 1}, 
    {[DamageType.physicalSmashing]: 1},
    [1, 95]
);

const telekineticPressure = createBattleAbility(
    [
        chrome.i18n.getMessage('telekinetic_pressure'), 
        '', 
        images.psionInsights.telekineticPressure
    ], 
    {Focus: 2}, 
    {[DamageType.physicalSmashing]: 2},
    [1, 100]
);

const physicalSmashing = {
    windBlow,
    telekineticPressure,
    telekineticPush
}

export default physicalSmashing