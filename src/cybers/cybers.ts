import { BodyParts, ICyber } from "../types/interfaces";

import images from "../images/images";

const cyber_energyWhip: ICyber = {
    name: 'Energy whip',
    description: 'Cyber to deal pain and suffer',
    value: 2,
    bodyPart: BodyParts.rightHand,
    image: images.cyborgDetails.energyWhip
}

const cyber_laser: ICyber = {
    name: 'Laser',
    description: 'Cyber to burn with focused light',
    value: 1,
    bodyPart: BodyParts.leftHand,
    image: images.cyborgDetails.laser
}

const cyber_nanoMatrix: ICyber = {
    name: 'Nano matrix',
    description: 'Cyber to deflect almost any damage',
    value: 2,
    bodyPart: BodyParts.skin,
    image: images.cyborgDetails.nanoMatrix
}

const cyber_nanoVest: ICyber = {
    name: 'Nano vest',
    description: 'Cyber to boost your survival rate',
    value: 1,
    bodyPart: BodyParts.skin,
    image: images.cyborgDetails.nanoVest
}

const cyber_powerFist: ICyber = {
    name: 'Power fist',
    description: 'Cyber to give ultimate punches',
    value: 1,
    bodyPart: BodyParts.rightHand,
    image: images.cyborgDetails.powerFist
}

const cyber_reactiveFeet: ICyber = {
    name: 'Reactive feet',
    description: 'Cyber to fly in short distances',
    value: 1,
    bodyPart: BodyParts.legs,
    image: images.cyborgDetails.reactiveFeet
}

const cyber_rocket: ICyber = {
    name: 'Rocket',
    description: 'Cyber to destroy everything in an area',
    value: 1,
    bodyPart: BodyParts.shoulders,
    image: images.cyborgDetails.rocket
}

const cybers: Record<string, ICyber> = {
    cyber_energyWhip,
    cyber_laser,
    cyber_nanoMatrix,
    cyber_nanoVest,
    cyber_powerFist,
    cyber_reactiveFeet,
    cyber_rocket
}

export default cybers