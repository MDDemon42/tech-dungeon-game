import masteries from "../general/masteries/masteries";
import { ICharacher, IItem } from "../enums-and-interfaces/interfaces";
import { createNoItem } from "./emptyEssencesCreators";

export default function putItemInBackpacks(
    backpacks: IItem[], 
    item: IItem,
    maxItemsAmount: number
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

    if (itemsAmount === maxItemsAmount) {
        index = length - 1;
        backpacks.shift();
    }
    
    backpacks[index] = item;
}

export function getBackpacksCapability(member: ICharacher) {
    const memberMasteries = member.general.mind.masteries.map(mastery => mastery.name);
    if (!!memberMasteries && memberMasteries.includes(masteries.mastery_brutalForce.name)) {
        return 6;
    } else {
        return 4;
    }
}