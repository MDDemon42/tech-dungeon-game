import { UserStartClass } from "../enums-and-interfaces/enums"

export function iconToClass(value: string) {
    const iconToClassMappings: Record<string, UserStartClass> = {
        vital: UserStartClass.vital,
        tireless: UserStartClass.tireless,
        creative: UserStartClass.creative,
        dreamer: UserStartClass.dreamer,
        smart: UserStartClass.smart,
        sane: UserStartClass.sane,        
        enduring: UserStartClass.enduring,
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
        [UserStartClass.enduring]: 'enduring',
        [UserStartClass.smart]: 'smart',
        [UserStartClass.sane]: 'sane',
        [UserStartClass.ingenious]: 'ingenious',
        [UserStartClass.noIcon]: 'noIcon' 
    }

    return classToIconMappings[value]
}