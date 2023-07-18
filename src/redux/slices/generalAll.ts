import {createSlice} from '@reduxjs/toolkit';

import cybers from '../../general/cybers';
import masteries from '../../general/masteries/masteries';
import mutations from '../../general/mutations';
import items from '../../general/items';
import spells from '../../general/spells/spells';
import powers from '../../general/powers/powers';
import abilities from '../../general/abilities';

const generalAll = createSlice({
    name: 'generalAll',
    initialState: {
        cybers,
        masteries,
        mutations,
        items,
        spells,
        powers,
        abilities
    },
    reducers: {}
})

export default generalAll