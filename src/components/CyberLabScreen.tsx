import {useSelector, useDispatch} from "react-redux";
import {ICyber, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";

function CyberLabScreen() {
    const cybersAll = useSelector((store: IStore) => store.generalAll.cybers);
    const cybersAllNames = Object.keys(cybersAll);

    const cybersUser = useSelector((store: IStore) => store.generalUser.cybers.map(data => data.name))
    const dispatch = useDispatch();

    function implementButtonListener(cyber: ICyber) {
        dispatch(generalUser.actions.implementCyber(cyber))
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Cyber Lab!
            <div className={styles.commonScreen_notVertical}>
                {
                    cybersAll && cybersAllNames.map(name => {
                        const cyber = cybersAll[name];
                        const disabled = cybersUser.includes(cyber.name);
                        return (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={cyber}/>
                                {
                                    <button
                                        disabled={disabled}
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