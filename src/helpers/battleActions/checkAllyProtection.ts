import { IBattleAbility, IBattlePageState, ICharacter, ISupportAbility } from "../../enums-and-interfaces/interfaces";
import supportAbilities from "../../general/abilities/supportAbilities";
import rituals from "../../general/rituals";

export default function checkAllyProtection(
    changeState: (value: any) => void,
    dispatchActions: {
        dispSqSuf: (_i: number[], _a: IBattleAbility | ISupportAbility) => void,
    },
    squadMembers: ICharacter[]
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};
        const squadStatusBasis = [...state.squadStatus];
        squadStatusBasis.forEach((member, index) => {
            if (!!member) {
                if (!member.dead) {
                    if (member.defensiveCharms) {
                        member.defensiveCharms = false;

                        dispatchActions.dispSqSuf([index], supportAbilities.armor.reverseDefensiveCharms);
                    }

                    if (
                        member.flameShield && 
                        squadMembers[index].params.race !== rituals.fireRituals.fireElemental.newRaceName
                    ) {
                        member.flameShield = false;

                        dispatchActions.dispSqSuf([index], supportAbilities.armor.reverseFlameShield);
                    }
                }
            }
        })

        state.squadStatus = squadStatusBasis;

        return state
    })
}