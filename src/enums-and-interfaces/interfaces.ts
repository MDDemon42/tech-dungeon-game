import { 
    AbilityTarget,
    BattleResult,
    DamageType, 
    GameScreens,  
    InventoryPlace,
    InventorySlotCategory,
    MindOption, 
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
        IRitual | IGuildItem |
        ICharacher
    )[]
}> {}

export interface IGameStageOptions extends Record<GameScreens, IScreenStageOptions | null> {}

export interface IScreenStageOptions extends Record<string, (
    IMastery | IItem |
    ICyber | IMutation |
    IPower | ISpell |
    IWizardItem | IBending |
    IRitual | IGuildItem |
    ICharacher
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
    resources: Record<UserResource, number>,
    storage: IItem[]
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
    race: string,
    stage?: number,
    level: number,
    strength: number,
    lifted: number,
    name: string,
    currentParams: {
        [UserParam.health]: number,
        [UserParam.mana]: number,
        [UserParam.focus]: number,
        [UserParam.satiety]: number,
        [UserParam.stamina]: number,
        [UserParam.blank]?: number
    },
    maxParams: {
        [UserParam.health]: number,
        [UserParam.mana]: number,
        [UserParam.focus]: number,
        [UserParam.satiety]: number,
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
    ability: IBattleAbility | ISupportAbility | null,
    requiresRod: boolean
}

export interface IBending extends IMastery {
    ability: IBattleAbility,
    requiresBothHands: boolean,
    requiredBending: string
}

export interface IPower extends IMastery {
    abilities: IBattleAbility[] | null,
    passiveAbilities: IPassiveAbility[] | null,
    requiredPower: string
}

export interface IRitual extends IMastery {
    passiveAbilities: IPassiveAbility[],
    healthCost: number
}

export interface IMastery extends ICommon {
    requiredMastery: string
}

// inventory options //
export interface IInventory extends Record<InventoryPlace, 
    IItem | ICyber | IMutation | IWizardItem | IGuildItem | null
> {
    [InventoryPlace.hat]: IItem | IWizardItem,
    [InventoryPlace.head]: IMutation,
    [InventoryPlace.eyes]: IMutation | ICyber,
    [InventoryPlace.chin]: IMutation,
    [InventoryPlace.armor]: IItem | IMutation,
    [InventoryPlace.skin]: IMutation | ICyber,
    [InventoryPlace.back]: IMutation | IItem,
    [InventoryPlace.backItem]: IItem | null,
    [InventoryPlace.shoulders]: IMutation | ICyber,
    [InventoryPlace.shouldersItem]: IItem | null,
    [InventoryPlace.extraLeftHand]: ICyber | IItem | IMutation | null,
    [InventoryPlace.extraRightHand]: ICyber | IItem | IMutation | null,
    [InventoryPlace.belt]: IItem,
    [InventoryPlace.leftPocket]: IItem,
    [InventoryPlace.rightPocket]: IItem,
    [InventoryPlace.tail]: IMutation,
    [InventoryPlace.legs]: ICyber | IMutation,
    [InventoryPlace.leftHand]: ICyber | IMutation | IItem,
    [InventoryPlace.rightHand]: ICyber | IMutation | IItem,
    [InventoryPlace.leftHip]: IItem,
    [InventoryPlace.rightHip]: IItem,
    [InventoryPlace.leftHipItem]: IItem | null,
    [InventoryPlace.rightHipItem]: IItem | null,
    [InventoryPlace.telekinesisLeftHand]: IItem | null,
    [InventoryPlace.telekinesisRightHand]: IItem | null,
    [InventoryPlace.bothHands]: IMutation | IItem
}

export interface ICyber extends IMutation {
    requiredCyber: string
}

export interface IMutation extends IInventorySlot {
}

export interface IGuildItem extends IItem {
}

export interface IArmouryItem extends IItem {
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
    givenMastery: IMastery | null,
    cost: number,
    inventoryPlaces: InventoryPlace[],
    priority: number,

    category: InventorySlotCategory,
    requiredStrength: number,

    abilities: IBattleAbility[] | null,
    passiveAbilities: IPassiveAbility[] | null
}

export interface ICommon {
    name: string,
    description: string,
    image: any
}

// abilities //
export interface IAbility extends IBattleAbility, ISupportAbility {
}

export interface IBattleAbility extends ICommon {
    costs: Partial<Record<UserParam, number>>,
    damage: Partial<Record<DamageType, number>>,
    hitChance: number,
    target: AbilityTarget,
    targetAmount: number,
    throwing: boolean
}

export interface ISupportAbility extends ICommon {
    costs: Partial<Record<UserParam, number>>,
    bonusResistances?: Partial<Record<DamageType, number>>,
    hitChance: number,
    target: AbilityTarget,
}

export interface IPassiveAbility extends ICommon {
    bonusMaxParams: Partial<Record<UserParam, number>> | null,
    bonusResistances: Partial<Record<DamageType, number>> | null,
    bonusDodge: number
}

// classes //
export interface IClassInfo extends Record<UserStartClass, IClassInfoItem> {}

interface IClassInfoItem {
    name: string,
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
    dragonEyes: boolean,
    claws: boolean,
    acidSpit: boolean,
    skinWings: boolean,
    pincers: boolean,
    raptorLegs: boolean,
    fireBreath: boolean,
    featherWings: boolean,
    tailWithBlunt: boolean,
    spikedShell: boolean,
    tailWithCutter: boolean
}

// lookout pages //
export interface IBendingMapping extends ISubMapping {
    listener: any 
}

export interface ISubInventoryMapping extends ISubMapping {
    resource: UserResource,
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
    dead: boolean,
    defensiveCharms: boolean
}

// battle page state
export interface IBattlePageState {
    allyIndex: number;
    memberIndex: number;
    opponentIndex: number;
    selectedAbility: IBattleAbility | ISupportAbility | null;
    selectedAbilityDiv: HTMLElement | null;
    squadStatus: IMemberStatus[];
    opponentsStatus: IMemberStatus[];
    abilitiesOnTurn: (IBattleAbility | ISupportAbility)[];
    result: BattleResult;
    log: string[];
    turn: number;
}