import { createPassiveAbility } from ".";
import { DamageType } from "../../../enums-and-interfaces/enums";

const intuition = createPassiveAbility(
    [
        chrome.i18n.getMessage('intuition'), 
        chrome.i18n.getMessage('dodge_amount', ['15']),
    ],
    null,
    null,
    15
);

const guardianField = createPassiveAbility(
    [
        chrome.i18n.getMessage('guardian_field'), 
        chrome.i18n.getMessage('resistance_all_elemental_1'),
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
);

const psionics = {
    intuition,
    guardianField
}

export default psionics