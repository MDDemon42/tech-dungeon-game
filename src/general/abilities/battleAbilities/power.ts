import { createBattleAbility } from ".";
import images from "../../../images/images";
import { DamageTypes } from "../../../types/interfaces";

const battleAbility_psiBladeSlash = createBattleAbility(
    'Psi-blade slash', '', images.psionInsights.psiBlade, 
    {Focus: 1}, 
    1, DamageTypes.psionic, 1, 100
);

const battleAbility_psiLightning = createBattleAbility(
    'Psi-lightning', '', images.psionInsights.psiLightning, 
    {Focus: 2}, 
    1, DamageTypes.psionic, 5, 100
);

const power = {
    battleAbility_psiBladeSlash,
    battleAbility_psiLightning
}

export default power