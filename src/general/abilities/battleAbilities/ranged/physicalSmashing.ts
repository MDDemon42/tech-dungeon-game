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

const physicalSmashing = {
    windBlow,
}

export default physicalSmashing