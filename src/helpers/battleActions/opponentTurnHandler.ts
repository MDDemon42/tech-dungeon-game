import { IBattlePageState, ICharacter } from "../../enums-and-interfaces/interfaces";
import checkDead from "./checkDead";
import chooseSquadMemberIndex from "./chooseSquadMemberIndex";
import clearCharacterAbilitiesOnTurn from "./clearCharacterAbilitiesOnTurn";
import deselectAbility from "./deselectAbility";
import deselectSquadMember from "./deselectSquadMember";
import deselectTarget from "./deselectTarget";
import getShuffledOpponentIndexes from "./getShuffledOpponentIndexes";
import nextBattleTurn from "./nextBattleTurn";
import processAbilityOntoMember from "./processAbilityOntoMember";
import selectAbility from "./selectAbility";
import selectOpponent from "./selectOpponent";
import selectSquadMember from "./selectSquadMember";

export default async function opponentTurnHandler(
    operationList: {
        battlePageState: IBattlePageState;
        setBattlePageState: React.Dispatch<React.SetStateAction<IBattlePageState>>;
        oppsMembers: ICharacter[];
        squad: Record<string, ICharacter>;
        squadMembers: ICharacter[];
        dispatchActions: any
    }
) {
    const {
        setBattlePageState, 
        dispatchActions, 
        oppsMembers, 
        squad, 
        squadMembers, 
        battlePageState
    } = operationList;
    const indexes = await getShuffledOpponentIndexes(setBattlePageState);

    indexes.forEach((index, orderIndex)=> {
        setTimeout(() => {
            selectOpponent(
                setBattlePageState,
                index, 
                true,
                oppsMembers[index]
            );
        }, (orderIndex) * 4000 + 500)

        setTimeout(() => {
            selectAbility(null, oppsMembers[index], setBattlePageState);
        }, (orderIndex) * 4000 + 1000)

        const sufferMember = chooseSquadMemberIndex(battlePageState, squadMembers);
        if (sufferMember === -1) {
            return
        }

        setTimeout(() => {
            selectSquadMember(
                setBattlePageState,
                dispatchActions,
                sufferMember, 
                squad[sufferMember],
                true
            );
        }, (orderIndex) * 4000 + 1500)

        setTimeout(() => {
            processAbilityOntoMember(
                setBattlePageState,
                dispatchActions,
                sufferMember,
                squadMembers,
                oppsMembers
            );
        }, (orderIndex) * 4000 + 2500)

        setTimeout(() => {
            deselectSquadMember(setBattlePageState);
            deselectAbility(setBattlePageState);
            checkDead(
                setBattlePageState,
                squadMembers,
                oppsMembers
            );
        }, (orderIndex) * 4000 + 2500)
        
        setTimeout(() => {
            clearCharacterAbilitiesOnTurn(setBattlePageState);
            deselectTarget(setBattlePageState, index);
        }, (orderIndex) * 4000 + 3000)
    })

    setTimeout(() => {
        nextBattleTurn(setBattlePageState);
    }, indexes.length * 4000)
}