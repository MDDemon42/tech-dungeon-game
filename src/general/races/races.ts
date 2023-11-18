import createRace from "./createRace";

/*
Mutations to races (with special abilities)
1) Horns + Hooves => Satyr (Rod + 1)
2) Horns + Hooves + Brutal force => Minotaur (Bull's charge)
3) Lower fangs + Brutal force => Orc (Axe + 1)
4) Lower fangs + Brutal force + Fur => Gnoll (Mace + 1)
5*) Lower fangs + Claws => Ghoul (Lifesteal)
6*) Lower fangs + Claws + Wings => Vampire (Hypnosis, Lifesteal)
7) Scales + Tail with sting => Naga (Spear* + 1)
8) Horns + Scales + Claws + Tail with sting + Lower fangs + Hooves => Demon (use Powers without tattoes)
9) Horns + Scales + Claws + Tail with sting + Acid split + Wings => Dragon (use Spells without staffs)
10) Horns + Fur + Claws + Tail with sting + Acid split + Wings + Pincers + Hooves => Ultimate Chimera (?)
*/

const humanRace = createRace([]);
const beastRace = createRace(['horns', 'hooves']);
const orkRace = createRace(['lowerFangs']);
const gnollRace = createRace(['lowerFangs', 'fur']);
const nagaRace = createRace(['scales', 'tailWithSting']);
const demonRace = createRace(['horns', 'scales', 'claws', 'tailWithSting', 'lowerFangs', 'hooves']);
const dragonRace = createRace(['horns', 'scales', 'claws', 'tailWithSting', 'acidSplit', 'wings']);
const chimeraRace = createRace(['horns', 'fur', 'claws', 'tailWithSting', 'acidSplit', 'wings', 'pincers', 'hooves'])

const races = {
    humanRace,
    beastRace,
    orkRace,
    gnollRace,
    nagaRace,
    demonRace,
    dragonRace,
    chimeraRace
}

export default races