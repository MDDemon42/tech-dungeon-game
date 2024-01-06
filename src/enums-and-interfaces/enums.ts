export enum InventoryPlace {
    hat = 'Hat',
    head = 'Head',
    chin = 'Chin',
    skin = 'Skin',
    back = 'Back',
    armor = 'Armor',
    shoulders = 'Shoulders',
    tail = 'Tail',
    extraLeftHand = 'Extra left hand',
    extraRightHand = 'Extra right hand',
    leftHand = 'Left hand',
    rightHand = 'Right hand',
    telekinesisLeftHand = 'Telekinesis left hand',
    telekinesisRightHand = 'Telekinesis right hand',
    bothHands = 'Both hands',
    belt = 'Belt',
    leftPocket = 'Left pocket',
    rightPocket = 'Right pocket',
    legs = 'Legs'
}

export enum WeaponTypes {
    axes = 'Axes',
    greatAxes = 'Greataxes',
    greatHammers = 'Grreathammers',
    greatSwords = 'Greatswords',
    mace = 'Maces',
    picaxe = 'Pickaxe',
    piercestick = 'Piercestick',
    spear = 'Spears',
    swords = 'Swords'
}

export enum UserStartClass {
    vital = 'Vital',
    tireless = 'Tireless',
    creative = 'Creative',
    dreamer = 'Dreamer',
    geneKeeper = 'Gene-keeper',
    coreKeeper = 'Core-keeper',  
    richie = 'Richie',
    ingenious = 'Ingenious',
    noIcon = 'noIcon'
}

export enum Race {
    human = 'Human',
    unknown = 'Unknown',
    satyr = 'Satyr',
    minotaur = 'Minotaur',
    orc = 'Orc',
    gnoll = 'Gnoll',
    naga = 'Naga',
    raptor = 'Raptor',
    demon = 'Demon',
    dragon = 'Dragon',
    chimera = 'Chimera'
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
    gene = 'Muta-genes',
    none = 'None'
}

export enum DamageType {
    physicalSlashing = 'Physical (Slashing)',
    physicalSmashing = 'Physical (Smashing)',
    physicalPiercing = 'Physical (Piercing)',
    suffocation = 'Suffocation',
    fire = 'Fire',
    electrical = 'Electrical',
    psionic = 'Psionic',
    acid = 'Acid',
    cold = 'Cold'
}

export enum MindOption {
    masteries = 'masteries',
    spells = 'spells',
    powers = 'powers',
    bending = 'bending',
    rituals = 'rituals'
}

export enum BendingOption {
    aerotheurgy = 'aerotheurgy',
    cryomancy = 'cryomancy',
    pyrokinesis = 'pyrokinesis'
}

export enum GameScreens {
    academy = 'Academy',
    airSchool = 'Air_School',
    airSite = 'Air_Site',
    armoury = 'Armoury',
    cyberLab = 'Cyber_Lab',
    fireSchool = 'Fire_School',
    fireSite = 'Fire_Site',
    focusSchool = 'Focus_School',
    focusSite = 'Focus_Site',
    guildRituals = 'Guild_Rituals',
    guildSchool = 'Guild_School',
    guildShop = 'Guild_Shop',
    iceSchool = 'Ice_School',
    iceSite = 'Ice_Site',
    mansion = 'Mansion',
    market = 'Market',
    mutaLab = 'Mutation_Lab',    
    spellSchool = 'Spell_School',
    villageMap = 'Village_Map', 
    wizardSchool = 'Wizard_School',
    wizardShop = 'Wizard_Shop',
}

export enum InventoryGameScreens {
    armoury = 'Armoury',
    market = 'Market',
    cyberLab = 'Cyber_Lab',
    mutaLab = 'Mutation_Lab',
    wizardShop = 'Wizard_Shop',
    guildShop = 'Guild_Shop'
}

export enum MindGameScreens {
    academy = 'Academy',
    focusSite = 'Focus_Site',
    focusSchool = 'Focus_School',
    spellSchool = 'Spell_School',
    wizardSchool = 'Wizard_School',
    fireSchool = 'Fire_School',
    iceSchool = 'Ice_School',
    airSchool = 'Air_School',
    guildSchool = 'Guild_School',
    guildRituals ='Guild_Rituals'
}

export enum BendingGameScreens {
    fireSite = 'Fire_Site',
    iceSite = 'Ice_Site',
    airSite = 'Air_Site'
}

export enum MansionScreens {
    livingRoom = 'Living_Room',
}

export enum TaskStatus {
    unknown = 'Unknown',
    known = 'Known',
    completed = 'Completed'
}

export enum BattleResult {
    none = 'None',
    win = 'Win',
    lose = 'Lose'
}