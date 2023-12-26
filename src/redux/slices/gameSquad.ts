import {createSlice} from '@reduxjs/toolkit';
import createEmptyCharacter, 
{ 
    createEmptyInventory, 
    createNoItem 
} from '../../helpers/emptyEssencesCreators';
import { 
    IAbility,
    ICharacher,
    IClassInfo, 
    ICyber, 
    IGameSquad, 
    IItem, 
    IManageItemsProps,
    IMastery,
    IMutation,
    IPower
} from '../../enums-and-interfaces/interfaces';
import mutations from '../../gameScreens/MutaLab/mutations';
import academyMasteries from '../../gameScreens/Academy/masteries';
import checkRace from '../../general/races/checkRace';
import putItemInBackpacks from '../../helpers/backpacksPutter';
import { 
    UserResource, 
    UserParam, 
    InventoryPlace, 
    UserStartClass,
    Race,
    DamageType
} from '../../enums-and-interfaces/enums';

export function placeAsKey(place: string) {
    return place.split(' ').map((part, index) => {
        if (index === 0) {
            part = part[0].toLowerCase() + part.substring(1);
        } else {
            part = part[0].toUpperCase() + part.substring(1);
        }
        return part
    }).join('');
}

export const createGameSquad: () => IGameSquad = () => {
    return {
    currentlyWatched: 0,
    squadMembers: {
        0: createEmptyCharacter()
    },
    resources: {
        [UserResource.core]: 0,
        [UserResource.gem]: 0,
        [UserResource.gene]: 0,
        [UserResource.none]: 10
    }
}};

const initialState = createGameSquad();

function createLevelUpBonuses(params: UserParam[]) {
    const standartLevelUpBonuses = [
        UserParam.health, UserParam.focus, UserParam.mana, UserParam.stamina, UserParam.blank
    ];

    const result = [...standartLevelUpBonuses];
    result.push(...params);

    return result
}

function getRandomStartName() {
    const startNames = [
        chrome.i18n.getMessage('start_name_boris'),
        chrome.i18n.getMessage('start_name_jackline'),
        chrome.i18n.getMessage('start_name_stephan'),
        chrome.i18n.getMessage('start_name_colin'),
        chrome.i18n.getMessage('start_name_mishelle'),
        chrome.i18n.getMessage('start_name_hanz'),
        chrome.i18n.getMessage('start_name_romul'),
        chrome.i18n.getMessage('start_name_albert')
    ]

    return startNames[Math.floor(Math.random() * startNames.length)]
}

export const classInfo: IClassInfo = {
    [UserStartClass.vital]: {
        bonusParam: UserParam.health,
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.health]),
        description: 'Gets extra Health on start.\n\nOn level up has super increased chance of getting Health.\n\nBut there is a chance to get nothing too',
    },
    [UserStartClass.tireless]: {
        bonusParam: UserParam.stamina,
        levelUpBonuses: createLevelUpBonuses([UserParam.stamina, UserParam.stamina]),
        description: 'Gets extra Stamina on start.\n\nOn level up has super increased chance of getting Stamina.\n\nBut there is a chance to get nothing too'
    },
    [UserStartClass.creative]: {
        bonusParam: UserParam.mana,
        levelUpBonuses: createLevelUpBonuses([UserParam.mana, UserParam.mana]),
        description: 'Gets extra Mana on start.\n\nOn level up has super increased chance of getting Mana.\n\nBut there is a chance to get nothing too'
    },
    [UserStartClass.dreamer]: {
        bonusParam: UserParam.focus,
        levelUpBonuses: createLevelUpBonuses([UserParam.focus, UserParam.focus]),
        description: 'Gets extra Focus on start.\n\nOn level up has super increased chance of getting Focus.\n\nBut there is a chance to get nothing too'
    },
    [UserStartClass.geneKeeper]: {
        bonusResource: UserResource.gene,
        levelUpBonuses: createLevelUpBonuses([UserParam.stamina, UserParam.blank]),
        description: 'Gets extra Muta-gene on start.\n\nOn level up has increased chance of getting Stamina.\n\nBut there is a big chance to get nothing too',
    },
    [UserStartClass.coreKeeper]: {
        bonusResource: UserResource.core,
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.blank]),
        description: 'Gets extra Mecha-core on start.\n\nOn level up has increased chance of getting Health.\n\nBut there is a big chance to get nothing too'
    },
    [UserStartClass.richie]: {
        bonusResource: UserResource.gem,
        levelUpBonuses: createLevelUpBonuses([UserParam.mana, UserParam.blank]),
        description: 'Gets extra Gem on start.\n\nOn level up has increased chance of getting Mana.\n\nBut there is a big chance to get nothing too'
    },
    [UserStartClass.ingenious]: {
        bonusLevel: true,
        levelUpBonuses: createLevelUpBonuses([UserParam.mana, UserParam.focus]),
        description: 'Gets extra Level on start.\n\nOn level up has increased chance of getting Mana or Focus.\n\nBut there is a chance to get nothing too'
    },
    [UserStartClass.noIcon]: {
        bonusParam: UserParam.blank,
        levelUpBonuses: [UserParam.blank],
        description: 'Choose one of classes to start playing'
    }
}

const raceMasteries: Partial<Record<Race, IMastery>> = {
    [Race.gnoll]: academyMasteries.maceAffiliation,
    [Race.naga]: academyMasteries.spearAffiliation
}

function integratePassiveAbility(
    squadMember: ICharacher,
    data: IItem | ICyber | IMutation | IPower, 
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
    initialState,
    reducers: {
        setState(state, action) {
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
        changeName(state, action) {
            const oldState = {...state};
            const squad = {...oldState.squadMembers};
            const squadMember = squad[oldState.currentlyWatched];

            squadMember.params.name = action.payload;

            state = oldState;
        },
        changeClass(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = initialState[key];
            })

            const squad = {...state.squadMembers};

            const squadMember = createEmptyCharacter();
            squadMember.params.class = action.payload;
            squadMember.params.name = getRandomStartName();

            squad[state.currentlyWatched] = squadMember;

            state.squadMembers = squad;
        },
        startGame(state, action) {
            const oldState = {...state};
            const squad = {...oldState.squadMembers};
            const squadMember = squad[oldState.currentlyWatched];

            squadMember.params.name = action.payload;
            squadMember.params.maxParams[UserParam.health] = 3;
            squadMember.params.maxParams[UserParam.stamina] = 3;
            squadMember.params.level = 1;

            const {
                bonusParam, 
                bonusResource, 
                bonusLevel
            } = classInfo[squadMember.params.class];

            if (bonusParam) {
                squadMember.params.maxParams[bonusParam] += 1;
            }
            if (bonusResource) {
                oldState.resources[bonusResource] += 1;
            }
            if (bonusLevel) {
                squadMember.params.level += 1;
            }

            Object.keys(squad).forEach(key => {
                if (!!squad[key]) {
                    squad[key].params.currentParams = squad[key].params.maxParams;
                }
            });

            state = oldState;
        },
        levelUp(state, action) {
            const rand = Math.floor(Math.random()*7);

            const squad = {...state.squadMembers};
            const squadMember = squad[state.currentlyWatched];

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

            putItemInBackpacks(backpacks, action.payload);

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

            const {item, itemIndex} = action.payload;

            backpacks[itemIndex] = createNoItem();

            const nothing = createNoItem().name;

            const possiblePositions = item.inventoryPlaces;

            if (possiblePositions.length === 1) {
                const position = possiblePositions[0];

                if (
                    position === InventoryPlace.bothHands
                ) {
                    const leftHandItem = {...inventory.leftHand} as IItem;
                    if (leftHandItem.name !== nothing) {
                        putItemInBackpacks(backpacks, leftHandItem); 
                        integratePassiveAbility(squadMember, leftHandItem, -1);
                    }
                    inventory.leftHand = createNoItem();
    
                    const rightHandItem = {...inventory.rightHand} as IItem;
                    if (rightHandItem.name !== nothing) {
                        putItemInBackpacks(backpacks, rightHandItem); 
                        integratePassiveAbility(squadMember, rightHandItem, -1);
                    }
                    inventory.rightHand = createNoItem();
                } else if (
                    position === InventoryPlace.leftHand ||
                    position === InventoryPlace.rightHand
                ) {
                    const bothHandsItem = {...inventory.bothHands} as IItem;
                    if (bothHandsItem.name !== nothing) {
                        putItemInBackpacks(backpacks, bothHandsItem); 
                        integratePassiveAbility(squadMember, bothHandsItem, -1);
                    }
                    inventory.bothHands = createNoItem();
                }

                {
                    const thisPositionItem = {...inventory[placeAsKey(position)]} as IItem;
                    if (thisPositionItem.name !== nothing) {
                        putItemInBackpacks(backpacks, thisPositionItem);     
                        integratePassiveAbility(squadMember, thisPositionItem, -1);
                    }
                }
                
                inventory[placeAsKey(position)] = item;
            } else {
                const handsOptions: (InventoryPlace.leftHand | InventoryPlace.extraLeftHand |
                InventoryPlace.rightHand | InventoryPlace.extraRightHand)[] = [
                    InventoryPlace.rightHand, InventoryPlace.leftHand,
                    InventoryPlace.extraRightHand, InventoryPlace.extraLeftHand                    
                ];
    
                let itemEquipped = false;
        
                for (const option of handsOptions) {
                    if (possiblePositions.includes(option)) {
                        const thisOptionItem = {...inventory[placeAsKey(option)]} as IItem | null;
    
                        if (!thisOptionItem) {
                            continue;
                        }
    
                        if (thisOptionItem.name === nothing) {
                            const bothHandsItem = {...inventory.bothHands} as IItem;
                            if (
                                (
                                    option === InventoryPlace.leftHand ||
                                    option === InventoryPlace.rightHand
                                ) && bothHandsItem.name !== nothing 
                            ) {
                                continue;
                            }

                            inventory[placeAsKey(option)] = item;
                            itemEquipped = true;
                            break;
                        }
                    }
                }
        
                if (!itemEquipped) {
                    const randomHandsOption = handsOptions[Math.floor(Math.random() * handsOptions.length)];
    
                    const randomHandsOptionItem = {...inventory[placeAsKey(randomHandsOption)]} as IItem;
                    if (randomHandsOptionItem.name !== nothing) {
                        putItemInBackpacks(backpacks, randomHandsOptionItem);  
                        integratePassiveAbility(squadMember, randomHandsOptionItem, -1);
                    }         

                    const bothHandsItem = {...inventory.bothHands} as IItem;
                    if (
                        (
                            randomHandsOption === InventoryPlace.leftHand ||
                            randomHandsOption === InventoryPlace.rightHand
                        ) && bothHandsItem.name !== nothing 
                    ) {
                        putItemInBackpacks(backpacks, bothHandsItem); 
                        integratePassiveAbility(squadMember, bothHandsItem, -1);
                        inventory.bothHands = createNoItem();
                    }           
    
                    inventory[placeAsKey(randomHandsOption)] = item;
                }
            }
           
            integratePassiveAbility(squadMember, item, +1);

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

            const {item, itemIndex} = action.payload;

            squadMember.general.backpacks[itemIndex] = createNoItem();

            let profit = 0;
            if (
                squadMember.general.mind.masteries
                    .map(mastery => mastery.name)
                    .includes(academyMasteries.sellmanship.name)
            ) {
                profit = item.cost;
            } else if (item.name !== createNoItem().name) {
                profit = 1;
            } 
            
            resources.Gems += profit;

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
            const {index, data} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index];

            squadMember.general.mind.powers.push(data);

            integratePassiveAbility(squadMember, data, +1);

            state.squadMembers = squad;
        },
        surpassRitual(state, action) {
            const {index, data} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index];

            squadMember.general.mind.rituals.push(data);

            integratePassiveAbility(squadMember, data, +1);

            state.squadMembers = squad;
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
                squadMember.params.race = newRace;
    
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
            
            if (!squadMember.general.inventory) {
                squadMember.general.inventory = createEmptyInventory();
            }

            const nothing = createNoItem().name;
            const backpacks = [...squadMember.general.backpacks];
            const inventory = {...squadMember.general.inventory};

            const cyber: ICyber = action.payload;

            const possiblePositions = cyber.inventoryPlaces;
            if (possiblePositions.length === 1) {
                const position = cyber.inventoryPlaces[0];
                
                const oldCyber = {...inventory[placeAsKey(position)]} as ICyber | IItem;
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
                    const bothHandsItem = {...inventory.bothHands} as IItem;
                    if (bothHandsItem.name !== nothing) {
                        putItemInBackpacks(backpacks, bothHandsItem); 
                    }

                    inventory.bothHands = createNoItem();                
                }
    
                inventory[placeAsKey(position)] = cyber;
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
                        const thisOptionCyber = {...inventory[placeAsKey(option)]} as ICyber | IItem | null;
                        if (!thisOptionCyber) {
                            continue;
                        }

                        if (cyber.requiredCyber && thisOptionCyber.name === cyber.requiredCyber) {
                            integratePassiveAbility(squadMember, thisOptionCyber, -1);
                            inventory[placeAsKey(option)] = cyber;
                            cyberImplemented = true;
                            break;
                        }
    
                        if (thisOptionCyber.name === nothing) {
                            const bothHandsItem = {...inventory.bothHands} as IItem;
                            if (
                                (
                                    option === InventoryPlace.leftHand ||
                                    option === InventoryPlace.rightHand
                                ) && bothHandsItem.name !== nothing 
                            ) {
                                continue;
                            }
                            
                            inventory[placeAsKey(option)] = cyber;
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

                            inventory[placeAsKey(option)] = cyber;
                            cyberImplemented = true;
                            break;
                        }                        
                    }
                }

                if (!cyberImplemented) {
                    const randomHandsOption = handsOptions[Math.floor(Math.random() * handsOptions.length)];
    
                    const randomHandsOptionItem = {...inventory[placeAsKey(randomHandsOption)]} as IItem;
                    if (randomHandsOptionItem.name !== nothing) {
                        putItemInBackpacks(backpacks, randomHandsOptionItem); 
                        integratePassiveAbility(squadMember, randomHandsOptionItem, -1);
                    }         

                    const bothHandsItem = {...inventory.bothHands} as IItem;
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
                        inventory.bothHands = createNoItem();
                    }           
    
                    inventory[placeAsKey(randomHandsOption)] = cyber;
                }
            }                      
            
            oldState.resources[UserResource.core] -= cyber.cost;

            integratePassiveAbility(squadMember, cyber, +1);

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
                const bothHandsItem = {...inventory.bothHands} as IItem;
                if (bothHandsItem.name !== nothing) {
                    putItemInBackpacks(backpacks, bothHandsItem); 
                    integratePassiveAbility(squadMember, bothHandsItem, -1);
                    inventory.bothHands = createNoItem();
                }   

                const leftHandItem = {...inventory.leftHand} as IItem;
                if (leftHandItem.name !== nothing) {
                    putItemInBackpacks(backpacks, leftHandItem); 
                    integratePassiveAbility(squadMember, leftHandItem, -1);
                }
                inventory.leftHand = mutations.weapons.claw;

                const rightHandItem = {...inventory.rightHand} as IItem;
                if (rightHandItem.name !== nothing) {
                    putItemInBackpacks(backpacks, rightHandItem); 
                    integratePassiveAbility(squadMember, rightHandItem, -1);
                }
                inventory.rightHand = mutations.weapons.claw;

                if (inventory.extraLeftHand) {
                    const extraLeftHandItem = {...inventory.extraLeftHand} as IItem;
                    if (extraLeftHandItem.name !== nothing) {
                        putItemInBackpacks(backpacks, extraLeftHandItem); 
                        integratePassiveAbility(squadMember, extraLeftHandItem, -1);
                    }
                    inventory.extraLeftHand = mutations.weapons.claw;
                }
                if (inventory.extraRightHand) {
                    const extraRightHandItem = {...inventory.extraRightHand} as IItem;
                    if (extraRightHandItem.name !== nothing) {
                        putItemInBackpacks(backpacks, extraRightHandItem); 
                        integratePassiveAbility(squadMember, extraRightHandItem, -1);
                    }
                    inventory.extraRightHand = mutations.weapons.claw;
                }
            } else {
                const previousMutation = inventory[placeAsKey(position)];
                integratePassiveAbility(squadMember, previousMutation as IMutation, -1);
            }            

            if (mutation.name === mutations.other.extraArms.name) {
                if (
                    inventory.bothHands.name === mutations.weapons.claws.name ||
                    inventory.leftHand.name === mutations.weapons.claw.name ||
                    inventory.rightHand.name === mutations.weapons.claw.name
                ) {
                    inventory.extraLeftHand = mutations.weapons.claw;
                    inventory.extraRightHand = mutations.weapons.claw;
                } else {
                    inventory.extraLeftHand = createNoItem();
                    inventory.extraRightHand = createNoItem();
                }
            }

            inventory[placeAsKey(position)] = mutation;
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
            squadMember.params.race = newRace;

            const newRaceMastery = raceMasteries[newRace];
            if (newRaceMastery) {
                squadMember.general.mind.masteries.push(newRaceMastery);
            }

            integratePassiveAbility(squadMember, mutation, +1);

            squadMember.general.backpacks = backpacks;
            squadMember.general.inventory = inventory;

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

            const {damage, hitChance} = ability as IAbility;
            for (const index in squadMembers) {
                const squadMember = squadMembers[index];

                const chance = Math.floor(Math.random()*100);
                if (hitChance - squadMember.params.dodge > chance) {
                    for (const key in damage) {
                        const damageType = key as DamageType;
                        const resultDamage = damage[damageType]! - squadMember.params.resistances[damageType];
                        squadMember.params.currentParams[UserParam.health] -= resultDamage;
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

            state.squadMembers = squad;
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
                for (const param in squadMember.params.currentParams) {
                    if (param !== UserParam.health && param !== UserParam.blank) {
                        if (
                            Number(squadMember.params.currentParams[param as UserParam]) < 
                            Number(squadMember.params.maxParams[param as UserParam])
                        ) {
                            squadMember.params.currentParams[param as UserParam] = 
                                Number(squadMember.params.maxParams[param as UserParam]);
                        }
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
                    if (param !== UserParam.health && param !== UserParam.blank) {
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
    }
})

export default gameSquad