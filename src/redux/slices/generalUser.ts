import {createSlice} from '@reduxjs/toolkit';
import { BodyParts, IInventory, IItem, IMastery, IMutation, IPower, ISpell, InventoryPlaces } from '../../types/interfaces';
import images from '../../images/images';

export const noItem: IMutation & IItem = {
    name: 'Nothing yet',
    description: 'Nothing at all',
    bodyPart: BodyParts.head,
    value: 0,
    cost: 0,
    inventoryPlace: InventoryPlaces.belt,
    image: images.classIcons.noIcon,
    requiredMastery: null,
    priority: 0
}

export function emptyInventory() {
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

export function placeAsKey(place: string) {
    return place.split(' ').map((part, index) => {
        if (index === 0) {
            part = part[0].toLowerCase() + part.substring(1);
        } else {
            part = part[0].toUpperCase() + part.substring(1);
        }
        return part
    }).join('');
}

const initialState = {
    masteries: [] as IMastery[],
    inventory: emptyInventory(),
    spells: [] as ISpell[],
    powers: [] as IPower[]
}

const generalUser = createSlice({
    name: 'generalUser',
    initialState,
    reducers: {
        buyItem(state, action) {
            if (!state.inventory) {
                state.inventory = emptyInventory();
            }

            const position = action.payload.inventoryPlace;

            if (position === InventoryPlaces.bothHands) {
                state.inventory[placeAsKey(InventoryPlaces.leftHand)] = noItem;
                state.inventory[placeAsKey(InventoryPlaces.rightHand)] = noItem;
            }

            if (
                position === InventoryPlaces.leftHand || 
                position === InventoryPlaces.rightHand
            ) {
                state.inventory[placeAsKey(InventoryPlaces.bothHands)] = noItem;
            }

            state.inventory[placeAsKey(position)] = action.payload;
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

            const position = action.payload.bodyPart;

            if (
                position === BodyParts.leftHand || 
                position === BodyParts.rightHand
            ) {
                state.inventory[placeAsKey(BodyParts.bothHands)] = noItem;
            }

            state.inventory[placeAsKey(position)] = action.payload;
        },
        mutateMutation(state, action) {
            if (!state.inventory) {
                state.inventory = emptyInventory();
            }

            const position = action.payload.bodyPart;

            if (position === BodyParts.bothHands) {
                state.inventory[placeAsKey(BodyParts.leftHand)] = noItem;
                state.inventory[placeAsKey(BodyParts.rightHand)] = noItem;
            }

            state.inventory[placeAsKey(position)] = action.payload;
        },
        setState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key];
            })
        },
        refreshState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = initialState[key];
            })
        }
    }
})

export default generalUser