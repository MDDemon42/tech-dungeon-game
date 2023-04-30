import { Item } from "../types/item";

import melee from "./melee/melee";
import range from "./range/range";
import extra from "./extra/extra";
import armor from "./armor/armor";

const items: Record<string, Record<string, Item>> = {
    melee,
    range,
    extra,
    armor
}

export default items