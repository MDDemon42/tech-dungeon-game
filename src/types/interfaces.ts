export interface ICommon {
    name: string,
    description: string,
    image: any
}

export interface IMastery extends ICommon {
    requiredMastery: IMastery | null
}

export interface ISpell extends IMastery {
    value: number,
    cost: number
}

export interface IPower extends ISpell {
    passive: boolean
}

export enum InventoryPlaces {
    head = 'Head',
    armor = 'Armor',
    leftHand = 'Left hand',
    rightHand = 'Right hand',
    bothHands = 'Both hands',
    belt = 'Belt',
    leftPocket = 'Left pocket',
    rightPocket = 'Right pocket',
    back = 'Back'
}

export interface IItem extends ISpell {
    inventoryPlace: InventoryPlaces,
    priority: number
}

export enum BodyParts {
    head = 'Head',
    chin = 'Chin',
    skin = 'Skin',
    back = 'Back',
    shoulders = 'Shoulders',
    tail = 'Tail',
    legs = 'Legs',
    leftHand = 'Left hand',
    rightHand = 'Right hand',
    bothHands = 'Both hands'
}

export interface IMutation extends ICommon {
    cost: number,
    bodyPart: BodyParts,
    priority: number
}

export interface IInventorySlot {
    name: string,
    inventoryPlace?: InventoryPlaces,
    bodyPart?: BodyParts,
    priority: number
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

export interface IInventory extends Record<string, any> {
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
    focus: number
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