import { Ability } from "../types/ability";

import normal from "./normal/normal";
import guildian from "./guildian/guildian";
import psion from "./psion/psion";

const abilities: Record<string, Ability[]> = {
    normal,
    guildian,
    psion
}

export default abilities