import { useDispatch, useSelector } from 'react-redux';
import styles from './SubInventoryScreen.module.css';
import { 
    IStore, 
    IMutation, 
    ICyber, 
    IItem,  
    IInventorySlot, 
    ISubInventoryMapping,
} from '../../enums-and-interfaces/interfaces';
import { upperCaseFirstLetter } from '../../pages/PopupPages/MainPage';
import CommonIcon from '../Icons/CommonIcon';
import gameSquad from '../../redux/slices/gameSquad';
import { backpacksCapability } from '../../helpers/backpacksPutter';
import priorityChecker from '../../helpers/priorityChecker';
import { 
    InventoryOption, 
    UserResource, 
    InventoryOptionPart, 
    InventoryPlace 
} from '../../enums-and-interfaces/enums';

function SubInventoryScreen(props: {
    dataName: InventoryOption
}) {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const members = useSelector((store: IStore) => store.gameSquad.squadMembers);
    const currentBackpacksItemsAmount = useSelector((store: IStore) => store.gameSquad.squadBackpacks.items.length);

    const {dataName} = props;
    const dataAll = useSelector((store: IStore) => store.everything[dataName]);

    const dispatch = useDispatch();

    const subInventoryMappings: Record<InventoryOption, ISubInventoryMapping> = {
        [InventoryOption.cybers]: {
            resource: UserResource.core,
            title: 'Welcome to Cyber Lab!',
            button: 'Implement!',
            listener: (data: ICyber) => {
                dispatch(gameSquad.actions.implementCyber({index, data}));
            }
        },
        [InventoryOption.mutations]: {
            resource: UserResource.gene,
            title: 'Welcome to Mutation Lab!',
            button: 'Mutate!',
            listener: (data: IMutation) => {
                dispatch(gameSquad.actions.mutateMutation({index, data}));
            }
        },
        [InventoryOption.items]: {
            resource: UserResource.gem,
            title: 'Welcome to Market!',
            button: 'Buy!',
            listener: (data: IItem) => {
                dispatch(gameSquad.actions.buyItem(data));
            }
        }
    }

    const resource = useSelector((store: IStore) => 
        store.gameSquad.squadBackpacks.resources[subInventoryMappings[dataName].resource]);


    let disableReason = '';
    function enableChecker(data: IItem | IMutation | ICyber) {
        const resourceCheck = resource >= data.cost;
        if (!resourceCheck) {
            disableReason = 'Not enough resouces';
            return false
        }

        if (dataName === 'items') {
            const backpacksCapabilityCheck = currentBackpacksItemsAmount < backpacksCapability(members);
            if (!backpacksCapabilityCheck) {
                disableReason = 'Not enough space in backpacks';
                return false
            }
        } else {
            const priorityCheck = priorityChecker(data);
            if (!priorityCheck) {
                disableReason = 'Better equipment in use';
                return false
            }
        }

        return true 
    }

    const dataArray: IInventorySlot[] = [];
    Object.keys(dataAll)
        .forEach(key => {
            Object.keys(dataAll[key as InventoryOptionPart])
                .forEach(subkey => {
                    dataArray.push(dataAll[key as InventoryOptionPart][subkey])
                })
        })
    
    const dataSpecified: Record<string, IInventorySlot[]> = {
        data_for_head: dataArray.filter(item => item.inventoryPlace === InventoryPlace.head),
        data_for_chin: dataArray.filter(item => item.inventoryPlace === InventoryPlace.chin),
        data_for_skin: dataArray.filter(item => item.inventoryPlace === InventoryPlace.skin),
        data_for_back: dataArray.filter(item => item.inventoryPlace === InventoryPlace.back),
        data_for_armor: dataArray.filter(item => item.inventoryPlace === InventoryPlace.armor),
        data_for_shoulders: dataArray.filter(item => item.inventoryPlace === InventoryPlace.shoulders),
        data_for_tail: dataArray.filter(item => item.inventoryPlace === InventoryPlace.tail),
        data_for_left_hand: dataArray.filter(item => item.inventoryPlace === InventoryPlace.leftHand && dataName !== 'mutations'),
        data_for_right_hand: dataArray.filter(item => item.inventoryPlace === InventoryPlace.rightHand && dataName !== 'mutations'),
        data_for_both_hands: dataArray.filter(item => item.inventoryPlace === InventoryPlace.bothHands),
        data_for_belt: dataArray.filter(item => item.inventoryPlace === InventoryPlace.belt),
        data_for_left_pocket: dataArray.filter(item => item.inventoryPlace === InventoryPlace.leftPocket),
        data_for_right_pocket: dataArray.filter(item => item.inventoryPlace === InventoryPlace.rightPocket),
        data_for_legs: dataArray.filter(item => item.inventoryPlace === InventoryPlace.legs)
    }

    const keyToTitle = (key: string) => {
        let keyArray = key.split('_')
            .filter((value, index) => index !== 0)
            .map(value => upperCaseFirstLetter(value));

        return keyArray.join(' ')
    }

    const InventorySlotLine = (props: {
        data: IInventorySlot[],
        title: string
    }) => {
        const {data, title} = props;
        return <div className={styles.inventorySlotLine}>
            <div className={styles.inventorySlotLine_header}>
                {keyToTitle(title)}
            </div>
            {
                data && data.map(datum => (
                    <div className={styles.commonIconWithButton}>
                        <CommonIcon item={datum} disableReason={disableReason}/>
                        {
                            <button
                                disabled={!enableChecker(datum)}
                                onClick={() => subInventoryMappings[dataName].listener(datum)}
                            >
                                {
                                    subInventoryMappings[dataName].button
                                }
                            </button>
                        }
                    </div>
                ))
            }
        </div>
    }

    return (
        <div className={styles.SubInventoryScreen}>
            <h3 className={styles.SubInventoryScreen_header}>
                {
                    subInventoryMappings[dataName].title
                }
            </h3>            
            <div className={styles.SubInventoryScreen_body}>
                {
                    Object.keys(dataSpecified).map(key => {
                        if (dataSpecified[key].length === 0) {
                            return null
                        }

                        return <InventorySlotLine 
                            data={dataSpecified[key]}
                            title={key}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default SubInventoryScreen