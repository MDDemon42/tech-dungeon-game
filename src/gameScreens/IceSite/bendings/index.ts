import { IBending } from "../../../enums-and-interfaces/interfaces";
import abilities from "../../../general/abilities";
import { createBending } from "../../../general/bending";
import images from "../../../images/images";
import { senseOfCold } from "../masteries";

const iceShard = createBending(
    [
        chrome.i18n.getMessage('ice_shard'),
        chrome.i18n.getMessage('ice_shard_bending_description'),
        images.elementBendings.iceShard
    ],
    [
        senseOfCold.name,
        '', true,
        abilities.battleAbilities.ranged.physicalPiercing.iceShard
    ]
);

const iceSpear = createBending(
    [
        chrome.i18n.getMessage('ice_spear'),
        chrome.i18n.getMessage('ice_spear_bending_description'),
        images.elementBendings.iceSpear
    ],
    [
        senseOfCold.name,
        iceShard.name,
        true,
        abilities.battleAbilities.ranged.physicalPiercing.iceShard
    ]
);

const iceHail = createBending(
    [
        chrome.i18n.getMessage('ice_hail'),
        chrome.i18n.getMessage('ice_hail_bending_description'),
        images.elementBendings.iceHail
    ],
    [
        senseOfCold.name,
        iceShard.name,
        true,
        abilities.battleAbilities.ranged.physicalPiercing.iceHail
    ]
);

const coldDeath = createBending(
    [
        chrome.i18n.getMessage('cold_death'),
        chrome.i18n.getMessage('cold_death_bending_description'),
        images.elementBendings.coldDeath
    ],
    [
        senseOfCold.name,
        iceShard.name,
        true,
        abilities.battleAbilities.ranged.cold.coldDeath
    ]
);

export const cryomancy = {
    iceShard,
    iceSpear,
    iceHail,
    coldDeath
}

export const iceSiteOptions: Record<string, IBending[]> = {
    0: [],
    1: [cryomancy.iceShard],
    2: [cryomancy.iceSpear],
    3: [cryomancy.iceHail],
    5: [cryomancy.coldDeath]
}