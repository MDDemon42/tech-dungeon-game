import { IBending } from "../../../enums-and-interfaces/interfaces";
import abilities from "../../../general/abilities";
import { createBending } from "../../../general/bending";
import images from "../../../images/images";
import airMasteries from "../masteries";

const windBlow = createBending(
    [
        chrome.i18n.getMessage('wind_blow'),
        chrome.i18n.getMessage('wind_blow_bending_description'),
        images.elementBendings.windBlow
    ],
    [
        airMasteries.windAffiliation.name,
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
        airMasteries.windAffiliation.name,
        '', true,
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
        airMasteries.windAffiliation.name,
        windBlow.name,
        true,
        abilities.battleAbilities.ranged.suffocation.airDeprivation
    ]
);

const lightningStrike = createBending(
    [
        chrome.i18n.getMessage('lightning_strike'),
        chrome.i18n.getMessage('lightning_strike_bending_description'),
        images.wizardSpells.magicBolt
    ],
    [
        airMasteries.electrifiedStrikes.name,
        '',
        true,
        abilities.battleAbilities.ranged.electrical.lightningStrike
    ]
);

export const aerotheurgy = {
    windBlow,
    thunderPunch,
    airDeprivation,
    lightningStrike
}

export const airSiteOptions: Record<string, IBending[]> = {
    0: [],
    1: [aerotheurgy.windBlow],
    2: [aerotheurgy.thunderPunch],
    3: [aerotheurgy.airDeprivation],
    5: [aerotheurgy.lightningStrike]
}