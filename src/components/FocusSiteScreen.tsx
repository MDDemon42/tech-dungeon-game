import {useSelector, useDispatch} from "react-redux";
import {IPower, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";

function FocusSiteScreen() {
    const powersAll = useSelector((store: IStore) => store.generalAll.powers);
    const powersAllNames = Object.keys(powersAll);

    const powersUser = useSelector((store: IStore) => store.generalUser.powers.map(data => data.name));
    const masteriesUser = useSelector((store: IStore) => store.generalUser.masteries.map(data => data.name));
    const dispatch = useDispatch();

    function developButtonListener(power: IPower) {
        dispatch(generalUser.actions.developPower(power))
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Focus Site!
            <div className={styles.commonScreen_notVertical}>
                {
                    powersAll && powersAllNames.map(name => {
                        const power = powersAll[name];
                        const disabled = powersUser.includes(power.name) ||
                            (!!power.requiredMastery && !masteriesUser.includes(power.requiredMastery.name));
                        return (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={power}/>
                                {
                                    <button
                                        disabled={disabled}
                                        onClick={() => developButtonListener(power)}
                                    >
                                        Develop!
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

export default FocusSiteScreen