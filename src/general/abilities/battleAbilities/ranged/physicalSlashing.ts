import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const chakramThrow = createBattleAbility(
    [
        chrome.i18n.getMessage('chakram_throw'), 
        '', 
        images.guildianLearnings.chakram
    ], 
    {Blank: 0}, 
    {[DamageType.physicalSlashing]: 1},
    [3, 70],
    true
);

const physicalSlashing = {
    chakramThrow,
}

export default physicalSlashing