import { DamageType } from "../enums-and-interfaces/enums";
import { ICharacher, IBattleAbility } from "../enums-and-interfaces/interfaces";
import checkRipApart from "../general/races/checkRipApart";
import wizardItems from "../gameScreens/WizardSchool/wizardItems";
import { createEmptyInventory, createNoItem } from "./emptyEssencesCreators";
import psionMasteries from "../gameScreens/FocusSite/masteries";
import airMasteries from "../gameScreens/AirSite/masteries";
import { 
    createEmpoweredAbility, 
    createElectrifiedAbility, 
    createEnflamedAbility, 
    createFreezingAbility, 
    createPsiInfusedAbility
} from "./elementInfusedAblitiesCreators";
import fireMasteries from "../gameScreens/FireSite/masteries";
import coldMasteries from "../gameScreens/IceSite/masteries";
import gatherMultipleWeaponsAbilities from "./gatherMultipleWeaponsAbilities";
import mutations from "../gameScreens/MutaLab/mutations";

function gatherCharacterAbilities(character: ICharacher) {
    const result: IBattleAbility[] = [];

    const masteriesUser = character.general.mind.masteries.map(mastery => mastery.name);
    const spellsUser = character.general.mind.spells;
    const powersUser = character.general.mind.powers;
    const bendingUser = character.general.mind.bending;

    const inventory = character.general.inventory ? 
        character.general.inventory : 
        createEmptyInventory();
    
    for (const name in inventory) {
        if (inventory[name]?.abilities) {
            // @ts-expect-error
            if (inventory[name].linkedAbilities) {
                // @ts-expect-error
                for (const linkedAbility of inventory[name].linkedAbilities) {
                    const masteryName = linkedAbility.linkedMastery;
                    if (masteriesUser.includes(masteryName)) {
                        result.push({...linkedAbility.masterAbility});
                    } else {
                        const abilities = inventory[name]?.abilities;
                        if (abilities) {
                            const copyAbilities = [...abilities];
                            result.push(...copyAbilities);
                        }
                    }
                }                
            } else {
                const abilities = inventory[name]?.abilities;
                if (abilities) {
                    const copyAbilities = [...abilities];
                    result.push(...copyAbilities);
                }
            }
        }
    }

    const [ripApart, clawSlash] = checkRipApart(inventory);
    if (ripApart) {
        result.push(ripApart);
    }
    if (clawSlash) {
        result.push(clawSlash);
    }

    const noItem = createNoItem();
    bendingUser.forEach(bending => {
        if (bending.requiresBothHands) {
            if (
                inventory.bothHands.name === noItem.name &&
                inventory.leftHand?.name === noItem.name &&
                inventory.rightHand?.name === noItem.name
            ) {
                result.push({...bending.ability});
            }
        } else {
            result.push({...bending.ability});
        }
    })

    spellsUser.forEach(spell => {
        if (!!spell.ability) {
            if (!!spell.requiresRod) {
                if (
                    inventory.bothHands.name === wizardItems.weapons.apprenticeRod.name ||
                    inventory.bothHands.name === wizardItems.weapons.magisterScepter.name
                ) {
                    result.push({...spell.ability});
                }
            } else {
                result.push({...spell.ability});
            }
        }
    })

    powersUser.forEach(power => {
        if (!!power.abilities) {
            const copyAbilities = [...power.abilities];
            result.push(...copyAbilities);
        }
    })

    result.push(...gatherMultipleWeaponsAbilities(inventory, masteriesUser));    

    result
        .filter(ability => (
            Object.keys(ability.damage).length === 1 && (
                ability.damage[DamageType.physicalPiercing] ||
                ability.damage[DamageType.physicalSlashing] ||
                ability.damage[DamageType.physicalSmashing]
            )
        ))
        .forEach(ability => {
            if (masteriesUser.includes(psionMasteries.empoweredStrikes.name)) {        
                result.push(createEmpoweredAbility(ability));
            }

            if (masteriesUser.includes(psionMasteries.psiInfusedStrikes.name)) {        
                result.push(createPsiInfusedAbility(ability));
            }

            if (masteriesUser.includes(airMasteries.electrifiedStrikes.name)) {
                result.push(createElectrifiedAbility(ability));
            }

            if (masteriesUser.includes(fireMasteries.enflamedStrikes.name)) {
                result.push(createEnflamedAbility(ability));
            }

            if (masteriesUser.includes(coldMasteries.freezingStrikes.name)) {
                result.push(createFreezingAbility(ability));
            }
        })

    const finalResult = result.map(ability => {
        if (inventory.eyes.name === mutations.other.dragonEyes.name) {
            const copyAbility: IBattleAbility = {
                ...ability,
                hitChance: ability.hitChance + 5
            }

            ability = {...copyAbility};
        }

        return ability
    })

    return Array.from(new Set(finalResult))
}

export default gatherCharacterAbilities