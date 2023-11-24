import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_chakramThrow = createBattleAbility(
    [
        chrome.i18n.getMessage('chakram_throw'), 
        '', 
        images.guildianLearnings.chakram
    ], 
    {Blank: 0}, 
    [1, DamageType.physicalSlashing, 3, 70]
);

const physicalSlashing = {
    battleAbility_chakramThrow,
}

export default physicalSlashing