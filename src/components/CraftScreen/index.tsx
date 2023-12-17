import { useSelector } from "react-redux";
import { IArmouryItem, IStore } from "../../enums-and-interfaces/interfaces";
import gameSquad from "../../redux/slices/gameSquad";
import { useDispatch } from "react-redux";
import styles from './index.module.css';
import { 
    Tree, MinecartLoaded, Question
} from 'react-bootstrap-icons';
import items from "../../gameScreens/Market/items";

const bigResourceNameMappings = {
    [items.bigResources.wood.name]: <Tree size={10}/>,
    [items.bigResources.ore.name]: <MinecartLoaded size={10}/>
}

function CraftScreen(props: {
    armouryItem: IArmouryItem,
    leaveListener: () => void
}) {
    const {armouryItem, leaveListener} = props;
    const {craft} = armouryItem; 
    const {
        resourceCost,
        taskTitle,
        taskText
    } = craft;

    const backpacks = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[store.gameSquad.currentlyWatched].general.backpacks);

    let doCraftButtonEnabled = true;
    for (const resource of resourceCost) {
        const resourceStock = backpacks
            .reduce((acc, cur) => acc + (cur.name === resource.name ? 1 : 0), 0);
        doCraftButtonEnabled = doCraftButtonEnabled && (resourceStock >= resource.amount);
    }

    const dispatch = useDispatch();
    
    const doCraftButtonListener = () => {
        for (const resource of resourceCost) {
            dispatch(gameSquad.actions.useBigResource({
                amount: resource.amount, 
                name: resource.name 
            }));
        }

        dispatch(gameSquad.actions.getItem(armouryItem))

        leaveListener();
    }        

    return (
        <div className={styles.CraftScreen}>
            <h3>
                {taskTitle}
            </h3>
            <p className={styles.CraftScreen_text}>
                {taskText}
            </p>
            <div className={styles.CraftScreen_buttons}>
                <button 
                    onClick={doCraftButtonListener}
                    disabled={!doCraftButtonEnabled}
                >
                    {chrome.i18n.getMessage('give')}
                    {
                        Object.values(resourceCost).map(resource => (
                            <div 
                                className={styles.CraftScreen_bigResourceIcon}
                                title={resource.name}
                            >
                                {resource.amount}
                                {
                                    bigResourceNameMappings[resource.name] ||
                                    <Question size={10}/>
                                }{''}
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

export default CraftScreen