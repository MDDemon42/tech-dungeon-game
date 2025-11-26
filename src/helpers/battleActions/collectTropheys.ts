import { InventorySlotCategory, Race } from "../../enums-and-interfaces/enums";
import { IBigResource, ICharacter, IInventorySlot, IItem } from "../../enums-and-interfaces/interfaces";
import items from "../../gameScreens/Market/items";
import { raceNames } from "../../general/races/races";

export default function collectTropheys(
    oppsMembers: ICharacter[]
) {
    const result: (IItem | IBigResource)[] = [];

    oppsMembers.forEach(opp => {
        const oppInventory = opp.general.inventory;

        Object.values(oppInventory).forEach((item: IInventorySlot) => {
            if (!!item && item.category === InventorySlotCategory.item) {
                result.push(item as IItem);
            }
        })

        const oppRace = opp.params.race;
        const beastRaces = [
            raceNames[Race.gnoll], 
            raceNames[Race.satyr], 
            raceNames[Race.taur]
        ];
        const reptiloidRaces = [
            raceNames[Race.naga], 
            raceNames[Race.raptor]
        ];
        const dragonRaces = [
            raceNames[Race.ankylosaurus], 
            raceNames[Race.dragon], 
            raceNames[Race.koatl]
        ];

        if (beastRaces.includes(oppRace)) {
            result.push(items.bigResources.beastRemains);
        }

        if (reptiloidRaces.includes(oppRace)) {
            result.push(items.bigResources.reptiloidRemains);
        }

        if (dragonRaces.includes(oppRace)) {
            result.push(items.bigResources.dragonRemains);
        }
    })

    const oppGems = Array(Math.floor(oppsMembers.length / 2) + 1)
        .fill(items.other.gem) as IItem[];
    result.push(...oppGems);
    
    return result
}