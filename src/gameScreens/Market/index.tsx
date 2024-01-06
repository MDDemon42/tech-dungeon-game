import { useState } from 'react';
import { useSelector } from 'react-redux';
import SubInventoryScreen from '../../components/SubInventoryScreen/SubInventoryScreen';
import TaskScreen from '../../components/TaskScreen';
import UpgradeButtons from '../../components/UpgradeButtons';
import { InventoryGameScreens } from '../../enums-and-interfaces/enums';
import { IStore, IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import styles from './index.module.css';

function Market() {
    const screenName = InventoryGameScreens.market;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[InventoryGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('modernize_market_task_title'),
            stage: 2,
            disabled: stage > 1,
            visible: stage % 2 !== 0
        }
    ];

    return (
        <div className={styles.Market}>
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
            <SubInventoryScreen screenName={InventoryGameScreens.market}/>
        </div>
    )
}

export default Market