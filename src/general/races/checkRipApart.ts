import mutations from "../mutations";
import { IAbility, IInventory } from "../../enums-and-interfaces/interfaces";
import abilities from "../abilities";

function checkRipApart(inventory: IInventory): IAbility | null {
    const ripApartMutations: Record<string, boolean> = {
        horns: inventory.head.name === mutations.weapons.mutation_horns.name,
        lowerFangs: inventory.chin.name === mutations.weapons.mutation_lowerFangs.name,
        tailWithSting: inventory.tail.name === mutations.weapons.mutation_tail.name,
        claws: inventory.bothHands.name === mutations.weapons.mutation_claws.name,
        pincers: inventory.shoulders.name === mutations.weapons.mutation_pincers.name
    }

    let counter = 0;
    for (const mutation in ripApartMutations) {
        counter += ripApartMutations[mutation] ? 1 : 0;
    }

    const ripApartMap: Record<string, IAbility | null> = {
        0: null,
        1: null,
        2: abilities.battleAbilities.melee.physicalSlashing.battleAbility_ripApartMinor,
        3: abilities.battleAbilities.melee.physicalSlashing.battleAbility_ripApartMere,
        4: abilities.battleAbilities.melee.physicalSlashing.battleAbility_ripApartMajor,
        5: abilities.battleAbilities.melee.physicalSlashing.battleAbility_ripApartMonstrous
    }

    return ripApartMap[String(counter)];
}

export default checkRipApart