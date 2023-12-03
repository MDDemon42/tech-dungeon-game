import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_airDeprivation = createBattleAbility(
    [
        chrome.i18n.getMessage('air_deprivation'), 
        '', 
        images.elementBendings.airDeprivation
    ], 
    {Mana: 3}, 
    [8, DamageType.suffocation, 1, 100]
);

const suffocation = {
    battleAbility_airDeprivation
}

export default suffocation