import { useDispatch, useSelector } from 'react-redux';
import styles from '../index.module.css';
import { 
    IStore, 
    IMutation, 
    ICyber, 
    IItem, 
    InventoryPlaces, 
    IInventorySlot, 
    UserResource, 
    ISubInventoryDataName,
    ISubInventoryMapping
} from '../types/interfaces';
import { upperCaseFirstLetter } from '../pages/MainPage';
import CommonIcon from './CommonIcon';
import gameSquad from '../redux/slices/gameSquad';
import { backpacksCapability } from '../functions/putItemInBackpacks';

function SubInventoryScreen(props: {
    dataName: keyof ISubInventoryDataName
}) {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const members = useSelector((store: IStore) => store.gameSquad.squadMembers);
    const currentBackpacksItemsAmount = useSelector((store: IStore) => store.gameSquad.squadBackpacks.items.length);

    const {dataName} = props;
    const dataAll = useSelector((store: IStore) => store.generalAll[dataName]);
    const dataAllNames = Object.keys(dataAll);

    const dispatch = useDispatch();

    const subInventoryMappings: Record<string, ISubInventoryMapping> = {
        cybers: {
            resource: UserResource.core,
            title: 'Welcome to Cyber Lab!',
            button: 'Implement!',
            listener: (data: IItem | IMutation | ICyber) => {
                dispatch(gameSquad.actions.implementCyber({index, data}));
            }
        },
        mutations: {
            resource: UserResource.gene,
            title: 'Welcome to Mutation Lab!',
            button: 'Mutate!',
            listener: (data: IItem | IMutation | ICyber) => {
                dispatch(gameSquad.actions.mutateMutation({index, data}));
            }
        },
        items: {
            resource: UserResource.gem,
            title: 'Welcome to Market!',
            button: 'Buy!',
            listener: (data: IItem | IMutation | ICyber) => {
                dispatch(gameSquad.actions.buyItem(data));
            }
        }
    }

    const resource = useSelector((store: IStore) => 
        store.gameSquad.squadBackpacks.resources[subInventoryMappings[dataName].resource])!;


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
        }        

        return true 
    }

    // @ts-ignore
    const dataArray: IInventorySlot[] = dataAllNames.map(name => dataAll[name]);
    const dataSpecified: Record<string, IInventorySlot[]> = {
        data_for_head: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.head),
        data_for_chin: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.chin),
        data_for_skin: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.skin),
        data_for_back: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.back),
        data_for_armor: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.armor),
        data_for_shoulders: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.shoulders),
        data_for_tail: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.tail),
        data_for_left_hand: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.leftHand && dataName !== 'mutations'),
        data_for_right_hand: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.rightHand && dataName !== 'mutations'),
        data_for_both_hands: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.bothHands),
        data_for_belt: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.belt),
        data_for_left_pocket: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.leftPocket),
        data_for_right_pocket: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.rightPocket),
        data_for_legs: dataArray.filter(item => item.inventoryPlace === InventoryPlaces.legs)
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
            <div className={styles.inventorySlotLine_title}>
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
        <div className={styles.gamePage_component}>
            <h3 className={styles.inventory_header}>
                {
                    subInventoryMappings[dataName].title
                }
            </h3>            
            <div className={styles.gamePage_component_container}>
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