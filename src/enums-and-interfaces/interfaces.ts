import { 
    DamageType, 
    GameScreens, 
    InventoryOption, 
    InventoryOptionPart, 
    InventoryPlace, 
    MindOption, 
    Race, 
    UserParam, 
    UserResource 
} from "./enums"

// game parts //
export interface IStore {
    everything: IEverything,
    gameScreen: IGameScreen,
    gameSquad: IGameSquad
}

export interface IEverything {
    [MindOption.masteries]: Record<string, IMastery>,
    [MindOption.spells]: Record<string, ISpell>,
    [MindOption.powers]: Record<string, IPower>
    [InventoryOption.items]: {
        [InventoryOptionPart.armors]: Record<string, IItem>,
        [InventoryOptionPart.weapons]: Record<string, IItem>,
        [InventoryOptionPart.other]: Record<string, IItem>
    },    
    [InventoryOption.cybers]: {
        [InventoryOptionPart.armors]: Record<string, ICyber>,
        [InventoryOptionPart.weapons]: Record<string, ICyber>,
        [InventoryOptionPart.other]: Record<string, ICyber>
    },
    [InventoryOption.mutations]: {
        [InventoryOptionPart.armors]: Record<string, IMutation>,
        [InventoryOptionPart.weapons]: Record<string, IMutation>,
        [InventoryOptionPart.other]: Record<string, IMutation>
    }
}

export interface IGameScreen {
    screen: GameScreens,
    shouldShowBackpacks: boolean
}

export interface IGameSquad {
    currentlyWatched: number,
    squadMembers: Record<string, ICharacher>,
    squadBackpacks: {
        resources: {
            [UserResource.gene]: number,
            [UserResource.gem]: number,
            [UserResource.core]: number
        },
        items: IItem[]
    }    
}

// character parts //
export interface ICharacher {
    general: ICharacterGeneral,
    params: ICharacherParams
}

export interface ICharacterGeneral {
    mind: IMind,
    inventory: IInventory,
}

export interface ICharacherParams {
    class: string,
    race: Race,
    stage?: number,
    level: number,
    name: string,
    currentParams: {
        [UserParam.health]: number,
        [UserParam.mana]: number,
        [UserParam.focus]: number,
        [UserParam.stamina]: number,
        [UserParam.blank]?: number
    },
    maxParams: {
        [UserParam.health]: number,
        [UserParam.mana]: number,
        [UserParam.focus]: number,
        [UserParam.stamina]: number
    },
    resistances: {
        [DamageType.physicalSlashing]: number,
        [DamageType.physicalSmashing]: number,
        [DamageType.physicalPiercing]: number,
        [DamageType.fire]: number,
        [DamageType.electrical]: number,
        [DamageType.psionic]: number,
        [DamageType.acid]: number,
        [DamageType.cold]: number,
    },
    blank?: number
}

// mind options //
export interface IMind {
    [MindOption.masteries]: IMastery[],
    [MindOption.powers]: IPower[],
    [MindOption.spells]: ISpell[]
}

export interface ISpell extends IPower {
    requiresRod: boolean
}

export interface IPower extends IMastery {
    ability: IAbility | null
}

export interface IMastery extends ICommon {
    requiredMastery: IMastery | null
}

// inventory options //
export interface IInventory extends Record<string, IItem | ICyber | IMutation> {
    hat: IItem,
    head: IMutation,
    chin: IMutation,
    armor: IItem,
    skin: IMutation | ICyber,
    back: IMutation | IItem,
    shoulders: IMutation | ICyber,
    belt: IItem,
    leftPocket: IItem,
    rightPocket: IItem,
    tail: IMutation,
    legs: ICyber,
    leftHand: ICyber | IItem,
    rightHand: ICyber | IItem,
    bothHands: IMutation | IItem
}

export interface ICyber extends IMutation {
}

export interface IMutation extends IInventorySlot {
}

export interface IItem extends IInventorySlot {
    requiredMastery: IMastery | null
}

export interface IInventorySlot extends ICommon {
    cost: number,
    inventoryPlace: InventoryPlace,
    priority: number,

    ability: IAbility | null,
    linkedMastery: IMastery | null,
    masterAbilities: IAbility[] | null
}

export interface ICommon {
    name: string,
    description: string,
    image: any
}

// abilities //
export interface IAbility extends IBattleAbility {
}

export interface IBattleAbility extends ICommon {
    costs: {
        [UserParam.health]?: number,
        [UserParam.mana]?: number,
        [UserParam.focus]?: number,
        [UserParam.stamina]?: number,
        [UserParam.blank]?: number        
    },
    damage: number,
    damageType: DamageType,
    hitChance: number,
    targetAmount: number
}

// classes //
export interface IClassInfo {
    mutant: IClassInfoItem,
    cyborg: IClassInfoItem,
    normal: IClassInfoItem,
    wizard: IClassInfoItem,
    psion: IClassInfoItem,
    guildian: IClassInfoItem,
    noIcon: IClassInfoItem
}

interface IClassInfoItem {
    startBonus: [keyof ICharacherParams, UserParam | UserResource | keyof ICharacherParams],
    levelUpBonuses: UserParam[],
    description: string
}

// races //
export interface IMutationsForRaceCheck {
    horns: boolean,
    hooves: boolean,
    lowerFangs: boolean,
    scales: boolean,
    tailWithSting: boolean,
    claws: boolean,
    acidSplit: boolean,
    wings: boolean,
    pincers: boolean
}

// lookout pages //
export interface ISubInventoryMapping extends ISubMapping {
    resource: UserResource
}

export interface ISubMindMapping extends ISubMapping {
    capacity: number,
    posessed: number
}

interface ISubMapping {
    title: string,
    button: string,
    listener: any
}

// item props //
export interface IManageItemsProps {
    index: number,
    item: IItem
}