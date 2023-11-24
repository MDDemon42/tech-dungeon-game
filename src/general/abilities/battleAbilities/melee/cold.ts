import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_runicGreataxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('runic_greataxe_slash'), 
        '', 
        images.guildianLearnings.runicGreataxe
    ], 
    {Mana: 1, Stamina: 2}, 
    [3, DamageType.cold, 1, 70]
);

const cold = {
    battleAbility_runicGreataxeSlash,
}

export default cold