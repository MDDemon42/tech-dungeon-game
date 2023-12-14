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

const suffocation = {
    airDeprivation
}

export default suffocation