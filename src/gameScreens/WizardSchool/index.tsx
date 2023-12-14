import { InventoryGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums";
import SubInventoryScreen from "../../components/SubInventoryScreen/SubInventoryScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import styles from './index.module.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import TaskScreen from "../../components/TaskScreen/TaskScreen";
import UpgradeButtons from "../../components/UpgradeButtons/UpgradeButtons";
import { IStore, IUpgradeButton } from "../../enums-and-interfaces/interfaces";

function WizardSchool() {
    const screenName = MindGameScreens.wizardSchool;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[MindGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('librarium'),
            stage: 2,
            disabled: stage !== 1
        }
    ];

    return (
        <div className={styles.WizardSchool}>
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
            <SubMindScreen screenName={screenName}/>
            <SubMindScreen screenName={MindGameScreens.spellSchool}/>
            <SubInventoryScreen screenName={InventoryGameScreens.wizardShop}/>
        </div>
    )
}

export default WizardSchool