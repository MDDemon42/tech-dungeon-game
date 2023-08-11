import masteries from "../general/masteries/masteries";
import { ICharacher, IItem } from "../enums-and-interfaces/interfaces";
import store from "../redux/store";

export default function putItemInBackpacks(
    items: IItem[], 
    item: IItem,
    maxItemsAmount: number
) {
    const {length} = items;

    const newItems = [...items];

    if (length === maxItemsAmount) {
        newItems.shift();
    }
    
    newItems.push(item);

    return newItems
}

export function getBackpacksCapability(members: Record<string, ICharacher>) {
    let result = 0;
    Object.keys(members).forEach(key => {
        if (!!members[key]) {
            const memberMasteries = members[key].general.mind.masteries.map(mastery => mastery.name);
            if (!!memberMasteries && memberMasteries.includes(masteries.mastery_brutalForce.name)) {
                result += 6;
            } else {
                result += 4;
            }
        }            
    })

    return result
}