import {useSelector, useDispatch} from "react-redux";
import {IMutation, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";

function MutationLabScreen() {
    const mutationsAll = useSelector((store: IStore) => store.generalAll.mutations);
    const mutationsAllNames = Object.keys(mutationsAll);

    const mutationsUser = useSelector((store: IStore) => {
        const inventory = store.generalUser.inventory;

        if (!inventory) {
            return []
        }
        
        const keys = Object.keys(inventory);

        return keys.map(data => {
            if (inventory[data].bodyPart) {
                return inventory[data].name
            }
        })
    });
    const dispatch = useDispatch();

    function mutateButtonListener(mutation: IMutation) {
        dispatch(generalUser.actions.mutateMutation(mutation))
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Mutation Lab!
            <div className={styles.commonScreen_notVertical}>
                {
                    mutationsAll && mutationsAllNames.map(name => {
                        const mutation = mutationsAll[name];
                        const disabled = mutationsUser.includes(mutation.name);
                        return (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={mutation}/>
                                {
                                    <button
                                        disabled={disabled}
                                        onClick={() => mutateButtonListener(mutation)}
                                    >
                                        Mutate!
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

export default MutationLabScreen