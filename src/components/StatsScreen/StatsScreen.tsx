import {IStore} from "../../enums-and-interfaces/interfaces";
import styles from './StatsScreen.module.css';
import { useSelector } from "react-redux";
import { upperCaseFirstLetter } from "../../pages/PopupPages/MainPage";
import ParamIcon from "../Icons/ParamIcon";
import { DamageType, UserParam } from "../../enums-and-interfaces/enums";
import ResistanceIcon from "../Icons/ResistanceIcon";

function StatsScreen() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const member = useSelector((state: IStore) => state.gameSquad.squadMembers[index].params);
    const {
        name, race, level, 
        currentParams,
        maxParams,
        resistances, dodge
    } = member;

    return (
        <div className={styles.StatsScreen}>
            <div className={styles.StatsScreen_header}>
                {name} the {race}, {upperCaseFirstLetter(member.class)} level {level}
            </div>
            <div className={styles.StatsScreen_body}>
                <div className={styles.StatsScreen_params}>
                    <div>
                        {
                            [...Array(currentParams[UserParam.health])].map(icon => <ParamIcon param='health'/>)
                        }
                    </div>
                    {
                        maxParams.Mana > 0 ?
                            <div>
                                {
                                    [...Array(currentParams.Mana)].map(icon => <ParamIcon param='mana'/>)
                                }
                            </div> : 
                            null
                    }
                    {
                        maxParams.Focus > 0 ?
                            <div>
                                {
                                    [...Array(currentParams.Focus)].map(icon => <ParamIcon param='focus'/>)
                                }
                            </div> : 
                            null
                    }                
                    <div>
                        {
                            [...Array(currentParams.Stamina)].map(icon => <ParamIcon param='stamina'/>)
                        }
                    </div>
                </div>
                <div className={styles.StatsScreen_resistances}>
                    {
                        Object.keys(resistances).map(resistance => 
                            <ResistanceIcon 
                                type={resistance as DamageType}
                                value={resistances[resistance as DamageType]}
                            />
                        )
                    }
                    {
                        dodge > 0 && <div 
                            title={chrome.i18n.getMessage('dodge')}
                            className={styles.StatsScreen_dodge}
                        >
                            {dodge}
                        </div>
                    }
                </div>
            </div>            
        </div>
    )
} 

export default StatsScreen