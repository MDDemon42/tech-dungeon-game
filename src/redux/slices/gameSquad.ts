import {createSlice} from '@reduxjs/toolkit';
import createEmptyCharacter, 
{ createNoItem } from '../../helpers/emptyEssencesCreators';
import { 
    IAbility,
    ICharacher, 
    ICyber, 
    IGameSquad, 
    IItem, 
    IManageItemsProps,
    IMastery,
    IMutation,
    IPower,
    IRitual
} from '../../enums-and-interfaces/interfaces';
import mutations from '../../gameScreens/MutaLab/mutations';
import academyMasteries from '../../gameScreens/Academy/masteries';
import checkRace from '../../general/races/checkRace';
import putItemInBackpacks from '../../helpers/backpacksPutter';
import { 
    UserResource, 
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

export const createGameSquad = (): IGameSquad => {
    return {
        currentlyWatched: 0,
        squadMembers: {
            0: createEmptyCharacter()
        },
        resources: {
            [UserResource.core]: 0,
            [UserResource.food]: 10,
            [UserResource.gem]: 0,
            [UserResource.gene]: 0,
            [UserResource.none]: 10
        },
        storage: []
}};

const raceMasteries: Partial<Record<Race, IMastery>> = {
    [Race.gnoll]: academyMasteries.maceAffiliation,
    [Race.naga]: academyMasteries.spearAffiliation
}

function integratePassiveAbility(
    squadMember: ICharacher,
    data: IItem | ICyber | IMutation | IPower | IRitual, 
    sign: number
) {
    if (data.passiveAbilities) {
        const {passiveAbilities} = data;
        for (const passiveAbility of passiveAbilities) {
            const {bonusMaxParams, bonusResistances, bonusDodge} = passiveAbility;
            for (const param in bonusMaxParams) {
                squadMember.params.maxParams[param as UserParam] += 
                    ((bonusMaxParams[param as UserParam]  || 0) * sign);
                squadMember.params.currentParams = {...squadMember.params.maxParams};
            }

            for (const resistance in bonusResistances) {
                squadMember.params.resistances[resistance as DamageType] += 
                    ((bonusResistances[resistance as DamageType]  || 0) * sign);                         
            }

            squadMember.params.dodge += ((bonusDodge || 0) * sign);
        }        
    }
}

const gameSquad = createSlice({
    name: 'gameSquad',
    initialState: createGameSquad(),
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
            const {userName, userClass} = action.payload;

            const newState = createGameSquad();
            const squadMember = createEmptyCharacter();

            squadMember.params.name = userName;
            squadMember.params.class = userClass;
            squadMember.params.level = 1;

            squadMember.params.maxParams.Health = 3;
            squadMember.params.currentParams.Health = 3;
            squadMember.params.maxParams.Stamina = 3;
            squadMember.params.currentParams.Stamina = 3;

            const {
                bonusParam, 
                bonusResource, 
                bonusLevel
            } = classInfo[squadMember.params.class];

            if (bonusParam) {
                squadMember.params.maxParams[bonusParam] += 1;
                squadMember.params.currentParams[bonusParam] += 1;
            }
            if (bonusLevel) {
                squadMember.params.level += 1;
            }
            if (bonusResource) {
                newState.resources[bonusResource] += 1;
            }

            newState.squadMembers[0] = squadMember;

            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = newState[key];
            })
        },
        levelUp(state, action) {
            const rand = Math.floor(Math.random()*7);

            const squad = {...state.squadMembers};
            Object.values(squad).forEach(squadMember => {
                squadMember.params.level += 1;
                
                const levelUpParam = classInfo[squadMember.params.class].levelUpBonuses[rand];
                squadMember.params.maxParams[levelUpParam] += 1;

                Object.keys(squad).forEach(key => {
                    if (!!squad[key]) {
                        squad[key]!.params.currentParams.Focus = squad[key]!.params.maxParams.Focus;
                        squad[key]!.params.currentParams.Mana = squad[key]!.params.maxParams.Mana;
                        squad[key]!.params.currentParams.Stamina = squad[key]!.params.maxParams.Stamina;
                        squad[key]!.params.currentParams[UserParam.health] = squad[key]!.params.maxParams[UserParam.health];
                    }
                });
            });            

            state.squadMembers = squad;
        },
        changeSquadMember(state, action) {
            state.currentlyWatched = action.payload
        },
        getBigResource(state, action) {
            const oldState = {...state};
            const index = oldState.currentlyWatched;
            const members = oldState.squadMembers;
            const squadMember = members[index];
            const backpacks = squadMember.general.backpacks;

            const {resource, amount} = action.payload;

            for (let count = 0; count < amount; count ++) {
                putItemInBackpacks(backpacks, resource);
            }            

            state = oldState;
        },
        getUserResource(state, action) {
            const oldState = {...state};

            const {resource, amount, bought}: 
                {
                    resource: UserResource, 
                    amount: number,
                    bought: boolean
                } = action.payload;

            oldState.resources[resource] += amount;

            if (bought) {
                oldState.resources.Gems--;
            }

            state = oldState;
        },
        useBigResource(state, action) {
            const oldState = {...state};
            const members = oldState.squadMembers;
            const squadMember = members[oldState.currentlyWatched];

            let {amount, name} = action.payload;

            const backpacks = squadMember.general.backpacks.map(item => {
                if (item.name === name && amount > 0) {
                    amount--;
                    return createNoItem();
                } else {
                    return item
                }
            })

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

            squadMember.general.backpacks = backpacks;

            state = oldState;
        },
        getItem(state, action) {
            const oldState = {...state};
            const index = oldState.currentlyWatched;
            const members = oldState.squadMembers;
            const squadMember = members[index];
            const backpacks = squadMember.general.backpacks;

            putItemInBackpacks(backpacks, action.payload);           

            state = oldState;
        },
        buyItem(state, action) {
            const oldState = {...state};
            const resources = oldState.resources;
            const index = oldState.currentlyWatched;
            const members = oldState.squadMembers;
            const squadMember = members[index];
            const backpacks = squadMember.general.backpacks;

            resources[UserResource.gem] -= action.payload.cost;

            putItemInBackpacks(backpacks, action.payload);           

            state = oldState;
        },
        equipItem(state, action: {
            type: string,
            payload: IManageItemsProps
        }) {
            const oldState = {...state};
            const index = oldState.currentlyWatched;
            const members = oldState.squadMembers;
            const squadMember = members[index];
            const backpacks = [...squadMember.general.backpacks];
            const inventory = {...squadMember.general.inventory};

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
                squadMember.params.lifted += item.requiredStrength;
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
                                squadMember.params.lifted += item.requiredStrength;
                                itemEquipped = true;
                            } else {
                                if (squadMember.params.maxParams.Focus > 0) {
                                    squadMember.params.maxParams.Focus -= 1;
                                    itemEquipped = true;
                                    if (squadMember.params.currentParams.Focus > 0) {
                                        squadMember.params.currentParams.Focus -= 1;
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
                        squadMember.params.lifted += item.requiredStrength;
                        itemEquipped = true;
                    } else {
                        if (squadMember.params.maxParams.Focus > 0) {
                            squadMember.params.maxParams.Focus -= 1;
                            itemEquipped = true;
                            if (squadMember.params.currentParams.Focus > 0) {
                                squadMember.params.currentParams.Focus -= 1;
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
                            squadMember.params.lifted += item.requiredStrength;
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
                            squadMember.params.lifted += item.requiredStrength;
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
                    squadMember.params.lifted += item.requiredStrength;
                    itemEquipped = true;
                }
            }
           
            if (itemEquipped) {
                integratePassiveAbility(squadMember, item, +1);

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
                        squadMember.params.lifted -= itemToPut[0].requiredStrength;
                    } else {
                        squadMember.params.maxParams.Focus += 1;
                        squadMember.params.currentParams.Focus += 1;
                    }    
                    putItemInBackpacks(backpacks, itemToPut[0]);
                    integratePassiveAbility(squadMember, itemToPut[0], -1);
                }
            }            

            squadMember.general.backpacks = backpacks;
            squadMember.general.inventory = inventory;

            state = oldState;
        },
        unequipItem(state, action) {
            const oldState = {...state};
            const squadMember = {...oldState.squadMembers[oldState.currentlyWatched]};
            const backpacks = [...squadMember.general.backpacks];
            const inventory = {...squadMember.general.inventory};
            const {item, inventoryPlace}: 
                {item: IItem, inventoryPlace: InventoryPlace} = action.payload;
            
            if (
                inventoryPlace !== InventoryPlace.telekinesisLeftHand &&
                inventoryPlace !== InventoryPlace.telekinesisRightHand
            ) {
                squadMember.params.lifted -= item.requiredStrength;
            } else {
                squadMember.params.maxParams.Focus += 1;
                squadMember.params.currentParams.Focus += 1;
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
            integratePassiveAbility(squadMember, item, -1);

            squadMember.general.backpacks = backpacks;
            squadMember.general.inventory = inventory;

            state = oldState;
        },
        sellItem(state, action: {
            type: string,
            payload: IManageItemsProps
        }) {
            const oldState = {...state};
            const resources = oldState.resources;
            const members = oldState.squadMembers;
            const squadMember = members[oldState.currentlyWatched];
            const backpacks = [...squadMember.general.backpacks];

            const {item, itemIndex} = action.payload;

            backpacks[itemIndex] = createNoItem();
            const nothing = createNoItem().name;

            let profit = 0;
            if (
                squadMember.general.mind.masteries
                    .map(mastery => mastery.name)
                    .includes(academyMasteries.sellmanship.name)
            ) {
                profit = item.cost;
            } else if (item.name !== nothing) {
                profit = 1;
            } 

            backpacks.sort((a, b) => {
                if (a.name === nothing) {
                    return 1
                }

                if (b.name === nothing) {
                    return -1
                }

                return 0
            })
            
            squadMember.general.backpacks = backpacks;
            resources.Gems += profit;

            state = oldState;
        },
        throwItem(state, action) {
            const {index, item, inventoryPlace} = action.payload as 
                {index: number, item: IItem, inventoryPlace: InventoryPlace};

            const oldState = {...state};
            const squadMember = {...oldState.squadMembers[index]};
            const inventory = {...squadMember.general.inventory};
            
            if (
                inventoryPlace !== InventoryPlace.telekinesisLeftHand &&
                inventoryPlace !== InventoryPlace.telekinesisRightHand
            ) {
                squadMember.params.lifted -= item.requiredStrength;
            } else {
                squadMember.params.maxParams.Focus += 1;
                squadMember.params.currentParams.Focus += 1;
            }          
            
            inventory[inventoryPlace] = createNoItem();
            integratePassiveAbility(squadMember, item, -1);

            squadMember.general.inventory = inventory;

            state = oldState;
        },
        utilizeRemains(state, action: {
            type: string,
            payload: number
        }) {
            const oldState = {...state};
            const resources = oldState.resources;
            const members = oldState.squadMembers;
            const squadMember = members[oldState.currentlyWatched];

            squadMember.general.backpacks[action.payload] = createNoItem();
            
            resources['Muta-genes'] += 1;

            state = oldState;
        },
        studySpell(state, action) {
            const {index} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index]!;

            squadMember.general.mind.spells.push(action.payload.data);

            state.squadMembers = squad;
        },
        dominateBending(state, action) {
            const {index, data} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index];

            squadMember.general.mind.bending.push(data);

            state.squadMembers = squad;
        },
        developPower(state, action) { 
            const oldState = {...state};           
            const squadMember = oldState.squadMembers[oldState.currentlyWatched];

            const power: IPower = action.payload;

            if (power.name === powers.other.telekinesis.name) {
                squadMember.general.inventory.Telekinesis_left_hand = createNoItem();
                squadMember.general.inventory.Telekinesis_right_hand = createNoItem();
            }

            squadMember.general.mind.powers.push(power);            

            integratePassiveAbility(squadMember, power, +1);

            state = oldState;
        },
        surpassRitual(state, action) {
            const oldState = {...state};           
            const squadMember = oldState.squadMembers[oldState.currentlyWatched];

            const ritual: IRitual = action.payload;

            squadMember.general.mind.rituals.push(ritual);

            integratePassiveAbility(squadMember, ritual, +1);

            state = oldState;
        },
        raiseStrength(state, action) {
            const squad = {...state.squadMembers};
            const squadMember = squad[state.currentlyWatched];

            if (action.payload === 1) {
                switch (squadMember.params.strength + action.payload) {
                    case 5:
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.params.strength = 5;
                        break;
                    case 4:
                        squadMember.params.strength = 4;
                        break;
                    case 3:
                        if (
                            !squadMember.general.mind.masteries
                                .map(mastery => mastery.name)
                                .includes(academyMasteries.brutalForce.name)
                        ) {
                            squadMember.general.mind.masteries.push(academyMasteries.brutalForce)
                        }
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.params.strength = 3;
                        break;
                    case 2: 
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.params.strength = 2;
                        break;
                    case 1:
                        squadMember.params.strength = 1;
                        break;
                }
            } 

            if (action.payload === 3) {
                switch (squadMember.params.strength + action.payload) {
                    case 7:
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.params.strength = 5;
                        break;
                    case 6:
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.params.strength = 5;
                        break;
                    case 5:
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.params.strength = 5;
                        break;
                    case 4:
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.params.strength = 4;
                        break;
                    case 3:
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.general.backpacks.push(createNoItem());
                        squadMember.params.strength = 3;
                        break;
                }
            }
            
            state.squadMembers = squad;
        },
        learnMastery(state, action) {
            const squad = {...state.squadMembers};
            const squadMember = squad[state.currentlyWatched];

            const mastery = action.payload;
            squadMember.general.mind.masteries.push(mastery);

            if (mastery.name === academyMasteries.brutalForce.name) {
                const newRace = checkRace(squadMember.general.inventory, true);
                squadMember.params.race = raceNames[newRace];
    
                const newRaceMastery = raceMasteries[newRace];
                if (newRaceMastery) {
                    squadMember.general.mind.masteries.push(newRaceMastery);
                }
            }

            state.squadMembers = squad;
        },
        implementCyber(state, action) {
            const oldState = {...state};
            const squadMember = oldState.squadMembers[oldState.currentlyWatched];

            const nothing = createNoItem().name;
            const backpacks = [...squadMember.general.backpacks];
            const inventory = {...squadMember.general.inventory};

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
                        putItemInBackpacks(backpacks, oldCyber as IItem); 
                    }

                    integratePassiveAbility(squadMember, oldCyber, -1);
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
                            integratePassiveAbility(squadMember, thisOptionCyber, -1);
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

                            integratePassiveAbility(squadMember, thisOptionCyber, -1); 

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
                        integratePassiveAbility(squadMember, randomHandsOptionItem, -1);
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
                        integratePassiveAbility(squadMember, bothHandsItem, -1);
                        inventory.Both_hands = createNoItem();
                    }           
    
                    inventory[randomHandsOption] = cyber;
                }
            }                      
            
            oldState.resources[UserResource.core] -= cyber.cost;

            integratePassiveAbility(squadMember, cyber, +1);
            if (cyber.givenMastery) {
                squadMember.general.mind.masteries.push(cyber.givenMastery);
            }

            squadMember.general.backpacks = backpacks;
            squadMember.general.inventory = inventory;

            state = oldState;
        },
        mutateMutation(state, action) {
            const oldState = {...state};
            const squadMember = oldState.squadMembers[oldState.currentlyWatched];

            const mutation: IMutation = action.payload;
            const position = mutation.inventoryPlaces[0];
            const nothing = createNoItem().name;
            const backpacks = [...squadMember.general.backpacks];
            const inventory = {...squadMember.general.inventory};

            if (mutation.name === mutations.weapons.claws.name) {
                const bothHandsItem = {...inventory.Both_hands} as IItem;
                if (bothHandsItem.name !== nothing) {
                    putItemInBackpacks(backpacks, bothHandsItem); 
                    integratePassiveAbility(squadMember, bothHandsItem, -1);
                    inventory.Both_hands = createNoItem();
                }   

                const leftHandItem = {...inventory.Left_hand} as IItem;
                if (leftHandItem.name !== nothing) {
                    putItemInBackpacks(backpacks, leftHandItem); 
                    integratePassiveAbility(squadMember, leftHandItem, -1);
                }
                inventory.Left_hand = mutations.weapons.claw;

                const rightHandItem = {...inventory.Right_hand} as IItem;
                if (rightHandItem.name !== nothing) {
                    putItemInBackpacks(backpacks, rightHandItem); 
                    integratePassiveAbility(squadMember, rightHandItem, -1);
                }
                inventory.Right_hand = mutations.weapons.claw;

                if (inventory.Extra_left_hand) {
                    const extraLeftHandItem = {...inventory.Extra_left_hand} as IItem;
                    if (extraLeftHandItem.name !== nothing) {
                        putItemInBackpacks(backpacks, extraLeftHandItem); 
                        integratePassiveAbility(squadMember, extraLeftHandItem, -1);
                    }
                    inventory.Extra_left_hand = mutations.weapons.claw;
                }
                if (inventory.Extra_right_hand) {
                    const extraRightHandItem = {...inventory.Extra_right_hand} as IItem;
                    if (extraRightHandItem.name !== nothing) {
                        putItemInBackpacks(backpacks, extraRightHandItem); 
                        integratePassiveAbility(squadMember, extraRightHandItem, -1);
                    }
                    inventory.Extra_right_hand = mutations.weapons.claw;
                }
            } else {
                const previousMutation = inventory[position];
                integratePassiveAbility(squadMember, previousMutation as IMutation, -1);
            }            

            if (mutation.name === mutations.other.extraArms.name) {
                if (
                    inventory.Both_hands.name === mutations.weapons.claws.name ||
                    inventory.Left_hand.name === mutations.weapons.claw.name ||
                    inventory.Right_hand.name === mutations.weapons.claw.name
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
            oldState.resources[UserResource.gene] -= mutation.cost;

            const isStrong = squadMember.params.strength >= 3;
                
            const raceMasteriesNames = Object.values(raceMasteries)
                .map(mastery => mastery.name);
            squadMember.general.mind.masteries = squadMember.general.mind.masteries
                .filter(mastery => {
                    if (raceMasteriesNames.includes(mastery.name)) {
                        return false
                    }

                    return true
                })

            const newRace = checkRace(inventory, isStrong);
            squadMember.params.race = raceNames[newRace];

            const newRaceMastery = raceMasteries[newRace];
            if (newRaceMastery) {
                squadMember.general.mind.masteries.push(newRaceMastery);
            }
            if (mutation.givenMastery) {
                squadMember.general.mind.masteries.push(mutation.givenMastery);
            }

            integratePassiveAbility(squadMember, mutation, +1);

            squadMember.general.backpacks = backpacks;
            squadMember.general.inventory = inventory;

            state = oldState;
        },
        hireSquaddie(state, action) {
            const oldState = {...state};
            const {index, character} = action.payload;

            oldState.squadMembers[index] = character;

            state = oldState;
        },
        processAbility(state, action) {
            const {index, data} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index];

            Object.keys(data).forEach(key => {
                squadMember.params.currentParams[key as UserParam] -= data[key];
            });

            state.squadMembers = squad;
        },
        sufferAbility(state, action) {
            const {indexes, ability} = action.payload;
            const squad = {...state.squadMembers};
            const squadMembers = {} as Record<string, ICharacher>;
            indexes.forEach((index: number) => {
                if (squad[index]) {
                    squadMembers[index] = squad[index];
                }
            })

            const {damage, bonusResistances} = ability as IAbility;
            for (const index in squadMembers) {
                const squadMember = squadMembers[index];

                if (damage) {
                    for (const key in damage) {
                        const damageType = key as DamageType;
                        let resultDamage = damage[damageType]! - squadMember.params.resistances[damageType];
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

                        squadMember.params.currentParams[UserParam.health] -= resultDamage;
                    }
                }
                      
                if (bonusResistances) {
                    for (const key in bonusResistances) {
                        const damageType = key as DamageType;
                        squadMember.params.resistances[damageType] += bonusResistances[damageType]!;
                    }
                }                
            }  
            
            indexes.forEach((index: number) => {
                if (squad[index]) {
                    squad[index] = squadMembers[index];
                }
            })

            state.squadMembers = squad;
        },
        spendStamina(state, action) {
            const squad = {...state.squadMembers};
            const squadMember = squad[state.currentlyWatched];

            squadMember.params.currentParams.Stamina -= action.payload;
            
            if (squadMember.params.currentParams.Satiety > 0) {
                squadMember.params.currentParams.Satiety--;
            }            

            state.squadMembers = squad;
        },
        eatFood(state, action) {
            const oldState = {...state};
            const squad = {...oldState.squadMembers};
            const squadMember = squad[oldState.currentlyWatched];

            if (
                squadMember.params.currentParams.Health < 
                squadMember.params.maxParams.Health
            ) {
                squadMember.params.currentParams.Health++;
            }

            if (
                squadMember.params.currentParams.Satiety < 
                squadMember.params.maxParams.Satiety
            ) {
                squadMember.params.currentParams.Satiety++;
            }

            oldState.resources.Food--;
            oldState.squadMembers = squad;

            state = oldState;
        },
        regenerate(state, action) {
            const squad = {...state.squadMembers};
            const squadMember = squad[state.currentlyWatched];

            if (
                squadMember.params.currentParams.Health < 
                squadMember.params.maxParams.Health
            ) {
                squadMember.params.currentParams.Health++;
            }

            state.squadMembers = squad;
        },
        relaxate(state, action) {
            const squad = {...state.squadMembers};

            for (const index in squad) {
                const squadMember = squad[index];
                if (squadMember.params.currentParams.Satiety > 0) {
                    for (const param in squadMember.params.currentParams) {
                        if (
                            param !== UserParam.health && 
                            param !== UserParam.blank &&
                            param !== UserParam.satiety
                        ) {
                            if (
                                Number(squadMember.params.currentParams[param as UserParam]) < 
                                Number(squadMember.params.maxParams[param as UserParam])
                            ) {
                                squadMember.params.currentParams[param as UserParam] = 
                                    Number(squadMember.params.maxParams[param as UserParam]);
                            }
                        }
                    }

                    if (
                        squadMember.params.currentParams.Health <
                        squadMember.params.maxParams.Health
                    ) {
                        squadMember.params.currentParams.Health++;
                    }
                    
                    squadMember.params.currentParams.Satiety--;                    
                } else {
                    for (const param in squadMember.params.currentParams) {
                        if (
                            param !== UserParam.health && 
                            param !== UserParam.blank &&
                            param !== UserParam.satiety
                        ) {
                            if (
                                Number(squadMember.params.currentParams[param as UserParam]) < 
                                Number(squadMember.params.maxParams[param as UserParam])
                            ) {
                                squadMember.params.currentParams[param as UserParam]++;
                            }
                        }
                    }

                    if (squadMember.params.currentParams.Health > 0) {
                        squadMember.params.currentParams.Health--;
                    }
                }                
            }

            state.squadMembers = squad;
        },
        respite(state, action) {
            const squad = {...state.squadMembers};

            for (const index in squad) {
                const squadMember = squad[index];
                for (const param in squadMember.params.currentParams) {
                    if (
                        param !== UserParam.health && 
                        param !== UserParam.blank &&
                        param !== UserParam.satiety
                    ) {
                        if (
                            Number(squadMember.params.currentParams[param as UserParam]) < 
                            Number(squadMember.params.maxParams[param as UserParam])
                        ) {
                            squadMember.params.currentParams[param as UserParam]++;
                        }
                    }
                }
            }

            state.squadMembers = squad;
        },
        expandStorage(state, action) {
            const oldState = {...state};
            const mansionStage = action.payload;

            for (let i = 0; i < mansionStage * 4; i++) {
                oldState.storage.push(createNoItem());
            }
            
            state = oldState;
        },
        putIntoStorage(state, action) {
            const oldState = {...state};
            const squadMember = {...oldState.squadMembers[oldState.currentlyWatched]};
            const backpacks = [...squadMember.general.backpacks]; 
            
            const {item, itemIndex} = action.payload;

            putItemInBackpacks(oldState.storage, item);

            const nothing = createNoItem();
            backpacks[itemIndex] = nothing;

            backpacks.sort((a, b) => {
                if (a.name === nothing.name) {
                    return 1
                }
                
                if (b.name === nothing.name) {
                    return -1
                }

                return 0
            })

            squadMember.general.backpacks = backpacks;
            state = oldState;
        },
        getFromStorage(state, action) {
            const oldState = {...state};
            const squadMember = {...oldState.squadMembers[oldState.currentlyWatched]};
            const backpacks = [...squadMember.general.backpacks]; 
            
            const {item, itemIndex} = action.payload;

            putItemInBackpacks(backpacks, item);

            const nothing = createNoItem();
            oldState.storage[itemIndex] = nothing;

            oldState.storage.sort((a, b) => {
                if (a.name === nothing.name) {
                    return 1
                }
                
                if (b.name === nothing.name) {
                    return -1
                }

                return 0
            })

            squadMember.general.backpacks = backpacks;
            state = oldState;
        }
    }
})

export default gameSquad