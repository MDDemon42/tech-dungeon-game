import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const heatSaberSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('heat_saber_slash'), 
        '', 
        images.cyborgDetails.heatSaber
    ], 
    {Stamina: 2}, 
    {[DamageType.fire]: 2}, 
    [1, 70]
);

const fire = {
    heatSaberSlash
}

export default fire