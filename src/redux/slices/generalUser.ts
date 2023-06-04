import {createSlice} from '@reduxjs/toolkit';
import { BodyParts, IInventory, IItem, IMastery, IMutation, IPower, ISpell, InventoryPlaces } from '../../types/interfaces';
import images from '../../images/images';

export function emptyInventory() {
    const noItem: IMutation & IItem = {
        name: 'Nothing yet',
        description: 'Nothing at all',
        bodyPart: BodyParts.head,
        value: 0,
        cost: 0,
        inventoryPlace: InventoryPlaces.belt,
        image: images.classIcons.noIcon,
        requiredMastery: null
    }

    const inventory = {
        hat: noItem,
        head: noItem,
        chin: noItem,
        armor: noItem,
        skin: noItem,
        back: noItem,
        shoulders: noItem,
        belt: noItem,
        leftPocket: noItem,
        rightPocket: noItem,
        tail: noItem,
        legs: noItem,
        leftHand: noItem,
        rightHand: noItem,
        bothHands: noItem
    } as IInventory;

    return inventory
}

function placeAsKey(place: string) {
    return place.split(' ').map((part, index) => {
        if (index === 0) {
            part = part[0].toLowerCase() + part.substring(1);
        } else {
            part = part[0].toUpperCase() + part.substring(1);
        }
        return part
    }).join('');
}

const generalUser = createSlice({
    name: 'generalUser',
    initialState: {
        masteries: [] as IMastery[],
        inventory: emptyInventory(),
        spells: [] as ISpell[],
        powers: [] as IPower[]
    },
    reducers: {
        buyItem(state, action) {
            if (!state.inventory) {
                state.inventory = emptyInventory();
            }
            state.inventory[placeAsKey(action.payload.inventoryPlace)] = action.payload;
        },
        studySpell(state, action) {
            state.spells.push(action.payload);
        },
        developPower(state, action) {
            state.powers.push(action.payload);
        },
        learnMastery(state, action) {
            state.masteries.push(action.payload);
        },
        implementCyber(state, action) {
            if (!state.inventory) {
                state.inventory = emptyInventory();
            }
            state.inventory[placeAsKey(action.payload.bodyPart)] = action.payload;
        },
        mutateMutation(state, action) {
            if (!state.inventory) {
                state.inventory = emptyInventory();
            }
            state.inventory[placeAsKey(action.payload.bodyPart)] = action.payload;
        },
        setState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key];
            })
        }
    }
})

export default generalUser