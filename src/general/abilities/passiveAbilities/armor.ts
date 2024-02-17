import { createPassiveAbility } from ".";
import { DamageType, UserParam } from "../../../enums-and-interfaces/enums";

const apprenticeHat = createPassiveAbility(
    [
        chrome.i18n.getMessage('apprentice_hat'), 
        chrome.i18n.getMessage('max_mana_1'),
    ],
    {[UserParam.mana]: 1},
    null, 0
)

const magisterHat = createPassiveAbility(
    [
        chrome.i18n.getMessage('magister_hat'), 
        chrome.i18n.getMessage('max_mana_2'),
    ],
    {[UserParam.mana]: 2},
    null, 0
)

const magisterRobe = createPassiveAbility(
    [
        chrome.i18n.getMessage('magister_robe'), 
        chrome.i18n.getMessage('max_mana_2'),
    ],
    {[UserParam.mana]: 2},
    null, 0
)

const leatherArmor = createPassiveAbility(
    [
        chrome.i18n.getMessage('leather_armor'), 
        chrome.i18n.getMessage('resistance_slashing_1'),
    ],
    null,
    {[DamageType.physicalSlashing]: 1}, 
    0
)

const steelArmor = createPassiveAbility(
    [
        chrome.i18n.getMessage('steel_armor'), 
        chrome.i18n.getMessage('resistance_all_physical_1'),
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
        chrome.i18n.getMessage('wooden_shield'), 
        chrome.i18n.getMessage('resistance_piercing_1'),
    ],
    null,
    {[DamageType.physicalPiercing]: 1},
    0
);

const steelShield = createPassiveAbility(
    [
        chrome.i18n.getMessage('steel_shield'), 
        chrome.i18n.getMessage('resistance_piercing_and_slashing_1'),
    ],
    null,
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 1,
    },
    0
);

const armor = {
    apprenticeHat,
    magisterHat,
    magisterRobe,
    leatherArmor,
    steelArmor,
    woodenShield,
    steelShield
}

export default armor