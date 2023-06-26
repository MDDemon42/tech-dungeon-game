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

export interface ICharacherParams {
    name: string,
    currentHealth: number,
    maxHealth: number,
    currentMana: number,
    maxMana: number,
    currentFocus: number,
    maxFocus: number,
    currentStamina: number,
    maxStamina: number,
    resistances: {
        [DamageTypes.physical]: number,
        [DamageTypes.fire]: number,
        [DamageTypes.electrical]: number,
        [DamageTypes.psionic]: number,
        [DamageTypes.acid]: number
    }
}

export interface IUserParams extends ICharacherParams{
    icon: string,
    stage: number,
    level: number,
    gems: number,
    mechaCores: number,
    mutaGenes: number,
    blank: number
}

export enum UserResource {
    gem = 'Gems',
    core = 'Mecha-cores',
    gene = 'Muta-genes',
    health = 'Health',
    mana = 'Mana',
    focus = 'Focus',
    stamina = 'Stamina'
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

export interface IStore {
    userParams: IUserParams,
    generalAll: IGeneralAll,
    generalUser: ICharacterGeneral,
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

interface IClassInfoItem {
    startBonus: keyof IUserParams,
    levelUpBonuses: (keyof IUserParams)[],
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