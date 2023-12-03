import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_windBlow = createBattleAbility(
    [
        chrome.i18n.getMessage('wind_blow'), 
        '', 
        images.elementBendings.windBlow
    ], 
    {Mana: 1}, 
    [1, DamageType.physicalSmashing, 1, 70]
);

const physicalSmashing = {
    battleAbility_windBlow,
}

export default physicalSmashing