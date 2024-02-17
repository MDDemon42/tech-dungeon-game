import { createPassiveAbility } from ".";
import { UserParam, DamageType } from "../../../enums-and-interfaces/enums";

const titanSkin = createPassiveAbility(
    [
        chrome.i18n.getMessage('titan_skin'), 
        chrome.i18n.getMessage('resistance_titan_invincibility'),
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
);

const rituals = {
    titanSkin
}

export default rituals