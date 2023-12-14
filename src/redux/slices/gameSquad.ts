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
import putItemInBackpacks, { getBackpacksCapability } from '../../helpers/backpacksPutter';
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
    currentlyWatched: 2,
    squadMembers: {
        2: createEmptyCharacter()
    },
    resources: {
        [UserResource.core]: 0,
        [UserResource.gem]: 0,
        [UserResource.gene]: 0
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
    [Race.orc]: academyMasteries.mastery_axeAffiliation,
    [Race.gnoll]: academyMasteries.mastery_maceAffiliation,
    [Race.naga]: academyMasteries.mastery_spearAffiliation
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
            const squadMember = squad[action.payload];

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

            const maxItemsAmount = getBackpacksCapability(squadMember);
            putItemInBackpacks(backpacks, action.payload, maxItemsAmount);

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

            const maxItemsAmount = getBackpacksCapability(squadMember);
            putItemInBackpacks(backpacks, action.payload, maxItemsAmount);           

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

            const maxItemsAmount = getBackpacksCapability(squadMember);
            putItemInBackpacks(backpacks, action.payload, maxItemsAmount);           

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
            let backpacks = [...squadMember.general.backpacks];

            if (!squadMember.general.inventory) {
                squadMember.general.inventory = createEmptyInventory();
            }

            const {item, itemIndex} = action.payload;

            backpacks[itemIndex] = createNoItem();

            const nothing = createNoItem().name;

            const position: InventoryPlace = item.inventoryPlace;
            const maxItemsAmount = getBackpacksCapability(squadMember);

            if (
                position === InventoryPlace.bothHands
            ) {
                const leftHandItem = {...squadMember.general.inventory.leftHand} as IItem;
                if (leftHandItem.name !== nothing) {
                    putItemInBackpacks(backpacks, leftHandItem, maxItemsAmount); 

                    integratePassiveAbility(squadMember, leftHandItem, -1);
                }
                squadMember.general.inventory.leftHand = createNoItem();

                const rightHandItem = {...squadMember.general.inventory.rightHand} as IItem;
                if (rightHandItem.name !== nothing) {
                    putItemInBackpacks(backpacks, rightHandItem, maxItemsAmount); 
                
                    integratePassiveAbility(squadMember, rightHandItem, -1);
                }
                squadMember.general.inventory.rightHand = createNoItem();

                const bothHandsItem = {...squadMember.general.inventory.bothHands} as IItem;
                if (bothHandsItem.name !== nothing) {
                    putItemInBackpacks(backpacks, bothHandsItem, maxItemsAmount); 
                
                    integratePassiveAbility(squadMember, bothHandsItem, -1);
                }
            } else if (
                position === InventoryPlace.leftHand ||
                position === InventoryPlace.rightHand
            ) {
                const bothHandsItem = {...squadMember.general.inventory.bothHands} as IItem;
                if (bothHandsItem.name !== nothing) {
                    putItemInBackpacks(backpacks, bothHandsItem, maxItemsAmount); 
                
                    integratePassiveAbility(squadMember, bothHandsItem, -1);
                }
                squadMember.general.inventory.bothHands = createNoItem();
            }
            
            {
                const thisPositionItem = {...squadMember.general.inventory[placeAsKey(position)]} as IItem;
                if (thisPositionItem.name !== nothing) {
                    putItemInBackpacks(backpacks, thisPositionItem, maxItemsAmount); 
                    
                    integratePassiveAbility(squadMember, thisPositionItem, -1);
                }
            }
            
            squadMember.general.inventory[placeAsKey(position)] = item;

            integratePassiveAbility(squadMember, item, +1);

            squadMember.general.backpacks = backpacks;

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
                    .includes(academyMasteries.mastery_sellmanship.name)
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
        learnMastery(state, action) {
            const {index} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index];

            squadMember.general.mind.masteries.push(action.payload.data);

            if (action.payload.data.name === academyMasteries.mastery_brutalForce.name) {
                squadMember.general.backpacks.push(createNoItem(), createNoItem());

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
            const {index} = action.payload;
            const oldState = {...state};
            const squadMember = oldState.squadMembers[index];
            
            if (!squadMember.general.inventory) {
                squadMember.general.inventory = createEmptyInventory();
            }

            const cyber = action.payload.data
            const position = cyber.inventoryPlace;

            const nothing = createNoItem().name;
            const oldCyber = {...squadMember.general.inventory[placeAsKey(position)]} as ICyber;
            if (oldCyber.name !== nothing) {
                integratePassiveAbility(squadMember, oldCyber, -1);
            }            

            if (
                position === InventoryPlace.leftHand
            ) {
                if (squadMember.general.inventory[placeAsKey(InventoryPlace.bothHands)].name === mutations.weapons.claws.name) {
                    squadMember.general.inventory[placeAsKey(InventoryPlace.rightHand)] = mutations.weapons.clawRight;
                }
                
                squadMember.general.inventory[placeAsKey(InventoryPlace.bothHands)] = createNoItem();                
            }

            if (
                position === InventoryPlace.rightHand
            ) {
                if (squadMember.general.inventory[placeAsKey(InventoryPlace.bothHands)].name === mutations.weapons.claws.name) {
                    squadMember.general.inventory[placeAsKey(InventoryPlace.leftHand)] = mutations.weapons.clawLeft;
                }

                squadMember.general.inventory[placeAsKey(InventoryPlace.bothHands)] = createNoItem();
            }

            squadMember.general.inventory[placeAsKey(position)] = cyber;
            oldState.resources[UserResource.core] -= cyber.cost;

            integratePassiveAbility(squadMember, cyber, +1);

            state = oldState;
        },
        mutateMutation(state, action) {
            const {index, data} = action.payload;
            const oldState = {...state};
            const squadMember = oldState.squadMembers[index];

            if (!squadMember.general.inventory) {
                squadMember.general.inventory = createEmptyInventory();
            }

            const position = data.inventoryPlace;

            if (position === InventoryPlace.bothHands) {
                squadMember.general.inventory.leftHand = createNoItem();
                squadMember.general.inventory.rightHand = createNoItem();
            }

            const previousMutation = squadMember.general.inventory[placeAsKey(position)];
            integratePassiveAbility(squadMember, previousMutation, -1);

            squadMember.general.inventory[placeAsKey(position)] = data;
            oldState.resources[UserResource.gene] -= data.cost;

            const isStrong = squadMember.general.mind.masteries
                .map(mastery => mastery.name)
                .includes(academyMasteries.mastery_brutalForce.name);
                
            const raceMasteriesNames = Object.values(raceMasteries)
                .map(mastery => mastery.name);
            squadMember.general.mind.masteries = squadMember.general.mind.masteries
                .filter(mastery => {
                    if (raceMasteriesNames.includes(mastery.name)) {
                        return false
                    }

                    return true
                })

            const newRace = checkRace(squadMember.general.inventory, isStrong);
            squadMember.params.race = newRace;

            const newRaceMastery = raceMasteries[newRace];
            if (newRaceMastery) {
                squadMember.general.mind.masteries.push(newRaceMastery);
            }

            integratePassiveAbility(squadMember, data, +1);

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
        relaxate(state, action) {
            const squad = {...state.squadMembers};

            Object.keys(squad).forEach(key => {
                if (!!squad[key]) {
                    squad[key].params.currentParams = {...squad[key].params.maxParams};
                }
            });

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
        }
    }
})

export default gameSquad