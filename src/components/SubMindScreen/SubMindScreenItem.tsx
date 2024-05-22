import { MindGameScreens } from "../../enums-and-interfaces/enums";
import { IMastery, IPower, IRitual, ISpell } from "../../enums-and-interfaces/interfaces";
import { subMindEnableChecker } from "../../helpers/enableCheckers";
import CommonIcon from "../Icons/CommonIcon";
import styles from './SubMindScreen.module.css';

function SubMindScreenItem(props: {
    data: IMastery | IPower | ISpell | IRitual,
    screenName: MindGameScreens,
    memberMind: string[],
    buttonText: string,
    listener: any,
    capacity: number,
    posessed: number
}) {
    const {
        data, buttonText, listener,
        memberMind, screenName,
        capacity, posessed
    } = props;
    const [enabled, disableReason] = subMindEnableChecker(
        data, memberMind, screenName, 
        capacity, posessed
    );

    return <div className={styles.SubMindScreenItem}>
        <CommonIcon item={data} disableReason={disableReason}/>
        <button
            disabled={!enabled}
            onClick={() => listener(data)}
        >
            {
                buttonText
            }
        </button>
    </div>
}

export default SubMindScreenItem