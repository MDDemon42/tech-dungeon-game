export interface ICommon {
    name: string,
    description: string,
    image: any
}

export interface IMastery extends ICommon {
    ability?: IAbility,
    requiredMastery: IMastery | null
}

export interface ISpell extends IMastery {
    requiresRod?: boolean
}

export interface IPower extends IMastery {
    passive: boolean
}

export enum InventoryPlaces {
    head = 'Head',
    chin = 'Chin',
    skin = 'Skin',
    back = 'Back',
    armor = 'Armor',
    shoulders = 'Shoulders',
    tail = 'Tail',
    leftHand = 'Left hand',
    rightHand = 'Right hand',
    bothHands = 'Both hands',
    belt = 'Belt',
    leftPocket = 'Left pocket',
    rightPocket = 'Right pocket',
    legs = 'Legs'
}

export interface IInventorySlot extends ICommon {
    cost: number,
    inventoryPlace: InventoryPlaces,
    priority: number,
    linkedMastery?: IMastery,
    masterAbilities?: IAbility[]
}

export interface IItem extends IInventorySlot {
    ability: IAbility | null,
    requiredMastery?: IMastery
}

export interface IMutation extends IInventorySlot {
    ability?: IAbility | null
}

export interface ICyber extends IMutation {
}

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

export enum Race {
    human = 'Human',
    unknown = 'Unknown',
    satyr = 'Satyr',
    minotaur = 'Minotaur',
    orc = 'Orc',
    gnoll = 'Gnoll',
    naga = 'Naga',
    demon = 'Demon',
    dragon = 'Dragon',
    chimera = 'Chimera'
}

export interface IMutationsRaceCheck {
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

export interface ICharacherParams {
    class: string,
    race: Race,
    stage?: number,
    level?: number,
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
        [DamageTypes.physical]: number,
        [DamageTypes.fire]: number,
        [DamageTypes.electrical]: number,
        [DamageTypes.psionic]: number,
        [DamageTypes.acid]: number
    },
    blank?: number
}

export enum UserParam {
    blank = 'Blank',
    health = 'Health',
    mana = 'Mana',
    focus = 'Focus',
    stamina = 'Stamina'    
}

export enum UserResource {
    gem = 'Gems',
    core = 'Mecha-cores',
    gene = 'Muta-genes'
}

export interface ISubInventoryDataName {
    mutations: Record<string, IMutation>,
    cybers: Record<string, ICyber>,
    items: Record<string, IItem>
}

export interface ISubInventoryMapping {
    resource: UserResource,
    title: string,
    button: string,
    listener: any
}

export interface IGeneralAll {
    masteries: Record<string, IMastery>,
    items: Record<string, IItem>,
    spells: Record<string, ISpell>,
    mutations: Record<string, IMutation>,
    cybers: Record<string, ICyber>,
    powers: Record<string, IPower>
}

export interface ICharacterGeneral {
    masteries: IMastery[],
    inventory: IInventory,
    spells: ISpell[],
    powers: IPower[]
}

export interface ICharacher {
    general: ICharacterGeneral,
    params: ICharacherParams
}

interface IGameScreens {
    screen: string
}

export interface IGameSquad {
    currentlyWatched: number,
    squadMembers: Record<string, ICharacher | null>,
    resources: {
        [UserResource.gene]: number,
        [UserResource.gem]: number,
        [UserResource.core]: number
    }
}

export interface IStore {
    generalAll: IGeneralAll,
    gameScreens: IGameScreens,
    gameSquad: IGameSquad
}

export enum DamageTypes {
    physical = 'Physical',
    fire = 'Fire',
    electrical = 'Electrical',
    psionic = 'Psionic',
    acid = 'Acid'
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
    damageType: DamageTypes,
    hitChance: number,
    targetAmount: number
}

export interface IAbility extends IBattleAbility {

}

interface IClassInfoItem {
    startBonus: [keyof ICharacherParams, UserParam | UserResource | keyof ICharacherParams],
    levelUpBonuses: UserParam[],
    description: string
}

export interface IClassInfo {
    mutant: IClassInfoItem,
    cyborg: IClassInfoItem,
    normal: IClassInfoItem,
    wizard: IClassInfoItem,
    psion: IClassInfoItem,
    guildian: IClassInfoItem,
    noIcon: IClassInfoItem
}