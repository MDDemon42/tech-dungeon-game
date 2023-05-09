import {createSlice} from '@reduxjs/toolkit';
import { ICyber, IItem, IMastery, IMutation, IPower, ISpell } from '../../types/interfaces';

const generalUser = createSlice({
    name: 'generalUser',
    initialState: {
        cybers: [] as ICyber[],
        masteries: [] as IMastery[],
        mutations: [] as IMutation[],
        items: [] as IItem[],
        spells: [] as ISpell[],
        powers: [] as IPower[]
    },
    reducers: {
        buyItem(state, action) {
            state.items.push(action.payload)
        },
        studySpell(state, action) {
            state.spells.push(action.payload)
        },
        developPower(state, action) {
            state.powers.push(action.payload)
        },
        learnMastery(state, action) {
            state.masteries.push(action.payload)
        },
        implementCyber(state, action) {
            state.cybers.push(action.payload)
        },
        mutateMutation(state, action) {
            state.mutations.push(action.payload)
        },
        setState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key]
            })
        }
    }
})

export default generalUser