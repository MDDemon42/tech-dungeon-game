import {IStore} from "../../enums-and-interfaces/interfaces";
import styles from './index.module.css';
import { useSelector } from "react-redux";
import { upperCaseFirstLetter } from "../../pages/PopupPages/MainPage";
import ParamIcon from "../Icons/ParamIcon";
import { DamageType, UserParam } from "../../enums-and-interfaces/enums";
import ResistanceIcon from "../Icons/ResistanceIcon";

function StatsBar() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const member = useSelector((state: IStore) => state.gameSquad.squadMembers[index].params);
    const {
        name, race, level, 
        currentParams,
        maxParams,
        resistances, dodge,
        strength, lifted
    } = member;

    return (
        <div className={styles.StatsBar}>
            <div className={styles.StatsBar_header}>
                {name} the {race}, {upperCaseFirstLetter(member.class)} level {level}
            </div>
            <div className={styles.StatsBar_body}>
                <div className={styles.StatsBar_params}>
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
                <div className={styles.StatsBar_resistances}>
                    {
                        Object.keys(resistances).map(resistance => 
                            <ResistanceIcon 
                                type={resistance as DamageType}
                                value={resistances[resistance as DamageType]}
                            />
                        )
                    }
                    {
                        <div 
                            title={chrome.i18n.getMessage('dodge')}
                            className={styles.StatsBar_dodge}
                        >
                            {dodge}
                        </div>
                    }
                    {
                        <div 
                            title={chrome.i18n.getMessage('strength')}
                            className={styles.StatsBar_strength}
                        >
                            {lifted}/{strength}
                        </div>
                    }
                </div>
            </div>            
        </div>
    )
} 

export default StatsBar