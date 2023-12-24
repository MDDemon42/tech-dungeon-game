import { createBattleAbility } from "..";
import { DamageType } from "../../../../enums-and-interfaces/enums";
import images from "../../../../images/images";

const psiJavelin = createBattleAbility(
    [
        chrome.i18n.getMessage('psi_javelin_throw'), 
        '', 
        images.psionInsights.psiJavelin
    ], 
    {Focus: 2}, 
    {[DamageType.psionic]: 2},
    [1, 100]
);

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
    psiJavelin,
    psiLightning
}

export default psionic