export interface ICommon {
    name: string,
    description: string,
    image: any
}

export interface IMastery extends ICommon {
    requiredMastery: IMastery | null
}

export interface ISpell extends IMastery {
    ability?: IAbility,
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

export interface User {
    name: string,
    icon: string,
    level?: number,
    money?: number,
    stage?: number,
    masteries?: IMastery[],
    items?: IItem[],
    spells?: ISpell[],
    mutations?: IMutation[],
    cybers?: ICyber[],
    powers?: IPower[]
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

export interface IUserParams {
    name: string,
    icon: string,
    stage: number,
    health: number,
    level: number,
    diamonds: number,
    mechaCores: number,
    mutaGenes: number,
    mana: number,
    focus: number,
    stamina: number
}

export interface IGeneralAll {
    masteries: Record<string, IMastery>,
    items: Record<string, IItem>,
    spells: Record<string, ISpell>,
    mutations: Record<string, IMutation>,
    cybers: Record<string, ICyber>,
    powers: Record<string, IPower>
}

export interface IGeneralUser {
    masteries: IMastery[],
    inventory: IInventory,
    spells: ISpell[],
    powers: IPower[]
}

interface IGameScreens {
    screen: string
}

export interface IStore {
    userParams: IUserParams,
    generalAll: IGeneralAll,
    generalUser: IGeneralUser,
    gameScreens: IGameScreens
}

export enum DamageTypes {
    physical = 'Physical',
    fire = 'Fire',
    electrical = 'Electrical',
    psionic = 'Psionic',
    acid = 'Acid'
}

export interface IBattleAbility extends ICommon {
    manaCost: number,
    focusCost: number,
    staminaCost: number,
    damage: number,
    damageType: DamageTypes,
    hitChance: number,
    targetAmount: number
}

export interface IAbility extends IBattleAbility {

}