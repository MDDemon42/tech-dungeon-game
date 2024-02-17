import {createSlice} from '@reduxjs/toolkit';
import { DamageType, InventoryPlace, UserParam } from '../../enums-and-interfaces/enums';
import { IAbility, ICharacher, IItem, IOpponentSquad } from '../../enums-and-interfaces/interfaces';
import characters from '../../general/characters';
import { createNoItem } from '../../helpers/emptyEssencesCreators';

const opponents_options: Record<string, ICharacher>[] = [
    {
        0: characters.mights.barbarian(),
    },
    {
        0: characters.mights.dummy(),
        1: characters.mights.guard(),
        2: characters.mights.barbarian(),
        3: characters.mights.knight(),
        4: characters.mights.paladin()
    },
    {
        0: characters.magicians.apprentice(),
        1: characters.magicians.magister(),
        2: characters.magicians.cryomancer(),
        3: characters.magicians.pyrokinetic(),
    },
    {
        0:characters.mutants.satyr(),
        1: characters.mutants.taur(),
        2: characters.mutants.orc(),
        3: characters.mutants.naga()
    },
    {
        0: characters.mutants.demon()
    },
    {
        0: characters.mutants.dragon()
    },
    {
        0: characters.mutants.ultimate_chimera()
    }
]

const initialState: IOpponentSquad = {
    opponentMembers: opponents_options[0],
    opponentsOptionsIndex: 0
}

const opponents = createSlice({
    name: 'opponents',
    initialState,
    reducers: {
        setState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key];
            })
        },
        chooseOpponentsOption(state, action) {
            const {index} = action.payload;

            state.opponentsOptionsIndex = index;
            state.opponentMembers = opponents_options[index];
        },
        processAbility(state, action) {
            const {index, data} = action.payload;
            const squad = {...state.opponentMembers};
            const squadMember = squad[index];

            Object.keys(data).forEach(key => {
                squadMember.params.currentParams[key as UserParam] -= data[key];
            });

            state.opponentMembers = squad;
        },
        sufferAbility(state, action) {
            const {indexes, ability} = action.payload;
            const squad = {...state.opponentMembers};
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
                if (hitChance > chance) {
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

            state.opponentMembers = squad;
        },
        throwItem(state, action) {
            const {index, item, inventoryPlace} = action.payload as 
                {index: number, item: IItem, inventoryPlace: InventoryPlace};

            const oldState = {...state};
            const squadMember = {...oldState.opponentMembers[index]};
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
            // integratePassiveAbility(squadMember, item, -1);

            squadMember.general.inventory = inventory;

            state = oldState;
        },
        respite(state, action) {
            const squad = {...state.opponentMembers};

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

            state.opponentMembers = squad;
        }
    }
})

export default opponents