import {IStore, UserParam, UserResource} from "../types/interfaces";
import styles from '../index.module.css';
import { useDispatch, useSelector } from "react-redux";
import ResourceIcon from "./ResourceIcon";
import userParams from "../redux/slices/userParams";
import { upperCaseFirstLetter } from "../pages/MainPage";
import ParamIcon from "./ParamIcon";

function StatsScreen() {
    const user = useSelector((state: IStore) => state.userParams);

    const dispatch = useDispatch();

    function relaxate() {
        dispatch(userParams.actions.relaxate(''));
    }

    return (
        <div className={styles.extensionPopup_userParams}>
            <div className={styles.userParams_header}>
                <h3>
                    {user.name}, {upperCaseFirstLetter(user.icon)} level {user.level}
                </h3>
            </div>
            <div className={styles.userParams_body}>
                <div>
                    {
                        [...Array(user.currentParams[UserParam.health])].map(icon => <ParamIcon param='health'/>)
                    }
                </div>
                {
                    user.maxParams.Mana > 0 ?
                        <div>
                            {
                                [...Array(user.currentParams.Mana)].map(icon => <ParamIcon param='mana'/>)
                            }
                        </div> : 
                        null
                }
                {
                    user.maxParams.Focus > 0 ?
                        <div>
                            {
                                [...Array(user.currentParams.Focus)].map(icon => <ParamIcon param='focus'/>)
                            }
                        </div> : 
                        null
                }                
                <div>
                    {
                        [...Array(user.currentParams.Stamina)].map(icon => <ParamIcon param='stamina'/>)
                    }
                </div>
                <button onClick={relaxate}>
                    Relaxate
                </button>
            </div>
            <div className={styles.userParams_body}>
                <div>
                    <ResourceIcon resource='gem'/>: {user.resources.Gems}
                </div>
                <div>
                    <ResourceIcon resource='core'/>: {user.resources["Mecha-cores"]}
                </div>
                <div>
                    <ResourceIcon resource='gene'/>: {user.resources[UserResource.gene]}
                </div>
            </div>
        </div>
    )
} 

export default StatsScreen