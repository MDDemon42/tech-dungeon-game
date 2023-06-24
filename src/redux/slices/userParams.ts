import {createSlice} from '@reduxjs/toolkit';
import { IUserParams } from '../../types/interfaces';

const initialState: IUserParams = {
    name: 'Adventurer',
    icon: 'noIcon',
    stage: 0,
    currentHealth: 3,
    maxHealth: 3,
    level: 1,
    gems: 0,
    mechaCores: 0,
    mutaGenes: 0,
    currentMana: 0,
    maxMana: 0,
    currentFocus: 0,
    maxFocus: 0,
    currentStamina: 3,
    maxStamina: 3
}

const startBonuses: Record<string, keyof IUserParams> = {
    mutant: 'mutaGenes',
    cyborg: 'mechaCores',
    normal: 'gems',
    wizard: 'maxMana',
    psion: 'maxFocus',
    guildian: 'level'
}

const userParams = createSlice({
    name: 'userParams',
    initialState,
    reducers: {
        buyItem(state, action) {
            state.gems -= action.payload
        },
        implementCyber(state, action) {
            state.mechaCores -= action.payload
        },
        mutateMutation(state, action) {
            state.mutaGenes -= action.payload
        },
        setState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key]
            })
        },
        relaxate(state, action) {
            state.currentFocus = state.maxFocus;
            state.currentMana = state.maxMana;
            state.currentHealth = state.maxHealth;
            state.currentStamina = state.maxStamina;
        },
        refreshState(state, action) { 
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = initialState[key]
            })

            state.icon = action.payload;

            // @ts-ignore
            state[startBonuses[action.payload]] += 1;
        }
    }
})

export default userParams