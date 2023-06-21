import {useSelector, useDispatch} from "react-redux";
import {IMastery, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";
import masteries from "../general/masteries/masteries";

function AcademyScreen() {
    const masteriesNames = Object.keys(masteries);

    const masteriesUser = useSelector((store: IStore) => store.generalUser.masteries.map(data => data.name))
    const userResource = useSelector((store: IStore) => store.userParams.level);
    const dispatch = useDispatch();

    function learnButtonListener(mastery: IMastery) {
        dispatch(generalUser.actions.learnMastery(mastery))
    }

    function disableChecker(mastery: IMastery) {
        const resourceCheck = userResource > masteriesUser.length;
        const masteriesCheck = masteriesUser.includes(mastery.name);
        const requiredMasteryCheck = !!mastery.requiredMastery ? 
            masteriesUser.includes(mastery.requiredMastery.name) : true;

        return !resourceCheck || masteriesCheck || !requiredMasteryCheck
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
                                <CommonIcon item={mastery}/>
                                {
                                    <button
                                        disabled={disableChecker(mastery)}
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