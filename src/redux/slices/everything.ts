import {createSlice} from '@reduxjs/toolkit';
import cybers from '../../general/cybers';
import masteries from '../../general/masteries/masteries';
import mutations from '../../general/mutations';
import items from '../../general/items';
import spells from '../../general/spells/spells';
import powers from '../../general/powers/powers';
import { IEverything } from '../../enums-and-interfaces/interfaces';

const initialState: IEverything = {
    masteries,
    powers,
    spells,
    items,
    cybers,
    mutations,
}

const everything = createSlice({
    name: 'everything',
    initialState,
    reducers: {}
})

export default everything