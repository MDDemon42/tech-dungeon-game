import { IItem } from "../../enums-and-interfaces/interfaces";
import guildItems from "../guildItems";

const basicOptions = [
    guildItems.weapons.guildItem_acidBomd,
    guildItems.weapons.guildItem_oakCrossow,
    guildItems.weapons.guildItem_steelChakram
];

const runes = [
    guildItems.weapons.guildItem_runicGreataxe,
    guildItems.weapons.guildItem_runicGreathammer,
    guildItems.weapons.guildItem_runicGreatsword
]

export const guildShopOptions: Record<string, IItem[]> = {
    0: [],
    1: [...basicOptions],
    2: [...basicOptions, ...runes]
};