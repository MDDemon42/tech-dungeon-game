import { ICharacher, IBattleAbility } from "../enums-and-interfaces/interfaces";
import abilities from "../general/abilities";
import items from "../general/items";
import masteries from "../general/masteries/masteries";
import checkRipApart from "../general/races/checkRipApart";
import { createEmptyInventory, createNoItem } from "./emptyEssencesCreators";

function gatherCharacterAbilities(character: ICharacher) {
    const result: IBattleAbility[] = [];

    const masteriesUser = character.general.mind.masteries.map(mastery => mastery.name);
    const spellsUser = character.general.mind.spells;
    const powersUser = character.general.mind.powers;

    const inventory = character.general.inventory ? 
        character.general.inventory : 
        createEmptyInventory();
    
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

    const ripApart = checkRipApart(inventory);
    if (ripApart) {
        result.push(ripApart);
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
        result.push(abilities.battleAbilities.melee.physicalSlashing.battleAbility_dualSwordsSlash);
    }

    if (
        inventory.leftHand.name === items.weapons.item_steelAxeLeftHand.name &&
        inventory.rightHand.name === items.weapons.item_steelAxeRightHand.name
    ) {
        if (masteriesUser.includes(masteries.mastery_axeAffiliation.name)) {
            result.push(abilities.battleAbilities.melee.physicalSlashing.battleAbility_affiliatedDoubleAxeSlash);
        } else {
            result.push(abilities.battleAbilities.melee.physicalSlashing.battleAbility_doubleAxeSlash);
        }
    }
        

    // basic ability
    const noItem = createNoItem();
    if (
        (
            inventory.leftHand.name === noItem.name ||
            inventory.rightHand.name === noItem.name
        ) && inventory.bothHands.name === noItem.name
    ) {
        if (masteriesUser.includes(masteries.mastery_brutalForce.name)) {
            result.push(abilities.battleAbilities.melee.physicalSmashing.battleAbility_fistSmash)
        } else {
            result.push(abilities.battleAbilities.melee.physicalSmashing.battleAbility_fistPunch)
        }        
    }

    return result
}

export default gatherCharacterAbilities