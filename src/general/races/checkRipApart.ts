import mutations from "../../gameScreens/MutaLab/mutations";
import { IAbility, IInventory } from "../../enums-and-interfaces/interfaces";
import abilities from "../abilities";

function checkRipApart(inventory: IInventory): IAbility | null {
    const ripApartMutations: Record<string, boolean> = {
        horns: inventory.head.name === mutations.weapons.horns.name,
        lowerFangs: inventory.chin.name === mutations.weapons.lowerFangs.name,
        tailWithSting: inventory.tail.name === mutations.weapons.tailWithSting.name,
        claws: inventory.bothHands.name === mutations.weapons.claws.name,
        pincers: inventory.shoulders.name === mutations.weapons.pincers.name,
        raptorLegs: inventory.legs.name === mutations.weapons.raptorLegs.name
    }

    let counter = 0;
    for (const mutation in ripApartMutations) {
        counter += ripApartMutations[mutation] ? 1 : 0;
    }

    const ripApartMap: Record<string, IAbility | null> = {
        0: null,
        1: null,
        2: abilities.battleAbilities.melee.mixed.ripApartMinor,
        3: abilities.battleAbilities.melee.mixed.ripApartMere,
        4: abilities.battleAbilities.melee.mixed.ripApartMajor,
        5: abilities.battleAbilities.melee.mixed.ripApartMajorGrand,
        6: abilities.battleAbilities.melee.mixed.ripApartMonstrous
    }

    return ripApartMap[String(counter)];
}

export default checkRipApart