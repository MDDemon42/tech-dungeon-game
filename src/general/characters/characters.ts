import images from "../../images/images";
import opponents from "./opponents";
import { 
    DamageTypes, 
    ICharacher, 
    ICharacherParams, 
    ICharacterGeneral, 
    IInventory, 
    IItem, 
    IMastery, 
    IMutation, 
    IPower, 
    ISpell, 
    InventoryPlaces, 
    Race, 
    UserParam
} from "../../types/interfaces";

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
        class: 'noIcon',
        race: Race.human,
        currentParams: {
            [UserParam.health]: 0,
            [UserParam.mana]: 0,
            [UserParam.focus]: 0,
            [UserParam.stamina]: 0
        },
        maxParams: {
            [UserParam.health]: 0,
            [UserParam.mana]: 0,
            [UserParam.focus]: 0,
            [UserParam.stamina]: 0
        },
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