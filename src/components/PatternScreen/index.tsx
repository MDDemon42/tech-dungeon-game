import { useState } from "react";
import { useSelector } from "react-redux";
import TaskScreen from "../TaskScreen";
import UpgradeButtons from "../UpgradeButtons";
import { GameScreens } from "../../enums-and-interfaces/enums";
import { IStore, IUpgradeButton } from "../../enums-and-interfaces/interfaces";
import styles from './index.module.css';

function PatternScreen(props: {
    screenName: GameScreens.fireSite | GameScreens.iceSite | 
        GameScreens.academy | GameScreens.airSite | GameScreens.wizardSchool |
        GameScreens.mansion | GameScreens.mutaLab | GameScreens.focusSite |
        GameScreens.market | GameScreens.guildSchool,
    upgradeButtonsFunc: (stage: number, extraStage: number) => IUpgradeButton[],
    subScreenMapping: Partial<Record<GameScreens, {
        requiredStage: number;
        icon: JSX.Element;
        screen: JSX.Element;}>>
}) {
    const {screenName, upgradeButtonsFunc, subScreenMapping} = props;

    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const marketStage = useSelector((store: IStore) => store.gameStage[GameScreens.market].stage);
    const extraStage = screenName === GameScreens.academy ? marketStage : 0;
    
    const [taskScreenOpen, setTaskScreenOpen] = useState<[GameScreens, number]|null>(null);

    const upgradeButtons = upgradeButtonsFunc(stage, extraStage);

    const subScreens = Object.keys(subScreenMapping) as Partial<GameScreens[]>; 
    type screenOpenType = typeof subScreens[0] | typeof subScreens[1] | typeof subScreens[2];
    const [screenOpen, setScreenOpen] = useState<screenOpenType>(subScreens[0]);

    return (
        <div className={styles.PatternScreen}>
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
            <div className={styles.PatternScreen_areas}>
                {
                    Object.keys(subScreenMapping).map(key => {
                        if (stage % (subScreenMapping[key as keyof typeof subScreenMapping]?.requiredStage!) !== 0) {
                            return null   
                        }

                        return(
                        <button 
                            title={key}
                            onClick={() => setScreenOpen(key as screenOpenType)}
                        >
                            {subScreenMapping[key as keyof typeof subScreenMapping]?.icon}
                        </button>
                    )})
                }
            </div>
            {
                // @ts-expect-error
                subScreenMapping[screenOpen].screen
            }
        </div>
    )
}

export default PatternScreen