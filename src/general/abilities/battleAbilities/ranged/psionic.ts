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
    [1, 95]
);

const psiLightning = createBattleAbility(
    [
        chrome.i18n.getMessage('psi_lightning'), 
        '', 
        images.psionInsights.psiLightning
    ], 
    {Focus: 2}, 
    {[DamageType.psionic]: 1},
    [5, 95]
);

const voidCrash = createBattleAbility(
    [
        chrome.i18n.getMessage('void_crash'), 
        '', 
        images.psionInsights.voidCrash
    ], 
    {Focus: 2}, 
    {[DamageType.psionic]: 2},
    [3, 95]
);

const psionic = {
    psiJavelin,
    psiLightning,
    voidCrash
}

export default psionic