import { DamageType } from "../enums-and-interfaces/enums";
import { ICharacher, IBattleAbility } from "../enums-and-interfaces/interfaces";
import abilities from "../general/abilities";
import items from "../gameScreens/Market/items";
import guildMasteries from "../gameScreens/Guild/masteries";
import academyMasteries from "../gameScreens/Academy/masteries";
import checkRipApart from "../general/races/checkRipApart";
import wizardItems from "../gameScreens/WizardSchool/wizardItems";
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
        if (inventory[name].abilities) {
            // @ts-expect-error
            if (inventory[name].linkedMastery) {
                // @ts-expect-error
                const masteryName = inventory[name].linkedMastery;
                if (masteryName && masteriesUser.includes(masteryName)) {
                    // @ts-expect-error
                    result.push(...inventory[name].masterAbilities);
                } else {
                    const {abilities} = inventory[name];
                    if (abilities) {
                        result.push(...abilities);
                    }
                }
            } else {
                const {abilities} = inventory[name];
                if (abilities) {
                    result.push(...abilities);
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
        masteriesUser.includes(academyMasteries.mastery_dualSwords.name)
    ) {
        result.push(abilities.battleAbilities.melee.physicalSlashing.dualSwordsSlash);
    }

    if (
        inventory.leftHand.name === items.weapons.item_axeLeftHand.name &&
        inventory.rightHand.name === items.weapons.item_axeRightHand.name
    ) {
        if (masteriesUser.includes(academyMasteries.mastery_axeAffiliation.name)) {
            result.push(abilities.battleAbilities.melee.physicalSlashing.affiliatedDoubleAxeSlash);
        } else {
            result.push(abilities.battleAbilities.melee.physicalSlashing.doubleAxeSlash);
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
        if (masteriesUser.includes(academyMasteries.mastery_martialArts.name)) {
            result.push(abilities.battleAbilities.melee.physicalSmashing.martialHit);
        } else if (masteriesUser.includes(academyMasteries.mastery_brutalForce.name)) {
            result.push(abilities.battleAbilities.melee.physicalSmashing.fistSmash);
        } else {
            result.push(abilities.battleAbilities.melee.physicalSmashing.fistPunch);
        }        
    }

    // empoweredAbilities
    if (masteriesUser.includes(guildMasteries.mastery_empoweredStrikes.name)) {
        const createEmpoweredAbility = (ability: IBattleAbility) => {
            const empoweredAbility = {...ability};
            const damageType = Object.keys(ability.damage)[0] as DamageType;
            
            empoweredAbility.damage = {[damageType]: ability.damage[damageType]! + 1}
            empoweredAbility.costs = {...ability.costs, Focus: 1};
            empoweredAbility.name = chrome.i18n.getMessage('empowered') + 
                empoweredAbility.name.toLowerCase();
            
            return empoweredAbility
        }
        
        result
            .filter(ability => (
                Object.keys(ability.damage).length === 1 && (
                    ability.damage[DamageType.physicalPiercing] ||
                    ability.damage[DamageType.physicalSlashing] ||
                    ability.damage[DamageType.physicalSmashing]
                )
            ))
            .forEach(ability => {
                result.push(createEmpoweredAbility(ability));
            })
    }

    return result
}

export default gatherCharacterAbilities