import { useState } from "react";
import { useSelector } from "react-redux";
import { 
    BendingGameScreens, 
    GameScreens, 
    InventoryGameScreens, 
    SchoolGameScreens, 
    SquadGameScreens 
} from "../../enums-and-interfaces/enums";
import { IStore } from "../../enums-and-interfaces/interfaces";
import styles from './index.module.css';

function PatternScreen(props: {
    screenName: 
        BendingGameScreens.fireSite | BendingGameScreens.iceSite | InventoryGameScreens.cyberLab |
        SchoolGameScreens.academy | BendingGameScreens.airSite | SchoolGameScreens.wizardSchool |
        InventoryGameScreens.mutaLab | SchoolGameScreens.focusSite |
        InventoryGameScreens.market | SchoolGameScreens.guildSchool | SquadGameScreens.tavern
    subScreenMapping: Partial<Record<GameScreens, {
        requiredStage: number;
        icon: JSX.Element;
        screen: JSX.Element;}>>
}) {
    const {screenName, subScreenMapping} = props;

    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    

    const subScreens = Object.keys(subScreenMapping) as Partial<GameScreens[]>; 
    type screenOpenType = typeof subScreens[0] | typeof subScreens[1] | typeof subScreens[2];
    const [screenOpen, setScreenOpen] = useState<screenOpenType>(subScreens[0]);

    return (
        <div className={styles.PatternScreen}>
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