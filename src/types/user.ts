import { Ability } from "./ability";
import { Item } from "./item";

export interface User {
    name: string,
    class: string,
    level?: number,
    money?: number,
    stage?: number,
    abilities?: Ability[],
    items?: Item[]
}