import { UserParam } from "../../interfaces/interfaces";
import createEmptyCharacter from "./createEmptyCharacter";

const opponent_dummy = () => {
    const opponent = createEmptyCharacter();
    opponent.params.name = 'Dummy';
    opponent.params.maxParams[UserParam.health] = 3;
    opponent.params.currentParams[UserParam.health] = 3;

    return opponent
}

const opponents = {
    opponent_dummy
}

export default opponents