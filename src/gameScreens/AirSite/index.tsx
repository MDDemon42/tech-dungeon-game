import { BendingGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums";
import BendingScreen from "../../components/BendingScreen/BendingScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import styles from './index.module.css';
import TaskScreen from "../../components/TaskScreen";
import UpgradeButtons from "../../components/UpgradeButtons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IStore, IUpgradeButton } from "../../enums-and-interfaces/interfaces";

function AirSite() {
    const screenName = BendingGameScreens.airSite;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[BendingGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('thunder_punch'),
            stage: 2,
            disabled: stage % 2 ===0 
        },
        {
            title: chrome.i18n.getMessage('air_deprivation'),
            stage: 3,
            disabled: stage % 3 ===0 
        },
    ];

    return (
        <div className={styles.AirSite}>
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
            <SubMindScreen screenName={MindGameScreens.airSchool}/>
            <BendingScreen screenName={screenName}/>
        </div>
    )
}

export default AirSite