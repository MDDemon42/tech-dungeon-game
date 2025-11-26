import { DamageType, InventoryPlace } from "../enums-and-interfaces/enums";
import { ICharacter, IBattleAbility, ISupportAbility } from "../enums-and-interfaces/interfaces";
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

function gatherCharacterAbilities(character: ICharacter) {
    const result: (IBattleAbility | ISupportAbility)[] = [];

    const masteriesUser = character.general.mind.masteries.map(mastery => mastery.name);
    const spellsUser = character.general.mind.spells;
    const powersUser = character.general.mind.powers;
    const bendingUser = character.general.mind.bending;

    const inventory = character.general.inventory ? 
        character.general.inventory : 
        createEmptyInventory();
    
    for (const place in inventory) {
        const name = place as InventoryPlace;
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
                inventory.Both_hands?.name === noItem.name &&
                inventory.Left_hand?.name === noItem.name &&
                inventory.Right_hand?.name === noItem.name
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
                    inventory.Both_hands?.name === wizardItems.weapons.apprenticeRod.name ||
                    inventory.Both_hands?.name === wizardItems.weapons.magisterScepter.name
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
        .filter(ability => {
            const abilityDamage = (ability as IBattleAbility).damage;
            if (abilityDamage) {
                const damageTypeAmount = Object.keys(abilityDamage).length;

                if (damageTypeAmount === 1) {
                    return abilityDamage[DamageType.physicalPiercing] ||
                        abilityDamage[DamageType.physicalSlashing] ||
                        abilityDamage[DamageType.physicalSmashing]
                }
            }
                
            return false
        })
        .forEach(ability => {
            if (masteriesUser.includes(psionMasteries.empoweredStrikes.name)) {        
                result.push(createEmpoweredAbility(ability as IBattleAbility));
            }

            if (masteriesUser.includes(psionMasteries.psiInfusedStrikes.name)) {        
                result.push(createPsiInfusedAbility(ability as IBattleAbility));
            }

            if (masteriesUser.includes(airMasteries.electrifiedStrikes.name)) {
                result.push(createElectrifiedAbility(ability as IBattleAbility));
            }

            if (masteriesUser.includes(fireMasteries.enflamedStrikes.name)) {
                result.push(createEnflamedAbility(ability as IBattleAbility));
            }

            if (masteriesUser.includes(coldMasteries.freezingStrikes.name)) {
                result.push(createFreezingAbility(ability as IBattleAbility));
            }
        })

    const finalResult = result.map(ability => {
        if (inventory.Eyes?.name === mutations.other.dragonEyes.name) {
            const copyAbility: IBattleAbility | ISupportAbility = {
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