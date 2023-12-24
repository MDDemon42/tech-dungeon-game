import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const frost = createBattleAbility(
    [
        chrome.i18n.getMessage('frost'), 
        '', 
        images.elementBendings.coldAffiliation
    ], 
    {Mana: 1}, 
    {[DamageType.cold]: 1},
    [1, 70]
);

const coldDeath = createBattleAbility(
    [
        chrome.i18n.getMessage('cold_death'), 
        '', 
        images.elementBendings.coldDeath
    ], 
    {Mana: 3}, 
    {[DamageType.cold]: 8},
    [1, 100]
);

const freezerShot = createBattleAbility(
    [
        chrome.i18n.getMessage('freezer_shot'), 
        '', 
        images.cyborgDetails.freezer
    ], 
    {Blank: 0}, 
    {[DamageType.cold]: 1},
    [1, 70]
);

const cold = {
    frost,
    coldDeath,
    freezerShot
}

export default cold