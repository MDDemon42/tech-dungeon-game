import { IBending } from "../../enums-and-interfaces/interfaces";
import aerotheurgy from "../bending/aerotheurgy";

export const airSiteOptions: Record<string, IBending[]> = {
    0: [],
    1: [aerotheurgy.bending_windBlow],
    2: [
        aerotheurgy.bending_windBlow,
        aerotheurgy.bending_thunderPunch
    ],
    3: [
        aerotheurgy.bending_windBlow,
        aerotheurgy.bending_thunderPunch,
        aerotheurgy.bending_airDeprivation
    ]
}