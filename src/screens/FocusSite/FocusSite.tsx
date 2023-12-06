import { MindGameScreens } from "../../enums-and-interfaces/enums";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import styles from './FocusSite.module.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import TaskScreen from "../../components/TaskScreen/TaskScreen";
import UpgradeButtons from "../../components/UpgradeButtons/UpgradeButtons";
import { IStore, IUpgradeButton } from "../../enums-and-interfaces/interfaces";

function FocusSite() {
    const focusSiteStage = useSelector((store: IStore) => 
        store.gameStage[MindGameScreens.focusSite].stage);
    const focusSchoolStage = useSelector((store: IStore) => 
        store.gameStage[MindGameScreens.focusSchool].stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[MindGameScreens, number]|null>(null);

    const focusSiteUpgradeButtons: IUpgradeButton[] = [
        {
            title: 'Advanced',
            stage: focusSiteStage * 2,
            disabled: focusSiteStage % 2 === 0
        }
    ];

    const focusSchoolUpgradeButtons: IUpgradeButton[] = [
        {
            title: 'Psi-energy',
            stage: focusSchoolStage * 3,
            disabled: focusSchoolStage % 3 === 0
        }
    ];

    return (
        <div className={styles.FocusSite}>
            {
                taskScreenOpen && <TaskScreen 
                    screen={taskScreenOpen[0]}
                    stage={taskScreenOpen[1]}
                    leaveListener={() => setTaskScreenOpen(null)}
                />
            }
            <div className={styles.FocusSite_upgradeButtons}>
                <UpgradeButtons 
                    upgradeButtons={focusSiteUpgradeButtons} 
                    listener={(stage: number) => setTaskScreenOpen([MindGameScreens.focusSite, stage])}
                />
                <UpgradeButtons 
                    upgradeButtons={focusSchoolUpgradeButtons} 
                    listener={(stage: number) => setTaskScreenOpen([MindGameScreens.focusSchool, stage])}
                />
            </div>            
            <SubMindScreen screenName={MindGameScreens.focusSchool}/>
            <SubMindScreen screenName={MindGameScreens.focusSite}/>
        </div>
    )
}

export default FocusSite