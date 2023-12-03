import { DamageType } from "../enums-and-interfaces/enums";
import { ICharacher, IBattleAbility } from "../enums-and-interfaces/interfaces";
import abilities from "../general/abilities";
import items from "../general/items";
import guildMasteries from "../general/masteries/guild";
import masteries from "../general/masteries/masteries";
import checkRipApart from "../general/races/checkRipApart";
import wizardItems from "../general/wizardItems";
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
            // @ts-expect-error
            if (inventory[name].linkedMastery) {
                // @ts-expect-error
                const masteryName = inventory[name].linkedMastery;
                if (masteryName && masteriesUser.includes(masteryName)) {
                    // @ts-expect-error
                    result.push(...inventory[name].masterAbilities);
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
                    inventory.bothHands.name === wizardItems.weapons.wizardItem_apprenticeRod.name ||
                    inventory.bothHands.name === wizardItems.weapons.wizardItem_magisterScepter.name
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
        inventory.leftHand.name === items.weapons.item_axeLeftHand.name &&
        inventory.rightHand.name === items.weapons.item_axeRightHand.name
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

    // empoweredAbilities
    if (masteriesUser.includes(guildMasteries.mastery_empoweredStrikes.name)) {
        const createEmpoweredAbility = (ability: IBattleAbility) => {
            const empoweredAbility = {...ability};
            empoweredAbility.damage += 1;
            empoweredAbility.costs = {...ability.costs, Focus: 1};
            empoweredAbility.name = 'Empowered ' + empoweredAbility.name.toLowerCase();
            
            return empoweredAbility
        }
        
        result
            .filter(ability => (
                ability.damageType === DamageType.physicalPiercing ||
                ability.damageType === DamageType.physicalSlashing ||
                ability.damageType === DamageType.physicalSmashing
            ))
            .forEach(ability => {
                result.push(createEmpoweredAbility(ability));
            })
    }

    return result
}

export default gatherCharacterAbilities