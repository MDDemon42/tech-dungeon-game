import images from "../images/images";
import { 
    IBending,
    ICharacher, 
    ICharacherParams, 
    ICharacterGeneral, 
    ICyber, 
    IInventory, 
    IItem, 
    IMastery, 
    IMind, 
    IPower, 
    IRitual, 
    ISpell
} from "../enums-and-interfaces/interfaces";
import { 
    Race, 
    UserParam, 
    DamageType, 
    InventoryPlace, 
    UserStartClass,
    InventorySlotCategory
} from "../enums-and-interfaces/enums";
import { raceNames } from "../general/races/races";

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
        strength: 0,
        lifted: 0,
        class: UserStartClass.noIcon,
        race: raceNames[Race.human],
        currentParams: {
            [UserParam.health]: 0,
            [UserParam.mana]: 0,
            [UserParam.focus]: 0,
            [UserParam.stamina]: 0,
            [UserParam.blank]: 0
        },
        maxParams: {
            [UserParam.health]: 0,
            [UserParam.mana]: 0,
            [UserParam.focus]: 0,
            [UserParam.stamina]: 0,
            [UserParam.blank]: 0
        },
        resistances: {
            [DamageType.physicalSlashing]: 0,
            [DamageType.physicalSmashing]: 0,
            [DamageType.physicalPiercing]: 0,
            [DamageType.suffocation]: 0,
            [DamageType.fire]: 0,
            [DamageType.electrical]: 0,
            [DamageType.psionic]: 0,
            [DamageType.acid]: 0,
            [DamageType.cold]: 0,
        },
        dodge: 0
    }    
}

export function createEmptyGeneral(): ICharacterGeneral {
    return {
        mind: createEmptyMind(),
        inventory: createEmptyInventory(),
        backpacks: [
            createNoItem(),
            createNoItem(),
            createNoItem(),
            createNoItem()
        ]
    }    
}

export function createEmptyMind(): IMind {
    const mind = {
        bending: [] as IBending[],
        masteries: [] as IMastery[],
        spells: [] as ISpell[],
        powers: [] as IPower[],
        rituals: [] as IRitual[]
    };
    
    return mind
}

export function createEmptyInventory() {
    const inventory: IInventory = {
        [InventoryPlace.hat]: createNoItem(),
        [InventoryPlace.head]: createNoItem(),
        [InventoryPlace.eyes]: createNoItem(),
        [InventoryPlace.chin]: createNoItem(),
        [InventoryPlace.armor]: createNoItem(),
        [InventoryPlace.skin]: createNoItem(),
        [InventoryPlace.back]: createNoItem(),
        [InventoryPlace.backItem]: null,
        [InventoryPlace.shoulders]: createNoItem(),
        [InventoryPlace.extraLeftHand]: null,
        [InventoryPlace.extraRightHand]: null,
        [InventoryPlace.belt]: createNoItem(),
        [InventoryPlace.leftPocket]: createNoItem(),
        [InventoryPlace.rightPocket]: createNoItem(),
        [InventoryPlace.tail]: createNoItem(),
        [InventoryPlace.legs]: createNoItem(),
        [InventoryPlace.leftHand]: createNoItem(),
        [InventoryPlace.rightHand]: createNoItem(),
        [InventoryPlace.leftHip]: createNoItem(),
        [InventoryPlace.rightHip]: createNoItem(),
        [InventoryPlace.leftHipItem]: null,
        [InventoryPlace.rightHipItem]: null,
        [InventoryPlace.bothHands]: createNoItem(),
        [InventoryPlace.telekinesisLeftHand]: null,
        [InventoryPlace.telekinesisRightHand]: null,
    };

    return inventory
}

export function createNoItem(): ICyber & IItem {
    return {
        name: chrome.i18n.getMessage('no_item_name'),
        description: chrome.i18n.getMessage('no_item_description'),
        cost: 0,
        category: InventorySlotCategory.nothing,
        inventoryPlaces: [InventoryPlace.belt],
        image: images.classIcons.noIcon,
        priority: 0,
        givenMastery: null,
        requiredMastery: '',
        requiredStrength: 0,
        requiredCyber: '',
        abilities: null,
        passiveAbilities: null,
        linkedAbilities: null,        
    }    
}