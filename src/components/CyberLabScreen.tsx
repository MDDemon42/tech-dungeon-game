import {useSelector, useDispatch} from "react-redux";
import {BodyParts, ICyber, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";
import prioritisationChecker from "../functions/prioritisation";
import userParams from "../redux/slices/userParams";
import { upperCaseFirstLetter } from "../pages/MainPage";

function CyberLabScreen() {
    const cybersAll = useSelector((store: IStore) => store.generalAll.cybers);
    const cybersAllNames = Object.keys(cybersAll);

    const userResource = useSelector((store: IStore) => store.userParams.mechaCores);
    
    const dispatch = useDispatch();

    function implementButtonListener(cyber: ICyber) {
        dispatch(generalUser.actions.implementCyber(cyber));
        dispatch(userParams.actions.implementCyber(cyber.cost));
    }

    function disableChecker(cyber: ICyber) {
        const resourceCheck = userResource >= cyber.cost;
        const priorityCheck = prioritisationChecker(cyber);
        
        return !resourceCheck || !priorityCheck;
    }

    const cybersArray = cybersAllNames.map(name => cybersAll[name]);
    const cybersSpecified: Record<string, ICyber[]> = {
        cybers_for_shoulders: cybersArray.filter(item => item.bodyPart === BodyParts.shoulders),
        cybers_for_skin: cybersArray.filter(item => item.bodyPart === BodyParts.skin),
        cybers_for_right_hand: cybersArray.filter(item => item.bodyPart === BodyParts.rightHand),
        cybers_for_left_hand: cybersArray.filter(item => item.bodyPart === BodyParts.leftHand),
        cybers_for_legs: cybersArray.filter(item => item.bodyPart === BodyParts.legs)        
    }    

    const keyToTitle = (key: string) => {
        let keyArray = key.split('_').map(value => upperCaseFirstLetter(value));

        return keyArray.join(' ')
    }

    const InventorySlotCybersLine = (props: {
        cybers: ICyber[],
        title: string
    }) => {
        const {cybers, title} = props;
        return <div className={styles.commonScreen_notVertical}>
            <div className={styles.inventorySlotItems_title}>
                {keyToTitle(title)}
            </div>
            {
                cybers && cybers.map(cyber => (
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
                ))
            }
        </div>
    }

    return (
        <div className={styles.gamePage_component}>
            <h3 className={styles.inventory_header}>
                Welcome to Cyber Lab!
            </h3>            
            <div className={styles.gamePage_component_container}>
                {
                    Object.keys(cybersSpecified).map(key => {
                        return <InventorySlotCybersLine 
                            cybers={cybersSpecified[key]}
                            title={key}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default CyberLabScreen