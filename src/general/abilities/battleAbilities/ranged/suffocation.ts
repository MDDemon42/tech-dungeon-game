import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const airDeprivation = createBattleAbility(
    [
        chrome.i18n.getMessage('air_deprivation'), 
        '', 
        images.elementBendings.airDeprivation
    ], 
    {Mana: 3}, 
    {[DamageType.suffocation]: 8},
    [1, 100]
);

const telekineticChoke = createBattleAbility(
    [
        chrome.i18n.getMessage('telekinetic_choke'), 
        '', 
        images.psionInsights.telekineticChoke
    ], 
    {Focus: 3}, 
    {[DamageType.suffocation]: 3},
    [1, 100]
);

const suffocation = {
    airDeprivation,
    telekineticChoke
}

export default suffocation