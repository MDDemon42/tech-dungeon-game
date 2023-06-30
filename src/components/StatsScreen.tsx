import {IStore, UserParam, UserResource} from "../types/interfaces";
import styles from '../index.module.css';
import { useSelector } from "react-redux";
import ResourceIcon from "./ResourceIcon";
import { upperCaseFirstLetter } from "../pages/MainPage";
import ParamIcon from "./ParamIcon";

function StatsScreen() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const squad = useSelector((state: IStore) => state.gameSquad);
    const user = squad.squadMembers[index]?.params!;
    const resources = squad.resources;
    return (
        <div className={styles.extensionPopup_userParams}>
            <div className={styles.userParams_header}>
                <h3>
                    {user.name} the {user.race}, {upperCaseFirstLetter(user.class!)} level {user.level}
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
            </div>
            <div className={styles.userParams_body}>
                <div>
                    <ResourceIcon resource='gem'/>: {resources.Gems}
                </div>
                <div>
                    <ResourceIcon resource='core'/>: {resources["Mecha-cores"]}
                </div>
                <div>
                    <ResourceIcon resource='gene'/>: {resources[UserResource.gene]}
                </div>
            </div>
        </div>
    )
} 

export default StatsScreen