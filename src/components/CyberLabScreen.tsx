import {useSelector, useDispatch} from "react-redux";
import {BodyParts, ICyber, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";
import handsSlotsChainsChecker from "../functions/handsSlotsChains";

function CyberLabScreen() {
    const cybersAll = useSelector((store: IStore) => store.generalAll.cybers);
    const cybersAllNames = Object.keys(cybersAll);

    const inventory = useSelector((store: IStore) => store.generalUser.inventory);
    const dispatch = useDispatch();

    function implementButtonListener(cyber: ICyber) {
        dispatch(generalUser.actions.implementCyber(cyber))
    }

    function disableChecker(cyber: ICyber) {
        const slotChainCheck = (
            cyber.bodyPart === BodyParts.leftHand ||
            cyber.bodyPart === BodyParts.rightHand
        ) ? handsSlotsChainsChecker(cyber) : true;
        
        return !slotChainCheck;
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