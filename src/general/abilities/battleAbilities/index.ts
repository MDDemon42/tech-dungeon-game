import images from "../../../images/images"
import { DamageTypes, IBattleAbility, UserParam } from "../../../types/interfaces"
import magic from "./magic";
import melee from "./melee";
import ranged from "./ranged";

export function createBattleAbility(
    name: string,
    description: string,
    image: any,
    costs: {
        [UserParam.health]?: number,
        [UserParam.mana]?: number,
        [UserParam.focus]?: number,
        [UserParam.stamina]?: number,
        [UserParam.blank]?: number        
    },
    damage: number,
    damageType: DamageTypes,
    hitChance: number,
    targetAmount: number
): IBattleAbility {
    return {
        name, description, image,
        costs,
        damage, damageType, targetAmount, hitChance
    }
}

const battleAbilities = {
    battleAbility_swordSlash: melee.battleAbility_swordSlash,
    battleAbility_masterSwordSlash: melee.battleAbility_masterSwordSlash,
    battleAbilities_dualSwordsSlash: melee.battleAbilities_dualSwordsSlash,
    battleAbility_chakramSlash: melee.battleAbility_chakramSlash,
    battleAbility_masterChakramSlash: melee.battleAbility_masterChakramSlash,
    battleAbility_greataxeSlash: melee.battleAbility_greataxeSlash,
    battleAbility_greatswordSlash: melee.battleAbility_greatswordSlash,

    battleAbility_acidBombThrow: ranged.battleAbility_acidBombThrow,
    battleAbility_masterAcidBombThrow: ranged.battleAbility_masterAcidBombThrow,
    battleAbility_oakBowShot: ranged.battleAbility_oakBowShot,
    battleAbility_masterOakBowShot: ranged.battleAbility_masterOakBowShot,
    battleAbility_crossbowShot: ranged.battleAbility_crossbowShot,
    battleAbility_masterCrossbowShot: ranged.battleAbility_masterCrossbowShot,
    battleAbility_chakramThrow: ranged.battleAbility_chakramThrow,

    battleAbility_runicGreatswordSlash: magic.battleAbility_runicGreatswordSlash,
    battleAbilities_magicBolt: magic.battleAbilities_magicBolt,
    battleAbilities_fireball: magic.battleAbilities_fireball
}

export default battleAbilities