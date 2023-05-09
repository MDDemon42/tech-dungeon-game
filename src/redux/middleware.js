import { chromeStorageSaver } from '..';
import C from './constants';

export const logger = store => 
    next => 
        action => console.log(next(action), store.getState());

export const saver = store => next => action => {
    const result = next(action);
    
    const storeData = store.getState();

    localStorage[C.name] = JSON.stringify(storeData);
    chromeStorageSaver()

    return result;
};