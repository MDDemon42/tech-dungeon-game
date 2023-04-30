export interface ICommon {
    name: string,
    description: string,
    image: any
}

export interface IAbility extends ICommon {
}

export interface ISpell extends ICommon {
    value: number  
}

export enum InventoryPlaces {
    armor = 'armor',
    hands = 'hands',
    belt = 'belt',
    back = 'back'
}

export interface IItem extends ISpell {
    cost: number,
    hands?: number,
    inventoryPlace?: InventoryPlaces    
}

export interface IMutation extends ISpell {
    bodyPart: string
}

export interface ICyber extends IMutation {
}

export interface User {
    name: string,
    icon: string,
    level?: number,
    money?: number,
    stage?: number,
    abilities?: IAbility[],
    items?: IItem[],
    spells?: ISpell[],
    mutations?: IMutation[],
    cybers?: ICyber[]
}