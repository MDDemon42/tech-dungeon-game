import {createSlice} from '@reduxjs/toolkit';
import bending from '../../general/bending';
import cybers from '../../general/cybers';
import masteries from '../../general/masteries/masteries';
import mutations from '../../general/mutations';
import items from '../../general/items';
import spells from '../../general/spells/spells';
import powers from '../../general/powers';
import rituals from '../../general/rituals/rituals';
import guildItems from '../../general/guildItems';
import wizardItems from '../../general/wizardItems';
import { IEverything } from '../../enums-and-interfaces/interfaces';

const initialState: IEverything = {
    bending,
    masteries,
    powers,
    rituals,
    spells,
    items,
    guildItems,
    cybers,
    mutations,
    wizardItems
}

const everything = createSlice({
    name: 'everything',
    initialState,
    reducers: {}
})

export default everything