import { IBending } from "../../../enums-and-interfaces/interfaces";
import abilities from "../../../general/abilities";
import { createBending } from "../../../general/bending";
import images from "../../../images/images";
import { senseOfFlame } from "../masteries";

const flame = createBending(
    [
        chrome.i18n.getMessage('flame'),
        chrome.i18n.getMessage('flame_bending_description'),
        images.elementBendings.flame
    ],
    [
        senseOfFlame.name,
        '', true,
        abilities.battleAbilities.ranged.fire.flame
    ]
)

const fireBall = createBending(
    [
        chrome.i18n.getMessage('fire_ball'),
        chrome.i18n.getMessage('fire_ball_bending_description'),
        images.elementBendings.fireball
    ],
    [
        senseOfFlame.name,
        flame.name,
        true,
        abilities.battleAbilities.ranged.fire.fireBall
    ]
)

const fireWave = createBending(
    [
        chrome.i18n.getMessage('fire_wave'),
        chrome.i18n.getMessage('fire_wave_bending_description'),
        images.elementBendings.fireWave
    ],
    [
        senseOfFlame.name,
        fireBall.name,
        true,
        abilities.battleAbilities.ranged.fire.fireWave
    ]
)

export const pyrokinesis = {
    flame,
    fireBall,
    fireWave
}

export const fireSiteOptions: Record<string, IBending[]> = {
    0: [],
    1: [pyrokinesis.flame],
    2: [pyrokinesis.fireBall],
    3: [pyrokinesis.fireWave]
};