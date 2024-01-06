import { DamageType, WeaponTypes } from "../enums-and-interfaces/enums";
import { IBattleAbility, IInventory } from "../enums-and-interfaces/interfaces";
import academyMasteries from "../gameScreens/Academy/masteries";
import cybers from "../gameScreens/CyberLab/cybers";
import guildItems from "../gameScreens/Guild/guildItems";
import armouryItems from "../gameScreens/Mansion/armouryItems";
import items from "../gameScreens/Market/items";
import abilities from "../general/abilities";
import { createBattleAbility } from "../general/abilities/battleAbilities";
import images from "../images/images";
import { createNoItem } from "./emptyEssencesCreators";

const weaponTypesMapping: Record<WeaponTypes, 
    {
        masteryName: string,
        itemNames: string[],
        doubleAbility: IBattleAbility | null,
        affiliatedDoubleAbility: IBattleAbility | null,
        medianAbility: IBattleAbility
    }
> = {
    [WeaponTypes.axes]: {
        masteryName: academyMasteries.axeAffiliation.name,
        itemNames: [
            items.weapons.axe.name,
            armouryItems.battleWeapons.battleAxe.name,
            armouryItems.mageWeapons.battleMageAxe.name
        ],
        medianAbility: abilities.battleAbilities.melee.physicalSlashing.axeSlash,
        doubleAbility: abilities.battleAbilities.melee.physicalSlashing.doubleAxeSlash,
        affiliatedDoubleAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedDoubleAxeSlash
    },
    [WeaponTypes.greatAxes]: {
        masteryName: academyMasteries.axeAffiliation.name,
        itemNames: [
            items.weapons.steelGreataxe.name,
            guildItems.weapons.runicGreataxe.name,
            armouryItems.battleWeapons.halberd.name,
            armouryItems.mageWeapons.mageHalberd.name
        ],
        medianAbility: abilities.battleAbilities.melee.physicalSlashing.steelGreataxeSlash,
        doubleAbility: null,
        affiliatedDoubleAbility: null
    },
    [WeaponTypes.greatHammers]: {
        masteryName: academyMasteries.maceAffiliation.name,
        itemNames: [
            items.weapons.steelGreathammer.name,
            guildItems.weapons.runicGreathammer.name
        ],
        medianAbility: abilities.battleAbilities.melee.physicalSmashing.steelGreathammerSmash,
        doubleAbility: null,
        affiliatedDoubleAbility: null
    },
    [WeaponTypes.greatSwords]: {
        masteryName: academyMasteries.swordAffiliation.name,
        itemNames: [
            items.weapons.steelGreatsword.name,
            guildItems.weapons.runicGreatsword.name,
            armouryItems.battleWeapons.glaive.name,
            armouryItems.mageWeapons.mageGlaive.name,
            armouryItems.battleWeapons.dragonBoneBlade.name,
            armouryItems.mageWeapons.mageDragonBoneBlade.name
        ],
        medianAbility: abilities.battleAbilities.melee.physicalSlashing.steelGreatswordSlash,
        doubleAbility: null,
        affiliatedDoubleAbility: null
    },
    [WeaponTypes.mace]: {
        masteryName: academyMasteries.maceAffiliation.name,
        itemNames: [items.weapons.steelMace.name],
        medianAbility: abilities.battleAbilities.melee.physicalSmashing.maceSmash,
        doubleAbility: abilities.battleAbilities.melee.physicalSmashing.doubleMaceSmash,
        affiliatedDoubleAbility: abilities.battleAbilities.melee.physicalSmashing.affiliatedDoubleMaceSmash
    },
    [WeaponTypes.picaxe]: {
        masteryName: '',
        itemNames: [items.weapons.pickaxe.name],
        medianAbility: abilities.battleAbilities.melee.physicalPiercing.pickaxePick,
        doubleAbility: null,
        affiliatedDoubleAbility: null
    },
    [WeaponTypes.piercestick]: {
        masteryName: academyMasteries.spearAffiliation.name,
        itemNames: [items.weapons.pierceStick.name],
        medianAbility: abilities.battleAbilities.melee.physicalPiercing.stickPierce,
        doubleAbility: null,
        affiliatedDoubleAbility: null
    },
    [WeaponTypes.spear]: {
        masteryName: academyMasteries.spearAffiliation.name,
        itemNames: [
            items.weapons.steelSpear.name,
            armouryItems.battleWeapons.glaive.name,
            armouryItems.mageWeapons.mageGlaive.name
        ],
        medianAbility: abilities.battleAbilities.melee.physicalPiercing.spearPierce,
        doubleAbility: null,
        affiliatedDoubleAbility: null
    },
    [WeaponTypes.swords]: {
        masteryName: academyMasteries.swordAffiliation.name,
        itemNames: [
            items.weapons.steelSword.name,
            armouryItems.battleWeapons.katana.name,
            armouryItems.battleWeapons.khopesh.name,
            armouryItems.battleWeapons.macuahuitl.name,
            armouryItems.battleWeapons.rapier.name,
            armouryItems.battleWeapons.sabre.name
        ],
        medianAbility: abilities.battleAbilities.melee.physicalSlashing.swordSlash,
        doubleAbility: abilities.battleAbilities.melee.physicalSlashing.doubleSwordsSlash,
        affiliatedDoubleAbility: abilities.battleAbilities.melee.physicalSlashing.affiliatedDoubleSwordsSlash
    }
};

export function getWeaponAmount(
    inventory: IInventory,
    weaponNames: string[],
) {
    const weaponCount = 0 +
    ((weaponNames.includes(inventory.leftHand.name)) ? 1 : 0) +
    ((weaponNames.includes(inventory.rightHand.name)) ? 1 : 0) +
    ((weaponNames.includes(inventory.bothHands.name)) ? 1 : 0) +
    ((weaponNames.includes(inventory.extraLeftHand?.name || '')) ? 1 : 0) +
    ((weaponNames.includes(inventory.extraRightHand?.name || '')) ? 1 : 0) +
    ((weaponNames.includes(inventory.telekinesisLeftHand?.name || '')) ? 1 : 0) +
    ((weaponNames.includes(inventory.telekinesisRightHand?.name || '')) ? 1 : 0);

    return weaponCount;
}

function gatherMultipleWeaponsAbilities(
    inventory: IInventory,
    masteriesUser: string[]
) {
    const result = [];
    const nothing = createNoItem().name; 

    let differentWeaponTypes = 0;  
    let allWeaponsAmount = 0;
    let allWeaponsMassacreHitChance = 0;   
    let allWeaponsMassacreStaminaCost = 0; 
    const allWeaponsMassacreDamages: Partial<Record<DamageType, number>> = {};

    Object.keys(weaponTypesMapping).forEach(key => {
        const weaponType = key as WeaponTypes;
        const weaponInfo = weaponTypesMapping[weaponType];
        const weaponAmount = getWeaponAmount(inventory, weaponInfo.itemNames);
        if (weaponAmount > 0) {
            differentWeaponTypes++;
            allWeaponsAmount += weaponAmount;
            allWeaponsMassacreHitChance += weaponAmount * 
            (
                weaponInfo.masteryName && 
                masteriesUser.includes(weaponInfo.masteryName) ? 95 : 70
            );
            allWeaponsMassacreStaminaCost += (weaponInfo.medianAbility.costs.Stamina as number) * weaponAmount;
            if (weaponType === WeaponTypes.swords) {
                let allWeaponsMassacreDamageSlashing = allWeaponsMassacreDamages[DamageType.physicalSlashing];
                const slashingDamage = Math.floor(weaponAmount / 2) + 1;
                if (allWeaponsMassacreDamageSlashing) {
                    allWeaponsMassacreDamageSlashing += slashingDamage;
                } else {
                    allWeaponsMassacreDamageSlashing = slashingDamage;
                }
                allWeaponsMassacreDamages[DamageType.physicalSlashing] = allWeaponsMassacreDamageSlashing;

                let allWeaponsMassacreDamagePiercing = allWeaponsMassacreDamages[DamageType.physicalPiercing];
                const piercingDamage = Math.floor(weaponAmount / 2);
                if (allWeaponsMassacreDamagePiercing) {
                    allWeaponsMassacreDamagePiercing += piercingDamage;
                } else {
                    allWeaponsMassacreDamagePiercing = piercingDamage;
                }
                allWeaponsMassacreDamages[DamageType.physicalPiercing] = allWeaponsMassacreDamagePiercing;
            } else {
                const damageType = 
                    weaponInfo.medianAbility.damage[DamageType.physicalPiercing] ? DamageType.physicalPiercing :
                    weaponInfo.medianAbility.damage[DamageType.physicalSlashing] ? DamageType.physicalSlashing :
                    weaponInfo.medianAbility.damage[DamageType.physicalSmashing] ? DamageType.physicalSmashing : 
                    DamageType.physicalSlashing;
                let allWeaponsMassacreDamage = allWeaponsMassacreDamages[damageType];
                const thisTypeDamage = (weaponInfo.medianAbility.damage[damageType] as number) * weaponAmount;
                if (allWeaponsMassacreDamage) {
                    allWeaponsMassacreDamage += thisTypeDamage
                } else {
                    allWeaponsMassacreDamage = thisTypeDamage;
                }
                allWeaponsMassacreDamages[damageType] = allWeaponsMassacreDamage;
            }
        }
        if (weaponAmount >= 2) {
            if (
                weaponInfo.masteryName && 
                masteriesUser.includes(weaponInfo.masteryName) && 
                weaponInfo.affiliatedDoubleAbility
            ) {
                result.push(weaponInfo.affiliatedDoubleAbility);
            } else if (weaponInfo.doubleAbility) {
                result.push(weaponInfo.doubleAbility);
            }
        }
    })   

    if (differentWeaponTypes > 0) {        
        const allWeaponsMassacre = createBattleAbility(
            [
                chrome.i18n.getMessage('all_weapons_massacre'), 
                '', 
                images.normalItems.allWeaponsMassacre
            ], 
            {Stamina: allWeaponsMassacreStaminaCost}, 
            allWeaponsMassacreDamages,
            [1, Math.floor(allWeaponsMassacreHitChance / allWeaponsAmount)]
        );

        result.push(allWeaponsMassacre);
    }
    
    
    const cyberFistCount = getWeaponAmount(inventory, [cybers.weapons.cyberFist.name]);
    if (cyberFistCount === 2) {
        result.push(abilities.battleAbilities.melee.physicalSmashing.doubleCyberFistSmash);
    }

    if (
        (
            inventory.leftHand.name === nothing ||
            inventory.rightHand.name === nothing
        ) && inventory.bothHands.name === nothing
    ) {
        if (masteriesUser.includes(academyMasteries.martialArts.name)) {
            result.push(abilities.battleAbilities.melee.physicalSmashing.martialHit);
        } else if (masteriesUser.includes(academyMasteries.brutalForce.name)) {
            result.push(abilities.battleAbilities.melee.physicalSmashing.fistSmash);
        } else {
            result.push(abilities.battleAbilities.melee.physicalSmashing.fistPunch);
        }        
    }

    return result
}

export default gatherMultipleWeaponsAbilities