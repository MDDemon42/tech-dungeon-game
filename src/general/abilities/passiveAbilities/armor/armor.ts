import { createPassiveAbility } from ".."
import { DamageType, UserParam } from "../../../../enums-and-interfaces/enums"
import images from "../../../../images/images"

const passiveAbility_apprenticeHat = createPassiveAbility(
    [
        'Apprentice hat', 
        'Upgrades wearer`s max Mana capacity by 1', 
        images.wizardItems.apprenticeHat
    ],
    {
        [UserParam.mana]: 1
    },
    null
)

const passiveAbility_magisterHat = createPassiveAbility(
    [
        'Magister hat', 
        'Upgrades wearer`s max Mana capacity by 2', 
        images.wizardItems.magisterHat
    ],
    {
        [UserParam.mana]: 2
    },
    null
)

const passiveAbility_magisterRobe = createPassiveAbility(
    [
        'Magister robe', 
        'Upgrades wearer`s max Mana capacity by 2', 
        images.wizardItems.magisterRobe
    ],
    {
        [UserParam.mana]: 2
    },
    null
)

const passiveAbility_leatherArmor = createPassiveAbility(
    [
        'Leather armor', 
        'Upgrades wearer`s resistance to slashing damage by 1', 
        images.normalItems.leatherArmor
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1
    }
)

const passiveAbility_steelArmor = createPassiveAbility(
    [
        'Steel armor', 
        'Upgrades wearer`s resistance to all physical damage by 1', 
        images.normalItems.steelArmor
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 1,
        [DamageType.physicalSmashing]: 1
    }
)

const passiveAbility_steelShield = createPassiveAbility(
    [
        'Steel shield', 
        'Upgrades wearer`s resistance to piercing and slashing damage by 1', 
        images.normalItems.steelShield
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 1,
    }
)

const passiveAbility_nanoVest = createPassiveAbility(
    [
        'Nano vest', 
        'Upgrades wearer`s resistance to slashing damage by 1', 
        images.cyborgDetails.nanoVest
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1,
    }
)

const passiveAbility_nanoMatrix = createPassiveAbility(
    [
        'Nano matrix', 
        'Upgrades wearer`s resistance to slashing and piercing damage by 1', 
        images.cyborgDetails.nanoMatrix
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 1,
    }
)

const passiveAbility_scales = createPassiveAbility(
    [
        'Scales', 
        'Upgrades wearer`s resistance to piercing damage by 1 and dodge by 15', 
        images.mutantEvolvings.scales
    ],
    null,
    {
        [DamageType.physicalPiercing]: 1,
    }, 
    15
)

const passiveAbility_fur = createPassiveAbility(
    [
        'Fur', 
        'Upgrades wearer`s resistance to cold damage by 1', 
        images.mutantEvolvings.fur
    ],
    null,
    {
        [DamageType.cold]: 1,
    }
)

const passiveAbility_tailWithSting = createPassiveAbility(
    [
        'Tail with sting', 
        'Upgrades wearer`s dodge by 15', 
        images.mutantEvolvings.tailWithSting
    ],
    null,
    null,
    15
)

const passiveAbility_intuition = createPassiveAbility(
    [
        'Intuition', 
        'Upgrades wearer`s dodge by 15', 
        images.psionInsights.intuition
    ],
    null,
    null,
    15
)

const passiveAbility_guardianField = createPassiveAbility(
    [
        'Guardian field', 
        'Upgrades every wearer`s elemental resistance by 1', 
        images.psionInsights.guardianField
    ],
    null,
    {
        [DamageType.cold]: 1,
        [DamageType.electrical]: 1,
        [DamageType.fire]: 1,
        [DamageType.psionic]: 1 
    }
)

const armor = {
    passiveAbility_apprenticeHat,
    passiveAbility_magisterHat,
    passiveAbility_magisterRobe,
    passiveAbility_leatherArmor,
    passiveAbility_steelArmor,
    passiveAbility_steelShield,
    passiveAbility_nanoVest,
    passiveAbility_nanoMatrix,
    passiveAbility_scales,
    passiveAbility_fur,
    passiveAbility_tailWithSting,
    passiveAbility_intuition,
    passiveAbility_guardianField
}

export default armor