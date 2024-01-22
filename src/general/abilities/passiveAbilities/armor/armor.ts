import { createPassiveAbility } from "..";
import { DamageType, UserParam } from "../../../../enums-and-interfaces/enums";

const apprenticeHat = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('max_mana_1'), ''
    ],
    {[UserParam.mana]: 1},
    null, 0
)

const magisterHat = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('max_mana_2'), ''
    ],
    {[UserParam.mana]: 2},
    null, 0
)

const magisterRobe = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('max_mana_2'), ''
    ],
    {[UserParam.mana]: 2},
    null, 0
)

const leatherArmor = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_slashing_1'), ''
    ],
    null,
    {[DamageType.physicalSlashing]: 1}, 
    0
)

const steelArmor = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_all_physical_1'), ''
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 1,
        [DamageType.physicalSmashing]: 1
    },
    0
)

const woodenShield = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_piercing_1'), ''
    ],
    null,
    {[DamageType.physicalPiercing]: 1},
    0
);

const steelShield = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_piercing_and_slashing_1'), ''
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 1,
    },
    0
);

const energyShield = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_piercing_and_smashing_1'), ''
    ],
    null,
    {
        [DamageType.physicalSmashing]: 1,
        [DamageType.physicalPiercing]: 1,
    },
    0
);

const scales = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_piercing_1_and_dodge_15'), ''
    ],
    null,
    {[DamageType.physicalPiercing]: 1}, 
    15
)

const fur = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_cold_1'), ''
    ],
    null,
    {[DamageType.cold]: 1},
    0
)

const hooves = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_cold_1'), ''
    ],
    null,
    {[DamageType.cold]: 1},
    0
)

const tailWithBlunt = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('dodge_amount', ['10']), ''
    ],
    null,
    null,
    10
)

const tailWithSting = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('dodge_amount', ['15']), ''
    ],
    null,
    null,
    15
)

const intuition = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('dodge_amount', ['15']), ''
    ],
    null,
    null,
    15
)

const guardianField = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_all_elemental_1'), ''
    ],
    null,
    {
        [DamageType.acid]: 1,
        [DamageType.cold]: 1,
        [DamageType.electrical]: 1,
        [DamageType.fire]: 1,
        [DamageType.psionic]: 1 
    },
    0
)

const titanSkin = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('resistance_titan_invincibility'), ''
    ],
    {[UserParam.health]: 2},
    {
        [DamageType.physicalPiercing]: 2,
        [DamageType.physicalSlashing]: 2,
        [DamageType.physicalSmashing]: 2,
        [DamageType.acid]: 2,
        [DamageType.cold]: 2,
        [DamageType.electrical]: 8,
        [DamageType.fire]: 2
    },
    0
)

const armor = {
    apprenticeHat,
    magisterHat,
    magisterRobe,
    leatherArmor,
    steelArmor,
    woodenShield,
    steelShield,
    energyShield,
    scales,
    fur,
    hooves,
    tailWithBlunt,
    tailWithSting,
    intuition,
    guardianField,
    titanSkin
}

export default armor