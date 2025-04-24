import {createSlice} from '@reduxjs/toolkit';
import createEmptyCharacter, 
{ 
    createEmptyUnchangeableSlot,
    createNoItem 
} from '../../helpers/emptyEssencesCreators';
import { 
    IAbility,
    ICharacher, 
    ICyber, 
    IItem, 
    IManageItemsProps,
    IMastery,
    IMutation,
    IPower,
    IRitual,
    IRitualBodyPart
} from '../../enums-and-interfaces/interfaces';
import mutations from '../../gameScreens/MutaLab/mutations';
import academyMasteries from '../../gameScreens/Academy/masteries';
import checkRace from '../../general/races/checkRace';
import putItemInBackpacks from '../../helpers/backpacksPutter';
import { 
    UserParam, 
    InventoryPlace, 
    Race,
    DamageType,
    InventorySlotCategory
} from '../../enums-and-interfaces/enums';
import powers from '../../gameScreens/FocusSite/powers';
import classInfo from '../../general/classInfo';
import { raceNames } from '../../general/races/races';
import items from '../../gameScreens/Market/items';

const raceMasteries: Partial<Record<Race, IMastery>> = {
    [Race.gnoll]: academyMasteries.maceAffiliation,
    [Race.orc]: academyMasteries.axeAffiliation,
    [Race.naga]: academyMasteries.spearAffiliation
}

function integratePassiveAbility(
    char: ICharacher,
    data: IItem | ICyber | IMutation | IPower | IRitual, 
    sign: number
) {
    if (data.passiveAbilities) {
        const {passiveAbilities} = data;
        for (const passiveAbility of passiveAbilities) {
            const {bonusMaxParams, bonusResistances, bonusDodge} = passiveAbility;
            for (const param in bonusMaxParams) {
                char.params.maxParams[param as UserParam] += 
                    ((bonusMaxParams[param as UserParam]  || 0) * sign);
                char.params.currentParams = {...char.params.maxParams};
            }

            for (const resistance in bonusResistances) {
                char.params.resistances[resistance as DamageType] += 
                    ((bonusResistances[resistance as DamageType]  || 0) * sign);                         
            }

            char.params.dodge += ((bonusDodge || 0) * sign);
        }        
    }
}

const character = createSlice({
    name: 'character',
    initialState: createEmptyCharacter(),
    reducers: {
        setState(state, action) {
            // the most workable solution
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key];
            })
        },
        refreshState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = initialState[key];
            })
        },
        startGame(state, action) {
            const { userName, userClass } = action.payload;

            const char = createEmptyCharacter();

            char.params.name = userName;
            char.params.class = userClass;
            char.params.level = 1;

            char.params.maxParams.Health = 3;
            char.params.currentParams.Health = 3;
            char.params.maxParams.Stamina = 3;
            char.params.currentParams.Stamina = 3;

            const { bonusParam, bonusLevel } = classInfo[char.params.class];

            if (bonusParam) {
                char.params.maxParams[bonusParam] += 1;
                char.params.currentParams[bonusParam] += 1;
            }
            if (bonusLevel) {
                char.params.level += 1;
            }

            state = char;
        },
        levelUp(state, action) {
            const rand = Math.floor(Math.random()*7);

            const char = {...state};
            char.params.level += 1;
            
            const levelUpParam = classInfo[char.params.class].levelUpBonuses[rand];
            char.params.maxParams[levelUpParam] += 1;

            char.params.currentParams.Focus = char.params.maxParams.Focus;
            char.params.currentParams.Mana = char.params.maxParams.Mana;
            char.params.currentParams.Stamina = char.params.maxParams.Stamina;
            char.params.currentParams.Health = char.params.maxParams.Health;

            state = char;
        },
        getItem(state, action) {
            const char = {...state};
            const backpacks = char.general.backpacks;

            putItemInBackpacks(backpacks, action.payload);           

            state = char;
        },
        equipItem(state, action: {
            type: string,
            payload: IManageItemsProps
        }) {
            const char = {...state};
            const backpacks = [...char.general.backpacks];
            const inventory = {...char.general.inventory};

            const handsOptions: 
            (   
                InventoryPlace.rightHipItem | InventoryPlace.leftHipItem |
                InventoryPlace.leftHand | InventoryPlace.extraLeftHand |
                InventoryPlace.telekinesisLeftHand | InventoryPlace.telekinesisRightHand |
                InventoryPlace.rightHand | InventoryPlace.extraRightHand
            )[] = 
            [
                InventoryPlace.rightHipItem, InventoryPlace.leftHipItem,
                InventoryPlace.leftHand, InventoryPlace.extraLeftHand,
                InventoryPlace.rightHand, InventoryPlace.extraRightHand,
                InventoryPlace.telekinesisLeftHand, InventoryPlace.telekinesisRightHand
            ];

            const hipOptions: 
            (
                InventoryPlace.leftHip | InventoryPlace.rightHip
            )[] = 
            [
                InventoryPlace.leftHip, InventoryPlace.rightHip
            ];

            const pocketOptions: 
            (
                InventoryPlace.leftPocket | InventoryPlace.rightPocket
            )[] = 
            [
                InventoryPlace.leftPocket, InventoryPlace.rightPocket
            ];

            const doubleBackOptions: 
            (
                InventoryPlace.backItem | 
                InventoryPlace.bothHands |
                InventoryPlace.shouldersItem
            )[] = 
            [
                InventoryPlace.backItem, 
                InventoryPlace.shouldersItem,
                InventoryPlace.bothHands
            ];

            const {item, itemIndex} = action.payload;
            let itemsToPut: [IItem, InventoryPlace][] = [];

            const nothing = createNoItem().name;

            const possiblePositions = item.inventoryPlaces;

            let itemEquipped = false;
            if (possiblePositions.length === 1) {
                const position = possiblePositions[0];
                const bothHandsItem = {...inventory.Both_hands} as IItem;

                switch (position) {
                    case InventoryPlace.bothHands:
                        const leftHandItem = {...inventory.Left_hand} as IItem;
                        if (leftHandItem.name !== nothing) {
                            itemsToPut.push([leftHandItem, InventoryPlace.leftHand]);
                        }
                        inventory.Left_hand = createNoItem();
        
                        const rightHandItem = {...inventory.Right_hand} as IItem;
                        if (rightHandItem.name !== nothing) {
                            itemsToPut.push([rightHandItem, InventoryPlace.rightHand]);
                        }
                        inventory.Right_hand = createNoItem();
                        break;

                    case InventoryPlace.leftHand:
                        if (bothHandsItem.name !== nothing) {
                            itemsToPut.push([bothHandsItem, InventoryPlace.bothHands]);
                        }
                        inventory.Both_hands = createNoItem();
                        break;

                    case InventoryPlace.rightHand:
                        if (bothHandsItem.name !== nothing) {
                            itemsToPut.push([bothHandsItem, InventoryPlace.bothHands]);
                        }
                        inventory.Both_hands = createNoItem();
                        break;

                    case InventoryPlace.back:
                        if (item.name === items.other.greatSheath.name) {
                            inventory.Back_item = createNoItem();
                        }
                        break;

                    case InventoryPlace.shoulders:
                        if (item.name === items.other.quiver.name) {
                            inventory.Shoulders_item = createNoItem();
                        }
                        break;
                        
                    default:
                        break;
                }

                {
                    const thisPositionItem = {...inventory[position]} as IItem;
                    if (thisPositionItem.name !== nothing) {
                        itemsToPut.push([thisPositionItem, position]);
                    }
                }
                
                inventory[position] = item;
                char.params.lifted += item.requiredStrength;
                itemEquipped = true;
                // @ts-expect-error
            } else if (handsOptions.includes(possiblePositions[0])) {    
                let exchangeOptions: (InventoryPlace.leftHand | InventoryPlace.extraLeftHand |
                    InventoryPlace.telekinesisLeftHand | InventoryPlace.telekinesisRightHand |
                    InventoryPlace.rightHand | InventoryPlace.extraRightHand |
                    InventoryPlace.leftHipItem | InventoryPlace.rightHipItem)[] = [];
        
                for (const option of handsOptions) {
                    if (possiblePositions.includes(option)) {
                        const thisOptionItem = {...inventory[option]} as IItem | null;
    
                        if (!thisOptionItem) {
                            continue;
                        }
    
                        if (thisOptionItem.name === nothing) {
                            const bothHandsItem = {...inventory.Both_hands} as IItem;
                            if (
                                (
                                    option === InventoryPlace.leftHand ||
                                    option === InventoryPlace.rightHand
                                ) && bothHandsItem.name !== nothing 
                            ) {
                                exchangeOptions.push(option);
                                continue;
                            }
                            
                            if (
                                option !== InventoryPlace.telekinesisLeftHand &&
                                option !== InventoryPlace.telekinesisRightHand
                            ) {
                                char.params.lifted += item.requiredStrength;
                                itemEquipped = true;
                            } else {
                                if (char.params.maxParams.Focus > 0) {
                                    char.params.maxParams.Focus -= 1;
                                    itemEquipped = true;
                                    if (char.params.currentParams.Focus > 0) {
                                        char.params.currentParams.Focus -= 1;
                                    }
                                }                                
                            }     

                            if (itemEquipped) {
                                inventory[option] = item;
                            }
                            break;
                        } else if (thisOptionItem.name !== item.name) {
                            if (inventory[option] !== null) {
                                exchangeOptions.push(option);
                            }                                                        
                        }
                    }
                }
        
                if (!itemEquipped) {
                    const randomHandsOption = exchangeOptions[Math.floor(Math.random() * exchangeOptions.length)];
                    const randomHandsOptionItem = {...inventory[randomHandsOption]} as IItem;
                    if (randomHandsOptionItem.name !== nothing) {
                        itemsToPut.push([randomHandsOptionItem, randomHandsOption]);
                    }         

                    const bothHandsItem = {...inventory.Both_hands} as IItem;
                    if (
                        (
                            randomHandsOption === InventoryPlace.leftHand ||
                            randomHandsOption === InventoryPlace.rightHand
                        ) && bothHandsItem.category === InventorySlotCategory.item 
                    ) {
                        itemsToPut.push([bothHandsItem, InventoryPlace.bothHands]);
                        inventory.Both_hands = createNoItem();
                    }   

                    if (
                        randomHandsOption !== InventoryPlace.telekinesisLeftHand &&
                        randomHandsOption !== InventoryPlace.telekinesisRightHand
                    ) {
                        char.params.lifted += item.requiredStrength;
                        itemEquipped = true;
                    } else {
                        if (char.params.maxParams.Focus > 0) {
                            char.params.maxParams.Focus -= 1;
                            itemEquipped = true;
                            if (char.params.currentParams.Focus > 0) {
                                char.params.currentParams.Focus -= 1;
                            } 
                        }                                               
                    }

                    if (itemEquipped) {
                        inventory[randomHandsOption] = item;
                    }                    
                }
                // @ts-expect-error
            } else if (hipOptions.includes(possiblePositions[0])) {
                let exchangeOptions: (InventoryPlace.leftHip | InventoryPlace.rightHip)[] = [];

                for (const option of hipOptions) {
                    if (possiblePositions.includes(option)) {
                        const thisOptionItem = {...inventory[option]} as IItem | null;
    
                        if (!thisOptionItem) {
                            continue;
                        }
    
                        if (thisOptionItem.name === nothing) {
                            inventory[option] = item;
                            itemEquipped = true;
                            
                            if (option === InventoryPlace.leftHip) {
                                inventory.Left_hip_item = createNoItem();
                            }
                            if (option === InventoryPlace.rightHip) {
                                inventory.Right_hip_item = createNoItem();
                            }
                            break;
                        } else if (thisOptionItem.name !== item.name) {
                            exchangeOptions.push(option);                           
                        }
                    }
                }
        
                if (!itemEquipped) {
                    const randomHipOption = exchangeOptions[Math.floor(Math.random() * exchangeOptions.length)];
    
                    const randomHipOptionItem = {...inventory[randomHipOption]} as IItem;
                    if (randomHipOptionItem.name !== nothing) {
                        itemsToPut.push([randomHipOptionItem, randomHipOption]);
                    }

                    inventory[randomHipOption] = item;
                    itemEquipped = true;
                }
                // @ts-expect-error
            } else if (pocketOptions.includes(possiblePositions[0])) {
                let exchangeOptions: (InventoryPlace.leftPocket | InventoryPlace.rightPocket)[] = [];

                for (const option of pocketOptions) {
                    if (possiblePositions.includes(option)) {
                        const thisOptionItem = {...inventory[option]} as IItem | null;
    
                        if (!thisOptionItem) {
                            continue;
                        }
    
                        if (thisOptionItem.name === nothing) {
                            inventory[option] = item;
                            char.params.lifted += item.requiredStrength;
                            itemEquipped = true;
                            break;
                        } else if (thisOptionItem.name !== item.name) {
                            exchangeOptions.push(option);                           
                        }
                    }
                }
        
                if (!itemEquipped) {
                    const randomPocketOption = exchangeOptions[Math.floor(Math.random() * exchangeOptions.length)];
    
                    const randomPocketOptionItem = {...inventory[randomPocketOption]} as IItem;
                    if (randomPocketOptionItem.name !== nothing) {
                        itemsToPut.push([randomPocketOptionItem, randomPocketOption]);
                    }

                    inventory[randomPocketOption] = item;
                    itemEquipped = true;
                }
                // @ts-expect-error
            } else if (doubleBackOptions.includes(possiblePositions[0])) {
                let exchangeOptions: (
                    InventoryPlace.backItem | 
                    InventoryPlace.shouldersItem |
                    InventoryPlace.bothHands
                )[] = [];

                for (const option of doubleBackOptions) {
                    if (possiblePositions.includes(option)) {
                        const thisOptionItem = {...inventory[option]} as IItem | null;
    
                        if (!thisOptionItem) {
                            continue;
                        }
    
                        if (thisOptionItem.name === nothing) {
                            if (option === InventoryPlace.bothHands) {
                                const leftHandItem = {...inventory.Left_hand} as IItem;
                                const rightHandItem = {...inventory.Right_hand} as IItem;
                                if (
                                    leftHandItem.name !== nothing ||
                                    rightHandItem.name !== nothing
                                ) {
                                    exchangeOptions.push(option);
                                    continue;
                                }
                            }

                            inventory[option] = item;
                            char.params.lifted += item.requiredStrength;
                            itemEquipped = true;
                            break;
                        } else if (thisOptionItem.name !== item.name) {
                            exchangeOptions.push(option);                           
                        }
                    }
                }
        
                if (!itemEquipped) {
                    const randomHandsOption = exchangeOptions[Math.floor(Math.random() * exchangeOptions.length)];
    
                    const randomHandsOptionItem = {...inventory[randomHandsOption]} as IItem;
                    if (randomHandsOptionItem.name !== nothing) {
                        itemsToPut.push([randomHandsOptionItem, randomHandsOption]);
                    }

                    if (randomHandsOption === InventoryPlace.bothHands) {
                        const leftHandItem = {...inventory.Left_hand} as IItem;
                        if (leftHandItem.name !== nothing) {
                            itemsToPut.push([leftHandItem, InventoryPlace.leftHand]);
                        }
                        inventory.Left_hand = createNoItem();
        
                        const rightHandItem = {...inventory.Right_hand} as IItem;
                        if (rightHandItem.name !== nothing) {
                            itemsToPut.push([rightHandItem, InventoryPlace.rightHand]);
                        }
                        inventory.Right_hand = createNoItem();
                    }

                    inventory[randomHandsOption] = item;
                    char.params.lifted += item.requiredStrength;
                    itemEquipped = true;
                }
            }
           
            if (itemEquipped) {
                integratePassiveAbility(char, item, +1);

                backpacks[itemIndex] = createNoItem();

                backpacks.sort((a, b) => {
                    if (a.name === nothing) {
                        return 1
                    }
                    
                    if (b.name === nothing) {
                        return -1
                    }

                    return 0
                })

                for (const itemToPut of itemsToPut) {
                    if (
                        itemToPut[1] !== InventoryPlace.telekinesisLeftHand &&
                        itemToPut[1] !== InventoryPlace.telekinesisRightHand
                    ) {
                        char.params.lifted -= itemToPut[0].requiredStrength;
                    } else {
                        char.params.maxParams.Focus += 1;
                        char.params.currentParams.Focus += 1;
                    }    
                    putItemInBackpacks(backpacks, itemToPut[0]);
                    integratePassiveAbility(char, itemToPut[0], -1);
                }
            }            

            char.general.backpacks = backpacks;
            char.general.inventory = inventory;

            state = char;
        },
        unequipItem(state, action) {
            const char = {...state};
            const backpacks = [...char.general.backpacks];
            const inventory = {...char.general.inventory};
            const {item, inventoryPlace}: 
                {item: IItem, inventoryPlace: InventoryPlace} = action.payload;
            
            if (
                inventoryPlace !== InventoryPlace.telekinesisLeftHand &&
                inventoryPlace !== InventoryPlace.telekinesisRightHand
            ) {
                char.params.lifted -= item.requiredStrength;
            } else {
                char.params.maxParams.Focus += 1;
                char.params.currentParams.Focus += 1;
            }          
            
            switch (inventoryPlace) {
                case InventoryPlace.leftHip:
                    const leftHipItem = inventory.Left_hip_item;
                    if (leftHipItem) {
                        putItemInBackpacks(backpacks, leftHipItem);
                    }
                    
                    inventory.Left_hip_item = null;
                    break;

                case InventoryPlace.rightHip:
                    const rightHipItem = inventory.Right_hip_item;
                    if (rightHipItem) {
                        putItemInBackpacks(backpacks, rightHipItem);
                    }
                    
                    inventory.Right_hip_item = null;
                    break;

                case InventoryPlace.back:
                    if (item.name === items.other.greatSheath.name) {
                        const backItem = inventory.Back_item;
                        if (backItem) {
                            putItemInBackpacks(backpacks, backItem);
                        }
                        
                        inventory.Back_item = null;
                    }
                    break;

                case InventoryPlace.shoulders:
                    if (item.name === items.other.quiver.name) {
                        const shouldersItem = inventory.Shoulders_item;
                        if (shouldersItem) {
                            putItemInBackpacks(backpacks, shouldersItem);
                        }
                        
                        inventory.Shoulders_item = null;
                    }
                    break;

                default:
                    break;
            }

            inventory[inventoryPlace] = createNoItem();
            putItemInBackpacks(backpacks, item);
            integratePassiveAbility(char, item, -1);

            char.general.backpacks = backpacks;
            char.general.inventory = inventory;

            state = char;
        },
        returnItem(state, action: {
            type: string,
            payload: IManageItemsProps
        }) {
            const char = {...state};
            const backpacks = [...char.general.backpacks];

            const { itemIndex } = action.payload;

            backpacks[itemIndex] = createNoItem();
            const nothing = createNoItem().name;

            backpacks.sort((a, b) => {
                if (a.name === nothing) {
                    return 1
                }

                if (b.name === nothing) {
                    return -1
                }

                return 0
            })
            
            char.general.backpacks = backpacks;

            state = char;
        },
        throwItem(state, action) {
            const {
                item, 
                inventoryPlace,
                fromBackpacks,
                backpacksIndex
            } = action.payload as 
                {
                    index: number, item: IItem, 
                    fromBackpacks: boolean,
                    inventoryPlace: InventoryPlace,
                    backpacksIndex: number
                };

            const char = {...state};
            const nothing = createNoItem();

            if (fromBackpacks) {
                const backpacks = [...char.general.backpacks];

                backpacks[backpacksIndex] = nothing;
                backpacks.sort((a, b) => {
                    if (a.name === nothing.name) {
                        return 1
                    }
                    
                    if (b.name === nothing.name) {
                        return -1
                    }

                    return 0
                });

                char.general.backpacks = backpacks;
            } else {
                const inventory = {...char.general.inventory};
                if (
                    inventoryPlace !== InventoryPlace.telekinesisLeftHand &&
                    inventoryPlace !== InventoryPlace.telekinesisRightHand
                ) {
                    char.params.lifted -= item.requiredStrength;
                } else {
                    char.params.maxParams.Focus += 1;
                    char.params.currentParams.Focus += 1;
                }          
                
                inventory[inventoryPlace] = nothing;
                integratePassiveAbility(char, item, -1);

                char.general.inventory = inventory; 
            }                       

            state = char;
        },
        studySpell(state, action) {
            const char = {...state};

            char.general.mind.spells.push(action.payload);

            state = char;
        },
        dominateBending(state, action) {
            const char = {...state};

            char.general.mind.bending.push(action.payload);

            state = char;
        },
        developPower(state, action) { 
            const char = {...state};

            const power: IPower = action.payload;

            if (power.name === powers.other.telekinesis.name) {
                char.general.inventory.Telekinesis_left_hand = createNoItem();
                char.general.inventory.Telekinesis_right_hand = createNoItem();
            }

            char.general.mind.powers.push(power);            

            integratePassiveAbility(char, power, +1);

            state = char;
        },
        surpassRitual(state, action) {
            const char = {...state};   

            const ritual: IRitual = action.payload;

            char.params.maxParams.Health -= ritual.healthCost;
            char.params.currentParams.Health = char.params.maxParams.Health;
            char.general.mind.rituals.push(ritual);

            integratePassiveAbility(char, ritual, +1);
            
            const {
                bendings, lostInventorySlots, 
                unchangeableInventorySlots, 
                grantedBodyParts, newRaceName
            } = ritual;

            if (bendings.length > 0) {
                char.general.mind.bending.push(...bendings);
            }

            if (
                lostInventorySlots.length > 0 || 
                unchangeableInventorySlots.length > 0 ||
                grantedBodyParts
            ) {
                const backpacks = [...char.general.backpacks];
                const inventory = {...char.general.inventory};

                lostInventorySlots.forEach(slot => {
                    putItemInBackpacks(backpacks, inventory[slot]);
                    if (inventory[slot]) {
                        inventory[slot] = null;
                    }                    
                });

                const unchangeableSlot = createEmptyUnchangeableSlot();
                unchangeableInventorySlots.forEach(slot => {
                    putItemInBackpacks(backpacks, inventory[slot]);
                    if (inventory[slot]) {
                        inventory[slot] = unchangeableSlot;
                    }                    
                });

                if (grantedBodyParts) {
                    Object.keys(grantedBodyParts).forEach(key => {
                        const bodyPartPlace = key as InventoryPlace;
                        const bodyPartItem = grantedBodyParts[bodyPartPlace] as IRitualBodyPart;
                        inventory[bodyPartPlace] = bodyPartItem;
                    });
                } 
                
                if (newRaceName.length > 0) {
                    char.params.race = newRaceName;
                }

                char.general.backpacks = backpacks;
                char.general.inventory = inventory;
            }

            state = char;
        },
        raiseStrength(state, action) {
            const char = {...state};

            if (action.payload === 1) {
                switch (char.params.strength + action.payload) {
                    case 5:
                        char.general.backpacks.push(createNoItem());
                        char.params.strength = 5;
                        break;
                    case 4:
                        char.params.strength = 4;
                        break;
                    case 3:
                        if (
                            !char.general.mind.masteries
                                .map(mastery => mastery.name)
                                .includes(academyMasteries.brutalForce.name)
                        ) {
                            char.general.mind.masteries.push(academyMasteries.brutalForce)
                        }
                        char.general.backpacks.push(createNoItem());
                        char.params.strength = 3;
                        break;
                    case 2: 
                        char.general.backpacks.push(createNoItem());
                        char.params.strength = 2;
                        break;
                    case 1:
                        char.params.strength = 1;
                        break;
                }
            } 

            if (action.payload === 3) {
                switch (char.params.strength + action.payload) {
                    case 7:
                        char.general.backpacks.push(createNoItem());
                        char.params.strength = 5;
                        break;
                    case 6:
                        char.general.backpacks.push(createNoItem());
                        char.params.strength = 5;
                        break;
                    case 5:
                        char.general.backpacks.push(createNoItem());
                        char.general.backpacks.push(createNoItem());
                        char.params.strength = 5;
                        break;
                    case 4:
                        char.general.backpacks.push(createNoItem());
                        char.general.backpacks.push(createNoItem());
                        char.params.strength = 4;
                        break;
                    case 3:
                        char.general.backpacks.push(createNoItem());
                        char.general.backpacks.push(createNoItem());
                        char.params.strength = 3;
                        break;
                }
            }
            
            state = char;
        },
        learnMastery(state, action) {
            const char = {...state};

            const mastery = action.payload;
            char.general.mind.masteries.push(mastery);

            if (mastery.name === academyMasteries.brutalForce.name) {
                const newRace = checkRace(char.general.inventory, true);
                char.params.race = raceNames[newRace];
    
                const newRaceMastery = raceMasteries[newRace];
                if (newRaceMastery) {
                    char.general.mind.masteries.push(newRaceMastery);
                }
            }

            state = char;
        },
        implementCyber(state, action) {
            const char = {...state};

            const nothing = createNoItem().name;
            const backpacks = [...char.general.backpacks];
            const inventory = {...char.general.inventory};

            const cyber: ICyber = action.payload;

            const possiblePositions = cyber.inventoryPlaces;
            if (possiblePositions.length === 1) {
                const position = cyber.inventoryPlaces[0];
                
                const oldCyber = {...inventory[position]} as ICyber | IItem;
                if (oldCyber.name !== nothing) {
                    if (
                        !oldCyber.description.includes('Cyber') && 
                        !oldCyber.description.includes('Кибер') &&
                        !oldCyber.description.includes('Mutation') && 
                        !oldCyber.description.includes('Мутация')
                    ) {
                        putItemInBackpacks(backpacks, oldCyber); 
                    }

                    integratePassiveAbility(char, oldCyber, -1);
                }

                if (
                    position === InventoryPlace.leftHand ||
                    position === InventoryPlace.rightHand
                ) {
                    const bothHandsItem = {...inventory.Both_hands} as IItem;
                    if (bothHandsItem.name !== nothing) {
                        putItemInBackpacks(backpacks, bothHandsItem); 
                    }

                    inventory.Both_hands = createNoItem();                
                }
    
                // @ts-expect-error
                inventory[position] = cyber;
            } else {
                const handsOptions: 
                (InventoryPlace.leftHand | InventoryPlace.rightHand |
                    InventoryPlace.extraLeftHand | InventoryPlace.extraRightHand)[] = [
                    InventoryPlace.rightHand, InventoryPlace.leftHand,
                    InventoryPlace.extraLeftHand, InventoryPlace.extraRightHand
                ];

                let cyberImplemented = false;
        
                for (const option of handsOptions) {
                    if (possiblePositions.includes(option)) {
                        const thisOptionCyber = {...inventory[option]} as ICyber | IItem | null;
                        if (!thisOptionCyber) {
                            continue;
                        }

                        if (cyber.requiredCyber && thisOptionCyber.name === cyber.requiredCyber) {
                            integratePassiveAbility(char, thisOptionCyber, -1);
                            inventory[option] = cyber;
                            cyberImplemented = true;
                            break;
                        }
    
                        if (thisOptionCyber.name === nothing) {
                            const bothHandsItem = {...inventory.Both_hands} as IItem;
                            if (
                                (
                                    option === InventoryPlace.leftHand ||
                                    option === InventoryPlace.rightHand
                                ) && bothHandsItem.name !== nothing 
                            ) {
                                continue;
                            }
                            
                            inventory[option] = cyber;
                            cyberImplemented = true;
                            break;
                        }

                        if (
                            thisOptionCyber.name !== cyber.name && 
                            thisOptionCyber.priority <= cyber.priority
                        ) {
                            if (
                                !thisOptionCyber.description.includes('Cyber') && 
                                !thisOptionCyber.description.includes('Кибер') &&
                                !thisOptionCyber.description.includes('Mutation') && 
                                !thisOptionCyber.description.includes('Мутация')
                            ) {
                                putItemInBackpacks(backpacks, thisOptionCyber as IItem); 
                            }

                            integratePassiveAbility(char, thisOptionCyber, -1); 

                            inventory[option] = cyber;
                            cyberImplemented = true;
                            break;
                        }                        
                    }
                }

                if (!cyberImplemented) {
                    const randomHandsOption = handsOptions[Math.floor(Math.random() * handsOptions.length)];
    
                    const randomHandsOptionItem = {...inventory[randomHandsOption]} as IItem;
                    if (randomHandsOptionItem.name !== nothing) {
                        putItemInBackpacks(backpacks, randomHandsOptionItem); 
                        integratePassiveAbility(char, randomHandsOptionItem, -1);
                    }         

                    const bothHandsItem = {...inventory.Both_hands} as IItem;
                    if (
                        (
                            randomHandsOption === InventoryPlace.leftHand ||
                            randomHandsOption === InventoryPlace.rightHand
                        ) && bothHandsItem.name !== nothing &&
                        !bothHandsItem.description.includes('Mutation') && 
                        !bothHandsItem.description.includes('Мутация')
                    ) {
                        putItemInBackpacks(backpacks, bothHandsItem); 
                        integratePassiveAbility(char, bothHandsItem, -1);
                        inventory.Both_hands = createNoItem();
                    }           
    
                    inventory[randomHandsOption] = cyber;
                }
            }                      

            integratePassiveAbility(char, cyber, +1);
            if (cyber.givenMastery) {
                char.general.mind.masteries.push(cyber.givenMastery);
            }

            char.general.backpacks = backpacks;
            char.general.inventory = inventory;

            state = char;
        },
        mutateMutation(state, action) {
            const char = {...state};

            const mutation: IMutation = action.payload;
            const position = mutation.inventoryPlaces[0];
            const nothing = createNoItem().name;
            const backpacks = [...char.general.backpacks];
            const inventory = {...char.general.inventory};

            if (mutation.name === mutations.weapons.claws.name) {
                const bothHandsItem = {...inventory.Both_hands} as IItem;
                if (bothHandsItem.name !== nothing) {
                    putItemInBackpacks(backpacks, bothHandsItem); 
                    integratePassiveAbility(char, bothHandsItem, -1);
                    inventory.Both_hands = createNoItem();
                }   

                const leftHandItem = {...inventory.Left_hand} as IItem;
                if (leftHandItem.name !== nothing) {
                    putItemInBackpacks(backpacks, leftHandItem); 
                    integratePassiveAbility(char, leftHandItem, -1);
                }
                inventory.Left_hand = mutations.weapons.claw;

                const rightHandItem = {...inventory.Right_hand} as IItem;
                if (rightHandItem.name !== nothing) {
                    putItemInBackpacks(backpacks, rightHandItem); 
                    integratePassiveAbility(char, rightHandItem, -1);
                }
                inventory.Right_hand = mutations.weapons.claw;

                if (inventory.Extra_left_hand) {
                    const extraLeftHandItem = {...inventory.Extra_left_hand} as IItem;
                    if (extraLeftHandItem.name !== nothing) {
                        putItemInBackpacks(backpacks, extraLeftHandItem); 
                        integratePassiveAbility(char, extraLeftHandItem, -1);
                    }
                    inventory.Extra_left_hand = mutations.weapons.claw;
                }
                if (inventory.Extra_right_hand) {
                    const extraRightHandItem = {...inventory.Extra_right_hand} as IItem;
                    if (extraRightHandItem.name !== nothing) {
                        putItemInBackpacks(backpacks, extraRightHandItem); 
                        integratePassiveAbility(char, extraRightHandItem, -1);
                    }
                    inventory.Extra_right_hand = mutations.weapons.claw;
                }
            } else {
                const previousMutation = inventory[position];
                integratePassiveAbility(char, previousMutation as IMutation, -1);
            }            

            if (mutation.name === mutations.other.extraArms.name) {
                if (
                    inventory.Both_hands?.name === mutations.weapons.claws.name ||
                    inventory.Left_hand?.name === mutations.weapons.claw.name ||
                    inventory.Right_hand?.name === mutations.weapons.claw.name
                ) {
                    inventory.Extra_left_hand = mutations.weapons.claw;
                    inventory.Extra_right_hand = mutations.weapons.claw;
                } else {
                    inventory.Extra_left_hand = createNoItem();
                    inventory.Extra_right_hand = createNoItem();
                }
            }

            // @ts-expect-error
            inventory[position] = mutation;

            const isStrong = char.params.strength >= 3;
                
            const raceMasteriesNames = Object.values(raceMasteries)
                .map(mastery => mastery.name);
                char.general.mind.masteries = char.general.mind.masteries
                .filter(mastery => {
                    if (raceMasteriesNames.includes(mastery.name)) {
                        return false
                    }

                    return true
                })

            const newRace = checkRace(inventory, isStrong);
            char.params.race = raceNames[newRace];

            const newRaceMastery = raceMasteries[newRace];
            if (newRaceMastery) {
                char.general.mind.masteries.push(newRaceMastery);
            }
            if (mutation.givenMastery) {
                char.general.mind.masteries.push(mutation.givenMastery);
            }

            integratePassiveAbility(char, mutation, +1);

            char.general.backpacks = backpacks;
            char.general.inventory = inventory;

            state = char;
        },
        processAbility(state, action) {
            const char = {...state};
            const { data } = action.payload;

            Object.keys(data).forEach(key => {
                char.params.currentParams[key as UserParam] -= data[key];
            });

            state = char;
        },
        sufferAbility(state, action) {
            const { ability } = action.payload;
            const char = {...state};

            const {damage, bonusResistances} = ability as IAbility;
            if (damage) {
                for (const key in damage) {
                    const damageType = key as DamageType;
                    let resultDamage = damage[damageType]! - char.params.resistances[damageType];
                    if (
                        resultDamage < 0 && 
                        (
                            damageType === DamageType.physicalPiercing ||
                            damageType === DamageType.physicalSlashing ||
                            damageType === DamageType.physicalSmashing
                        )
                    ) {
                        resultDamage = 0;
                    }

                    char.params.currentParams[UserParam.health] -= resultDamage;
                }
            }
                    
            if (bonusResistances) {
                for (const key in bonusResistances) {
                    const damageType = key as DamageType;
                    char.params.resistances[damageType] += bonusResistances[damageType]!;
                }
            }                

            state = char;
        },
        spendStamina(state, action) {
            const char = {...state};

            char.params.currentParams.Stamina -= action.payload;

            state = char;
        },
        regenerate(state, action) {
            const char = {...state};

            if (
                char.params.currentParams.Health < 
                char.params.maxParams.Health
            ) {
                char.params.currentParams.Health++;
            }

            state = char;
        },
        respite(state, action) {
            const char = {...state};

            for (const param in char.params.currentParams) {
                if (
                    param !== UserParam.health && 
                    param !== UserParam.blank
                ) {
                    if (
                        Number(char.params.currentParams[param as UserParam]) < 
                        Number(char.params.maxParams[param as UserParam])
                    ) {
                        char.params.currentParams[param as UserParam]++;
                    }
                }
            }

            state = char;
        },
    }
})

export default character