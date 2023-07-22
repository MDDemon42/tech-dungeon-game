import images from "../images/images";
import { 
    ICharacher, 
    ICharacherParams, 
    ICharacterGeneral, 
    IInventory, 
    IItem, 
    IMastery, 
    IMind, 
    IMutation, 
    IPower, 
    ISpell
} from "../enums-and-interfaces/interfaces";
import { 
    Race, 
    UserParam, 
    DamageType, 
    InventoryPlace 
} from "../enums-and-interfaces/enums";

export default function createEmptyCharacter(): ICharacher {
    return {
        general: createEmptyGeneral(),
        params: createEmptyParams()
    }
}

function createEmptyParams(): ICharacherParams {
    return {
        name: '',
        level: 0,
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
            [DamageType.physicalSlashing]: 0,
            [DamageType.physicalSmashing]: 0,
            [DamageType.physicalPiercing]: 0,
            [DamageType.fire]: 0,
            [DamageType.electrical]: 0,
            [DamageType.psionic]: 0,
            [DamageType.acid]: 0,
            [DamageType.cold]: 0,
        }
    }    
}

function createEmptyGeneral(): ICharacterGeneral {
    return {
        mind: createEmptyMind(),
        inventory: createEmptyInventory()
    }    
}

function createEmptyMind(): IMind {
    const mind = {
        masteries: [] as IMastery[],
        spells: [] as ISpell[],
        powers: [] as IPower[]
    };
    
    return mind
}

export function createEmptyInventory(): IInventory {
    const inventory = {
        hat: createNoItem(),
        head: createNoItem(),
        chin: createNoItem(),
        armor: createNoItem(),
        skin: createNoItem(),
        back: createNoItem(),
        shoulders: createNoItem(),
        belt: createNoItem(),
        leftPocket: createNoItem(),
        rightPocket: createNoItem(),
        tail: createNoItem(),
        legs: createNoItem(),
        leftHand: createNoItem(),
        rightHand: createNoItem(),
        bothHands: createNoItem()
    };

    return inventory
}

export function createNoItem(): IMutation & IItem {
    return {
        name: 'Nothing yet',
        description: 'Nothing at all',
        cost: 0,
        inventoryPlace: InventoryPlace.belt,
        image: images.classIcons.noIcon,
        priority: 0,
        requiredMastery: null,
        ability: null,
        linkedMastery: null,
        masterAbilities: null
    }    
}