import { createBattleAbility } from ".";
import images from "../../../images/images";
import { DamageTypes } from "../../../interfaces/interfaces";

const battleAbility_runicGreatswordSlash = createBattleAbility(
    ['Runic greatsword slash', '', images.guildianLearnings.runicSword], 
    {Mana: 1, Stamina: 2}, 
    [3, DamageTypes.fire, 1, 70]
);

const battleAbility_magicBolt = createBattleAbility(
    ['Magic bolt', '', images.wizardSpells.magicBolt], 
    {Mana: 1}, 
    [1, DamageTypes.electrical, 1, 85]
);

const battleAbility_fireball = createBattleAbility(
    ['Fireball', '', images.wizardSpells.fireball], 
    {Mana: 2}, 
    [2, DamageTypes.electrical, 5, 70]
);

const magic = {
    battleAbility_runicGreatswordSlash,
    battleAbility_magicBolt,
    battleAbility_fireball
}

export default magic