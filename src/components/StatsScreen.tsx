import {IStore} from "../types/interfaces";
import styles from '../index.module.css';
import { useDispatch, useSelector } from "react-redux";
import ResourceIcon from "./ResourceIcon";
import userParams from "../redux/slices/userParams";

function StatsScreen() {
    const user = useSelector((state: IStore) => state.userParams);

    const dispatch = useDispatch();

    if (   
        user.currentFocus < user.maxFocus ||
        user.currentHealth < user.maxHealth ||
        user.currentMana < user.maxMana ||
        user.currentStamina < user.maxStamina
    ) {
        dispatch(userParams.actions.relaxate(''));
    }

    return (
        <div className={styles.extensionPopup_userParams}>
            <div className={styles.userParams_header}>
                <h3>
                    {user.name} level {user.level}
                </h3>
            </div>
            <div className={styles.userParams_body}>
                <div>
                    {
                        [...Array(user.currentHealth)].map(icon => <ResourceIcon resource='health'/>)
                    }
                </div>
                {
                    user.maxMana > 0 ?
                        <div>
                            {
                                [...Array(user.currentMana)].map(icon => <ResourceIcon resource='mana'/>)
                            }
                        </div> : 
                        null
                }
                {
                    user.maxFocus > 0 ?
                        <div>
                            {
                                [...Array(user.currentFocus)].map(icon => <ResourceIcon resource='focus'/>)
                            }
                        </div> : 
                        null
                }                
                <div>
                    {
                        [...Array(user.currentStamina)].map(icon => <ResourceIcon resource='stamina'/>)
                    }
                </div>
            </div>
            <div className={styles.userParams_body}>
                <div>
                    <ResourceIcon resource='gem'/>: {user.gems}
                </div>
                <div>
                    <ResourceIcon resource='core'/>: {user.mechaCores}
                </div>
                <div>
                    <ResourceIcon resource='gene'/>: {user.mutaGenes}
                </div>
            </div>
        </div>
    )
} 

export default StatsScreen