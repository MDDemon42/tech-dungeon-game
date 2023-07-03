import {useSelector, useDispatch} from "react-redux";
import {IMastery, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import masteries from "../general/masteries/masteries";
import gameSquad from "../redux/slices/gameSquad";

function AcademyScreen() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const masteriesNames = Object.keys(masteries);
    const masteriesUser = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[index]?.general.masteries.map(data => data.name))!;
    const userResource = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[index]?.params.level)!;
        
    const dispatch = useDispatch();

    function learnButtonListener(mastery: IMastery) {
        dispatch(gameSquad.actions.learnMastery({index, data: mastery}))
    }

    let disableReason = '';
    function enableChecker(mastery: IMastery) {
        const resourceCheck = userResource > masteriesUser.length;
        if (!resourceCheck) {
            disableReason = 'Not enough levels';
            return false
        }

        const masteriesCheck = masteriesUser.includes(mastery.name);
        if (masteriesCheck) {
            disableReason = 'Already learned';
            return false
        }
        
        const requiredMasteryCheck = !!mastery.requiredMastery ? 
            masteriesUser.includes(mastery.requiredMastery.name) :
            true;
            
        if (!requiredMasteryCheck) {
            disableReason = 'Does not have required mastery';
            return false
        }

        return true
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Academy!
            <div className={styles.commonScreen_notVertical}>
                {
                    masteries && masteriesNames.map(name => {
                        const mastery = masteries[name as keyof typeof masteries];
                        return (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={mastery} disableReason={disableReason}/>
                                {
                                    <button
                                        disabled={!enableChecker(mastery)}
                                        onClick={() => learnButtonListener(mastery)}
                                    >
                                        Learn!
                                    </button>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AcademyScreen