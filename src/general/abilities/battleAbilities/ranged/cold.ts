import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_coldDeath = createBattleAbility(
    [
        chrome.i18n.getMessage('cold_death'), 
        '', 
        images.elementBendings.coldDeath
    ], 
    {Mana: 3}, 
    [8, DamageType.cold, 1, 100]
);

const cold = {
    battleAbility_coldDeath,
}

export default cold