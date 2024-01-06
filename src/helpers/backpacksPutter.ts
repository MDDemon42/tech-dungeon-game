import { IItem } from "../enums-and-interfaces/interfaces";
import { createNoItem } from "./emptyEssencesCreators";

export default function putItemInBackpacks(
    backpacks: IItem[], 
    item: IItem
) {
    const {length} = backpacks;

    let index = -1;
    let itemsAmount = 0;
    const nothing = createNoItem().name;

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