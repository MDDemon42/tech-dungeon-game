import { createPassiveAbility } from ".";
import { DamageType } from "../../../enums-and-interfaces/enums";

const scales = createPassiveAbility(
    [
        chrome.i18n.getMessage('scales'), 
        chrome.i18n.getMessage('resistance_piercing_1_and_dodge_15'),
    ],
    null,
    {[DamageType.physicalPiercing]: 1}, 
    15
);

const fur = createPassiveAbility(
    [
        chrome.i18n.getMessage('fur'), 
        chrome.i18n.getMessage('resistance_cold_1'),
    ],
    null,
    {[DamageType.cold]: 1},
    0
);

const spikedShell = createPassiveAbility(
    [
        chrome.i18n.getMessage('spiked_shell'), 
        chrome.i18n.getMessage('resistance_all_physical_1'),
    ],
    null,
    {
        [DamageType.physicalPiercing]: 1,
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalSmashing]: 1
    },
    -10
);

const hooves = createPassiveAbility(
    [
        chrome.i18n.getMessage('hooves'), 
        chrome.i18n.getMessage('resistance_cold_1'),
    ],
    null,
    {[DamageType.cold]: 1},
    0
);

const tailWithBlunt = createPassiveAbility(
    [
        chrome.i18n.getMessage('tail_with_blunt'), 
        chrome.i18n.getMessage('dodge_amount', ['10']),
    ],
    null,
    null,
    10
);

const tailWithCutter = createPassiveAbility(
    [
        chrome.i18n.getMessage('tail_with_cutter'), 
        chrome.i18n.getMessage('dodge_amount', ['10']),
    ],
    null,
    null,
    10
);

const tailWithSting = createPassiveAbility(
    [
        chrome.i18n.getMessage('tail_with_sting'), 
        chrome.i18n.getMessage('dodge_amount', ['15']),
    ],
    null,
    null,
    15
);

const mutations = {
    fur,
    hooves,
    scales,
    spikedShell,
    tailWithBlunt,
    tailWithCutter,
    tailWithSting
}

export default mutations