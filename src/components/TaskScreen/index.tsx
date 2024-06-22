import { useSelector } from "react-redux";
import { CommonGameScreens, GameScreens, TaskStatus } from "../../enums-and-interfaces/enums"
import { IStore, ITask } from "../../enums-and-interfaces/interfaces";
import gameSquad from "../../redux/slices/gameSquad";
import gameStage from "../../redux/slices/gameStage";
import { useDispatch } from "react-redux";
import styles from './index.module.css';
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
    screen: GameScreens,
    stage: number,
    leaveListener: () => void
}) {
    const {
        screen, stage,
        leaveListener
    } = props;
    
    const task = tasks[screen]?.[stage].task as ITask;
    const {
        resourceCost,
        taskTitle,
        taskText
    } = task;

    const backpacks = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[store.gameSquad.currentlyWatched].general.backpacks);

    let doTaskButtonEnabled = true;
    for (const resource of resourceCost) {
        const resourceStock = backpacks
            .reduce((acc, cur) => acc + (cur.name === resource.name ? 1 : 0), 0);
        doTaskButtonEnabled = doTaskButtonEnabled && (resourceStock >= resource.amount);
    }

    const dispatch = useDispatch();
    
    const doTaskButtonListener = () => {
        for (const resource of resourceCost) {
            dispatch(gameSquad.actions.useBigResource({
                amount: resource.amount, 
                name: resource.name 
            }));
        }

        dispatch(gameSquad.actions.levelUp({}));

        dispatch(gameStage.actions.changeStage({
            zone: screen,
            stage: stage
        }));     

        dispatch(gameStage.actions.updateTask({
            screen, 
            stage, 
            status: TaskStatus.completed
        }));

        if (screen === CommonGameScreens.mansion) {
            if (stage === 1 || stage === 2 || stage === 3) {
                dispatch(gameSquad.actions.expandStorage(stage));
            }            
        }

        leaveListener();
    }        

    dispatch(gameStage.actions.updateTask({
        screen, 
        stage, 
        status: TaskStatus.actual
    }));

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
                    disabled={!doTaskButtonEnabled}
                >
                    {chrome.i18n.getMessage('give')}
                    {
                        Object.values(resourceCost).map(resource => (
                            <div 
                                className={styles.TaskScreen_bigResourceIcon}
                                title={resource.name}
                            >
                                {resource.amount}{bigResourceNameMappings[resource.name]}{''}
                            </div>
                        ))
                    }                                        
                </button>
                <button onClick={leaveListener}>
                    {chrome.i18n.getMessage('not_now')}
                </button>
            </div>
        </div>
    )
}

export default TaskScreen