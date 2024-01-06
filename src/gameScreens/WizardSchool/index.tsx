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
    Book, Shop, Spellcheck
} from 'react-bootstrap-icons';

const subScreenMapping = {
    [MindGameScreens.wizardSchool]: {
        icon: <Book size={36} />,
        screen: <SubMindScreen screenName={MindGameScreens.wizardSchool}/>
    },
    [MindGameScreens.spellSchool]: {
        icon: <Spellcheck size={36} />,
        screen: <SubMindScreen screenName={MindGameScreens.spellSchool}/>
    },
    [InventoryGameScreens.wizardShop]: {
        icon: <Shop size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.wizardShop}/>
    }
}

function WizardSchool() {
    const stage = useSelector((store: IStore) => store.gameStage[MindGameScreens.wizardSchool].stage);

    const [screenOpen, setScreenOpen] = useState<MindGameScreens.wizardSchool |
         MindGameScreens.spellSchool | InventoryGameScreens.wizardShop>(MindGameScreens.wizardSchool);

    const [taskScreenOpen, setTaskScreenOpen] = useState<[MindGameScreens, number]|null>(null);

    const upgradeButtons: IUpgradeButton[] = [
        {
            title: chrome.i18n.getMessage('librarium'),
            stage: 2,
            disabled: stage !== 1,
            visible: stage % 2 !== 0
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
                listener={(stage: number) => setTaskScreenOpen([MindGameScreens.wizardSchool, stage])}
            />
            <div className={styles.WizardSchool_areas}>
                {
                    Object.keys(subScreenMapping).map(key => (
                        <button onClick={() => setScreenOpen(key as keyof typeof subScreenMapping)}>
                            {subScreenMapping[key as keyof typeof subScreenMapping].icon}
                        </button>
                    ))
                }
            </div>
            {
                subScreenMapping[screenOpen].screen
            }            
        </div>
    )
}

export default WizardSchool