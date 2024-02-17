export enum InventoryPlace {
    hat = 'Hat',
    head = 'Head',
    eyes = 'Eyes',
    chin = 'Chin',
    skin = 'Skin',
    back = 'Back',
    backItem = 'Back_item',
    armor = 'Armor',
    shoulders = 'Shoulders',
    shouldersItem = 'Shoulders_item',
    tail = 'Tail',
    extraLeftHand = 'Extra_left_hand',
    extraRightHand = 'Extra_right_hand',
    leftHand = 'Left_hand',
    rightHand = 'Right_hand',
    telekinesisLeftHand = 'Telekinesis_left_hand',
    telekinesisRightHand = 'Telekinesis_right_hand',
    bothHands = 'Both_hands',
    belt = 'Belt',
    leftHip = 'Left_hip',
    rightHip = 'Right_hip',
    leftHipItem = 'Left_hip_item',
    rightHipItem = 'Right_hip_item',
    leftPocket = 'Left_pocket',
    rightPocket = 'Right_pocket',
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
    enduring = 'Enduring',
    smart = 'Smart',
    sane = 'Sane',
    tireless = 'Tireless',
    creative = 'Creative',
    dreamer = 'Dreamer',
    ingenious = 'Ingenious',
    noIcon = 'noIcon'
}

export enum Race {
    human = 'Human',
    unknown = 'Unknown',
    satyr = 'Satyr',
    taur = 'Taur',
    orc = 'Orc',
    gnoll = 'Gnoll',
    naga = 'Naga',
    raptor = 'Raptor',
    demon = 'Demon',
    dragon = 'Dragon',
    koatl = 'Koatl',
    ankylosaurus = 'Ankylosaurus',
    chimera = 'Chimera'
}

export enum UserParam {
    blank = 'Blank',
    health = 'Health',
    mana = 'Mana',
    focus = 'Focus',
    satiety = 'Satiety',
    stamina = 'Stamina'    
}

export enum UserResource {
    gem = 'Gems',
    core = 'Mecha-cores',
    gene = 'Muta-genes',
    food = 'Food',
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
    aerotheurgRooms = 'Aerotheurg_Rooms',
    airSchool = 'Air_School',
    airSite = 'Air_Site',
    apprenticeRooms = 'Apprentice_Rooms',
    armoury = 'Armoury',
    cryomancerRooms = 'Cryomancer_Rooms',
    cyberLab = 'Cyber_Lab',
    fireSchool = 'Fire_School',
    fireSite = 'Fire_Site',
    focusSchool = 'Focus_School',
    focusSite = 'Focus_Site',
    guildianRooms = 'Guildian_Rooms',
    guildRituals = 'Guild_Rituals',
    guildSchool = 'Guild_School',
    guildShop = 'Guild_Shop',
    iceSchool = 'Ice_School',
    iceSite = 'Ice_Site',
    mansion = 'Mansion',
    market = 'Market',
    mutaLab = 'Mutation_Lab', 
    psionRooms = 'Psion_Rooms',
    pyrokineticRooms = 'Pyrokinetic_Rooms',   
    spellSchool = 'Spell_School',
    tavern = 'Tavern',
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

export enum SquadGameScreens {
    aerotheurgRooms = 'Aerotheurg_Rooms',
    apprenticeRooms = 'Apprentice_Rooms',
    cryomancerRooms = 'Cryomancer_Rooms',
    guildianRooms = 'Guildian_Rooms',
    psionRooms = 'Psion_Rooms',
    pyrokineticRooms = 'Pyrokinetic_Rooms',
    tavern = 'Tavern'
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

export enum InventorySlotCategory {
    item = 'Item',
    cyber = 'Cyber',
    mutation = 'Mutation',
    resource = 'Resource',
    nothing = 'Nothing'
}

export enum ContentZones {
    mind = 'Mind',
    inventory = 'Inventory',
    meleeBattleAbilities = 'Melee_battle_abilities',
    passiveAbilities = 'Passive_abilities',
    races = 'Races',
    rangedBattleAbilities = 'Ranged_battle_abilities'
}

export enum MindContentParts {
    academyMasteries = 'Academy_masteries',
    airBendings = 'Air_bendings',
    airMasteries = 'Air_masteries',
    fireBendings = 'Fire_bendings',
    fireMasteries = 'Fire_masteries',
    guildMasteries = 'Guild_masteries',
    guildRituals = 'Guild_rituals',
    iceBendings = 'Ice_bendings',
    iceMasteries = 'Ice_masteries',
    psionMasteries = 'Psion_masteries',
    psionPowers = 'Psion_powers',
    wizardMasteries = 'Wizard_masteries',
    wizardSpells = 'Wizard_spells'
}

export enum InventoryContentParts {
    armouryItems = 'Armoury_items',
    guildItems = 'Guild_items',
    normalItems = 'Normal_items',
    wizardItems = 'Wizard_items',
    cybers = 'Cybers',
    mutations = 'Mutations'    
}