import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_spearPierce = createBattleAbility(
    [
        chrome.i18n.getMessage('spear_pierce'), 
        '', 
        images.normalItems.spear
    ], 
    {Stamina: 1}, 
    [1, DamageType.physicalPiercing, 1, 70]
);

const battleAbility_affiliatedSpearPierce = createBattleAbility(
    [
        chrome.i18n.getMessage('spear_pierce'), 
        '', 
        images.normalItems.spear
    ], 
    {Stamina: 1}, 
    [1, DamageType.physicalPiercing, 1, 95]
);

const physicalPiercing = {
    battleAbility_spearPierce,
    battleAbility_affiliatedSpearPierce
}

export default physicalPiercing