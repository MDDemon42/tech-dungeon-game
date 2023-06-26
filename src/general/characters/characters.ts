import images from "../../images/images";
import opponents from "./opponents";
import { DamageTypes, ICharacher, ICharacherParams, ICharacterGeneral, IInventory, IItem, IMastery, IMutation, IPower, ISpell, InventoryPlaces } from "../../types/interfaces";

export function noItem(): IMutation & IItem {
    return {
        name: 'Nothing yet',
        description: 'Nothing at all',
        cost: 0,
        inventoryPlace: InventoryPlaces.belt,
        image: images.classIcons.noIcon,
        priority: 0,
        ability: null
    }    
}

export function emptyInventory() {
    const inventory = {
        hat: noItem(),
        head: noItem(),
        chin: noItem(),
        armor: noItem(),
        skin: noItem(),
        back: noItem(),
        shoulders: noItem(),
        belt: noItem(),
        leftPocket: noItem(),
        rightPocket: noItem(),
        tail: noItem(),
        legs: noItem(),
        leftHand: noItem(),
        rightHand: noItem(),
        bothHands: noItem()
    } as IInventory;

    return inventory
}

export function emptyGeneral(): ICharacterGeneral {
    return {
        masteries: [] as IMastery[],
        inventory: emptyInventory(),
        spells: [] as ISpell[],
        powers: [] as IPower[]
    }    
}

function emptyParams(): ICharacherParams {
    return {
        name: '',
        currentHealth: 0,
        maxHealth: 0,
        currentMana: 0,
        maxMana: 0,
        currentFocus: 0,
        maxFocus: 0,
        currentStamina: 0,
        maxStamina: 0,
        resistances: {
            [DamageTypes.physical]: 0,
            [DamageTypes.fire]: 0,
            [DamageTypes.electrical]: 0,
            [DamageTypes.psionic]: 0,
            [DamageTypes.acid]: 0
        }
    }    
}

export function emptyCharacter(): ICharacher {
    return {
        general: emptyGeneral(),
        params: emptyParams()
    }
}

const characters = {
    opponents
}

export default characters