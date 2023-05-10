import {createSlice} from '@reduxjs/toolkit';

const gameScreens = createSlice({
    name: 'gameScreens',
    initialState: {
        screen: 'battle'
    },
    reducers: {
        changeScreen(state, action) {
            state.screen = action.payload
        }
    }
})

export default gameScreens