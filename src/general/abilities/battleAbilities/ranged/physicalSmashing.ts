import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_windBlow = createBattleAbility(
    ['Wind Blow', '', images.wizardSpells.windBlow], 
    {Mana: 1}, 
    [1, DamageType.physicalSmashing, 1, 70]
);

const physicalSmashing = {
    battleAbility_windBlow,
}

export default physicalSmashing