import { IGuildItem, IItem, IWizardItem } from "../enums-and-interfaces/interfaces";
import { createNoItem } from "./emptyEssencesCreators";

export default function putItemInBackpacks(
    backpacks: (IItem | IWizardItem | IGuildItem)[], 
    item: IItem | IWizardItem | IGuildItem | null
) {
    const {length} = backpacks;

    let index = -1;
    let itemsAmount = 0;
    const nothing = createNoItem().name;

    if (!item || item.name === nothing) {
        return
    }

    for (let i=0; i<length; i++) {
        if (backpacks[i].name === nothing) {
            if (index === -1) {
                index = i;
            }
        } else {
            itemsAmount ++;
        }
    }

    if (itemsAmount === length) {
        return
    }
    
    backpacks[index] = item;
}