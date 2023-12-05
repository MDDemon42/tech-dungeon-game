import { UserParam, UserResource } from "../enums-and-interfaces/enums";
import C from '../redux/constants';
import createEmptyCharacter from "../helpers/emptyEssencesCreators";
import store from "../redux/store";
import { classInfo } from "../redux/slices/gameSquad";
import { createGameStage } from "../redux/slices/gameStage";

function actionInCaseStrongStart(tabId: number) {
    const state = {...store.getState()}
    const gameSquad = {...state.gameSquad};
    const squadMembers = {...gameSquad.squadMembers};

    const masteriesAmount = 
        Object.keys(state.everything.masteries).length +
        Object.keys(state.everything.bending).length;

    for (let i in squadMembers) {
        const member = squadMembers[i];
        if (!!member) {
            const memberClone = createEmptyCharacter();

            const memberClass = member.params.class;
            const memberLevel = member.params.level;

            memberClone.params.class = memberClass
            memberClone.params.name = member.params.name;

            memberClone.params.maxParams[UserParam.health] = 3;
            memberClone.params.maxParams[UserParam.stamina] = 3;
            memberClone.params.level = memberLevel;

            const maxLevel = masteriesAmount;
            for (let i = memberLevel; i < maxLevel; i++) {
                const rand = Math.floor(Math.random()*7);
                const levelUpParam = classInfo[memberClass].levelUpBonuses[rand];

                memberClone.params.maxParams[levelUpParam] += 1;

                memberClone.params.level += 1;
            }
            
            memberClone.params.currentParams = {...memberClone.params.maxParams};

            squadMembers[i] = memberClone;
        }
    }

    const fullResources = {
        [UserResource.gem]: 100,
        [UserResource.core]: 45,
        [UserResource.gene]: 45
    }

    gameSquad.resources = fullResources;
    gameSquad.squadMembers = squadMembers;

    state.gameSquad = gameSquad;
    state.gameStage = createGameStage(true);
    chrome.storage.local.set({[C.extensionStorageName]: state});

    chrome.tabs.reload(tabId);
}

export default actionInCaseStrongStart