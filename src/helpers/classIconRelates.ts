import { UserStartClass } from "../enums-and-interfaces/enums"

export function iconToClass(value: string) {
    const iconToClassMappings: Record<string, UserStartClass> = {
        mutant: UserStartClass.mutant,
        cyborg: UserStartClass.cyborg,
        normal: UserStartClass.normal,
        wizard: UserStartClass.wizard,
        psion: UserStartClass.psion,
        guildian: UserStartClass.guildian,
        noIcon: UserStartClass.noIcon
    }

    return iconToClassMappings[value]
}

export function classToIcon(value: string) {
    const classToIconMappings: Record<string, string> = {
        [UserStartClass.mutant]: 'mutant',
        [UserStartClass.cyborg]: 'cyborg',
        [UserStartClass.normal]: 'normal',
        [UserStartClass.wizard]: 'wizard',
        [UserStartClass.psion]: 'psion',
        [UserStartClass.guildian]: 'guildian',
        [UserStartClass.noIcon]: 'noIcon' 
    }

    return classToIconMappings[value]
}