import { BendingGameScreens } from "../../enums-and-interfaces/enums";
import { IBending } from "../../enums-and-interfaces/interfaces";
import { bendingEnableChecker } from "../../helpers/enableCheckers";
import CommonIcon from "../Icons/CommonIcon";
import styles from './BendingScreen.module.css';

function BendingScreenItem(props: {
    bending: IBending,
    screenName: BendingGameScreens,
    memberMind: string[],
    buttonText: string,
    listener: any,
    capacity: number,
    posessed: number
}) {
    const {
        bending, buttonText, listener,
        memberMind, screenName,
        capacity, posessed
    } = props;
    const [enabled, disableReason] = bendingEnableChecker(
        bending, memberMind, screenName, 
        capacity, posessed
    );

    return <div className={styles.BendingScreenItem}>
        <CommonIcon item={bending} disableReason={disableReason}/>
        {
            <button
                disabled={!enabled}
                onClick={() => listener(bending)}
            >
                {
                    buttonText
                }
            </button>
        }
    </div>
}

export default BendingScreenItem