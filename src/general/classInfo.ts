import { UserParam, UserStartClass } from "../enums-and-interfaces/enums";
import { IClassInfo } from "../enums-and-interfaces/interfaces";
import userParams from "./userParams";

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
                userParams[UserParam.health],
                userParams[UserParam.blank]
            ]
        )
    },
    [UserStartClass.enduring]: {
        name: chrome.i18n.getMessage('enduring_name'),
        bonusParam: UserParam.stamina,
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.stamina]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                userParams[UserParam.stamina], 
                userParams[UserParam.health], 
                userParams[UserParam.stamina],
                userParams[UserParam.blank]
            ]
        )
    },
    [UserStartClass.smart]: {
        name: chrome.i18n.getMessage('smart_name'),
        bonusParam: UserParam.mana,
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.mana]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                userParams[UserParam.mana], 
                userParams[UserParam.health], 
                userParams[UserParam.mana],
                userParams[UserParam.blank]
            ]
        )
    },
    [UserStartClass.sane]: {
        name: chrome.i18n.getMessage('sane_name'),
        bonusParam: UserParam.focus,
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.focus]),
        description: chrome.i18n.getMessage('start_class_common_description', 
            [
                userParams[UserParam.focus], 
                userParams[UserParam.health], 
                userParams[UserParam.focus],
                userParams[UserParam.blank]
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
                userParams[UserParam.stamina],
                userParams[UserParam.blank]
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
                userParams[UserParam.mana],
                userParams[UserParam.blank]
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
                userParams[UserParam.focus],
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
                userParams[UserParam.focus],
                userParams[UserParam.blank]
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