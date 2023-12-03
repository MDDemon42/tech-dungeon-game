import { createBending } from ".";
import images from "../../images/images";
import abilities from "../abilities";
import elementsMasteries from "../masteries/elements";

const bending_windBlow = createBending(
    [
        chrome.i18n.getMessage('wind_blow'),
        chrome.i18n.getMessage('wind_blow_bending_description'),
        images.elementBendings.windBlow
    ],
    [
        elementsMasteries.mastery_senseOfWind.name,
        '', true,
        abilities.battleAbilities.ranged.physicalSmashing.battleAbility_windBlow
    ]
)

const bending_thunderPunch = createBending(
    [
        chrome.i18n.getMessage('thunder_punch'),
        chrome.i18n.getMessage('thunder_punch_bending_description'),
        images.elementBendings.thunderPunch
    ],
    [
        elementsMasteries.mastery_senseOfWind.name,
        bending_windBlow.name,
        true,
        abilities.battleAbilities.melee.physicalSmashing.battleAbility_thunderPunch
    ]
)

const bending_airDeprivation = createBending(
    [
        chrome.i18n.getMessage('air_deprivation'),
        chrome.i18n.getMessage('air_deprivation_bending_description'),
        images.elementBendings.airDeprivation
    ],
    [
        elementsMasteries.mastery_senseOfWind.name,
        bending_thunderPunch.name,
        true,
        abilities.battleAbilities.ranged.suffocation.battleAbility_airDeprivation
    ]
)

const aerotheurgy = {
    bending_windBlow,
    bending_thunderPunch,
    bending_airDeprivation
}

export default aerotheurgy