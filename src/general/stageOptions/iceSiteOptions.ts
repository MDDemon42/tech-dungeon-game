import { IBending } from "../../enums-and-interfaces/interfaces";
import cryomancy from "../bending/cryomancy";

export const iceSiteOptions: Record<string, IBending[]> = {
    0: [],
    1: [cryomancy.bending_iceShard],
    2: [
        cryomancy.bending_iceShard,
        cryomancy.bending_iceSpear
    ],
    3: [
        cryomancy.bending_iceShard,
        cryomancy.bending_iceHail
    ],
    5: [
        cryomancy.bending_iceShard,
        cryomancy.bending_coldDeath
    ],
    6: [
        cryomancy.bending_iceShard,
        cryomancy.bending_iceSpear,
        cryomancy.bending_iceHail
    ],    
    10: [
        cryomancy.bending_iceShard,
        cryomancy.bending_iceSpear,
        cryomancy.bending_coldDeath
    ],
    15: [
        cryomancy.bending_iceShard,
        cryomancy.bending_iceHail,
        cryomancy.bending_coldDeath
    ],
    30: [
        cryomancy.bending_iceShard,
        cryomancy.bending_iceSpear,
        cryomancy.bending_iceHail,
        cryomancy.bending_coldDeath
    ]
}