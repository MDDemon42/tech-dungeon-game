import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_runicGreathammerSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('runic_greathammer_smash'), 
        '', 
        images.guildianLearnings.runicGreathammer
    ], 
    {Mana: 1, Stamina: 2}, 
    [3, DamageType.electrical, 1, 70]
);

const electrical = {
    battleAbility_runicGreathammerSmash,
}

export default electrical