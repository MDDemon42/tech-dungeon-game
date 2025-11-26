import { IBattleAbility, IBattlePageState, ICharacter, ISupportAbility } from "../../enums-and-interfaces/interfaces";

export default function selectAbility(
    ability: IBattleAbility | ISupportAbility | null, 
    character: ICharacter,
    changeState: (value: any) => void
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};

        let abil: IBattleAbility | ISupportAbility | null;
        if (state.turn % 2 === 0) {
            abil = state.abilitiesOnTurn[Math.floor(Math.random() * state.abilitiesOnTurn.length)];
        } else {
            abil = ability;
        }

        if (!abil) {
            return state
        }

        const id = abil.name.split(' ').join('').replace('(', '').replace(')', '');            
        const abilityDiv = document.querySelectorAll<HTMLElement>('#' + id)[0];

        let enoughResources = true;
        const {costs} = abil;
        Object.keys(costs).forEach(key => {
            // @ts-ignore
            if (costs[key] > character?.params.currentParams[key]) {
                enoughResources = false;
                return;
            }
        })

        if (state.selectedAbilityDiv) {
            state.selectedAbilityDiv.style.cssText = '';

            state.selectedAbility = null;
            state.selectedAbilityDiv = null;
        }

        if (enoughResources) {
            abilityDiv.style.cssText = 'outline: 3px orange solid; outline-offset: 3px;';
            state.selectedAbility = abil;
            state.selectedAbilityDiv = abilityDiv;
        } else {
            abilityDiv.style.cssText = 'background-color: red';

            setTimeout(() => {
                abilityDiv.style.cssText = '';
            }, 300)
        }

        return state
    })
}