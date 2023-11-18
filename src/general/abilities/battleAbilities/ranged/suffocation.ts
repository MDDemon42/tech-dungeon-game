import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_airDeprivation = createBattleAbility(
    ['Air Deprivation', '', images.wizardSpells.airDeprivation], 
    {Mana: 3}, 
    [8, DamageType.suffocation, 1, 100]
);

const suffocation = {
    battleAbility_airDeprivation
}

export default suffocation