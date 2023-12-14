import { useSelector } from "react-redux";
import { BendingGameScreens, GameScreens, InventoryGameScreens, MindGameScreens } from "../../enums-and-interfaces/enums"
import { IStore, ITask } from "../../enums-and-interfaces/interfaces";
import gameSquad from "../../redux/slices/gameSquad";
import gameStage from "../../redux/slices/gameStage";
import { useDispatch } from "react-redux";
import styles from './TaskScreen.module.css';
import { 
    Tree, MinecartLoaded,
} from 'react-bootstrap-icons';

import { tasks } from "../../redux/slices/gameStage";
import items from "../../gameScreens/Market/items";

const bigResourceNameMappings = {
    [items.bigResources.wood.name]: <Tree size={10}/>,
    [items.bigResources.ore.name]: <MinecartLoaded size={10}/>
}

function TaskScreen(props: {
    screen: GameScreens | InventoryGameScreens | MindGameScreens | BendingGameScreens,
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
        taskTitle,
        taskText
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
                {taskTitle}
            </h3>
            <p className={styles.TaskScreen_text}>
                {taskText}
            </p>
            <div className={styles.TaskScreen_buttons}>
                <button 
                    onClick={doTaskButtonListener}
                    disabled={doTaskButtonDisabled}
                >
                    {chrome.i18n.getMessage('give') + bigResourceAmount}
                    <div 
                        className={styles.TaskScreen_bigResourceIcon}
                        title={bigResourceName}
                    >
                        {bigResourceNameMappings[bigResourceName]}
                    </div>                    
                </button>
                <button onClick={leaveListener}>
                    {chrome.i18n.getMessage('not_now')}
                </button>
            </div>
        </div>
    )
}

export default TaskScreen