import { createBending } from ".";
import images from "../../images/images";
import abilities from "../abilities";
import elementsMasteries from "../masteries/elements";

const bending_iceShard = createBending(
    [
        chrome.i18n.getMessage('ice_shard'),
        chrome.i18n.getMessage('ice_shard_bending_description'),
        images.elementBendings.iceShard
    ],
    [
        elementsMasteries.mastery_senseOfCold.name,
        '', true,
        abilities.battleAbilities.ranged.physicalPiercing.battleAbility_iceShard
    ]
)

const bending_iceSpear = createBending(
    [
        chrome.i18n.getMessage('ice_spear'),
        chrome.i18n.getMessage('ice_spear_bending_description'),
        images.elementBendings.iceSpear
    ],
    [
        elementsMasteries.mastery_senseOfCold.name,
        bending_iceShard.name,
        true,
        abilities.battleAbilities.ranged.physicalPiercing.battleAbility_iceShard
    ]
)

const bending_iceHail = createBending(
    [
        chrome.i18n.getMessage('ice_hail'),
        chrome.i18n.getMessage('ice_hail_bending_description'),
        images.elementBendings.iceHail
    ],
    [
        elementsMasteries.mastery_senseOfCold.name,
        bending_iceShard.name,
        true,
        abilities.battleAbilities.ranged.physicalPiercing.battleAbility_iceHail
    ]
)

const bending_coldDeath = createBending(
    [
        chrome.i18n.getMessage('cold_death'),
        chrome.i18n.getMessage('cold_death_bending_description'),
        images.elementBendings.coldDeath
    ],
    [
        elementsMasteries.mastery_senseOfCold.name,
        bending_iceShard.name,
        true,
        abilities.battleAbilities.ranged.cold.battleAbility_coldDeath
    ]
)

const cryomancy = {
    bending_iceShard,
    bending_iceSpear,
    bending_iceHail,
    bending_coldDeath
}

export default cryomancy