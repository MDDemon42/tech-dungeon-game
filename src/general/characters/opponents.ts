import { UserParam } from "../../types/interfaces";
import { emptyCharacter } from "./characters";

const opponent_dummy = () => {
    const opponent = emptyCharacter();
    opponent.params.name = 'Dummy';
    opponent.params.maxParams[UserParam.health] = 3;
    opponent.params.currentParams[UserParam.health] = 3;

    return opponent
}

const opponents = {
    opponent_dummy
}

export default opponents