import { createPassiveAbility } from ".."
import { DamageType, UserParam } from "../../../../enums-and-interfaces/enums"
import images from "../../../../images/images"

const passiveAbility_apprenticeHat = createPassiveAbility(
    [
        chrome.i18n.getMessage('apprentice_hat'), 
        chrome.i18n.getMessage('max_mana_1'), 
        images.wizardItems.apprenticeHat
    ],
    {
        [UserParam.mana]: 1
    },
    null
)

const passiveAbility_magisterHat = createPassiveAbility(
    [
        chrome.i18n.getMessage('magister_hat'),
        chrome.i18n.getMessage('max_mana_2'), 
        images.wizardItems.magisterHat
    ],
    {
        [UserParam.mana]: 2
    },
    null
)

const passiveAbility_magisterRobe = createPassiveAbility(
    [
        chrome.i18n.getMessage('magister_robe'),
        chrome.i18n.getMessage('max_mana_2'),  
        images.wizardItems.magisterRobe
    ],
    {
        [UserParam.mana]: 2
    },
    null
)

const passiveAbility_leatherArmor = createPassiveAbility(
    [
        chrome.i18n.getMessage('leather_armor'),
        chrome.i18n.getMessage('resistance_slashing_1'), 
        images.normalItems.leatherArmor
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1
    }
)

const passiveAbility_steelArmor = createPassiveAbility(
    [
        chrome.i18n.getMessage('steel_armor'),
        chrome.i18n.getMessage('resistance_all_physical_1'),
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
        chrome.i18n.getMessage('steel_shield'),
        chrome.i18n.getMessage('resistance_piercing_and_slashing_1'), 
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
        chrome.i18n.getMessage('nano_vest'), 
        chrome.i18n.getMessage('resistance_slashing_1'),
        images.cyborgDetails.nanoVest
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1,
    }
)

const passiveAbility_nanoMatrix = createPassiveAbility(
    [
        chrome.i18n.getMessage('nano_matrix'), 
        chrome.i18n.getMessage('resistance_piercing_and_slashing_1'), 
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
        chrome.i18n.getMessage('scales'), 
        chrome.i18n.getMessage('resistance_piercing_1_and_dodge_15'), 
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
        chrome.i18n.getMessage('fur'), 
        chrome.i18n.getMessage('resistance_cold_1'), 
        images.mutantEvolvings.fur
    ],
    null,
    {
        [DamageType.cold]: 1,
    }
)

const passiveAbility_tailWithSting = createPassiveAbility(
    [
        chrome.i18n.getMessage('tail_with_sting'), 
        chrome.i18n.getMessage('dodge_15'),  
        images.mutantEvolvings.tailWithSting
    ],
    null,
    null,
    15
)

const passiveAbility_intuition = createPassiveAbility(
    [
        chrome.i18n.getMessage('intuition'), 
        chrome.i18n.getMessage('dodge_15'), 
        images.psionInsights.intuition
    ],
    null,
    null,
    15
)

const passiveAbility_guardianField = createPassiveAbility(
    [
        chrome.i18n.getMessage('guardian_field'),  
        chrome.i18n.getMessage('resistance_all_elemental_1'), 
        images.psionInsights.guardianField
    ],
    null,
    {
        [DamageType.acid]: 1,
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