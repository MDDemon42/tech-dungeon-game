import { useSelector } from "react-redux";
import { SquadGameScreens } from "../../enums-and-interfaces/enums";
import { ICharacter, IStore } from "../../enums-and-interfaces/interfaces";
import SquadMember from "../BattlePage/BattleOrder/SquadMember";
import styles from './index.module.css';
import { useDispatch } from "react-redux";
import gameSquad from "../../redux/slices/gameSquad";

function SubSquadScreen(props: {
    screenName: SquadGameScreens
}) {
    const {screenName} = props;
    const dataAll = useSelector((store: IStore) => 
        store.gameStage[screenName].usableOptions) as (ICharacter)[];

    const mansionStage = useSelector((store: IStore) => store.gameStage.Mansion.stage);
    let maxSquadSize = 1;
    if (mansionStage > 0) {
        if (mansionStage % 2 === 0) {
            maxSquadSize++;
        }

        if (mansionStage % 3 === 0) {
            maxSquadSize += 3;
        }
    }

    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);
    const squadNames = Object.values(squad).map(squadMember => squadMember.params.name);
    const squadSize = squadNames.length;
    const hireButtonDisabled = squadSize >= maxSquadSize;
    const hiringIndex = squadSize;

    const possibleToHire = dataAll
        .filter(character => !squadNames.includes(character.params.name));

    const dispatch = useDispatch();
    const hireButtonListener = (index: number, character: ICharacter) => 
        dispatch(gameSquad.actions.hireSquaddie({
            index, character
        }));

    return (
        <div className={styles.SubSquadScreen}>
            {
                possibleToHire.length === 0 &&
                <h3>
                    {chrome.i18n.getMessage('no_one_to_hire')}
                </h3>
            }
            {
                possibleToHire.map((member, index) => 
                    <div className={styles.SubSquadScreen_character}>
                        <SquadMember 
                            member={member} 
                            memberStatus={null} 
                            index={index}
                            listener={() => {}}
                        />
                        <button
                            onClick={() => hireButtonListener(hiringIndex, member)}
                            disabled={hireButtonDisabled}
                        >
                            {chrome.i18n.getMessage('hire')}
                        </button>
                    </div>
                )
            }            
        </div>
    )
}

export default SubSquadScreen