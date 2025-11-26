import { IBattlePageState } from "../../enums-and-interfaces/interfaces";

export default function giveTurns(
    changeState: (value: any) => void,
) {
    changeState((prevState: IBattlePageState) => {
        const state = {...prevState};
        const squadStatusBasis = [...state.squadStatus];
        const opponentsStatusBasis = [...state.opponentsStatus];

        if (state.turn % 2 === 1) {
            squadStatusBasis.forEach((member) => {
                if (!!member) {
                    if (!member.dead) {
                        member.hasTurn = true;
                    }
                }
            });
            state.squadStatus = squadStatusBasis;

            opponentsStatusBasis.forEach((member) => {
                if (!!member) {
                    member.hasTurn = false;
                }
            })
            state.opponentsStatus = opponentsStatusBasis;
        } else {
            opponentsStatusBasis.forEach((member) => {
                if (!!member) {
                    if (!member.dead) {
                        member.hasTurn = true;
                    }           
                }     
            })
            state.opponentsStatus = opponentsStatusBasis;

            squadStatusBasis.forEach((member) => {
                if (!!member) {
                    member.hasTurn = false;
                }
            });
            state.squadStatus = squadStatusBasis;
        }            

        return state
    })
}