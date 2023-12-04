import { useSelector } from "react-redux";
import { GameScreens, InventoryGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums"
import { IStore, ITask } from "../../enums-and-interfaces/interfaces";
import gameSquad from "../../redux/slices/gameSquad";
import gameStage from "../../redux/slices/gameStage";
import { useDispatch } from "react-redux";
import styles from './TaskScreen.module.css';

import tasks from "../../general/tasks";

function TaskScreen(props: {
    screen: GameScreens | InventoryGameScreens | MindGameScreens,
    stage: number,
    leaveListener: () => void
}) {
    const {
        screen, stage,
        leaveListener
    } = props;
    const task = tasks[screen]?.[stage].task as ITask;
    const {
        bigResourceAmount,
        bigResourceName,
        stageText,
        stageTitle,
        doTaskText,
        leaveText
    } = task;

    const backpacks = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[store.gameSquad.currentlyWatched].general.backpacks);

    const bigResourceStock = backpacks
        .reduce((acc, cur) => acc + (cur.name === bigResourceName ? 1 : 0), 0);
    const doTaskButtonDisabled = bigResourceStock < bigResourceAmount;

    const dispatch = useDispatch();
    
    const doTaskButtonListener = () => {
        dispatch(gameSquad.actions.useBigResource({
            amount: bigResourceAmount, 
            name: bigResourceName 
        }));

        dispatch(gameStage.actions.changeStage({
            zone: screen,
            stage: stage
        }));

        leaveListener();
    }        

    return (
        <div className={styles.TaskScreen}>
            <h3>
                {stageTitle}
            </h3>
            <p className={styles.TaskScreen_text}>
                {stageText}
            </p>
            <div className={styles.TaskScreen_buttons}>
                <button 
                    onClick={doTaskButtonListener}
                    disabled={doTaskButtonDisabled}
                >
                    {doTaskText}
                </button>
                <button onClick={leaveListener}>
                    {leaveText}
                </button>
            </div>
        </div>
    )
}

export default TaskScreen