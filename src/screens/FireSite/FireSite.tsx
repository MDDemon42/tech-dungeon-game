import { BendingGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums";
import BendingScreen from "../../components/BendingScreen/BendingScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import styles from './FireSite.module.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import TaskScreen from "../../components/TaskScreen/TaskScreen";
import UpgradeButtons from "../../components/UpgradeButtons/UpgradeButtons";
import { IStore, IUpgradeButton } from "../../enums-and-interfaces/interfaces";

function FireSite() {
    const screenName = BendingGameScreens.fireSite;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[BendingGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('fire_ball'),
            stage: 2,
            disabled: stage % 2 === 0
        },
        {
            title: chrome.i18n.getMessage('fire_wave'),
            stage: 3,
            disabled: stage % 3 === 0
        },
    ];

    return (
        <div className={styles.FireSite}>
            {
                taskScreenOpen && <TaskScreen 
                    screen={taskScreenOpen[0]}
                    stage={taskScreenOpen[1]}
                    leaveListener={() => setTaskScreenOpen(null)}
                />
            }
            <UpgradeButtons 
                upgradeButtons={upgradeButtons} 
                listener={(stage: number) => setTaskScreenOpen([screenName, stage])}
            />
            <SubMindScreen screenName={MindGameScreens.fireSchool}/>
            <BendingScreen screenName={screenName}/>
        </div>
    )
}

export default FireSite