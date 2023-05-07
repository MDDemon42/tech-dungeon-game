import {createSlice} from '@reduxjs/toolkit';

const userParams = createSlice({
    name: 'userParams',
    initialState: {
        name: 'Adventurer',
        icon: 'noIcon',
        level: 1,
        money: 0,
        stage: 0
    },
    reducers: {
        changeIcon(state, action) {
            state.icon = action.payload
        },
        setState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key]
            })
        }
    }
})

export default userParams