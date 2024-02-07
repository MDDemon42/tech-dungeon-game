import { UserResource } from "../enums-and-interfaces/enums";

const userResources: Record<UserResource, string> = {
    [UserResource.core]: chrome.i18n.getMessage('mecha_core'),
    [UserResource.food]: chrome.i18n.getMessage('food'),
    [UserResource.gem]: chrome.i18n.getMessage('gem'),
    [UserResource.gene]: chrome.i18n.getMessage('muta_gene'),
    [UserResource.none]: chrome.i18n.getMessage('blank')
}

export default userResources