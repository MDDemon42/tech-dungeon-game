import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const psiLightning = createBattleAbility(
    [
        chrome.i18n.getMessage('psi_lightning'), 
        '', 
        images.psionInsights.psiLightning
    ], 
    {Focus: 2}, 
    {[DamageType.psionic]: 1},
    [5, 100]
);

const psionic = {
    psiLightning
}

export default psionic