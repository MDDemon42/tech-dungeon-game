import { DamageType } from "../enums-and-interfaces/enums";
import { IBattleAbility } from "../enums-and-interfaces/interfaces";

export const createElectrifiedAbility = (ability: IBattleAbility) => {
    const electrifiedAbility = {...ability};            
    electrifiedAbility.damage = {...ability.damage, [DamageType.electrical]: 1};
    
    if (ability.costs.Mana) {
        electrifiedAbility.costs = {...ability.costs, Mana: ability.costs.Mana + 1};
    } else {
        electrifiedAbility.costs = {...ability.costs, Mana: 1};
    }
    
    electrifiedAbility.name = chrome.i18n.getMessage('electrified') + 
        electrifiedAbility.name.toLowerCase();
    
    return electrifiedAbility
}

export const createEnflamedAbility = (ability: IBattleAbility) => {
    const enflamedAbility = {...ability};
    enflamedAbility.damage = {...ability.damage, [DamageType.fire]: 1}
    
    if (ability.costs.Mana) {
        enflamedAbility.costs = {...ability.costs, Mana: ability.costs.Mana + 1};
    } else {
        enflamedAbility.costs = {...ability.costs, Mana: 1};
    }

    enflamedAbility.name = chrome.i18n.getMessage('enflamed') + 
        enflamedAbility.name.toLowerCase();
    
    return enflamedAbility
}

export const createFreezingAbility = (ability: IBattleAbility) => {
    const freezingAbility = {...ability};
    freezingAbility.damage = {...ability.damage, [DamageType.cold]: 1}
    
    if (ability.costs.Mana) {
        freezingAbility.costs = {...ability.costs, Mana: ability.costs.Mana + 1};
    } else {
        freezingAbility.costs = {...ability.costs, Mana: 1};
    }

    freezingAbility.name = chrome.i18n.getMessage('freezing') + 
        freezingAbility.name.toLowerCase();
    
    return freezingAbility
}

export const createPsiInfusedAbility = (ability: IBattleAbility) => {
    const psiInfusedAbility = {...ability};
    psiInfusedAbility.damage = {...ability.damage, [DamageType.psionic]: 1}
    
    psiInfusedAbility.costs = {...ability.costs, Focus: 1};
    psiInfusedAbility.name = chrome.i18n.getMessage('psi_infused') + 
        psiInfusedAbility.name.toLowerCase();
    
    return psiInfusedAbility
}

export const createEmpoweredAbility = (ability: IBattleAbility) => {
    const empoweredAbility = {...ability};
    const damageType = Object.keys(ability.damage)[0] as DamageType;
    
    empoweredAbility.damage = {[damageType]: ability.damage[damageType]! + 1}
    empoweredAbility.costs = {...ability.costs, Focus: 1};
    empoweredAbility.name = chrome.i18n.getMessage('empowered') + 
        empoweredAbility.name.toLowerCase();
    
    return empoweredAbility
}