import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_fistPunch = createBattleAbility(
    ['Fist punch', '', images.misc.fistPunch], 
    {Stamina: 1}, 
    [1, DamageType.physicalSmashing, 1, 70]
);

const battleAbility_fistSmash = createBattleAbility(
    ['Fist smash', '', images.misc.fistPunch], 
    {Stamina: 1}, 
    [2, DamageType.physicalSmashing, 1, 70]
);

const battleAbility_maceSmash = createBattleAbility(
    ['Mace smash', '', images.normalItems.steelMace], 
    {Stamina: 1}, 
    [1, DamageType.physicalSmashing, 1, 70]
);

const battleAbility_affiliatedMaceSmash = createBattleAbility(
    ['Mace smash', '', images.normalItems.steelMace], 
    {Stamina: 1}, 
    [2, DamageType.physicalSmashing, 1, 70]
);

const battleAbility_thunderPunch = createBattleAbility(
    ['Thunder Punch', '', images.wizardSpells.thunderPunch], 
    {Mana: 1, Stamina: 1}, 
    [2, DamageType.physicalSmashing, 1, 70]
);

const physicalSmashing = {
    battleAbility_fistPunch,
    battleAbility_fistSmash,
    battleAbility_maceSmash,
    battleAbility_affiliatedMaceSmash,
    battleAbility_thunderPunch,
}

export default physicalSmashing