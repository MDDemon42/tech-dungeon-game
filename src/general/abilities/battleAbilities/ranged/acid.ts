import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const acidBombThrow = createBattleAbility(
    [
        chrome.i18n.getMessage('acid_bomb_throw'), 
        '', 
        images.normalItems.acidBomb
    ], 
    {Blank: 0}, 
    {[DamageType.acid]: 1},
    [1, 70]
);

const masterAcidBombThrow = createBattleAbility(
    [
        chrome.i18n.getMessage('acid_bomb_throw'), 
        '', 
        images.normalItems.acidBomb
    ], 
    {Blank: 0}, 
    {[DamageType.acid]: 1},
    [1, 95]
);

const acidizerSpill = createBattleAbility(
    [
        chrome.i18n.getMessage('acidizer_spill'), 
        '', 
        images.cyborgDetails.acidizer
    ], 
    {Blank: 0}, 
    {[DamageType.acid]: 1},
    [1, 70]
);

const acidSpit = createBattleAbility(
    [
        chrome.i18n.getMessage('acid_spit'), 
        '', 
        images.mutantEvolvings.acidSpit
    ], 
    {Blank: 0}, 
    {[DamageType.acid]: 1},
    [1, 70]
);

const acid = {
    acidBombThrow,
    masterAcidBombThrow,
    acidSpit,
    acidizerSpill
}

export default acid