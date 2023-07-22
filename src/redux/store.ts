import {configureStore} from '@reduxjs/toolkit';
import {logger, saver} from './middleware';
import {combineReducers} from 'redux';

import gameScreen from './slices/gameScreen';
import everything from './slices/everything';
import gameSquad from './slices/gameSquad';

const reducer = combineReducers({
    everything: everything.reducer,
    gameScreen: gameScreen.reducer,
    gameSquad: gameSquad.reducer
})

const middleware = (getDefaultMiddleware: any) => getDefaultMiddleware().concat(logger, saver);

export default configureStore({
    reducer,
    middleware
})