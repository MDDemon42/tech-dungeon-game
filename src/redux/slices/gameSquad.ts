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
    IGameSquad, 
    IItem, 
    IManageItemsProps,
    IMastery
} from '../../enums-and-interfaces/interfaces';
import mutations from '../../general/mutations';
import masteries from '../../general/masteries/masteries';
import checkRace from '../../general/races/checkRace';
import putItemInBackpacks, { getBackpacksCapability } from '../../helpers/backpacksPutter';
import { 
    UserResource, 
    UserParam, 
    InventoryPlace, 
    UserStartClass,
    Race
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

const initialState: IGameSquad = {
    currentlyWatched: 2,
    squadMembers: {
        2: createEmptyCharacter(),
        4: createEmptyCharacter()
    },
    squadBackpacks: {
        resources: {
            [UserResource.core]: 0,
            [UserResource.gem]: 0,
            [UserResource.gene]: 0
        },
        items: []
    }    
};

function createLevelUpBonuses(params: UserParam[]) {
    const standartLevelUpBonuses = [
        UserParam.health, UserParam.focus, UserParam.mana, UserParam.stamina, UserParam.blank
    ];

    const result = [...standartLevelUpBonuses];
    result.push(...params);

    return result
}

export const classInfo: IClassInfo = {
    [UserStartClass.mutant]: {
        startBonus: UserParam.health,
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.stamina]),
        description: 'Gets extra Health on start.\n\nOn level up has increased chance of getting Health or Stamina.\n\nBut there is a chance to get nothing too',
    },
    [UserStartClass.cyborg]: {
        startBonus: UserParam.health,
        levelUpBonuses: createLevelUpBonuses([UserParam.blank, UserParam.stamina]),
        description: 'Gets extra Health on start.\n\nOn level up has increased chance of getting Stamina.\n\nBut there is a big chance to get nothing too'
    },
    [UserStartClass.normal]: {
        startBonus: UserParam.health,
        levelUpBonuses: createLevelUpBonuses([UserParam.stamina, UserParam.stamina]),
        description: 'Gets extra Health on start.\n\nOn level up has super increased chance of getting Stamina.\n\nBut there is a chance to get nothing too'
    },
    [UserStartClass.wizard]: {
        startBonus: UserParam.mana,
        levelUpBonuses: createLevelUpBonuses([UserParam.mana, UserParam.mana]),
        description: 'Gets extra Mana on start.\n\nOn level up has super increased chance of getting Mana.\n\nBut there is a chance to get nothing too'
    },
    [UserStartClass.psion]: {
        startBonus: UserParam.focus,
        levelUpBonuses: createLevelUpBonuses([UserParam.focus, UserParam.focus]),
        description: 'Gets extra Focus on start.\n\nOn level up has super increased chance of getting Focus.\n\nBut there is a chance to get nothing too'
    },
    [UserStartClass.guildian]: {
        startBonus: UserParam.stamina,
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.mana]),
        description: 'Gets extra Stamina on start.\n\nOn level up has increased chance of getting Health or Mana.\n\nBut there is a chance to get nothing too'
    },
    [UserStartClass.noIcon]: {
        startBonus: UserParam.blank,
        levelUpBonuses: [UserParam.blank],
        description: 'Choose one of classes to start playing'
    }
}

const raceMasteries: Partial<Record<Race, IMastery>> = {
    [Race.orc]: masteries.mastery_axeAffiliation,
    [Race.gnoll]: masteries.mastery_maceAffiliation
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

            const squad = {...state.squadMembers};

            const user = createEmptyCharacter();

            user.params.maxParams[UserParam.health] = 3;
            user.params.maxParams[UserParam.stamina] = 3;
            user.params.level = 1;
            user.params.name = user.params.name || 'Adventurer';
            user.params.class = action.payload;

            const {startBonus} = classInfo[action.payload as UserStartClass];
            user.params.maxParams[startBonus] += 1;

            squad[2] = user;
            squad[4] = user;

            Object.keys(squad).forEach(key => {
                if (!!squad[key]) {
                    squad[key].params.currentParams = squad[key].params.maxParams;
                }
            });

            state.squadMembers = squad;
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
        buyItem(state, action) {
            const backpacks = {...state.squadBackpacks};
            const members = {...state.squadMembers};
            const maxItemsAmount = getBackpacksCapability(members);
            backpacks.resources[UserResource.gem] -= action.payload.cost;

            backpacks.items = [...putItemInBackpacks(backpacks.items, action.payload, maxItemsAmount)];           

            state.squadBackpacks = backpacks;
        },
        equipItem(state, action: {
            type: string,
            payload: IManageItemsProps
        }) {
            const oldState = {...state};
            const index = oldState.currentlyWatched;
            const members = oldState.squadMembers;
            const squadMember = members[index]!;
            let backpacksItems = [...state.squadBackpacks.items];

            if (!squadMember.general.inventory) {
                squadMember.general.inventory = createEmptyInventory();
            }

            const itemIndex = action.payload.index;
            const {item} = action.payload;

            const position: InventoryPlace = item.inventoryPlace;
            const maxItemsAmount = getBackpacksCapability(members);

            if (
                position === InventoryPlace.bothHands
            ) {
                const nothing = createNoItem();
                const createNoItemName = nothing.name;
                const leftHandItem = {...squadMember.general.inventory.leftHand} as IItem;
                if (leftHandItem.name !== createNoItemName) {
                    backpacksItems = [...putItemInBackpacks(backpacksItems, leftHandItem, maxItemsAmount)]; 
                }
                squadMember.general.inventory.leftHand = createNoItem();

                const rightHandItem = {...squadMember.general.inventory.rightHand} as IItem;
                if (rightHandItem.name !== createNoItemName) {
                    backpacksItems = [...putItemInBackpacks(backpacksItems, rightHandItem, maxItemsAmount)]; 
                }
                squadMember.general.inventory.rightHand = createNoItem();

                const bothHandsItem = {...squadMember.general.inventory.bothHands} as IItem;
                if (bothHandsItem.name !== createNoItemName) {
                    backpacksItems = [...putItemInBackpacks(backpacksItems, bothHandsItem, maxItemsAmount)]; 
                }
                squadMember.general.inventory.bothHands = createNoItem();
            } else if (
                position === InventoryPlace.leftHand ||
                position === InventoryPlace.rightHand
            ) {
                const nothing = createNoItem();
                const createNoItemName = nothing.name;
                const bothHandsItem = {...squadMember.general.inventory.bothHands} as IItem;
                if (bothHandsItem.name !== createNoItemName) {
                    backpacksItems = [...putItemInBackpacks(backpacksItems, bothHandsItem, maxItemsAmount)]; 
                }
                squadMember.general.inventory.bothHands = createNoItem();
            }
            
            {
                const nothing = createNoItem();
                const createNoItemName = nothing.name;

                const thisPositionItem = {...squadMember.general.inventory[placeAsKey(position)]} as IItem;
                if (thisPositionItem.name !== createNoItemName) {
                    backpacksItems = [...putItemInBackpacks(backpacksItems, thisPositionItem, maxItemsAmount)]; 
                }
            }
            
            squadMember.general.inventory[placeAsKey(position)] = item;

            backpacksItems.splice(itemIndex, 1);

            oldState.squadBackpacks.items = backpacksItems;

            state = oldState;
        },
        sellItem(state, action: {
            type: string,
            payload: IManageItemsProps
        }) {
            const oldState = {...state};
            const backpacks = oldState.squadBackpacks;
            const members = oldState.squadMembers;
            const member = members[oldState.currentlyWatched];

            const {index, item} = action.payload;

            backpacks.items.splice(index, 1);

            if (
                member.general.mind.masteries
                    .map(mastery => mastery.name)
                    .includes(masteries.mastery_sellmanship.name)
            ) {
                backpacks.resources.Gems += item.cost;
            } else {
                backpacks.resources.Gems += 1;
            }            

            state = oldState;
        },
        studySpell(state, action) {
            const {index} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index]!;

            squadMember.general.mind.spells.push(action.payload.data);

            state.squadMembers = squad;
        },
        developPower(state, action) {
            const {index} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index]!;

            squadMember.general.mind.powers.push(action.payload.data);

            state.squadMembers = squad;
        },
        learnMastery(state, action) {
            const {index} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index]!;

            squadMember.general.mind.masteries.push(action.payload.data);

            const isStrong = squadMember.general.mind.masteries
                .map(data => data.name)
                .includes(masteries.mastery_brutalForce.name);

            if (!squadMember.general.inventory) {
                squadMember.general.inventory = createEmptyInventory();
            }
                
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

            state.squadMembers = squad;
        },
        implementCyber(state, action) {
            const {index} = action.payload;
            const oldState = {...state};
            const squadMember = oldState.squadMembers[index]!;
            
            if (!squadMember.general.inventory) {
                squadMember.general.inventory = createEmptyInventory();
            }

            const position = action.payload.data.inventoryPlace;

            if (
                position === InventoryPlace.leftHand
            ) {
                if (squadMember.general.inventory[placeAsKey(InventoryPlace.bothHands)].name === mutations.weapons.mutation_claws.name) {
                    squadMember.general.inventory[placeAsKey(InventoryPlace.rightHand)] = mutations.weapons.mutation_clawRight;
                }
                
                squadMember.general.inventory[placeAsKey(InventoryPlace.bothHands)] = createNoItem();                
            }

            if (
                position === InventoryPlace.rightHand
            ) {
                if (squadMember.general.inventory[placeAsKey(InventoryPlace.bothHands)].name === mutations.weapons.mutation_claws.name) {
                    squadMember.general.inventory[placeAsKey(InventoryPlace.leftHand)] = mutations.weapons.mutation_clawLeft;
                }

                squadMember.general.inventory[placeAsKey(InventoryPlace.bothHands)] = createNoItem();
            }

            squadMember.general.inventory[placeAsKey(position)] = action.payload.data;
            oldState.squadBackpacks.resources[UserResource.core] -= action.payload.data.cost;

            state = oldState;
        },
        mutateMutation(state, action) {
            const {index} = action.payload;
            const oldState = {...state};
            const squadMember = oldState.squadMembers[index];

            if (!squadMember.general.inventory) {
                squadMember.general.inventory = createEmptyInventory();
            }

            const position = action.payload.data.inventoryPlace;

            if (position === InventoryPlace.bothHands) {
                squadMember.general.inventory[placeAsKey(InventoryPlace.leftHand)] = createNoItem();
                squadMember.general.inventory[placeAsKey(InventoryPlace.rightHand)] = createNoItem();
            }

            squadMember.general.inventory[placeAsKey(position)] = action.payload.data;
            oldState.squadBackpacks.resources[UserResource.gene] -= action.payload.data.cost;

            const isStrong = squadMember.general.mind.masteries
                .map(data => data.name)
                .includes(masteries.mastery_brutalForce.name);
                
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

            const {damage, damageType, hitChance} = ability as IAbility;
            for (const index in squadMembers) {
                const squadMember = squadMembers[index];
                const resultDamage = damage - 
                    squadMember.params.resistances[damageType];

                const chance = Math.floor(Math.random()*100);
                if (hitChance > chance) {
                    squadMember.params.currentParams[UserParam.health] -= resultDamage;
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
        }
    }
})

export default gameSquad