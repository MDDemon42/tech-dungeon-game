import {createSlice} from '@reduxjs/toolkit';

const generalUser = createSlice({
    name: 'generalUser',
    initialState: {
        cybers: [],
        masteries: [],
        mutations: [],
        items: [],
        spells: [],
        powers: []
    },
    reducers: {
        setState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key]
            })
        }
    }
})

export default generalUser