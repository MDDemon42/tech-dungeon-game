import images from "../../images/images";
import { 
    DamageTypes, 
    ICharacher, 
    ICharacherParams, 
    ICharacterGeneral, 
    IInventory, 
    IItem, 
    IMastery, 
    IMind, 
    IMutation, 
    IPower, 
    ISpell, 
    InventoryPlaces, 
    Race, 
    UserParam
} from "../../interfaces/interfaces";

export function createNoItem(): IMutation & IItem {
    return {
        name: 'Nothing yet',
        description: 'Nothing at all',
        cost: 0,
        inventoryPlace: InventoryPlaces.belt,
        image: images.classIcons.noIcon,
        priority: 0,
        requiredMastery: null,
        ability: null,
        linkedMastery: null,
        masterAbilities: null
    }    
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

function createEmptyMind(): IMind {
    const mind = {
        masteries: [] as IMastery[],
        spells: [] as ISpell[],
        powers: [] as IPower[]
    };
    
    return mind
}

function createEmptyGeneral(): ICharacterGeneral {
    return {
        mind: createEmptyMind(),
        inventory: createEmptyInventory()
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
            [DamageTypes.physicalSlashing]: 0,
            [DamageTypes.physicalSmashing]: 0,
            [DamageTypes.physicalPiercing]: 0,
            [DamageTypes.fire]: 0,
            [DamageTypes.electrical]: 0,
            [DamageTypes.psionic]: 0,
            [DamageTypes.acid]: 0,
            [DamageTypes.cold]: 0,
        }
    }    
}

export default function createEmptyCharacter(): ICharacher {
    return {
        general: createEmptyGeneral(),
        params: createEmptyParams()
    }
}