import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_spearPierce = createBattleAbility(
    ['Spear pierce', '', images.normalItems.steelSpear], 
    {Stamina: 1}, 
    [1, DamageType.physicalPiercing, 1, 70]
);

const battleAbility_affiliatedSpearPierce = createBattleAbility(
    ['Spear pierce', '', images.normalItems.steelSpear], 
    {Stamina: 1}, 
    [1, DamageType.physicalPiercing, 1, 95]
);

const physicalPiercing = {
    battleAbility_spearPierce,
    battleAbility_affiliatedSpearPierce
}

export default physicalPiercing