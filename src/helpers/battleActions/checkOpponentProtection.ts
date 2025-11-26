import { IBattleAbility, ISupportAbility, ICharacter, IBattlePageState } from "../../enums-and-interfaces/interfaces";
import supportAbilities from "../../general/abilities/supportAbilities";
import rituals from "../../general/rituals";

export default function checkOpponentProtection(
    changeState: (value: any) => void,
    dispatchActions: {
        dispOpSuf: (_i: number[], _a: IBattleAbility | ISupportAbility) => void,
    },
    oppsMembers: ICharacter[]
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};
        const opponentsStatusBasis = [...state.opponentsStatus];
        opponentsStatusBasis.forEach((member, index) => {
            if (!!member) {
                if (!member.dead) {
                    if (member.defensiveCharms) {
                        member.defensiveCharms = false;

                        dispatchActions.dispOpSuf([index], supportAbilities.armor.reverseDefensiveCharms);
                    }

                    if (
                        member.flameShield && 
                        oppsMembers[index].params.race !== rituals.fireRituals.fireElemental.newRaceName
                    ) {
                        member.flameShield = false;

                        dispatchActions.dispOpSuf([index], supportAbilities.armor.reverseFlameShield);
                    }
                }
            }
        })

        state.opponentsStatus = opponentsStatusBasis;

        return state
    })
}