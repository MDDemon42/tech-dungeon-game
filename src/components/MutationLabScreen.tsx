import {useSelector, useDispatch} from "react-redux";
import {IMutation, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";
import prioritisationChecker from "../functions/prioritisation";
import userParams from "../redux/slices/userParams";

function MutationLabScreen() {
    const mutationsAll = useSelector((store: IStore) => store.generalAll.mutations);
    const mutationsAllNames = Object.keys(mutationsAll);

    const userResource = useSelector((store: IStore) => store.userParams.mutaGenes);
    const dispatch = useDispatch();

    function mutateButtonListener(mutation: IMutation) {
        dispatch(generalUser.actions.mutateMutation(mutation));
        dispatch(userParams.actions.mutateMutation(mutation.cost));
    }

    function disableChecker(mutation: IMutation) {
        const resourceCheck = userResource >= mutation.cost;
        const priorityCheck = prioritisationChecker(mutation);

        return !resourceCheck || !priorityCheck
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Mutation Lab!
            <div className={styles.commonScreen_notVertical}>
                {
                    mutationsAll && mutationsAllNames.map(name => {
                        const mutation = mutationsAll[name];
                        return (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={mutation}/>
                                {
                                    <button
                                        disabled={disableChecker(mutation)}
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