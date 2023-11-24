import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_psiBladeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('psi_blade_slash'), 
        '', 
        images.psionInsights.psiBlade
    ], 
    {Focus: 1}, 
    [1, DamageType.psionic, 1, 100]
);

const psionic = {
    battleAbility_psiBladeSlash,
}

export default psionic