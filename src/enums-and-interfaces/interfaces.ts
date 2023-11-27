import { 
    DamageType, 
    GameScreens, 
    InventoryOption, 
    InventoryOptionPart, 
    InventoryPlace, 
    MindOption, 
    Race, 
    UserParam, 
    UserResource, 
    UserStartClass
} from "./enums"

// game parts //
export interface IStore {
    everything: IEverything,
    gameScreen: IGameScreen,
    gameSquad: IGameSquad,
    opponents: IOpponentSquad
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
    resources: {
        [UserResource.gene]: number,
        [UserResource.gem]: number,
        [UserResource.core]: number
    }
}

export interface IOpponentSquad {
    opponentsOptionsIndex: number,
    opponentMembers: Record<string, ICharacher>
}

// character parts //
export interface ICharacher {
    general: ICharacterGeneral,
    params: ICharacherParams
}

export interface ICharacterGeneral {
    mind: IMind,
    inventory: IInventory,
    backpacks: IItem[]
}

export interface ICharacherParams {
    class: UserStartClass,
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
        [UserParam.stamina]: number,
        [UserParam.blank]?: number
    },
    resistances: {
        [DamageType.physicalSlashing]: number,
        [DamageType.physicalSmashing]: number,
        [DamageType.physicalPiercing]: number,
        [DamageType.suffocation]: number,
        [DamageType.fire]: number,
        [DamageType.electrical]: number,
        [DamageType.psionic]: number,
        [DamageType.acid]: number,
        [DamageType.cold]: number,
    },
    blank?: number,
    dodge: number
}

// mind options //
export interface IMind {
    [MindOption.masteries]: IMastery[],
    [MindOption.powers]: IPower[],
    [MindOption.spells]: ISpell[]
}

export interface ISpell extends IMastery {
    ability: IAbility | null,
    requiresRod: boolean,
    requiresBothHands: boolean
}

export interface IPower extends IMastery {
    ability: IBattleAbility | null,
    passiveAbility: IPassiveAbility | null,
    requiredPower: string
}

export interface IMastery extends ICommon {
    requiredMastery: string
}

// inventory options //
export interface IInventory extends Record<string, IItem | ICyber | IMutation> {
    hat: IItem,
    head: IMutation,
    chin: IMutation,
    armor: IItem | IMutation,
    skin: IMutation | ICyber,
    back: IMutation | IItem,
    shoulders: IMutation | ICyber,
    belt: IItem,
    leftPocket: IItem,
    rightPocket: IItem,
    tail: IMutation,
    legs: ICyber | IMutation,
    leftHand: ICyber | IItem,
    rightHand: ICyber | IItem,
    bothHands: IMutation | IItem
}

export interface ICyber extends IMutation {
    requiredCyber: string
}

export interface IMutation extends IInventorySlot {
}

export interface IItem extends IInventorySlot {
    requiredMastery: string
}

export interface IInventorySlot extends ICommon {
    cost: number,
    inventoryPlace: InventoryPlace,
    priority: number,

    ability: IBattleAbility | null,
    linkedMastery: string,
    masterAbilities: IAbility[] | null,

    passiveAbility: IPassiveAbility | null
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

export interface IPassiveAbility extends ICommon {
    bonusMaxParams: {
        [UserParam.health]?: number,
        [UserParam.mana]?: number,
        [UserParam.focus]?: number,
        [UserParam.stamina]?: number,
        [UserParam.blank]?: number
    } | null,
    bonusResistances: {
        [DamageType.physicalSlashing]?: number,
        [DamageType.physicalSmashing]?: number,
        [DamageType.physicalPiercing]?: number,
        [DamageType.suffocation]?: number,
        [DamageType.fire]?: number,
        [DamageType.electrical]?: number,
        [DamageType.psionic]?: number,
        [DamageType.acid]?: number,
        [DamageType.cold]?: number,
    } | null,
    bonusDodge?: number
}

// classes //
export interface IClassInfo {
    [UserStartClass.mutant]: IClassInfoItem,
    [UserStartClass.cyborg]: IClassInfoItem,
    [UserStartClass.normal]: IClassInfoItem,
    [UserStartClass.wizard]: IClassInfoItem,
    [UserStartClass.psion]: IClassInfoItem,
    [UserStartClass.guildian]: IClassInfoItem,
    [UserStartClass.noIcon]: IClassInfoItem
}

interface IClassInfoItem {
    startBonus: UserParam,
    levelUpBonuses: UserParam[],
    description: string
}

// races //
export interface IMutationsForRaceCheck {
    horns: boolean,
    hooves: boolean,
    lowerFangs: boolean,
    scales: boolean,
    fur: boolean,
    tailWithSting: boolean,
    claws: boolean,
    acidSplit: boolean,
    wings: boolean,
    pincers: boolean,
    raptorLegs: boolean
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
    itemIndex: number,
    item: IItem
}

// status //
export interface IMemberStatus {
    selected: boolean,
    hasTurn: boolean,
    dead: boolean
}

// battle page state
export interface IBattlePageState {
    battleTurn: number;
    selectedMemberIndex: number;
    selectedOpponentIndex: number;
    selectedAbility: IAbility | null;
    selectedAbilityDiv: HTMLElement | null;
    squadStatus: IMemberStatus[];
    opponentsStatus: IMemberStatus[];
    abilitiesOnTurn: IAbility[];
    battleResult: string;
}