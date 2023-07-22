import { createBattleAbility } from ".";
import { DamageType } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";

const battleAbility_psiBladeSlash = createBattleAbility(
    ['Psi-blade slash', '', images.psionInsights.psiBlade], 
    {Focus: 1}, 
    [1, DamageType.psionic, 1, 100]
);

const battleAbility_psiLightning = createBattleAbility(
    ['Psi-lightning', '', images.psionInsights.psiLightning], 
    {Focus: 2}, 
    [1, DamageType.psionic, 5, 100]
);

const power = {
    battleAbility_psiBladeSlash,
    battleAbility_psiLightning
}

export default power