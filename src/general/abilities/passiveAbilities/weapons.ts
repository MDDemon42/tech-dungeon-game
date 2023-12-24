import { createPassiveAbility } from ".";
import { UserParam } from "../../../enums-and-interfaces/enums";

const mageWeapon = createPassiveAbility(
    [
        '', chrome.i18n.getMessage('mage_weapon'), ''
    ],
    {
        [UserParam.mana]: 2
    },
    null,
    0
);

const weapons = {
    mageWeapon
}

export default weapons