import { IMutation } from "../types/interfaces";
import { BodyParts } from "../types/interfaces";

import images from "../images/images";

const mutation_acidSplit: IMutation = {
    name: 'Acid split',
    description: 'Mutation to split acid in your enemy`s face',
    bodyPart: BodyParts.chin,
    value: 1,
    image: images.mutantEvolvings.acidSplit
}

const mutation_claws: IMutation = {
    name: 'Claws',
    description: 'Mutation to rip your opponents apart',
    bodyPart: BodyParts.bothHands,
    value: 1,
    image: images.mutantEvolvings.claws
}

const mutation_horns: IMutation = {
    name: 'Horns',
    description: 'Mutation to use your head as a double-spear',
    bodyPart: BodyParts.head,
    value: 1,
    image: images.mutantEvolvings.horns
}

const mutation_scales: IMutation = {
    name: 'Scales',
    description: 'Mutation to make your skin much tougher',
    bodyPart: BodyParts.skin,
    value: 1,
    image: images.mutantEvolvings.scales
}

const mutation_tailWithSting: IMutation = {
    name: 'Tail with sting',
    description: 'Mutation to pierce your victims',
    bodyPart: BodyParts.tail,
    value: 1,
    image: images.mutantEvolvings.tailWithSting
}

const mutation_twoExtraPincers: IMutation = {
    name: 'Two extra pincers',
    description: 'Mutation to make holes in you rival',
    bodyPart: BodyParts.shoulders,
    value: 1,
    image: images.mutantEvolvings.twoExtraPincers
}

const mutation_wings: IMutation = {
    name: 'Wings',
    description: 'Mutation to fly over battlefield',
    bodyPart: BodyParts.back,
    value: 1,
    image: images.mutantEvolvings.wings
}

const mutations = {
    mutation_acidSplit,
    mutation_claws,
    mutation_horns,
    mutation_scales,
    mutation_tailWithSting,
    mutation_twoExtraPincers,
    mutation_wings
}

export default mutations