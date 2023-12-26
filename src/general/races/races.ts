import createRace from "./createRace";

/*
Mutations to races (with special abilities)
1) Horns + Hooves => Satyr (Rod + 1)
2) Horns + Hooves + Brutal force => Minotaur (Bull's charge)
3) Lower fangs + Brutal force => Orc (Axe + 1)
4) Lower fangs + Brutal force + Fur => Gnoll (Mace + 1)
5*) Lower fangs + Claws => Ghoul (Lifesteal)
6*) Lower fangs + Claws + Wings => Vampire (Hypnosis, Lifesteal)
7) Scales + Tail with sting => Naga (Spear + 1)
8) Scales + Raptor legs + Tail with sting => Raptor (Raptor's jump)
9) Horns + Scales + Claws + Tail with sting + Lower fangs + Raptor legs => Demon (use Powers without tattoes)
10) Horns + Scales + Claws + Tail with sting + Acid split + Wings => Dragon (use Spells without staffs)
11) Horns + Fur + Claws + Tail with sting + Acid split + Wings + Pincers + Hooves => Ultimate Chimera (?)
*/

const humanRace = createRace([]);
const beastRace = createRace(['horns', 'hooves']);
const orkRace = createRace(['lowerFangs']);
const gnollRace = createRace(['lowerFangs', 'fur']);
const nagaRace = createRace(['scales', 'extraArms', 'tailWithSting']);
const raptorRace = createRace(['scales', 'raptorLegs', 'tailWithSting']);
const demonRace = createRace(['horns', 'fur', 'claws', 'tailWithSting', 'lowerFangs', 'hooves']);
const dragonRace = createRace(['horns', 'scales', 'claws', 'extraArms', 'tailWithSting', 'acidSpit', 'raptorLegs', 'wings']);
const chimeraRace = createRace(['horns', 'fur', 'claws', 'tailWithSting', 'acidSpit', 'wings', 'pincers', 'hooves'])

const races = {
    humanRace,
    beastRace,
    orkRace,
    gnollRace,
    nagaRace,
    raptorRace,
    demonRace,
    dragonRace,
    chimeraRace
}

export default races