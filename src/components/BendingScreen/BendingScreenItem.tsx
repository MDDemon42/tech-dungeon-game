import { IBending } from "../../enums-and-interfaces/interfaces";
import { bendingEnableChecker } from "../../helpers/enableCheckers";
import CommonIcon from "../Icons/CommonIcon";
import styles from './BendingScreen.module.css';

function BendingScreenItem(props: {
    bending: IBending,
    charMind: string[],
    buttonText: string,
    listener: any,
    capacity: number,
    posessed: number
}) {
    const {
        bending, buttonText, listener,
        charMind,
        capacity, posessed
    } = props;
    const [enabled, disableReason] = bendingEnableChecker(
        bending, charMind, 
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