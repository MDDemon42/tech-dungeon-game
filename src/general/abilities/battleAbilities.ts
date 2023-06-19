import images from "../../images/images"
import { DamageTypes, IBattleAbility } from "../../types/interfaces"

const battleAbility_swordSlash: IBattleAbility = {
    name: 'Sword slash',
    description: '',
    image: images.normalItems.sword,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 1,
    damage: 1,
    damageType: DamageTypes.physical,
    targetAmount: 1,
    hitChance: 70
}

const battleAbility_masterSwordSlash: IBattleAbility = {
    name: 'Master sword slash',
    description: '',
    image: images.normalItems.sword,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 1,
    damage: 1,
    damageType: DamageTypes.physical,
    targetAmount: 1,
    hitChance: 95
}

const battleAbility_acidBombThrow: IBattleAbility = {
    name: 'Acid bomb throw',
    description: '',
    image: images.normalItems.acidBomb,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 0,
    damage: 1,
    damageType: DamageTypes.acid,
    targetAmount: 1,
    hitChance: 70
}

const battleAbility_masterAcidBombThrow: IBattleAbility = {
    name: 'Master acid bomb throw',
    description: '',
    image: images.normalItems.acidBomb,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 0,
    damage: 1,
    damageType: DamageTypes.acid,
    targetAmount: 1,
    hitChance: 95
}

const battleAbilities = {
    battleAbility_swordSlash,
    battleAbility_masterSwordSlash,
    battleAbility_acidBombThrow,
    battleAbility_masterAcidBombThrow
}

export default battleAbilities