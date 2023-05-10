import {useSelector, useDispatch} from "react-redux";
import {IMastery, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";

function AcademyScreen() {
    const masteriesAll = useSelector((store: IStore) => store.generalAll.masteries);
    const masteriesAllNames = Object.keys(masteriesAll);

    const masteriesUser = useSelector((store: IStore) => store.generalUser.masteries.map(data => data.name))
    const dispatch = useDispatch();

    function learnButtonListener(mastery: IMastery) {
        dispatch(generalUser.actions.learnMastery(mastery))
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Academy!
            <div className={styles.commonScreen_notVertical}>
                {
                    masteriesAll && masteriesAllNames.map(name => {
                        const mastery = masteriesAll[name];
                        const disabled = masteriesUser.includes(mastery.name);
                        return (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={mastery}/>
                                {
                                    <button
                                        disabled={disabled}
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