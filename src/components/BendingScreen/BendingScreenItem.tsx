import { IBending } from "../../enums-and-interfaces/interfaces";
import { bendingEnableChecker } from "../../helpers/enableCheckers";
import CommonIcon from "../Icons/CommonIcon";
import styles from './BendingScreen.module.css';

function BendingScreenItem(props: {
    bending: IBending,
    memberMind: string[],
    buttonText: string,
    listener: any,
    capacity: number,
    posessed: number
}) {
    const {
        bending, buttonText, listener,
        memberMind,
        capacity, posessed
    } = props;
    const [enabled, disableReason] = bendingEnableChecker(
        bending, memberMind, 
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