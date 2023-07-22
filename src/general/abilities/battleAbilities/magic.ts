import { createBattleAbility } from ".";
import { DamageType } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const battleAbility_runicGreatswordSlash = createBattleAbility(
    ['Runic greatsword slash', '', images.guildianLearnings.runicSword], 
    {Mana: 1, Stamina: 2}, 
    [3, DamageType.fire, 1, 70]
);

const battleAbility_magicBolt = createBattleAbility(
    ['Magic bolt', '', images.wizardSpells.magicBolt], 
    {Mana: 1}, 
    [1, DamageType.electrical, 1, 85]
);

const battleAbility_fireball = createBattleAbility(
    ['Fireball', '', images.wizardSpells.fireball], 
    {Mana: 2}, 
    [2, DamageType.electrical, 5, 70]
);

const magic = {
    battleAbility_runicGreatswordSlash,
    battleAbility_magicBolt,
    battleAbility_fireball
}

export default magic