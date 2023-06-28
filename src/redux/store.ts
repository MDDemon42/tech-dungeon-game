import {configureStore} from '@reduxjs/toolkit';
import {logger, saver} from './middleware';
import {combineReducers} from 'redux';

import gameScreens from './slices/gameScreens';
import generalAll from './slices/generalAll';
import gameSquad from './slices/gameSquad';

const reducer = combineReducers({
    generalAll: generalAll.reducer,
    gameScreens: gameScreens.reducer,
    gameSquad: gameSquad.reducer
})

const middleware = (getDefaultMiddleware: any) => getDefaultMiddleware().concat(logger, saver);

export default configureStore({
    reducer,
    middleware
})