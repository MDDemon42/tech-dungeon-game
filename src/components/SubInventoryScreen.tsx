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
import generalUser from '../redux/slices/generalUser';
import userParams from '../redux/slices/userParams';
import prioritisationChecker from '../functions/prioritisation';
import { upperCaseFirstLetter } from '../pages/MainPage';
import CommonIcon from './CommonIcon';

function SubInventoryScreen(props: {
    dataName: keyof ISubInventoryDataName
}) {
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
                dispatch(generalUser.actions.implementCyber(data));
                dispatch(userParams.actions.implementCyber(data.cost));
            }
        },
        mutations: {
            resource: UserResource.gene,
            title: 'Welcome to Mutation Lab!',
            button: 'Mutate!',
            listener: (data: IItem | IMutation | ICyber) => {
                dispatch(generalUser.actions.buyItem(data));
                dispatch(userParams.actions.buyItem(data.cost));
            }
        },
        items: {
            resource: UserResource.gem,
            title: 'Welcome to Market!',
            button: 'Buy!',
            listener: (data: IItem | IMutation | ICyber) => {
                dispatch(generalUser.actions.mutateMutation(data));
                dispatch(userParams.actions.mutateMutation(data.cost));
            }
        }
    }
    const userResource = useSelector((store: IStore) => 
        Number(store.userParams.resources[subInventoryMappings[dataName].resource])
    );

    const masteriesUser = useSelector((store: IStore) => store.generalUser.masteries.map(data => data.name))

    function disableChecker(data: IItem | IMutation | ICyber) {
        const resourceCheck = userResource >= data.cost;
        let requiredMasteryCheck = false;
        if (dataName === 'items') {
            // @ts-ignore
            requiredMasteryCheck = !!data.requiredMastery && !masteriesUser.includes(data.requiredMastery.name)
        }
        const priorityCheck = prioritisationChecker(data);
        
        return !resourceCheck || requiredMasteryCheck || !priorityCheck; 
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
                        <CommonIcon item={datum}/>
                        {
                            <button
                                disabled={disableChecker(datum)}
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