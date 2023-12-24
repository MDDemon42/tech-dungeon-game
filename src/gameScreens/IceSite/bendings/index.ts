import { IBending } from "../../../enums-and-interfaces/interfaces";
import abilities from "../../../general/abilities";
import { createBending } from "../../../general/bending";
import images from "../../../images/images";
import coldMasteries from "../masteries";

const frost = createBending(
    [
        chrome.i18n.getMessage('frost'),
        chrome.i18n.getMessage('frost_bending_description'),
        images.elementBendings.coldAffiliation
    ],
    [
        coldMasteries.coldAffiliation.name,
        '', true,
        abilities.battleAbilities.ranged.cold.frost
    ]
);

const iceShard = createBending(
    [
        chrome.i18n.getMessage('ice_shard'),
        chrome.i18n.getMessage('ice_shard_bending_description'),
        images.elementBendings.iceShard
    ],
    [
        coldMasteries.coldAffiliation.name,
        frost.name, 
        true,
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
        coldMasteries.coldAffiliation.name,
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
        coldMasteries.coldAffiliation.name,
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
        coldMasteries.coldAffiliation.name,
        frost.name,
        true,
        abilities.battleAbilities.ranged.cold.coldDeath
    ]
);

export const cryomancy = {
    frost,
    iceShard,
    iceSpear,
    iceHail,
    coldDeath
}

export const iceSiteOptions: Record<string, IBending[]> = {
    0: [],
    1: [cryomancy.frost],
    2: [cryomancy.iceShard],
    3: [cryomancy.iceSpear],
    5: [cryomancy.iceHail],
    7: [cryomancy.coldDeath],
}