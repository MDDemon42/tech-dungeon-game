import { BendingGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums";
import BendingScreen from "../../components/BendingScreen/BendingScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import styles from './index.module.css';
import UpgradeButtons from "../../components/UpgradeButtons/UpgradeButtons";
import { useState } from "react";
import { useSelector } from "react-redux";
import TaskScreen from "../../components/TaskScreen/TaskScreen";
import { IStore, IUpgradeButton } from "../../enums-and-interfaces/interfaces";

function IceSite() {
    const screenName = BendingGameScreens.iceSite;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[BendingGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('ice_spear'),
            stage: 2,
            disabled: stage % 2 === 0
        },
        {
            title: chrome.i18n.getMessage('ice_hail'),
            stage: 3,
            disabled: stage % 3 === 0
        },
        {
            title: chrome.i18n.getMessage('cold_death'),
            stage: 5,
            disabled: stage % 5 === 0
        },
    ];

    return (
        <div className={styles.IceSite}>
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
            <SubMindScreen screenName={MindGameScreens.iceSchool}/>
            <BendingScreen screenName={screenName}/>
        </div>
    )
}

export default IceSite