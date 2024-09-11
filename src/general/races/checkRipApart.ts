import mutations from "../../gameScreens/MutaLab/mutations";
import { IAbility, IInventory } from "../../enums-and-interfaces/interfaces";
import images from "../../images/images";
import { DamageType } from "../../enums-and-interfaces/enums";
import { createBattleAbility } from "../abilities/battleAbilities";

function checkRipApart(inventory: IInventory): (IAbility | null)[] {
    const ripApartMutations = {
        clawLeft: inventory.Left_hand?.name === mutations.weapons.claw.name,
        clawRight: inventory.Right_hand?.name === mutations.weapons.claw.name,
        clawExtraLeft: inventory.Extra_left_hand?.name === mutations.weapons.claw.name,
        clawExtraRight: inventory.Extra_right_hand?.name === mutations.weapons.claw.name,
        horns: inventory.Head?.name === mutations.weapons.horns.name,
        lowerFangs: inventory.Chin?.name === mutations.weapons.lowerFangs.name,
        tailWithSting: inventory.Tail?.name === mutations.weapons.tailWithSting.name,
        pincers: inventory.Shoulders?.name === mutations.weapons.pincers.name,
        raptorLegs: inventory.Legs?.name === mutations.weapons.raptorLegs.name
    }

    let amountOfClaws = 0;
    for (const ripApartMutation in ripApartMutations) {
        if (
            ripApartMutation.includes('claw') && 
            ripApartMutations[ripApartMutation as keyof typeof ripApartMutations]
        ) {
            amountOfClaws++;
        }
    }

    const staminaCost = 0 +
        Math.round(Math.sqrt(amountOfClaws)) + 
        (ripApartMutations.horns ? 1 : 0) +
        (ripApartMutations.lowerFangs ? 1 : 0) +
        (ripApartMutations.tailWithSting ? 1 : 0) +
        (ripApartMutations.pincers ? 1 : 0) +
        (ripApartMutations.raptorLegs ? 2 : 0);
    const slashingDamage = 0 + amountOfClaws +
        (ripApartMutations.raptorLegs ? 2 : 0);
    const piercingDamage = 0 +
        (ripApartMutations.horns ? 1 : 0) +
        (ripApartMutations.lowerFangs ? 1 : 0) +
        (ripApartMutations.tailWithSting ? 1 : 0) +
        (ripApartMutations.pincers ? 2 : 0);

    const ripApart = createBattleAbility(
        [
            chrome.i18n.getMessage('rip_apart'), 
            '', 
            images.mutantEvolvings.ripApart
        ], 
        {Stamina: staminaCost}, 
        {
            [DamageType.physicalSlashing]: slashingDamage,
            [DamageType.physicalPiercing]: piercingDamage
        },
        [1, 70]
    );

    const ripApartResult = staminaCost === 0 ? null :
        piercingDamage === 0 ? null : ripApart;

    const allClawsSlash = createBattleAbility(
        [
            chrome.i18n.getMessage('all_claws_slash'),
            '', 
            images.mutantEvolvings.claws
        ], 
        {Stamina: Math.round(Math.sqrt(amountOfClaws))}, 
        {[DamageType.physicalSlashing]: amountOfClaws},
        [1, 70]
    );

    const allClawsSlashResult = amountOfClaws === 0 ? null : allClawsSlash;

    return [ripApartResult, allClawsSlashResult];
}

export default checkRipApart