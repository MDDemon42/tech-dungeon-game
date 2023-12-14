import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const magicBolt = createBattleAbility(
    [
        chrome.i18n.getMessage('electrical_bolt'), 
        '', 
        images.wizardSpells.magicBolt
    ], 
    {Mana: 1}, 
    {[DamageType.electrical]: 1},
    [1, 85]
);

const electrical = {
    magicBolt,
}

export default electrical