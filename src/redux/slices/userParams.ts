import {createSlice} from '@reduxjs/toolkit';
import { IUserParams } from '../../types/interfaces';

const initialState: IUserParams = {
    name: 'Adventurer',
    icon: 'noIcon',
    stage: 0,
    health: 3,
    level: 1,
    diamonds: 0,
    mechaCores: 0,
    mutaGenes: 0,
    mana: 0,
    focus: 0,
    stamina: 3
}

const startBonuses: Record<string, keyof IUserParams> = {
    mutant: 'mutaGenes',
    cyborg: 'mechaCores',
    normal: 'diamonds',
    wizard: 'mana',
    psion: 'focus',
    guildian: 'level'
}

const userParams = createSlice({
    name: 'userParams',
    initialState,
    reducers: {
        buyItem(state, action) {
            state.diamonds -= action.payload
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