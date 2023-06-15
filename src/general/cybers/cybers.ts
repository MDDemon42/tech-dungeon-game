import { BodyParts, ICyber } from "../../types/interfaces";

import images from "../../images/images";

const cyber_energyWhip: ICyber = {
    name: 'Energy whip',
    description: 'Cyber to deal pain and sufferings',
    cost: 2,
    bodyPart: BodyParts.rightHand,
    image: images.cyborgDetails.energyWhip,
    priority: 6
}

const cyber_laser: ICyber = {
    name: 'Laser',
    description: 'Cyber to burn with focused light',
    cost: 1,
    bodyPart: BodyParts.leftHand,
    image: images.cyborgDetails.laser,
    priority: 5
}

const cyber_nanoMatrix: ICyber = {
    name: 'Nano matrix',
    description: 'Cyber to deflect almost any damage',
    cost: 2,
    bodyPart: BodyParts.skin,
    image: images.cyborgDetails.nanoMatrix,
    priority: 3
}

const cyber_nanoVest: ICyber = {
    name: 'Nano vest',
    description: 'Cyber to boost your survival rate',
    cost: 1,
    bodyPart: BodyParts.skin,
    image: images.cyborgDetails.nanoVest,
    priority: 2
}

const cyber_powerFist: ICyber = {
    name: 'Power fist',
    description: 'Cyber to give ultimate punches',
    cost: 1,
    bodyPart: BodyParts.rightHand,
    image: images.cyborgDetails.powerFist,
    priority: 5
}

const cyber_reactiveFeet: ICyber = {
    name: 'Reactive feet',
    description: 'Cyber to fly in short distances',
    cost: 1,
    bodyPart: BodyParts.legs,
    image: images.cyborgDetails.reactiveFeet,
    priority: 2
}

const cyber_rocket: ICyber = {
    name: 'Rocket',
    description: 'Cyber to destroy everything in an area',
    cost: 1,
    bodyPart: BodyParts.shoulders,
    image: images.cyborgDetails.rocket,
    priority: 2
}

const cybers = {
    cyber_powerFist,
    cyber_energyWhip,
    cyber_rocket,
    cyber_laser,
    cyber_nanoVest,
    cyber_nanoMatrix,
    cyber_reactiveFeet,
}

export default cybers