export interface ICommon {
    name: string,
    description: string,
    image: any
}

export interface IMastery extends ICommon {
}

export interface ISpell extends ICommon {
    value: number,
    cost: number,
    requiredMastery: IMastery | null
}

export interface IPower extends ICommon {
    value: number,
    passive: boolean
}

export enum InventoryPlaces {
    hat = 'hat',
    armor = 'armor',
    leftHand = 'leftHand',
    rightHand = 'rightHand',
    bothHands = 'bothHands',
    belt = 'belt',
    leftPocket = 'leftPocket',
    rightPocket = 'rightPocket',
    back = 'back'
}

export interface IItem extends ISpell {
    inventoryPlace: InventoryPlaces
}

export enum BodyParts {
    head = 'head',
    chin = 'chin',
    skin = 'skin',
    back = 'back',
    shoulders = 'shoulders',
    tail = 'tail',
    legs = 'legs',
    leftHand = 'leftHand',
    rightHand = 'rightHand',
    bothHands = 'bothHands'
}

export interface IMutation extends ICommon {
    value: number,
    bodyPart: BodyParts
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

export interface IInventory {
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
    level: number,
    money: number,
    stage: number
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
    items: IItem[],
    spells: ISpell[],
    mutations: IMutation[],
    cybers: ICyber[],
    powers: IPower[]
}

export interface IStore {
    userParams: IUserParams,
    generalAll: IGeneralAll,
    generalUser: IGeneralUser
}