import { UserStartClass } from "../enums-and-interfaces/enums"

export function iconToClass(value: string) {
    const iconToClassMappings: Record<string, UserStartClass> = {
        vital: UserStartClass.vital,
        tireless: UserStartClass.tireless,
        creative: UserStartClass.creative,
        dreamer: UserStartClass.dreamer,
        geneKeeper: UserStartClass.geneKeeper,
        coreKeeper: UserStartClass.coreKeeper,        
        richie: UserStartClass.richie,
        ingenious: UserStartClass.ingenious,
        noIcon: UserStartClass.noIcon
    }

    return iconToClassMappings[value]
}

export function classToIcon(value: UserStartClass) {
    const classToIconMappings: Record<UserStartClass, string> = {
        [UserStartClass.vital]: 'vital',
        [UserStartClass.tireless]: 'tireless',
        [UserStartClass.creative]: 'creative',
        [UserStartClass.dreamer]: 'dreamer',
        [UserStartClass.geneKeeper]: 'geneKeeper',
        [UserStartClass.coreKeeper]: 'coreKeeper',
        [UserStartClass.richie]: 'richie',
        [UserStartClass.ingenious]: 'ingenious',
        [UserStartClass.noIcon]: 'noIcon' 
    }

    return classToIconMappings[value]
}