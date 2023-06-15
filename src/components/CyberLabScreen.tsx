import {useSelector, useDispatch} from "react-redux";
import {ICyber, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";
import prioritisationChecker from "../functions/prioritisation";
import userParams from "../redux/slices/userParams";

function CyberLabScreen() {
    const cybersAll = useSelector((store: IStore) => store.generalAll.cybers);
    const cybersAllNames = Object.keys(cybersAll);

    const userResource = useSelector((store: IStore) => store.userParams.mechaCores);
    
    const dispatch = useDispatch();

    function implementButtonListener(cyber: ICyber) {
        dispatch(generalUser.actions.implementCyber(cyber));
        dispatch(userParams.actions.implementCyber(cyber.cost));
    }

    function disableChecker(cyber: ICyber) {
        const resourceCheck = userResource >= cyber.cost;
        const priorityCheck = prioritisationChecker(cyber);
        
        return !resourceCheck || !priorityCheck;
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Cyber Lab!
            <div className={styles.commonScreen_notVertical}>
                {
                    cybersAll && cybersAllNames.map(name => {
                        const cyber = cybersAll[name];
                        return (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={cyber}/>
                                {
                                    <button
                                        disabled={disableChecker(cyber)}
                                        onClick={() => implementButtonListener(cyber)}
                                    >
                                        Implement!
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

export default CyberLabScreen