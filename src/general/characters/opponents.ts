import { emptyCharacter } from "./characters";

const opponent_dummy = () => {
    const opponent = emptyCharacter();
    opponent.params.name = 'Dummy';
    opponent.params.maxHealth = 3;
    opponent.params.currentHealth = 3;

    return opponent
}

const opponents = {
    opponent_dummy
}

export default opponents