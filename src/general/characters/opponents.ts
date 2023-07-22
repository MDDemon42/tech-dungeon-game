import { UserParam } from "../../enums-and-interfaces/enums";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";

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