import {createSlice} from '@reduxjs/toolkit';
import { DamageTypes, IClassInfo, IUserParams, UserParam, UserResource } from '../../types/interfaces';

const initialState: IUserParams = {
    name: 'Adventurer',
    icon: 'noIcon',
    stage: 0,
    currentParams: {
        Health: 3,
        Mana: 0,
        Focus: 0,
        Stamina: 3
    },
    maxParams: {
        Health: 3,
        Mana: 0,
        Focus: 0,
        Stamina: 3
    },
    resources: {
        [UserResource.gem]: 0,
        [UserResource.gene]: 0,
        [UserResource.core]: 0
    },
    level: 1,
    resistances: {
        [DamageTypes.physical]: 0,
        [DamageTypes.fire]: 0,
        [DamageTypes.electrical]: 0,
        [DamageTypes.psionic]: 0,
        [DamageTypes.acid]: 0
    },
    blank: 0
}

function createLevelUpBonuses(params: UserParam[]) {
    const standartLevelUpBonuses = [
        UserParam.health, UserParam.focus, UserParam.mana, UserParam.stamina, UserParam.blank
    ];

    const result = [...standartLevelUpBonuses];
    result.push(...params);

    return result
}


export const classInfo: IClassInfo = {
    mutant: {
        startBonus: ['resources', UserResource.gene],
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.stamina]),
        description: 'Gets extra Muta-gene on start.\n\nOn level up has increased chance of getting Health or Stamina.\n\nBut there is a chance to get nothing too',
    },
    cyborg: {
        startBonus: ['resources', UserResource.core],
        levelUpBonuses: createLevelUpBonuses([UserParam.blank, UserParam.stamina]),
        description: 'Gets extra Mecha-core on start.\n\nOn level up has increased chance of getting Stamina.\n\nBut there is a big chance to get nothing too'
    },
    normal: {
        startBonus: ['resources', UserResource.gem],
        levelUpBonuses: createLevelUpBonuses([UserParam.stamina, UserParam.stamina]),
        description: 'Gets extra Gem on start.\n\nOn level up has super increased chance of getting Stamina.\n\nBut there is a chance to get nothing too'
    },
    wizard: {
        startBonus: ['maxParams', UserParam.mana],
        levelUpBonuses: createLevelUpBonuses([UserParam.mana, UserParam.mana]),
        description: 'Gets extra Mana on start.\n\nOn level up has super increased chance of getting Mana.\n\nBut there is a chance to get nothing too'
    },
    psion: {
        startBonus: ['maxParams', UserParam.focus],
        levelUpBonuses: createLevelUpBonuses([UserParam.focus, UserParam.focus]),
        description: 'Gets extra Focus on start.\n\nOn level up has super increased chance of getting Focus.\n\nBut there is a chance to get nothing too'
    },
    guildian: {
        startBonus: ['maxParams', UserParam.stamina],
        levelUpBonuses: createLevelUpBonuses([UserParam.health, UserParam.mana]),
        description: 'Gets extra Stamina on start.\n\nOn level up has increased chance of getting Health or Mana.\n\nBut there is a chance to get nothing too'
    },
    noIcon: {
        startBonus: ['currentParams', UserParam.blank],
        levelUpBonuses: [UserParam.blank],
        description: 'Choose one of classes to start playing'
    }
}

const userParams = createSlice({
    name: 'userParams',
    initialState,
    reducers: {
        buyItem(state, action) {
            state.resources[UserResource.gem] -= action.payload
        },
        implementCyber(state, action) {
            state.resources[UserResource.core] -= action.payload
        },
        mutateMutation(state, action) {
            state.resources[UserResource.gene] -= action.payload
        },
        processAbility(state, action) {
            Object.keys(action.payload).forEach(key => {
                // @ts-ignore
                state.currentParams[key] -= action.payload[key];
            })
        },
        setState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key]
            })
        },
        relaxate(state, action) {
            state.currentParams.Focus = state.maxParams.Focus;
            state.currentParams.Mana = state.maxParams.Mana;
            state.currentParams[UserParam.health] = state.maxParams[UserParam.health];
            state.currentParams.Stamina = state.maxParams.Stamina;
        },
        levelUp(state, action) {
            const rand = Math.floor(Math.random()*7);

            state.level += 1;
            
            // @ts-ignore
            state.maxParams[classInfo[state.icon].levelUpBonuses[rand]] += 1;
        },
        refreshState(state, action) { 
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = initialState[key]
            })

            state.icon = action.payload;

            // @ts-ignore
            const {startBonus} = classInfo[action.payload];
            // @ts-ignore
            const stateWithBonus = {...state[startBonus[0]]};
            stateWithBonus[startBonus[1]] += 1;

            // @ts-ignore
            state[startBonus[0]] = stateWithBonus;
        }
    }
})

export default userParams