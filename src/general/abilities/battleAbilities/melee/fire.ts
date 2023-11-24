import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_runicGreatswordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('runic_greatsword_slash'), 
        '', 
        images.guildianLearnings.runicGreatsword
    ], 
    {Mana: 1, Stamina: 2}, 
    [3, DamageType.fire, 1, 70]
);

const fire = {
    battleAbility_runicGreatswordSlash
}

export default fire