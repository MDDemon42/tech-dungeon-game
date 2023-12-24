import { useState } from 'react';
import { useSelector } from 'react-redux';
import SubMindScreen from '../../components/SubMindScreen/SubMindScreen';
import TaskScreen from '../../components/TaskScreen';
import UpgradeButtons from '../../components/UpgradeButtons';
import { MindGameScreens } from '../../enums-and-interfaces/enums';
import { IStore, IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import styles from './index.module.css';

function Academy() {
    const screenName = MindGameScreens.academy;
    const academyStage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const marketStage = useSelector((store: IStore) => store.gameStage.Market.stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[MindGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('modernize_academy_task_title'),
            stage: 2,
            disabled: academyStage % 2 === 0 && marketStage === 2,
            visible: true
        }
    ];

    return (
        <div className={styles.Academy}>
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
        </div>
    )
}

export default Academy