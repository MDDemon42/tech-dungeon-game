import { BattleResult } from "../../enums-and-interfaces/enums";
import { IBattlePageState, ICharacter } from "../../enums-and-interfaces/interfaces";

export default function checkDead(
    changeState: (value: any) => void,
    squadMembers: ICharacter[],
    oppsMembers: ICharacter[]
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};
        const squadStatusBasis = [...state.squadStatus];
        const opponentsStatusBasis = [...state.opponentsStatus];

        let allMembers = 0;
        let deadMembers = 0;
        squadStatusBasis.forEach((member, index) => {
            if (!!member) {
                allMembers++;
                if (member.dead) {
                    deadMembers++;
                } else if (squadMembers[index].params.currentParams.Health <= 0) {
                    state.log.push(
                        chrome.i18n.getMessage(
                            'battle_log_someone_dies', 
                            [squadMembers[index].params.name]
                        )
                    );
                    member.dead = true;
                    deadMembers++;
                }
            }
        });
        state.squadStatus = squadStatusBasis;

        let allOpponents = 0;
        let deadOpponents = 0;
        opponentsStatusBasis.forEach((opponent, index) => {
            if (!!opponent) {
                allOpponents++;
                if (opponent.dead) {
                    deadOpponents++;
                } else if (oppsMembers[index].params.currentParams.Health <= 0) {
                    state.log.push(
                        chrome.i18n.getMessage(
                            'battle_log_someone_dies', 
                            [oppsMembers[index].params.name]
                        )
                    );
                    opponent.dead = true;
                    deadOpponents++;
                }               
            }
        })        
        state.opponentsStatus = opponentsStatusBasis;

        if (allMembers === deadMembers) {
            state.result = BattleResult.lose;
        } else if (allOpponents === deadOpponents) {
            state.result = BattleResult.win;
        }

        return state
    })
}