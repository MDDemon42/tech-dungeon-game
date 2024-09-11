import { createSupportAbility } from ".";
import { DamageType } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const defensiveCharms = createSupportAbility(
    [
        chrome.i18n.getMessage('defensive_charms'),
        chrome.i18n.getMessage('defensive_charms_ability_description'), 
        images.wizardSpells.defensiveCharms
    ],
    {Mana: 1},
    {
        [DamageType.physicalPiercing]: 10,
        [DamageType.physicalSlashing]: 10,
        [DamageType.physicalSmashing]: 10 
    },
    [90]
);

const reverseDefensiveCharms = createSupportAbility(
    [ '', '', '' ],
    {Blank: 0},
    {
        [DamageType.physicalPiercing]: -10,
        [DamageType.physicalSlashing]: -10,
        [DamageType.physicalSmashing]: -10 
    },
    [100]
);

const flameShield = createSupportAbility(
    [
        chrome.i18n.getMessage('flame_shield'),
        chrome.i18n.getMessage('flame_shield_ability_description'), 
        images.elementBendings.flameShield
    ],
    {Mana: 1},
    {
        [DamageType.cold]: 1, 
    },
    [90]
);

const reverseFlameShield = createSupportAbility(
    [ '', '', '' ],
    {Blank: 0},
    {
        [DamageType.cold]: -1 
    },
    [100]
);

const armor = {
    defensiveCharms,
    reverseDefensiveCharms,
    flameShield,
    reverseFlameShield
};

export default armor