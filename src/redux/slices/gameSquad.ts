import {createSlice} from '@reduxjs/toolkit';
import { emptyCharacter, emptyInventory, noItem } from '../../general/characters/characters';
import { IClassInfo, IGameSquad, InventoryPlaces, UserParam, UserResource } from '../../types/interfaces';
import mutations from '../../general/mutations/mutations';
import masteries from '../../general/masteries/masteries';
import raceCheck from '../../functions/raceCheck';
import putItemInBackpacks from '../../functions/putItemInBackpacks';

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
        2: emptyCharacter()
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
    mutant: {
        startBonus: ['maxParams', UserParam.health],
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.stamina]),
        description: 'Gets extra Health on start.\n\nOn level up has increased chance of getting Health or Stamina.\n\nBut there is a chance to get nothing too',
    },
    cyborg: {
        startBonus: ['maxParams', UserParam.health],
        levelUpBonuses: createLevelUpBonuses([UserParam.blank, UserParam.stamina]),
        description: 'Gets extra Health on start.\n\nOn level up has increased chance of getting Stamina.\n\nBut there is a big chance to get nothing too'
    },
    normal: {
        startBonus: ['maxParams', UserParam.health],
        levelUpBonuses: createLevelUpBonuses([UserParam.stamina, UserParam.stamina]),
        description: 'Gets extra Health on start.\n\nOn level up has super increased chance of getting Stamina.\n\nBut there is a chance to get nothing too'
    },
    wizard: {
        startBonus: ['maxParams', UserParam.mana],
        levelUpBonuses: createLevelUpBonuses([UserParam.mana, UserParam.mana]),
        description: 'Gets extra Mana on start.\n\nOn level up has super increased chance of getting Mana.\n\nBut there is a chance to get nothing too'
    },
    psion: {
        startBonus: ['maxParams', UserParam.focus],
        levelUpBonuses: createLevelUpBonuses([UserParam.focus, UserParam.focus]),
        description: 'Gets extra Focus on start.\n\nOn level up has super increased chance of getting Focus.\n\nBut there is a chance to get nothing too'
    },
    guildian: {
        startBonus: ['maxParams', UserParam.stamina],
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.mana]),
        description: 'Gets extra Stamina on start.\n\nOn level up has increased chance of getting Health or Mana.\n\nBut there is a chance to get nothing too'
    },
    noIcon: {
        startBonus: ['currentParams', UserParam.blank],
        levelUpBonuses: [UserParam.blank],
        description: 'Choose one of classes to start playing'
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

            const squad = {...state.squadMembers};

            const user = emptyCharacter();

            user.params.maxParams[UserParam.health] = 3;
            user.params.maxParams[UserParam.stamina] = 3;
            user.params.level = 1;
            user.params.name = user.params.name || 'Adventurer';
            user.params.class = action.payload;

            // @ts-ignore
            const {startBonus} = classInfo[action.payload];
            // @ts-ignore
            user.params[startBonus[0]][startBonus[1]] += 1;

            squad[2] = user;

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
        levelUp(state, action) {
            const rand = Math.floor(Math.random()*7);

            const squad = {...state.squadMembers};
            const squadMember = squad[action.payload];
            // @ts-ignore
            squadMember.params.level += 1;
            
            // @ts-ignore
            squadMember.params.maxParams[classInfo[squadMember.params.class].levelUpBonuses[rand]] += 1;

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
            
            backpacks.resources[UserResource.gem] -= action.payload.cost;

            backpacks.items = [...putItemInBackpacks(members, backpacks.items, action.payload)];           

            state.squadBackpacks = backpacks;
        },
        equipItem(state, action) {
            const oldState = {...state};
            const index = oldState.currentlyWatched;
            const members = oldState.squadMembers;
            const squadMember = members[index]!;
            let backpacksItems = [...state.squadBackpacks.items];

            if (!squadMember.general.inventory) {
                squadMember.general.inventory = emptyInventory();
            }

            const position: InventoryPlaces = action.payload.inventoryPlace;

            if (
                position === InventoryPlaces.bothHands
            ) {
                const nothing = noItem();
                const noItemName = nothing.name;
                const leftHandItem = {...squadMember.general.inventory[placeAsKey(InventoryPlaces.leftHand)]};
                if (leftHandItem.name !== noItemName) {
                    // @ts-expect-error
                    backpacksItems = [...putItemInBackpacks(members, backpacksItems, leftHandItem)]; 
                }
                squadMember.general.inventory[placeAsKey(InventoryPlaces.leftHand)] = noItem();

                const rightHandItem = {...squadMember.general.inventory[placeAsKey(InventoryPlaces.rightHand)]};
                if (rightHandItem.name !== noItemName) {
                    // @ts-expect-error
                    backpacksItems = [...putItemInBackpacks(members, backpacksItems, rightHandItem)]; 
                }
                squadMember.general.inventory[placeAsKey(InventoryPlaces.rightHand)] = noItem();

                const bothHandsItem = {...squadMember.general.inventory[placeAsKey(InventoryPlaces.bothHands)]};
                if (bothHandsItem.name !== noItemName) {
                    // @ts-expect-error
                    backpacksItems = [...putItemInBackpacks(members, backpacksItems, bothHandsItem)]; 
                }
                squadMember.general.inventory[placeAsKey(InventoryPlaces.bothHands)] = noItem();
            } else if (
                position === InventoryPlaces.leftHand ||
                position === InventoryPlaces.rightHand
            ) {
                const nothing = noItem();
                const noItemName = nothing.name;
                const bothHandsItem = {...squadMember.general.inventory[placeAsKey(InventoryPlaces.bothHands)]};
                if (bothHandsItem.name !== noItemName) {
                    // @ts-expect-error
                    backpacksItems = [...putItemInBackpacks(members, backpacksItems, bothHandsItem)]; 
                }
                squadMember.general.inventory[placeAsKey(InventoryPlaces.bothHands)] = noItem();
            }
            
            {
                const nothing = noItem();
                const noItemName = nothing.name;

                const thisPositionItem = {...squadMember.general.inventory[placeAsKey(position)]};
                if (thisPositionItem.name !== noItemName) {
                    // @ts-expect-error
                    backpacksItems = [...putItemInBackpacks(members, backpacksItems, thisPositionItem)]; 
                }
            }
            
            squadMember.general.inventory[placeAsKey(position)] = action.payload;

            for (let i=0, {length} = backpacksItems; i < length; i++) {
                if (backpacksItems[i].name === action.payload.name) {
                    backpacksItems.splice(i, 1);
                    break
                }
            }

            oldState.squadBackpacks.items = backpacksItems;

            state = oldState;
        },
        studySpell(state, action) {
            const {index} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index]!;

            squadMember.general.spells.push(action.payload.data);

            state.squadMembers = squad;
        },
        developPower(state, action) {
            const {index} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index]!;

            squadMember.general.powers.push(action.payload.data);

            state.squadMembers = squad;
        },
        learnMastery(state, action) {
            const {index} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index]!;

            squadMember.general.masteries.push(action.payload.data);

            const isStrong = squadMember.general.masteries
                .map(data => data.name)
                .includes(masteries.mastery_brutalForce.name);

            if (!squadMember.general.inventory) {
                squadMember.general.inventory = emptyInventory();
            }
                
            squadMember.params.race = raceCheck(squadMember.general.inventory, isStrong);

            state.squadMembers = squad;
        },
        implementCyber(state, action) {
            const {index} = action.payload;
            const oldState = {...state};
            const squadMember = oldState.squadMembers[index]!;
            
            if (!squadMember.general.inventory) {
                squadMember.general.inventory = emptyInventory();
            }

            const position = action.payload.data.inventoryPlace;

            if (
                position === InventoryPlaces.leftHand
            ) {
                if (squadMember.general.inventory[placeAsKey(InventoryPlaces.bothHands)].name === mutations.mutation_claws.name) {
                    squadMember.general.inventory[placeAsKey(InventoryPlaces.rightHand)] = mutations.mutation_clawRight;
                }
                
                squadMember.general.inventory[placeAsKey(InventoryPlaces.bothHands)] = noItem();                
            }

            if (
                position === InventoryPlaces.rightHand
            ) {
                if (squadMember.general.inventory[placeAsKey(InventoryPlaces.bothHands)].name === mutations.mutation_claws.name) {
                    squadMember.general.inventory[placeAsKey(InventoryPlaces.leftHand)] = mutations.mutation_clawLeft;
                }

                squadMember.general.inventory[placeAsKey(InventoryPlaces.bothHands)] = noItem();
            }

            squadMember.general.inventory[placeAsKey(position)] = action.payload.data;
            oldState.squadBackpacks.resources[UserResource.core] -= action.payload.data.cost;

            state = oldState;
        },
        mutateMutation(state, action) {
            const {index} = action.payload;
            const oldState = {...state};
            const squadMember = oldState.squadMembers[index]!;

            if (!squadMember.general.inventory) {
                squadMember.general.inventory = emptyInventory();
            }

            const position = action.payload.data.inventoryPlace;

            if (position === InventoryPlaces.bothHands) {
                squadMember.general.inventory[placeAsKey(InventoryPlaces.leftHand)] = noItem();
                squadMember.general.inventory[placeAsKey(InventoryPlaces.rightHand)] = noItem();
            }

            squadMember.general.inventory[placeAsKey(position)] = action.payload.data;
            oldState.squadBackpacks.resources[UserResource.gene] -= action.payload.data.cost;

            const isStrong = squadMember.general.masteries
                .map(data => data.name)
                .includes(masteries.mastery_brutalForce.name);
                
            squadMember.params.race = raceCheck(squadMember.general.inventory, isStrong);

            state = oldState;
        },
        processAbility(state, action) {
            const {index, data} = action.payload;
            const squad = {...state.squadMembers};
            const squadMember = squad[index]!;

            Object.keys(data).forEach(key => {
                // @ts-ignore
                squadMember.params.currentParams[key] -= data[key];
            });

            state.squadMembers = squad;
        },
        relaxate(state, action) {
            const squad = {...state.squadMembers};

            Object.keys(squad).forEach(key => {
                if (!!squad[key]) {
                    squad[key]!.params.currentParams.Focus = squad[key]!.params.maxParams.Focus;
                    squad[key]!.params.currentParams.Mana = squad[key]!.params.maxParams.Mana;
                    squad[key]!.params.currentParams.Stamina = squad[key]!.params.maxParams.Stamina;
                    squad[key]!.params.currentParams[UserParam.health] = squad[key]!.params.maxParams[UserParam.health];
                }
            });

            state.squadMembers = squad;
        }
    }
})

export default gameSquad