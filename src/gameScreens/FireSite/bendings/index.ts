import { IBending } from "../../../enums-and-interfaces/interfaces";
import abilities from "../../../general/abilities";
import supportAbilities from "../../../general/abilities/supportAbilities";
import { createBending } from "../../../general/bending";
import images from "../../../images/images";
import fireMasteries from "../masteries";

const flame = createBending(
    [
        chrome.i18n.getMessage('flame'),
        chrome.i18n.getMessage('flame_bending_description'),
        images.elementBendings.flame
    ],
    [
        fireMasteries.fireAffiliation.name,
        '', true,
        abilities.battleAbilities.ranged.fire.flame
    ]
);

const fireBall = createBending(
    [
        chrome.i18n.getMessage('fire_ball'),
        chrome.i18n.getMessage('fire_ball_bending_description'),
        images.elementBendings.fireball
    ],
    [
        fireMasteries.fireAffiliation.name,
        flame.name,
        true,
        abilities.battleAbilities.ranged.fire.fireBall
    ]
);

const flameShield = createBending(
    [
        chrome.i18n.getMessage('flame_shield'),
        chrome.i18n.getMessage('flame_shield_bending_description'),
        images.elementBendings.flameShield
    ],
    [
        fireMasteries.fireAffiliation.name,
        flame.name,
        true,
        supportAbilities.armor.flameShield
    ]
);

const fireWave = createBending(
    [
        chrome.i18n.getMessage('fire_wave'),
        chrome.i18n.getMessage('fire_wave_bending_description'),
        images.elementBendings.fireWave
    ],
    [
        fireMasteries.fireAffiliation.name,
        flame.name,
        true,
        abilities.battleAbilities.ranged.fire.fireWave
    ]
);

export const pyrokinesis = {
    flame,
    fireBall,
    flameShield,
    fireWave
}

export const fireSiteOptions: Record<string, IBending[]> = {
    0: [],
    1: [pyrokinesis.flame],
    2: [pyrokinesis.fireBall, pyrokinesis.flameShield],
    3: [pyrokinesis.fireWave]
};