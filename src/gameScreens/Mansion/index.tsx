import { useState } from 'react';
import { useSelector } from 'react-redux';
import { GameScreens, InventoryGameScreens, MansionScreens } from '../../enums-and-interfaces/enums';
import { IStore, IUpgradeButton } from '../../enums-and-interfaces/interfaces';
import styles from './index.module.css';
import TaskScreen from '../../components/TaskScreen';
import UpgradeButtons from '../../components/UpgradeButtons';
import { 
    ChatRightHeart, Hammer
} from 'react-bootstrap-icons';
import LivingRoom from './LivingRoom';
import SubInventoryScreen from '../../components/SubInventoryScreen/SubInventoryScreen';

const subScreenMapping = {
    [InventoryGameScreens.armoury]: {
        requiredStage: 5,
        icon: <Hammer size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.armoury}/>
    },
    [MansionScreens.livingRoom]: {
        requiredStage: 1,
        icon: <ChatRightHeart size={36} />,
        screen: <LivingRoom />
    }    
}

function Mansion() {
    const stage = useSelector((store: IStore) => store.gameStage[GameScreens.mansion].stage);

    const [screenOpen, setScreenOpen] = useState<MansionScreens.livingRoom | 
        InventoryGameScreens.armoury>(MansionScreens.livingRoom);

    const [taskScreenOpen, setTaskScreenOpen] = useState<[GameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('build_cottege_task_title'),
            stage: 2,
            disabled: stage % 2 === 0
        },
        {
            title: chrome.i18n.getMessage('build_mansion_task_title'),
            stage: 3,
            disabled: stage < 2 || stage % 3 === 0
        },
        {
            title: chrome.i18n.getMessage('build_armoury_task_title'),
            stage: 5,
            disabled: stage % 5 === 0
        }
    ];

    return (
        <div className={styles.Mansion}>
            {chrome.i18n.getMessage('mansion_title')}
            {
                taskScreenOpen && <TaskScreen 
                    screen={taskScreenOpen[0]}
                    stage={taskScreenOpen[1]}
                    leaveListener={() => setTaskScreenOpen(null)}
                />
            }
            <UpgradeButtons 
                upgradeButtons={upgradeButtons} 
                listener={(stage: number) => setTaskScreenOpen([GameScreens.mansion, stage])}
            />
            <div className={styles.Mansion_areas}>
                {
                    Object.keys(subScreenMapping).map(key => {
                        if (stage % subScreenMapping[key as keyof typeof subScreenMapping].requiredStage !== 0) {
                            return null   
                        }

                        return (
                            <button onClick={() => setScreenOpen(key as keyof typeof subScreenMapping)}>
                                {subScreenMapping[key as keyof typeof subScreenMapping].icon}
                            </button>
                    )})
                }
            </div>
            {
                subScreenMapping[screenOpen].screen
            } 
        </div>
    )
}

export default Mansion