import { UserParam, UserStartClass, UserResource } from "../enums-and-interfaces/enums";
import { IClassInfo } from "../enums-and-interfaces/interfaces";
import userParams from "./params";
import userResources from "./resources";

function createLevelUpBonuses(params: UserParam[]) {
    const standartLevelUpBonuses = [
        UserParam.health, UserParam.focus, UserParam.mana, UserParam.stamina, UserParam.blank
    ];

    const result = [...standartLevelUpBonuses];
    result.push(...params);

    return result
}

const classInfo: IClassInfo = {
    [UserStartClass.vital]: {
        name: chrome.i18n.getMessage('vital_name'),
        bonusParam: UserParam.health,
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.health]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                userParams[UserParam.health], 
                userParams[UserParam.health], 
                userParams[UserParam.health]
            ]
        )
    },
    [UserStartClass.tireless]: {
        name: chrome.i18n.getMessage('tireless_name'),
        bonusParam: UserParam.stamina,
        levelUpBonuses: createLevelUpBonuses([UserParam.stamina, UserParam.stamina]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                userParams[UserParam.stamina], 
                userParams[UserParam.stamina], 
                userParams[UserParam.stamina]
            ]
        )
    },
    [UserStartClass.creative]: {
        name: chrome.i18n.getMessage('creative_name'),
        bonusParam: UserParam.mana,
        levelUpBonuses: createLevelUpBonuses([UserParam.mana, UserParam.mana]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                userParams[UserParam.mana], 
                userParams[UserParam.mana], 
                userParams[UserParam.mana]
            ]
        )
    },
    [UserStartClass.dreamer]: {
        name: chrome.i18n.getMessage('dreamer_name'),
        bonusParam: UserParam.focus,
        levelUpBonuses: createLevelUpBonuses([UserParam.focus, UserParam.focus]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                userParams[UserParam.focus], 
                userParams[UserParam.focus], 
                userParams[UserParam.focus]
            ]
        )
    },
    [UserStartClass.geneKeeper]: {
        name: chrome.i18n.getMessage('gene_keeper_name'),
        bonusResource: UserResource.gene,
        levelUpBonuses: createLevelUpBonuses([UserParam.stamina, UserParam.blank]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                userResources[UserResource.gene], 
                userParams[UserParam.stamina], 
                userParams[UserParam.health]
            ]
        )
    },
    [UserStartClass.coreKeeper]: {
        name: chrome.i18n.getMessage('core_keeper_name'),
        bonusResource: UserResource.core,
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.blank]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                userResources[UserResource.core], 
                userParams[UserParam.health], 
                userParams[UserParam.blank]
            ]
        )
    },
    [UserStartClass.richie]: {
        name: chrome.i18n.getMessage('richie_name'),
        bonusResource: UserResource.gem,
        levelUpBonuses: createLevelUpBonuses([UserParam.mana, UserParam.blank]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                userResources[UserResource.gem], 
                userParams[UserParam.mana], 
                userParams[UserParam.blank]
            ]
        )
    },
    [UserStartClass.ingenious]: {
        name: chrome.i18n.getMessage('ingenious_name'),
        bonusLevel: true,
        levelUpBonuses: createLevelUpBonuses([UserParam.mana, UserParam.focus]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                chrome.i18n.getMessage('level'),
                userParams[UserParam.mana], 
                userParams[UserParam.focus]
            ]
        )
    },
    [UserStartClass.noIcon]: {
        name: chrome.i18n.getMessage('no_icon_name'),
        bonusParam: UserParam.blank,
        levelUpBonuses: [UserParam.blank],
        description: 'Choose one of classes to start playing'
    }
}

export default classInfo