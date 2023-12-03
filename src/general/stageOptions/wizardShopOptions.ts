import { IWizardItem } from "../../enums-and-interfaces/interfaces";
import wizardItems from "../wizardItems";

const apprenticeStuff = [
    wizardItems.weapons.wizardItem_apprenticeRod,
    wizardItems.armors.wizardItem_apprenticeHat
]

const magisterStuff = [
    wizardItems.weapons.wizardItem_magisterScepter,
    wizardItems.armors.wizardItem_magisterHat,
    wizardItems.armors.wizardItem_magisterRobe,
    wizardItems.other.wizardItem_flyingCape
]

export const wizardShopOptions: Record<string, IWizardItem[]> = {
    0: [],
    1: [...apprenticeStuff],
    2: [...apprenticeStuff, ...magisterStuff]
}