import { IBattlePageState, ICharacter, IMemberStatus } from "../../enums-and-interfaces/interfaces";
import rituals from "../../general/rituals";

export default function setBattlePageStatuses(
    changeState: (value: any) => void,
    squadMembers: ICharacter[],
    oppsMembers: ICharacter[]
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};
        const squadStatusBasis = [...state.squadStatus];
        const opponentsStatusBasis = [...state.opponentsStatus];
        const memberStatusBasis: IMemberStatus = {
            selected: false,
            hasTurn: false,
            dead: false,
            defensiveCharms: false,
            flameShield: false
        };

        squadMembers.forEach((member, index) => {
            if (!!member) {
                squadStatusBasis[index] = {...memberStatusBasis};
                if (
                    squadMembers[index].params.race === 
                    rituals.fireRituals.fireElemental.newRaceName
                ) {
                    squadStatusBasis[index].flameShield = true;
                }
            }
        });
        state.squadStatus = squadStatusBasis;

        oppsMembers.forEach((member, index) => {
            if (!!member) {
                opponentsStatusBasis[index] = {...memberStatusBasis};
                if (
                    oppsMembers[index].params.race === 
                    rituals.fireRituals.fireElemental.newRaceName
                ) {
                    opponentsStatusBasis[index].flameShield = true;
                }
            }
        })
        state.opponentsStatus = opponentsStatusBasis;

        state.turn = 1;
        state.log.push(
            chrome.i18n.getMessage(
                'battle_log_next_turn', 
                [String(state.turn)]
            )
        );

        return state
    })
}