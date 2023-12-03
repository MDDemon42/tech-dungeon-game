import { useDispatch, useSelector } from 'react-redux';
import styles from './SubInventoryScreen.module.css';
import { 
    IStore, 
    IMutation, 
    ICyber, 
    IItem,  
    IInventorySlot, 
    ISubInventoryMapping,
    IWizardItem,
    IGuildItem
} from '../../enums-and-interfaces/interfaces';
import gameSquad from '../../redux/slices/gameSquad';
import { 
    UserResource,
    InventoryPlace, 
    InventoryGameScreens
} from '../../enums-and-interfaces/enums';
import SubInventoryScreenItemLine from './SubInventoryScreenItemLine';
import { createContext, useState } from 'react';
import TaskScreen from '../TaskScreen/TaskScreen';

export const SubInventoryScreenItemContext = createContext({
    screenName: '' as InventoryGameScreens,
    resource: 0 as number,
    listener: (datum: IItem | IMutation | ICyber | IWizardItem) => {},
    buttonText: '' as string
});

function SubInventoryScreen(props: {
    screenName: InventoryGameScreens
}) {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);    

    const {screenName} = props;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const data = useSelector((store: IStore) => store.gameStage[screenName].options[stage]);

    const dispatch = useDispatch();

    const [taskScreenOpen, setTaskScreenOpen] = useState<[InventoryGameScreens, number]|null>(null);

    const subInventoryMappings: Record<InventoryGameScreens, ISubInventoryMapping> = {
        [InventoryGameScreens.wizardShop]: {
            resource: UserResource.gem,
            title: chrome.i18n.getMessage('wizard_shop_title'),
            button: chrome.i18n.getMessage('buy'),
            listener: (data: IWizardItem) => {
                dispatch(gameSquad.actions.buyItem({index, data}));
            }
        },
        [InventoryGameScreens.cyberLab]: {
            resource: UserResource.core,
            title: chrome.i18n.getMessage('cyber_lab_title'),
            button: chrome.i18n.getMessage('implement'),
            listener: (data: ICyber) => {
                dispatch(gameSquad.actions.implementCyber({index, data}));
            },
            upgradeButtons: [
                {
                    title:
                        (stage === 1 && 'Basic') ||
                        (stage === 2 && 'Advanced') ||
                        (stage === 3 && 'Expert') ||
                        'Max stage'
                    ,
                    stage: stage + 1,
                    disabled: stage === 4
                }
            ]
        },
        [InventoryGameScreens.mutationLab]: {
            resource: UserResource.gene,
            title: chrome.i18n.getMessage('mutation_lab_title'),
            button: chrome.i18n.getMessage('mutate'),
            listener: (data: IMutation) => {
                dispatch(gameSquad.actions.mutateMutation({index, data}));
            },
            upgradeButtons: [
                {
                    title: 'Beast options',
                    stage: stage * 2,
                    disabled: stage % 2 === 0
                },
                {
                    title: 'Reptile options',
                    stage: stage * 3,
                    disabled: stage % 3 === 0
                },
                {
                    title: 'Insectoid options',
                    stage: stage * 5,
                    disabled: stage % 5 === 0
                }
            ]
        },
        [InventoryGameScreens.market]: {
            resource: UserResource.gem,
            title: chrome.i18n.getMessage('market_title'),
            button: chrome.i18n.getMessage('buy'),
            listener: (data: IItem) => {
                dispatch(gameSquad.actions.buyItem(data));
            },
            upgradeButtons: [
                {
                    title: 'Steel options',
                    stage: 2,
                    disabled: stage > 1
                }
            ]
        },
        [InventoryGameScreens.guildShop]: {
            resource: UserResource.gem,
            title: chrome.i18n.getMessage('guild_shop_title'),
            button: chrome.i18n.getMessage('buy'),
            listener: (data: IGuildItem) => {
                dispatch(gameSquad.actions.buyItem(data));
            }
        }
    }

    const resource = useSelector((store: IStore) => 
        store.gameSquad.resources[subInventoryMappings[screenName].resource]);

    
    const dataSpecified: Record<string, IInventorySlot[]> = {
        data_for_hat: data.filter(item => item.inventoryPlace === InventoryPlace.hat),
        data_for_head: data.filter(item => item.inventoryPlace === InventoryPlace.head),
        data_for_chin: data.filter(item => item.inventoryPlace === InventoryPlace.chin),
        data_for_skin: data.filter(item => item.inventoryPlace === InventoryPlace.skin),
        data_for_back: data.filter(item => item.inventoryPlace === InventoryPlace.back),
        data_for_armor: data.filter(item => item.inventoryPlace === InventoryPlace.armor),
        data_for_shoulders: data.filter(item => item.inventoryPlace === InventoryPlace.shoulders),
        data_for_tail: data.filter(item => item.inventoryPlace === InventoryPlace.tail),
        data_for_left_hand: data.filter(item => item.inventoryPlace === InventoryPlace.leftHand 
            && screenName !== InventoryGameScreens.mutationLab),
        data_for_right_hand: data.filter(item => item.inventoryPlace === InventoryPlace.rightHand 
            && screenName !== InventoryGameScreens.mutationLab),
        data_for_both_hands: data.filter(item => item.inventoryPlace === InventoryPlace.bothHands),
        data_for_belt: data.filter(item => item.inventoryPlace === InventoryPlace.belt),
        data_for_left_pocket: data.filter(item => item.inventoryPlace === InventoryPlace.leftPocket),
        data_for_right_pocket: data.filter(item => item.inventoryPlace === InventoryPlace.rightPocket),
        data_for_legs: data.filter(item => item.inventoryPlace === InventoryPlace.legs)
    }

    const SubInventoryScreenItemContextData = {
        screenName,
        resource,
        listener: subInventoryMappings[screenName].listener,
        buttonText: subInventoryMappings[screenName].button
    }

    return (
        <div className={styles.SubInventoryScreen}>
            {
                taskScreenOpen && <TaskScreen 
                    screen={taskScreenOpen[0]}
                    stage={taskScreenOpen[1]}
                    leaveListener={() => setTaskScreenOpen(null)}
                />
            }
            <h3 className={styles.SubInventoryScreen_header}>
                {
                    subInventoryMappings[screenName].title
                }
            </h3>            
            <div className={styles.SubInventoryScreen_body}>
                {
                    Object.keys(dataSpecified).map(key => {
                        if (dataSpecified[key].length === 0) {
                            return null
                        }

                        return <SubInventoryScreenItemContext.Provider
                            value={SubInventoryScreenItemContextData}
                        >
                            <SubInventoryScreenItemLine 
                                data={dataSpecified[key]}
                                title={key}
                            />
                        </SubInventoryScreenItemContext.Provider>
                    })
                }
            </div>
            {
                subInventoryMappings[screenName].upgradeButtons ? 
                    <div className={styles.SubInventoryScreen_buttons}>
                        {
                            subInventoryMappings[screenName].upgradeButtons?.map(option => (
                                <button 
                                    onClick={() => setTaskScreenOpen([screenName, option.stage])}
                                    disabled={option.disabled}
                                >
                                    {option.title}
                                </button>
                            ))
                        } 
                    </div> :
                null
            }          
        </div>
    )
}

export default SubInventoryScreen