import { Race } from "../enums-and-interfaces/enums";
import { ICharacher, IAbility, IBattleAbility } from "../enums-and-interfaces/interfaces";
import abilities from "../general/abilities";
import items from "../general/items";
import masteries from "../general/masteries/masteries";
import { createEmptyInventory, createNoItem } from "./emptyEssencesCreators";

const specialRaceAbilities: Record<Race, (IBattleAbility | null)> = {
    [Race.human]: null,
    [Race.unknown]: null,
    [Race.satyr]: null,
    [Race.minotaur]: null,
    [Race.orc]: null,
    [Race.gnoll]: null,
    [Race.naga]: null,
    [Race.demon]: null,
    [Race.dragon]: null,
    [Race.chimera]: null
}

function gatherCharacterAbilities(character: ICharacher) {
    const result: IAbility[] = [];

    const masteriesUser = character.general.mind.masteries.map(mastery => mastery.name);
    const spellsUser = character.general.mind.spells;
    const powersUser = character.general.mind.powers;

    const inventory = character.general.inventory ? 
        character.general.inventory : 
        createEmptyInventory();

    if (!!specialRaceAbilities[character.params.race]) {
        result.push(specialRaceAbilities[character.params.race] as IBattleAbility);
    }
    
    for (const name in inventory) {
        if (inventory[name].ability) {
            if (inventory[name].linkedMastery) {
                const masteryName = inventory[name].linkedMastery;
                if (masteryName && masteriesUser.includes(masteryName)) {
                    result.push(...inventory[name].masterAbilities!);
                } else {
                    const {ability} = inventory[name];
                    if (ability) {
                        result.push(ability);
                    }
                }
            } else {
                const {ability} = inventory[name];
                if (ability) {
                    result.push(ability);
                }
            }
        }
    }

    spellsUser.forEach(spell => {
        if (!!spell.ability) {
            if (!!spell.requiresRod) {
                if (
                    inventory.bothHands.name === items.weapons.item_apprenticeRod.name ||
                    inventory.bothHands.name === items.weapons.item_magisterScepter.name
                ) {
                    result.push(spell.ability);
                }
            } else {
                result.push(spell.ability);
            }
        }
    })

    powersUser.forEach(power => {
        if (!!power.ability) {
            result.push(power.ability);
        }
    })

    // special abilities
    if (
        inventory.leftHand.name === items.weapons.item_steelSwordLeftHand.name &&
        inventory.rightHand.name === items.weapons.item_steelSwordRightHand.name &&
        masteriesUser.includes(masteries.mastery_dualSwords.name)
    ) {
        result.push(abilities.battleAbilities.melee.battleAbility_dualSwordsSlash);
    }

    // basic ability
    const noItem = createNoItem();
    if (
        (
            inventory.leftHand.name === noItem.name ||
            inventory.rightHand.name === noItem.name
        ) && inventory.bothHands.name === noItem.name
    ) {
        result.push(abilities.battleAbilities.melee.battleAbility_fistPunch)
    }

    return result
}

export default gatherCharacterAbilities