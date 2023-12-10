import { ISpell } from "../../enums-and-interfaces/interfaces";
import spells from "../spells/spells";

const appreticeSpells = [
    spells.spell_magicBolt,
    spells.spell_defensiveCharms,
    spells.spell_flyingCharms,
];

const magisterSpells = [
    spells.spell_stoneGolem,
    spells.spell_teleport,
    spells.spell_defensiveEnchantment,
]

export const spellSchoolOptions: Record<string, ISpell[]> = {
    0: [],
    1: [...appreticeSpells],
    2: [...magisterSpells] 
};
