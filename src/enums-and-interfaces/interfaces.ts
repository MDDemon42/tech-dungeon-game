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
    gameStage: IGameStage,
    gameSquad: IGameSquad,
    opponents: IOpponentSquad
}

export interface IEverything {
    [MindOption.bending]: Record<string, Record<string, IBending>>,
    [MindOption.masteries]: Record<string, IMastery>,
    [MindOption.spells]: Record<string, ISpell>,
    [MindOption.rituals]: Record<string, IRitual>,
    [MindOption.powers]: {
        [InventoryOptionPart.armors]: Record<string, IPower>,
        [InventoryOptionPart.weapons]: Record<string, IPower>,
        [InventoryOptionPart.other]: Record<string, IPower>
    }
    [InventoryOption.items]: {
        [InventoryOptionPart.armors]: Record<string, IItem>,
        [InventoryOptionPart.weapons]: Record<string, IItem>,
        [InventoryOptionPart.other]: Record<string, IItem>
    },    
    [InventoryOption.wizardItems]: {
        [InventoryOptionPart.armors]: Record<string, IWizardItem>,
        [InventoryOptionPart.weapons]: Record<string, IWizardItem>,
        [InventoryOptionPart.other]: Record<string, IWizardItem>
    },
    [InventoryOption.guildItems]: {
        [InventoryOptionPart.weapons]: Record<string, IGuildItem>,
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
    screen: GameScreens
}

export interface IGameStage {
    [GameScreens.market]: {
        stage: number,
        options: Record<string, IItem[]>
    },
    [GameScreens.academy]: {
        stage: number,
        options: Record<string, IMastery[]>
    },
    [GameScreens.cyberLab]: {
        stage: number,
        options: Record<string, ICyber[]>
    },
    [GameScreens.mutationLab]: {
        stage: number,
        options: Record<string, IMutation[]>
    },
    [GameScreens.focusSite]: {
        stage: number,
        options: Record<string, IPower[]>
    },
    [GameScreens.focusSchool]: {
        stage: number,
        options: Record<string, IMastery[]>
    },
    [GameScreens.spellSchool]: {
        stage: number,
        options: Record<string, ISpell[]>,
    },
    [GameScreens.wizardShop]: {
        stage: number,
        options: Record<string, IWizardItem[]>
    },
    [GameScreens.wizardSchool]: {
        stage: number,
        options: Record<string, IMastery[]>
    },
    [GameScreens.villageMap]: {
        stage: number,
        options: null
    },
    [GameScreens.fireSite]: {
        stage: number,
        options: Record<string, IBending[]>
    },
    [GameScreens.iceSite]: {
        stage: number,
        options: Record<string, IBending[]>
    },
    [GameScreens.airSite]: {
        stage: number,
        options: Record<string, IBending[]>
    },
    [GameScreens.fireSchool]: {
        stage: number,
        options: Record<string, IMastery[]>
    },
    [GameScreens.iceSchool]: {
        stage: number,
        options: Record<string, IMastery[]>
    },
    [GameScreens.airSchool]: {
        stage: number,
        options: Record<string, IMastery[]>
    },
    [GameScreens.guildRituals]: {
        stage: number,
        options: Record<string, IRitual[]>
    },
    [GameScreens.guildSchool]: {
        stage: number,
        options: Record<string, IMastery[]>
    },
    [GameScreens.guildShop]: {
        stage: number,
        options: Record<string, IGuildItem[]>
    }
}

export interface ITaskScreenProps {
    screen: GameScreens,
    stage: number,
    leaveListener: () => void
}

export interface IGameTasks extends Record<GameScreens, IScreenTasks> {}

export interface IScreenTasks extends Record<string, ITask> {}

export interface ITask {
    bigResourceName: string,
    bigResourceAmount: number,
    stageTitle: string,
    stageText: string,
    doTaskText: string,
    leaveText: string
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
    ability: IBattleAbility | null,
    requiresBothHands: boolean,
    requiredBending: string
}

export interface IPower extends IMastery {
    ability: IBattleAbility | null,
    passiveAbility: IPassiveAbility | null,
    requiredPower: string
}

export interface IRitual extends IMastery {
    passiveAbility: IPassiveAbility
}

export interface IMastery extends ICommon {
    requiredMastery: string
}

// inventory options //
export interface IInventory extends Record<string, 
    IItem | ICyber | IMutation | IWizardItem | IGuildItem
> {
    hat: IItem | IWizardItem,
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

export interface IGuildItem extends IItem {
}

export interface IItem extends IInventorySlot {
    requiredMastery: string,
    linkedMastery: string,
    masterAbilities: IAbility[] | null,
}

export interface IWizardItem extends IInventorySlot {
}

export interface IBigResource extends ICommon {
    cost: number,
    inventoryPlace: InventoryPlace,
    priority: number
}

export interface IInventorySlot extends ICommon {
    cost: number,
    inventoryPlace: InventoryPlace,
    priority: number,

    ability: IBattleAbility | null,
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
    claws: boolean,
    acidSplit: boolean,
    wings: boolean,
    pincers: boolean,
    raptorLegs: boolean
}

// lookout pages //
export interface IBendingMapping extends ISubMapping {
    upgradeButtons: {
        title: string,
        stage: number,
        disabled: boolean
    }[]
}

export interface ISubInventoryMapping extends ISubMapping {
    resource: UserResource,
    upgradeButtons?: {
        title: string,
        stage: number,
        disabled: boolean
    }[]
}

export interface ISubMindMapping extends ISubMapping {
    capacity: number,
    posessed: number,
    upgradeButtons?: {
        title: string,
        stage: number,
        disabled: boolean
    }[]
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