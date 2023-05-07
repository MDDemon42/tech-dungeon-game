import {createSlice} from '@reduxjs/toolkit';

import cybers from '../../general/cybers/cybers';
import masteries from '../../general/masteries/masteries';
import mutations from '../../general/mutations/mutations';
import items from '../../general/items/items';
import spells from '../../general/spells/spells';
import powers from '../../general/powers/powers';

const generalAll = createSlice({
    name: 'generalAll',
    initialState: {
        cybers,
        masteries,
        mutations,
        items,
        spells,
        powers
    },
    reducers: {}
})

export default generalAll