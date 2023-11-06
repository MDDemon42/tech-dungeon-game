import {createSlice} from '@reduxjs/toolkit';
import { UserParam } from '../../enums-and-interfaces/enums';
import { IAbility, IOpponents } from '../../enums-and-interfaces/interfaces';
import characters from '../../general/characters';

const opponents_options = [
    [
        characters.mights.dummy(),
        characters.mights.guard(),
        characters.mights.barbarian(),
        characters.mights.knight(),
        characters.mights.paladin()
    ],
    [
        characters.magicians.apprentice(),
        characters.magicians.magister()
    ],
    [
        characters.mutants.satyr(),
        characters.mutants.minotaur(),
        characters.mutants.orc(),
        characters.mutants.naga(),
        characters.mutants.demon(),
        characters.mutants.dragon(),
        characters.mutants.ultimate_chimera()
    ]
]

const initialState: IOpponents = {
    opponentMembers: opponents_options[2],
    opponentsOptionsIndex: 2
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
            const squad = [...state.opponentMembers];
            const squadMember = squad[index];

            Object.keys(data).forEach(key => {
                squadMember.params.currentParams[key as UserParam] -= data[key];
            });

            state.opponentMembers = squad;
        },
        sufferAbility(state, action) {
            const {index, ability} = action.payload;
            const squad = [...state.opponentMembers];
            const squadMember = squad[index];

            const {damage, damageType, hitChance} = ability as IAbility;
            const resultDamage = damage - 
                squadMember.params.resistances[damageType];

            const chance = Math.floor(Math.random()*100);
            if (hitChance > chance) {
                squadMember.params.currentParams[UserParam.health] -= resultDamage;
            }

            state.opponentMembers = squad;
        },
        respite(state, action) {
            const squad = [...state.opponentMembers];

            for (const squadMember of squad) {
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

export default opponents