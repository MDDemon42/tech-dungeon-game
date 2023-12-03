import { createBending } from ".";
import images from "../../images/images";
import abilities from "../abilities";
import elementsMasteries from "../masteries/elements";

const bending_flame = createBending(
    [
        chrome.i18n.getMessage('flame'),
        chrome.i18n.getMessage('flame_bending_description'),
        images.elementBendings.flame
    ],
    [
        elementsMasteries.mastery_senseOfFlame.name,
        '', true,
        abilities.battleAbilities.ranged.fire.battleAbility_flame
    ]
)

const bending_fireball = createBending(
    [
        chrome.i18n.getMessage('fire_ball'),
        chrome.i18n.getMessage('fire_ball_bending_description'),
        images.elementBendings.fireball
    ],
    [
        elementsMasteries.mastery_senseOfFlame.name,
        bending_flame.name,
        true,
        abilities.battleAbilities.ranged.fire.battleAbility_fireball
    ]
)

const bending_fireWave = createBending(
    [
        chrome.i18n.getMessage('fire_wave'),
        chrome.i18n.getMessage('fire_wave_bending_description'),
        images.elementBendings.fireWave
    ],
    [
        elementsMasteries.mastery_senseOfFlame.name,
        bending_fireball.name,
        true,
        abilities.battleAbilities.ranged.fire.battleAbility_fireWave
    ]
)

const pyrokinesis = {
    bending_flame,
    bending_fireball,
    bending_fireWave
}

export default pyrokinesis