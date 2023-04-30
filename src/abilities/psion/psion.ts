import images from "../../images/images";
import { Ability } from "../../types/ability";

const {psionInsights} = images;

const ability_guardianAura: Ability = {
    name: 'Guardian aura',
    description: 'Ability to weaken enemy`s attacks aimed at you',
    passive: true,
    learned: false,
    disabled: true,
    image: psionInsights.guardianAura
}

const psion = [
    ability_guardianAura
]

export default psion