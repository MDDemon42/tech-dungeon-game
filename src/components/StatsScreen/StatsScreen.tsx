import {IStore} from "../../enums-and-interfaces/interfaces";
import styles from './StatsScreen.module.css';
import { useSelector } from "react-redux";
import { upperCaseFirstLetter } from "../../pages/PopupPages/MainPage";
import ParamIcon from "../Icons/ParamIcon";
import { UserParam } from "../../enums-and-interfaces/enums";

function StatsScreen() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const user = useSelector((state: IStore) => state.gameSquad.squadMembers[index]?.params!);
    return (
        <div className={styles.StatsScreen}>
            <div className={styles.StatsScreen_header}>
                <h3>
                    {user.name} the {user.race}, {upperCaseFirstLetter(user.class!)} level {user.level}
                </h3>
            </div>
            <div className={styles.StatsScreen_body}>
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
        </div>
    )
} 

export default StatsScreen