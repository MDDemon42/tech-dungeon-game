import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_acidBombThrow = createBattleAbility(
    ['Acid bomb throw', '', images.normalItems.acidBomb], 
    {Blank: 0}, 
    [1, DamageType.acid, 1, 70]
);

const battleAbility_masterAcidBombThrow = createBattleAbility(
    ['Master acid bomb throw', '', images.normalItems.acidBomb], 
    {Blank: 0}, 
    [1, DamageType.acid, 1, 95]
);

const acid = {
    battleAbility_acidBombThrow,
    battleAbility_masterAcidBombThrow,
}

export default acid