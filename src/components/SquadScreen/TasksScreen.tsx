import { useSelector } from "react-redux";
import { IStore, ITask } from "../../enums-and-interfaces/interfaces";
import { GameScreens, TaskStatus } from "../../enums-and-interfaces/enums";
import styles from './index.module.css';
import { useState } from "react";
import screenMappings from "../../gameScreens/VillageMap/screenMappings";

function TasksScreen() {
    const gameStage = useSelector((store: IStore) => store.gameStage);
 
    const actualTasks: [GameScreens, ITask][] = []; 
    const completedTasks: [GameScreens, ITask][] = []; 

    const [showKnownTasks, setShowKnownTasks] = useState(true);

    Object
        .keys(gameStage)
        .forEach(key => {
            const stage = key as GameScreens;

            const tasks = gameStage[stage]?.tasks;

            if (tasks) {
                Object.keys(tasks).forEach(key => {
                    const certainTask = tasks[key];

                    if (certainTask.status === TaskStatus.actual) {
                        actualTasks.push([stage, certainTask.task]);
                    }

                    if (certainTask.status === TaskStatus.completed) {
                        completedTasks.push([stage, certainTask.task]);
                    }
                })
            }
        })

    const TasksList = (props: {
        tasks: [GameScreens, ITask][]
    }) => {
        const {tasks} = props;

        if (tasks.length > 0) {
            return (<>
                {tasks.map(task => (
                    <div 
                        className={styles.TaskLine}
                        onClick={() => {
                            const taskButton = document
                                .querySelector(`button[class*=${task[0]}]`) as HTMLElement;
                            
                            const backButton = document
                                .querySelector(`button[title="${
                                    chrome.i18n.getMessage('back_to_village')
                                }"]`) as HTMLElement;
                            
                            if (taskButton) {
                                taskButton.click();
                            } else {
                                backButton.click();
                            }
                        }}
                    >
                        {screenMappings[task[0]]?.icon}
                        <div>
                            <div className={styles.TaskTitle}>
                                {task[1].taskTitle}
                            </div>
                            {task[1].taskText}
                        </div>
                    </div>
                ))}
            </>)
        } else {
            return (<div className={styles.NoTasks}>
                {chrome.i18n.getMessage('no_tasks_yet')}
            </div>)
        }
    }

    return (
        <div className={styles.TasksScreen}>
            <div className={styles.TaskCategories}>
                <button 
                    style={{backgroundColor: showKnownTasks ? 'lightgray' : 'darkgray'}}
                    onClick={() => setShowKnownTasks(true)}
                >
                    {chrome.i18n.getMessage('actual_tasks')}: {actualTasks.length}
                </button>
                <button 
                    style={{backgroundColor: showKnownTasks ? 'darkgray' : 'lightgray'}}
                    onClick={() => setShowKnownTasks(false)}
                >
                    {chrome.i18n.getMessage('completed_tasks')}: {completedTasks.length}
                </button>
            </div>
            {
                showKnownTasks ?
                    <TasksList tasks={actualTasks}/> :
                    <TasksList tasks={completedTasks}/>    
            }
        </div>
    )
}

export default TasksScreen