import { IMutation } from "../types/interfaces";
import { BodyParts } from "../types/interfaces";

import images from "../images/images";

const mutation_acidSplit: IMutation = {
    name: 'Acid split',
    description: 'Mutation to split acid in your enemy`s face',
    bodyPart: BodyParts.head,
    value: 1,
    image: images.mutantEvolvings.acidSplit
}

const mutation_clawsAndHorns: IMutation = {
    name: 'Claws and horns',
    description: 'Mutation to rip your opponents apart',
    bodyPart: BodyParts.hands,
    value: 1,
    image: images.mutantEvolvings.clawsAndHorns
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
    bodyPart: BodyParts.legs,
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

const mutations: Record<string, IMutation> = {
    mutation_acidSplit,
    mutation_clawsAndHorns,
    mutation_scales,
    mutation_tailWithSting,
    mutation_twoExtraPincers,
    mutation_wings
}

export default mutations