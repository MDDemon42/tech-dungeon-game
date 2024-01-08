import { MindGameScreens } from "../../enums-and-interfaces/enums";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import styles from './index.module.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import TaskScreen from "../../components/TaskScreen";
import UpgradeButtons from "../../components/UpgradeButtons";
import { IStore, IUpgradeButton } from "../../enums-and-interfaces/interfaces";

function FocusSite() {
    const screenName = MindGameScreens.focusSite;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[MindGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('deepest_insights'),
            stage: 2,
            disabled: stage % 2 === 0,
            visible: stage % 2 !== 0
        },
        {
            title: chrome.i18n.getMessage('psi_energy'),
            stage: 3,
            disabled: stage % 3 === 0,
            visible: stage % 3 !== 0
        },
        {
            title: chrome.i18n.getMessage('empowered_strikes'),
            stage: 5,
            disabled: stage % 5 === 0,
            visible: stage % 5 !== 0
        },
        {
            title: chrome.i18n.getMessage('psi_infused_strikes'),
            stage: 7,
            disabled: stage % 7 === 0,
            visible: stage % 3 === 0 && stage % 7 !== 0
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
            <UpgradeButtons 
                upgradeButtons={upgradeButtons} 
                listener={(stage: number) => setTaskScreenOpen([screenName, stage])}
            />           
            <SubMindScreen screenName={MindGameScreens.focusSchool}/>
            <SubMindScreen screenName={screenName}/>
        </div>
    )
}

export default FocusSite