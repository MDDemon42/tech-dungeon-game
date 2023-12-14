import { IBending } from "../../../enums-and-interfaces/interfaces";
import abilities from "../../../general/abilities";
import { createBending } from "../../../general/bending";
import images from "../../../images/images";
import { senseOfWind } from "../masteries";

const windBlow = createBending(
    [
        chrome.i18n.getMessage('wind_blow'),
        chrome.i18n.getMessage('wind_blow_bending_description'),
        images.elementBendings.windBlow
    ],
    [
        senseOfWind.name,
        '', true,
        abilities.battleAbilities.ranged.physicalSmashing.windBlow
    ]
);

const thunderPunch = createBending(
    [
        chrome.i18n.getMessage('thunder_punch'),
        chrome.i18n.getMessage('thunder_punch_bending_description'),
        images.elementBendings.thunderPunch
    ],
    [
        senseOfWind.name,
        windBlow.name,
        true,
        abilities.battleAbilities.melee.physicalSmashing.thunderPunch
    ]
);

const airDeprivation = createBending(
    [
        chrome.i18n.getMessage('air_deprivation'),
        chrome.i18n.getMessage('air_deprivation_bending_description'),
        images.elementBendings.airDeprivation
    ],
    [
        senseOfWind.name,
        thunderPunch.name,
        true,
        abilities.battleAbilities.ranged.suffocation.airDeprivation
    ]
);

export const aerotheurgy = {
    windBlow,
    thunderPunch,
    airDeprivation
}

export const airSiteOptions: Record<string, IBending[]> = {
    0: [],
    1: [aerotheurgy.windBlow],
    2: [aerotheurgy.thunderPunch],
    3: [aerotheurgy.airDeprivation]
}