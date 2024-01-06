import { 
    BattleResult,
    DamageType, 
    GameScreens,  
    InventoryPlace,
    MindOption, 
    Race, 
    TaskStatus, 
    UserParam, 
    UserResource, 
    UserStartClass
} from "./enums"

// game parts //
export interface IStore {
    gameScreen: IGameScreen,
    gameStage: IGameStage,
    gameSquad: IGameSquad,
    opponents: IOpponentSquad
}

export interface IGameScreen {
    screen: GameScreens
}

export interface IGameStage extends Record<GameScreens, {
    stage: number,
    stageOptions: IScreenStageOptions | null,
    tasks: IScreenTasks | null,
    usableOptions: (
        IMastery | IItem |
        ICyber | IMutation |
        IPower | ISpell |
        IWizardItem | IBending |
        IRitual | IGuildItem
    )[]
}> {}

export interface IGameStageOptions extends Record<GameScreens, IScreenStageOptions | null> {}

export interface IScreenStageOptions extends Record<string, (
    IMastery | IItem |
    ICyber | IMutation |
    IPower | ISpell |
    IWizardItem | IBending |
    IRitual | IGuildItem
)[]> {}

export interface ITaskScreenProps {
    screen: GameScreens,
    stage: number,
    leaveListener: () => void
}

export interface IGameTasks extends Record<GameScreens, IScreenTasks | null> {}

export interface IScreenTasks extends Record<string, {
    status: TaskStatus
    task: ITask
}> {}

export interface ICraft extends ITask {}

export interface ITask {
    resourceCost: {
        name: string,
        amount: number
    }[],
    taskTitle: string,
    taskText: string
}

export interface IGameSquad {
    currentlyWatched: number,
    squadMembers: Record<string, ICharacher>,
    resources: Record<UserResource, number>
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
    strength: number,
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
    [MindOption.rituals]: IRitual[],
    [MindOption.bending]: IBending[],
    [MindOption.masteries]: IMastery[],
    [MindOption.powers]: IPower[],
    [MindOption.spells]: ISpell[],
}

export interface ISpell extends IMastery {
    ability: IBattleAbility | null,
    requiresRod: boolean
}

export interface IBending extends IMastery {
    ability: IBattleAbility,
    requiresBothHands: boolean,
    requiredBending: string
}

export interface IPower extends IMastery {
    ability: IBattleAbility | null,
    passiveAbilities: IPassiveAbility[] | null,
    requiredPower: string
}

export interface IRitual extends IMastery {
    passiveAbilities: IPassiveAbility[]
}

export interface IMastery extends ICommon {
    requiredMastery: string
}

// inventory options //
export interface IInventory extends Record<string, 
    IItem | ICyber | IMutation | IWizardItem | IGuildItem | null
> {
    hat: IItem | IWizardItem,
    head: IMutation,
    chin: IMutation,
    armor: IItem | IMutation,
    skin: IMutation | ICyber,
    back: IMutation | IItem,
    shoulders: IMutation | ICyber,
    extraLeftHand: ICyber | IItem | IMutation | null,
    extraRightHand: ICyber | IItem | IMutation | null,
    belt: IItem,
    leftPocket: IItem,
    rightPocket: IItem,
    tail: IMutation,
    legs: ICyber | IMutation,
    leftHand: ICyber | IMutation | IItem,
    rightHand: ICyber | IMutation | IItem,
    telekinesisLeftHand: IItem | null,
    telekinesisRightHand: IItem | null,
    bothHands: IMutation | IItem
}

export interface ICyber extends IMutation {
    requiredCyber: string
}

export interface IMutation extends IInventorySlot {
}

export interface IGuildItem extends IItem {
}

export interface IArmouryItem extends IItem {
    requiredStrength: number,
    craft: ICraft
}

export interface IItem extends IInventorySlot {
    requiredMastery: string,
    linkedAbilities: {
        linkedMastery: string,
        masterAbility: IBattleAbility,
    }[] | null,    
}

export interface IWizardItem extends IInventorySlot {
}

export interface IBigResource extends ICommon {
    cost: number,
    inventoryPlaces: InventoryPlace[],
    priority: number
}

export interface IInventorySlot extends ICommon {
    cost: number,
    inventoryPlaces: InventoryPlace[],
    priority: number,

    abilities: IBattleAbility[] | null,
    passiveAbilities: IPassiveAbility[] | null
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
    damage: {
        [DamageType.acid]?: number,
        [DamageType.cold]?: number,
        [DamageType.electrical]?: number,
        [DamageType.fire]?: number,
        [DamageType.physicalPiercing]?: number,
        [DamageType.physicalSlashing]?: number,
        [DamageType.physicalSmashing]?: number,
        [DamageType.psionic]?: number,
        [DamageType.suffocation]?: number
    },
    hitChance: number,
    targetAmount: number
}

export interface IPassiveAbility extends ICommon {
    bonusMaxParams: Partial<Record<UserParam, number>> | null,
    bonusResistances: Partial<Record<DamageType, number>> | null,
    bonusDodge: number
}

// classes //
export interface IClassInfo {
    [UserStartClass.vital]: IClassInfoItem,
    [UserStartClass.tireless]: IClassInfoItem,
    [UserStartClass.creative]: IClassInfoItem,
    [UserStartClass.dreamer]: IClassInfoItem,
    [UserStartClass.geneKeeper]: IClassInfoItem,
    [UserStartClass.coreKeeper]: IClassInfoItem,
    [UserStartClass.richie]: IClassInfoItem,
    [UserStartClass.ingenious]: IClassInfoItem,
    [UserStartClass.noIcon]: IClassInfoItem
}

interface IClassInfoItem {
    bonusLevel?: boolean,
    bonusParam?: UserParam,
    bonusResource?: UserResource,
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
    extraArms: boolean,
    claws: boolean,
    acidSpit: boolean,
    wings: boolean,
    pincers: boolean,
    raptorLegs: boolean
}

// lookout pages //
export interface IBendingMapping extends ISubMapping {
    listener: any 
}

export interface ISubInventoryMapping extends ISubMapping {
    resource: UserResource,
    maxHeight: string
}

export interface ISubMindMapping extends ISubMapping {
    capacity: number,
    posessed: number,
    listener: any 
}

export interface IUpgradeButton {
    title: string,
    stage: number,
    disabled: boolean,
    visible: boolean
}

interface ISubMapping {
    title: string,
    button: string       
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
    battleResult: BattleResult;
}