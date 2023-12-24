import { UserParam } from "../../enums-and-interfaces/enums";
import fireMasteries from "../../gameScreens/FireSite/masteries";
import coldMasteries from "../../gameScreens/IceSite/masteries";
import createEmptyCharacter from "../../helpers/emptyEssencesCreators";
import bending from "../bending";
import wizardMasteries from "../../gameScreens/WizardSchool/masteries";
import spells from "../../gameScreens/WizardSchool/spells";
import wizardItems from "../../gameScreens/WizardSchool/wizardItems";

const apprentice = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Apprentice';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 3;
    character.params.currentParams[UserParam.mana] = 3;

    character.general.mind.masteries.push(wizardMasteries.scholarship);
    character.general.mind.spells.push(spells.magicBolt);

    character.general.inventory.bothHands = wizardItems.weapons.wizardItem_apprenticeRod;
    character.general.inventory.hat = wizardItems.armors.wizardItem_apprenticeHat;

    return character
}

const magister = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Magister';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 6;
    character.params.currentParams[UserParam.mana] = 6;

    character.general.mind.masteries.push(wizardMasteries.magisterDegree);
    character.general.mind.spells.push(spells.magicBolt);

    character.general.inventory.bothHands = wizardItems.weapons.wizardItem_magisterScepter;
    character.general.inventory.hat = wizardItems.armors.wizardItem_magisterHat;
    character.general.inventory.armor = wizardItems.armors.wizardItem_magisterRobe;
    character.general.inventory.back = wizardItems.other.wizardItem_flyingCape;

    return character
}

const cryomancer = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Cryomancer';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 6;
    character.params.currentParams[UserParam.mana] = 6;

    character.general.mind.masteries.push(coldMasteries.coldAffiliation);
    character.general.mind.bending.push(bending.cryomancy.iceShard);
    character.general.mind.bending.push(bending.cryomancy.iceSpear);
    character.general.mind.bending.push(bending.cryomancy.iceHail);
    character.general.mind.bending.push(bending.cryomancy.coldDeath);

    return character
}

const pyrokinetic = () => {
    const character = createEmptyCharacter();

    character.params.name = 'Pyrokinetic';

    character.params.maxParams[UserParam.health] = 3;
    character.params.currentParams[UserParam.health] = 3;

    character.params.maxParams[UserParam.stamina] = 3;
    character.params.currentParams[UserParam.stamina] = 3;

    character.params.maxParams[UserParam.mana] = 6;
    character.params.currentParams[UserParam.mana] = 6;

    character.general.mind.masteries.push(fireMasteries.fireAffiliation);
    character.general.mind.bending.push(bending.pyrokinesis.flame);
    character.general.mind.bending.push(bending.pyrokinesis.fireBall);
    character.general.mind.bending.push(bending.pyrokinesis.fireWave);

    return character
}

const magicians = {
    apprentice,
    magister,
    cryomancer,
    pyrokinetic
}

export default magicians