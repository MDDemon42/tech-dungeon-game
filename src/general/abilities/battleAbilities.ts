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

const battleAbilities_dualSwordsSlash: IBattleAbility = {
    name: 'Dual swords slash',
    description: '',
    image: images.guildianLearnings.dualSwords,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 2,
    damage: 3,
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

const battleAbility_oakBowShot: IBattleAbility = {
    name: 'Oak bow shot',
    description: '',
    image: images.normalItems.bow,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 1,
    damage: 1,
    damageType: DamageTypes.physical,
    targetAmount: 1,
    hitChance: 70
}

const battleAbility_masterOakBowShot: IBattleAbility = {
    name: 'Master oak bow shot',
    description: '',
    image: images.normalItems.bow,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 1,
    damage: 1,
    damageType: DamageTypes.physical,
    targetAmount: 1,
    hitChance: 95
}

const battleAbility_crossbowShot: IBattleAbility = {
    name: 'Crossbow shot',
    description: '',
    image: images.normalItems.crossbow,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 0,
    damage: 1,
    damageType: DamageTypes.physical,
    targetAmount: 1,
    hitChance: 60
}

const battleAbility_masterCrossbowShot: IBattleAbility = {
    name: 'Master crossbow shot',
    description: '',
    image: images.normalItems.crossbow,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 0,
    damage: 1,
    damageType: DamageTypes.physical,
    targetAmount: 1,
    hitChance: 95
}

const battleAbility_chakramSlash: IBattleAbility = {
    name: 'Chakram slash',
    description: '',
    image: images.guildianLearnings.chakram,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 1,
    damage: 1,
    damageType: DamageTypes.physical,
    targetAmount: 1,
    hitChance: 70
}

const battleAbility_masterChakramSlash: IBattleAbility = {
    name: 'Master chakram slash',
    description: '',
    image: images.guildianLearnings.chakram,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 1,
    damage: 1,
    damageType: DamageTypes.physical,
    targetAmount: 1,
    hitChance: 95
}

const battleAbility_chakramThrow: IBattleAbility = {
    name: 'Chakram throw',
    description: '',
    image: images.guildianLearnings.chakram,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 0,
    damage: 1,
    damageType: DamageTypes.physical,
    targetAmount: 2,
    hitChance: 70
}

const battleAbility_greataxeSlash: IBattleAbility = {
    name: 'Greataxe slash',
    description: '',
    image: images.normalItems.greataxe,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 2,
    damage: 2,
    damageType: DamageTypes.physical,
    targetAmount: 1,
    hitChance: 70
}

const battleAbility_greatswordSlash: IBattleAbility = {
    name: 'Greatsword slash',
    description: '',
    image: images.guildianLearnings.runicSword,
    manaCost: 0,
    focusCost: 0,
    staminaCost: 2,
    damage: 2,
    damageType: DamageTypes.physical,
    targetAmount: 1,
    hitChance: 70
}

const battleAbility_runicGreatswordSlash: IBattleAbility = {
    name: 'Runic greatsword slash',
    description: '',
    image: images.guildianLearnings.runicSword,
    manaCost: 1,
    focusCost: 0,
    staminaCost: 2,
    damage: 3,
    damageType: DamageTypes.fire,
    targetAmount: 1,
    hitChance: 70
}

const battleAbilities = {
    battleAbility_swordSlash,
    battleAbility_masterSwordSlash,
    battleAbilities_dualSwordsSlash,
    battleAbility_acidBombThrow,
    battleAbility_masterAcidBombThrow,
    battleAbility_oakBowShot,
    battleAbility_masterOakBowShot,
    battleAbility_crossbowShot,
    battleAbility_masterCrossbowShot,
    battleAbility_chakramSlash,
    battleAbility_masterChakramSlash,
    battleAbility_chakramThrow,
    battleAbility_greataxeSlash,
    battleAbility_greatswordSlash,
    battleAbility_runicGreatswordSlash
}

export default battleAbilities