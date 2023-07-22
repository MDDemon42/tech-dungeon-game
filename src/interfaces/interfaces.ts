export interface ICommon {
    name: string,
    description: string,
    image: any
}

export interface IMastery extends ICommon {
    requiredMastery: IMastery | null
}

export interface IPower extends IMastery {
    ability: IAbility | null
}

export interface ISpell extends IPower {
    requiresRod: boolean
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

    ability: IAbility | null,
    linkedMastery: IMastery | null,
    masterAbilities: IAbility[] | null
}

export interface IItem extends IInventorySlot {
    requiredMastery: IMastery | null
}

export interface IMutation extends IInventorySlot {
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

export interface IMutationsForRaceCheck {
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

export enum DamageTypes {
    physicalSlashing = 'Physical (Slashing)',
    physicalSmashing = 'Physical (Smashing)',
    physicalPiercing = 'Physical (Piercing)',
    fire = 'Fire',
    electrical = 'Electrical',
    psionic = 'Psionic',
    acid = 'Acid',
    cold = 'Cold'
}

export interface ICharacherParams {
    class: string,
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
        [UserParam.stamina]: number
    },
    resistances: {
        [DamageTypes.physicalSlashing]: number,
        [DamageTypes.physicalSmashing]: number,
        [DamageTypes.physicalPiercing]: number,
        [DamageTypes.fire]: number,
        [DamageTypes.electrical]: number,
        [DamageTypes.psionic]: number,
        [DamageTypes.acid]: number,
        [DamageTypes.cold]: number,
    },
    blank?: number
}

export enum InventoryOptions {
    mutations = 'mutations',
    cybers = 'cybers',
    items = 'items'
}

export enum InventoryOptionParts {
    armors = 'armors',
    weapons = 'weapons',
    other = 'other'
}

interface ISubMapping {
    title: string,
    button: string,
    listener: any
}

export interface ISubInventoryMapping extends ISubMapping {
    resource: UserResource
}

export interface ISubMindMapping extends ISubMapping {
    capacity: number,
    posessed: number
}

export enum MindOptions {
    masteries = 'masteries',
    spells = 'spells',
    powers = 'powers'
}

export interface IMind {
    [MindOptions.masteries]: IMastery[],
    [MindOptions.powers]: IPower[],
    [MindOptions.spells]: ISpell[]
}

export interface IGeneralAll {
    [MindOptions.masteries]: Record<string, IMastery>,
    [MindOptions.spells]: Record<string, ISpell>,
    [MindOptions.powers]: Record<string, IPower>
    [InventoryOptions.items]: {
        [InventoryOptionParts.armors]: Record<string, IItem>,
        [InventoryOptionParts.weapons]: Record<string, IItem>,
        [InventoryOptionParts.other]: Record<string, IItem>
    },    
    [InventoryOptions.cybers]: {
        [InventoryOptionParts.armors]: Record<string, ICyber>,
        [InventoryOptionParts.weapons]: Record<string, ICyber>,
        [InventoryOptionParts.other]: Record<string, ICyber>
    },
    [InventoryOptions.mutations]: {
        [InventoryOptionParts.armors]: Record<string, IMutation>,
        [InventoryOptionParts.weapons]: Record<string, IMutation>,
        [InventoryOptionParts.other]: Record<string, IMutation>
    },   
}

export interface ICharacterGeneral {
    mind: IMind,
    inventory: IInventory,
}

export interface ICharacher {
    general: ICharacterGeneral,
    params: ICharacherParams
}

export interface IGameScreen {
    screen: GameScreens,
    shouldShowBackpacks: boolean,
    shouldShowProfile: boolean
}

export interface IManageItemsProps {
    index: number,
    item: IItem
}

export interface IGameSquad {
    currentlyWatched: number,
    squadMembers: Record<string, ICharacher>,
    squadBackpacks: {
        resources: {
            [UserResource.gene]: number,
            [UserResource.gem]: number,
            [UserResource.core]: number
        },
        items: IItem[]
    }    
}

export interface IStore {
    generalAll: IGeneralAll,
    gameScreen: IGameScreen,
    gameSquad: IGameSquad
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

export enum GameScreens {
    battle = 'Battle',
    market = 'Market',
    academy = 'Academy',
    spellShop = 'Spell_Shop',
    focusSite = 'Focus_Site',
    cyberLab = 'Cyber_Lab',
    mutationLab = 'Mutation_Lab'
}