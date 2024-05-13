import { UserParam, UserResource } from "../enums-and-interfaces/enums";
import C from '../redux/constants';
import createEmptyCharacter, { createNoItem } from "../helpers/emptyEssencesCreators";
import store from "../redux/store";
import classInfo from "../general/classInfo";
import { createGameStage } from "../redux/slices/gameStage";
import { IItem } from "../enums-and-interfaces/interfaces";
import wizardItems from "../gameScreens/WizardSchool/wizardItems";
import wizardMasteries from "../gameScreens/WizardSchool/masteries";
import spells from "../gameScreens/WizardSchool/spells";

function actionInCaseStrongStart(tabId: number) {
    const state = {...store.getState()}
    const gameSquad = {...state.gameSquad};
    const squadMembers = {...gameSquad.squadMembers};

    const masteriesAmount = 15;

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
            memberClone.params.strength = 5;
            memberClone.general.backpacks.length = 7;
            memberClone.general.backpacks.fill(createNoItem());

            // memberClone.general.mind.powers.push(powers.other.telekinesis);
            // memberClone.general.inventory.Telekinesis_left_hand = createNoItem();
            // memberClone.general.inventory.Telekinesis_right_hand = createNoItem();

            // memberClone.general.inventory.Shoulders = mutations.other.extraArms;
            // memberClone.general.inventory.Extra_left_hand = createNoItem();
            // memberClone.general.inventory.Extra_right_hand = createNoItem();

            // memberClone.general.backpacks[0] = items.bigResources.beastRemains as IItem;
            // memberClone.general.backpacks[1] = items.bigResources.dragonRemains as IItem;
            // memberClone.general.backpacks[2] = items.bigResources.insectoidRemains as IItem;
            // memberClone.general.backpacks[3] = items.bigResources.reptiloidRemains as IItem;

            memberClone.general.mind.masteries.push(wizardMasteries.scholarship);
            memberClone.general.mind.spells.push(spells.defensiveCharms);
            memberClone.general.backpacks[0] = wizardItems.weapons.apprenticeRod as IItem;

            squadMembers[i] = memberClone;
        }
    }

    const fullResources = {
        [UserResource.core]: 45,
        [UserResource.food]: 400,
        [UserResource.gem]: 100,
        [UserResource.gene]: 45,
        [UserResource.none]: 10
    }

    gameSquad.resources = fullResources;
    gameSquad.squadMembers = squadMembers;

    state.gameSquad = gameSquad;
    state.gameStage = createGameStage(true);
    chrome.storage.local.set({[C.extensionStorageName]: state});

    chrome.tabs.reload(tabId);
}

export default actionInCaseStrongStart