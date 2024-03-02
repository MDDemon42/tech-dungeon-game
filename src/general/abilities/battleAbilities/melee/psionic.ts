import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const psiBladeSlash = createBattleAbility(
    [
        chrome.i18n.getMessage('psi_blade_slash'), 
        '', 
        images.psionInsights.psiBlade
    ], 
    {Focus: 1}, 
    {[DamageType.psionic]: 1},
    [1, 95]
);

const psionic = {
    psiBladeSlash,
}

export default psionic