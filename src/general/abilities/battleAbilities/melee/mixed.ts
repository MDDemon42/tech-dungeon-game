import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const ripApartMinor = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_minor'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 2}, 
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 1
    },
    [1, 70]
);

const ripApartMere = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_mere'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 3}, 
    {
        [DamageType.physicalSlashing]: 1,
        [DamageType.physicalPiercing]: 2
    },
    [1, 70]
);

const ripApartMajor = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_major'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 4}, 
    {
        [DamageType.physicalSlashing]: 2,
        [DamageType.physicalPiercing]: 3
    },
    [1, 70]
);

const ripApartMajorGrand = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_major'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 5}, 
    {
        [DamageType.physicalSlashing]: 3,
        [DamageType.physicalPiercing]: 4
    },
    [1, 70]
);

const ripApartMonstrous = createBattleAbility(
    [
        chrome.i18n.getMessage('rip_apart_monstrous'), 
        '', 
        images.mutantEvolvings.ripApart
    ], 
    {Stamina: 6}, 
    {
        [DamageType.physicalSlashing]: 4,
        [DamageType.physicalPiercing]: 5
    },
    [1, 70]
);

const runicGreataxeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('runic_greataxe_slash'), 
        '', 
        images.guildianLearnings.runicGreataxe
    ], 
    {Mana: 1, Stamina: 2}, 
    {
        [DamageType.cold]: 1,
        [DamageType.physicalSlashing]: 2
    },
    [1, 70]
);

const runicGreathammerSmash = createBattleAbility(
    [
        chrome.i18n.getMessage('runic_greathammer_smash'), 
        '', 
        images.guildianLearnings.runicGreathammer
    ], 
    {Mana: 1, Stamina: 2}, 
    {
        [DamageType.electrical]: 1,
        [DamageType.physicalSmashing]: 2
    },
    [1, 70]
);

const runicGreatswordSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('runic_greatsword_slash'), 
        '', 
        images.guildianLearnings.runicGreatsword
    ], 
    {Mana: 1, Stamina: 2}, 
    {
        [DamageType.fire]: 1,
        [DamageType.physicalSlashing]: 2
    },
    [1, 70]
);

const mixed = {
    ripApartMinor,
    ripApartMere,
    ripApartMajor,
    ripApartMajorGrand,
    ripApartMonstrous,
    runicGreataxeSlash,
    runicGreathammerSmash,
    runicGreatswordSlash
}

export default mixed