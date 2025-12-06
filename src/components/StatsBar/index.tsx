import {IStore} from "../../enums-and-interfaces/interfaces";
import styles from './index.module.css';
import { useSelector } from "react-redux";
import ParamIcon from "../Icons/ParamIcon";
import classInfo from "../../general/classInfo";
import ResistancesLine from "./ResistancesLine";

function StatsBar() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const member = useSelector((state: IStore) => state.gameSquad.squadMembers[index].params);
    const {
        race, level, 
        currentParams,
        maxParams
    } = member;

    const headerText = race + ', ' + 
        classInfo[member.class].name + ', ' + 
        chrome.i18n.getMessage('level') + ' ' + level;

    return (
        <div className={styles.StatsBar}>
            <div className={styles.StatsBar_header}>
                {headerText}
            </div>
            <div className={styles.StatsBar_body}>
                <div className={styles.StatsBar_params}>
                    <div className={currentParams.Health < 3 ? styles.StatsBar_params_low_health : ''}>
                        <ParamIcon param='health'/>
                        {
                            currentParams.Health + '/' +
                            maxParams.Health
                        }
                    </div>
                    {
                        maxParams.Mana > 0 ?
                            <div>
                                <ParamIcon param='mana'/>
                                {
                                    currentParams.Mana + '/' +
                                    maxParams.Mana
                                }
                            </div> : 
                            null
                    }
                    {
                        maxParams.Focus > 0 ?
                            <div>
                                <ParamIcon param='focus'/>
                                {
                                    currentParams.Focus + '/' +
                                    maxParams.Focus
                                }
                            </div> : 
                            null
                    }                
                    <div>
                        <ParamIcon param='stamina'/>
                        {
                            currentParams.Stamina + '/' +
                            maxParams.Stamina
                        }
                    </div>
                    <div>
                        <ParamIcon param='satiety'/>
                        {
                            currentParams.Satiety + '/' +
                            maxParams.Satiety
                        }
                    </div>
                </div>
                <ResistancesLine characterParams={member} />
            </div>            
        </div>
    )
} 

export default StatsBar