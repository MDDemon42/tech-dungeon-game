import {useSelector, useDispatch} from "react-redux";
import {BodyParts, IMutation, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";
import prioritisationChecker from "../functions/prioritisation";
import userParams from "../redux/slices/userParams";
import { upperCaseFirstLetter } from "../pages/MainPage";

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

    const mutationsArray = mutationsAllNames.map(name => mutationsAll[name]);
    const mutationsSpecified: Record<string, IMutation[]> = {
        mutations_for_head: mutationsArray.filter(item => item.bodyPart === BodyParts.head),
        mutations_for_chin: mutationsArray.filter(item => item.bodyPart === BodyParts.chin),
        mutations_for_back: mutationsArray.filter(item => item.bodyPart === BodyParts.back),
        mutations_for_shoulders: mutationsArray.filter(item => item.bodyPart === BodyParts.shoulders),
        mutations_for_skin: mutationsArray.filter(item => item.bodyPart === BodyParts.skin),
        mutations_for_both_hands: mutationsArray.filter(item => item.bodyPart === BodyParts.bothHands),
        mutations_for_tail: mutationsArray.filter(item => item.bodyPart === BodyParts.tail),
        mutations_for_legs: mutationsArray.filter(item => item.bodyPart === BodyParts.legs)
    }    

    const keyToTitle = (key: string) => {
        let keyArray = key.split('_').map(value => upperCaseFirstLetter(value));

        return keyArray.join(' ')
    }

    const InventorySlotMutationsLine = (props: {
        mutations: IMutation[],
        title: string
    }) => {
        const {mutations, title} = props;
        return <div className={styles.commonScreen_notVertical}>
            <div className={styles.inventorySlotItems_title}>
                {keyToTitle(title)}
            </div>
            {
                mutations && mutations.map(mutation => (
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
                ))
            }
        </div>
    }

    return (
        <div className={styles.gamePage_component}>
            <h3 className={styles.inventory_header}>
                Welcome to Mutation Lab!
            </h3>            
            <div className={styles.gamePage_component_container}>
                {
                    Object.keys(mutationsSpecified).map(key => {
                        return <InventorySlotMutationsLine 
                            mutations={mutationsSpecified[key]}
                            title={key}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default MutationLabScreen