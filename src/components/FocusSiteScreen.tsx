import {useSelector, useDispatch} from "react-redux";
import {IPower, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import powers from "../general/powers/powers";
import gameSquad from "../redux/slices/gameSquad";

function FocusSiteScreen() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const powersNames = Object.keys(powers);
    const powersUser = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[index]?.general.powers.map(data => data.name))!;
    const masteriesUser = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[index]?.general.masteries.map(data => data.name))!;
    
    const dispatch = useDispatch();

    function developButtonListener(power: IPower) {
        dispatch(gameSquad.actions.developPower({index, data: power}))
    }

    let disableReason = '';
    function enableChecker(power: IPower) {
        const powersUserCheck = powersUser.includes(power.name);
        if (powersUserCheck) {
            disableReason = 'Already developed';
            return false
        }
        
        const requiredMasteryCheck = !!power.requiredMastery ? 
            masteriesUser.includes(power.requiredMastery.name) :
            true;
            
        if (!requiredMasteryCheck) {
            disableReason = 'Does not have required mastery';
            return false
        }

        return true
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Focus Site!
            <div className={styles.commonScreen_notVertical}>
                {
                    powers && powersNames.map(name => {
                        const power = powers[name as keyof typeof powers];
                        return (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={power} disableReason={disableReason}/>
                                {
                                    <button
                                        disabled={!enableChecker(power)}
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