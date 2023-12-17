import { InventoryGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums";
import SubInventoryScreen from "../../components/SubInventoryScreen/SubInventoryScreen";
import SubMindScreen from "../../components/SubMindScreen/SubMindScreen";
import styles from './index.module.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import TaskScreen from "../../components/TaskScreen";
import UpgradeButtons from "../../components/UpgradeButtons";
import { IStore, IUpgradeButton } from "../../enums-and-interfaces/interfaces";
import { 
    Book, Shop, PersonUp
} from 'react-bootstrap-icons';

const subScreenMapping = {
    [MindGameScreens.guildSchool]: {
        requiredStage: 1,
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={MindGameScreens.guildSchool}/>
    },
    [MindGameScreens.guildRituals]: {
        requiredStage: 2,
        icon: <PersonUp size={36} />,
        screen: <SubMindScreen screenName={MindGameScreens.guildRituals}/>
    },
    [InventoryGameScreens.guildShop]: {
        requiredStage: 1,
        icon: <Shop size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.guildShop}/>
    }
}

function Guild() {
    const stage = useSelector((store: IStore) => store.gameStage[MindGameScreens.guildSchool].stage);

    const [screenOpen, setScreenOpen] = useState<MindGameScreens.guildSchool |
        MindGameScreens.guildRituals | InventoryGameScreens.guildShop>(MindGameScreens.guildSchool);
    
    const [taskScreenOpen, setTaskScreenOpen] = useState<[MindGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('runes_and_rituals_task_title'),
            stage: 2,
            disabled: stage !== 1
        }
    ];

    return (
        <div className={styles.Guild}>
            {
                taskScreenOpen && <TaskScreen 
                    screen={taskScreenOpen[0]}
                    stage={taskScreenOpen[1]}
                    leaveListener={() => setTaskScreenOpen(null)}
                />
            }
            <UpgradeButtons 
                upgradeButtons={upgradeButtons} 
                listener={(stage: number) => setTaskScreenOpen([MindGameScreens.guildSchool, stage])}
            />
            <div className={styles.Guild_areas}>
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

export default Guild