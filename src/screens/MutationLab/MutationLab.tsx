import { useState } from 'react';
import { useSelector } from 'react-redux';
import SubInventoryScreen from '../../components/SubInventoryScreen/SubInventoryScreen';
import TaskScreen from '../../components/TaskScreen/TaskScreen';
import UpgradeButtons from '../../components/UpgradeButtons/UpgradeButtons';
import { InventoryGameScreens } from '../../enums-and-interfaces/enums';
import { IStore, IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import styles from './MutationLab.module.css';

function MutationLab() {
    const screenName = InventoryGameScreens.mutaLab;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<[InventoryGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('beast_genes_task_title'),
            stage: 2,
            disabled: stage % 2 === 0
        },
        {
            title: chrome.i18n.getMessage('reptiloid_genes_task_title'),
            stage: 3,
            disabled: stage % 3 === 0
        },
        {
            title: chrome.i18n.getMessage('insectoid_genes_task_title'),
            stage: 5,
            disabled: stage % 5 === 0
        }
    ];

    return (
        <div className={styles.MutationLab}>
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
            <SubInventoryScreen screenName={InventoryGameScreens.mutaLab}/>
        </div>
    )
}

export default MutationLab