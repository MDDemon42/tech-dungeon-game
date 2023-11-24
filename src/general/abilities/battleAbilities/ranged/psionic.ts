import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const battleAbility_psiLightning = createBattleAbility(
    [
        chrome.i18n.getMessage('psi_lightning'), 
        '', 
        images.psionInsights.psiLightning
    ], 
    {Focus: 2}, 
    [1, DamageType.psionic, 5, 100]
);

const psionic = {
    battleAbility_psiLightning
}

export default psionic