import { useState } from 'react';
import { useSelector } from 'react-redux';
import SubMindScreen from '../../components/SubMindScreen/SubMindScreen';
import TaskScreen from '../../components/TaskScreen/TaskScreen';
import UpgradeButtons from '../../components/UpgradeButtons/UpgradeButtons';
import { MindGameScreens } from '../../enums-and-interfaces/enums';
import { IStore, IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import styles from './Academy.module.css';

function Academy() {
    const screenName = MindGameScreens.academy;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[MindGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: 'Modernize Academy',
            stage: 2,
            disabled: stage !== 1 
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