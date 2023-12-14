import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const taserWhiplash = createBattleAbility(
    [
        chrome.i18n.getMessage('taser_whiplash'),
        '', 
        images.cyborgDetails.taserWhip
    ], 
    {Stamina: 2}, 
    {[DamageType.electrical]: 2},
    [1, 70]
); 

const electrical = {
    taserWhiplash
}

export default electrical