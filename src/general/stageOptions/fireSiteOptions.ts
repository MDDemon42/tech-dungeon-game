import { IBending } from "../../enums-and-interfaces/interfaces";
import pyrokinesis from "../bending/pyrokinesis";

export const fireSiteOptions: Record<string, IBending[]> = {
    0: [],
    1: [
        pyrokinesis.bending_flame
    ],
    2: [
        pyrokinesis.bending_flame, 
        pyrokinesis.bending_fireball
    ],
    3: [
        pyrokinesis.bending_flame, 
        pyrokinesis.bending_fireball, 
        pyrokinesis.bending_fireWave
    ]
};