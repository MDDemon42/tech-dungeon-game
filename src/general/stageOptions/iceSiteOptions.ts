import { IBending } from "../../enums-and-interfaces/interfaces";
import cryomancy from "../bending/cryomancy";

export const iceSiteOptions: Record<string, IBending[]> = {
    0: [],
    1: [cryomancy.bending_iceShard],
    2: [cryomancy.bending_iceSpear],
    3: [cryomancy.bending_iceHail],
    5: [cryomancy.bending_coldDeath]
}