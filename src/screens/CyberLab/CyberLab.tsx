import { useState } from 'react';
import { useSelector } from 'react-redux';
import SubInventoryScreen from '../../components/SubInventoryScreen/SubInventoryScreen';
import TaskScreen from '../../components/TaskScreen/TaskScreen';
import UpgradeButtons from '../../components/UpgradeButtons/UpgradeButtons';
import { InventoryGameScreens } from '../../enums-and-interfaces/enums';
import { IStore, IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import styles from './CyberLab.module.css';

function CyberLab() {
    const screenName = InventoryGameScreens.cyberLab;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[InventoryGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: 'Basic',
            stage: 2,
            disabled: stage !== 1
        },
        {
            title: 'Advanced',
            stage: 3,
            disabled: stage !== 2
        },
        {
            title: 'Expert',
            stage: 4,
            disabled: stage !== 3
        }
    ];

    return (
        <div className={styles.CyberLab}>
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
            <SubInventoryScreen screenName={InventoryGameScreens.cyberLab}/>
        </div>
    )
}

export default CyberLab