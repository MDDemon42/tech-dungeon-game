import {createSlice} from '@reduxjs/toolkit';
import { DamageTypes, IClassInfo, IUserParams } from '../../types/interfaces';

const initialState: IUserParams = {
    name: 'Adventurer',
    icon: 'noIcon',
    stage: 0,
    currentHealth: 3,
    maxHealth: 3,
    level: 1,
    gems: 0,
    mechaCores: 0,
    mutaGenes: 0,
    currentMana: 0,
    maxMana: 0,
    currentFocus: 0,
    maxFocus: 0,
    currentStamina: 3,
    maxStamina: 3,
    resistances: {
        [DamageTypes.physical]: 0,
        [DamageTypes.fire]: 0,
        [DamageTypes.electrical]: 0,
        [DamageTypes.psionic]: 0,
        [DamageTypes.acid]: 0
    },
    blank: 0
}

export const classInfo: IClassInfo = {
    mutant: {
        startBonus: 'mutaGenes',
        levelUpBonuses: ['maxHealth', 'maxFocus', 'maxMana', 'maxStamina', 'maxHealth', 'maxStamina', 'blank'],
        description: 'Gets extra Muta-gene on start.\n\nOn level up has increased chance of getting Health or Stamina.\n\nBut there is a chance to get nothing too',
    },
    cyborg: {
        startBonus: 'mechaCores',
        levelUpBonuses: ['maxHealth', 'maxFocus', 'maxMana', 'maxStamina', 'maxStamina', 'blank', 'blank'],
        description: 'Gets extra Mecha-core on start.\n\nOn level up has increased chance of getting Stamina.\n\nBut there is a big chance to get nothing too'
    },
    normal: {
        startBonus: 'gems',
        levelUpBonuses: ['maxHealth', 'maxFocus', 'maxMana', 'maxStamina', 'maxStamina', 'maxStamina', 'blank'],
        description: 'Gets extra Gem on start.\n\nOn level up has super increased chance of getting Stamina.\n\nBut there is a chance to get nothing too'
    },
    wizard: {
        startBonus: 'maxMana',
        levelUpBonuses: ['maxHealth', 'maxFocus', 'maxMana', 'maxStamina', 'maxMana', 'maxMana', 'blank'],
        description: 'Gets extra Mana on start.\n\nOn level up has super increased chance of getting Mana.\n\nBut there is a chance to get nothing too'
    },
    psion: {
        startBonus: 'maxFocus',
        levelUpBonuses: ['maxHealth', 'maxFocus', 'maxMana', 'maxStamina', 'maxFocus', 'maxFocus', 'blank'],
        description: 'Gets extra Focus on start.\n\nOn level up has super increased chance of getting Focus.\n\nBut there is a chance to get nothing too'
    },
    guildian: {
        startBonus: 'level',
        levelUpBonuses: ['maxHealth', 'maxFocus', 'maxMana', 'maxStamina', 'maxHealth', 'maxMana', 'blank'],
        description: 'Gets extra Level on start.\n\nOn level up has increased chance of getting Health or Mana.\n\nBut there is a chance to get nothing too'
    },
    noIcon: {
        startBonus: 'blank',
        levelUpBonuses: ['blank'],
        description: 'Choose one of classes to start playing'
    }
}

const userParams = createSlice({
    name: 'userParams',
    initialState,
    reducers: {
        buyItem(state, action) {
            state.gems -= action.payload
        },
        implementCyber(state, action) {
            state.mechaCores -= action.payload
        },
        mutateMutation(state, action) {
            state.mutaGenes -= action.payload
        },
        setState(state, action) {
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = action.payload[key]
            })
        },
        relaxate(state, action) {
            state.currentFocus = state.maxFocus;
            state.currentMana = state.maxMana;
            state.currentHealth = state.maxHealth;
            state.currentStamina = state.maxStamina;
        },
        levelUp(state, action) {
            const rand = Math.floor(Math.random()*7);

            state.level += 1;
            
            // @ts-ignore
            state[classInfo[state.icon].levelUpBonuses[rand]] += 1;
        },
        refreshState(state, action) { 
            Object.keys(state).forEach(key => {
                // @ts-ignore
                state[key] = initialState[key]
            })

            state.icon = action.payload;

            // @ts-ignore
            state[classInfo[action.payload].startBonus] += 1;
        }
    }
})

export default userParams