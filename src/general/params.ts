import { UserParam } from "../enums-and-interfaces/enums"

const userParams: Record<UserParam, string> = {
    [UserParam.blank]: chrome.i18n.getMessage('blank'),
    [UserParam.focus]: chrome.i18n.getMessage('focus'),
    [UserParam.health]: chrome.i18n.getMessage('health'),
    [UserParam.mana]: chrome.i18n.getMessage('mana'),
    [UserParam.stamina]: chrome.i18n.getMessage('stamina')
}

export default userParams