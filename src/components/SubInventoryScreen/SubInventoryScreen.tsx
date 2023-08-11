import { useDispatch, useSelector } from 'react-redux';
import styles from './SubInventoryScreen.module.css';
import { 
    IStore, 
    IMutation, 
    ICyber, 
    IItem,  
    IInventorySlot, 
    ISubInventoryMapping
} from '../../enums-and-interfaces/interfaces';
import gameSquad from '../../redux/slices/gameSquad';
import { 
    InventoryOption, 
    UserResource, 
    InventoryOptionPart, 
    InventoryPlace 
} from '../../enums-and-interfaces/enums';
import SubInventoryScreenItemLine from './SubInventoryScreenItemLine';
import { createContext } from 'react';

export const SubInventoryScreenItemContext = createContext({
    dataName: '' as InventoryOption,
    resource: 0 as number,
    currentBackpacksItemsAmount: 0 as number,
    listener: (datum: IItem | IMutation | ICyber) => {},
    buttonText: '' as string
});

function SubInventoryScreen(props: {
    dataName: InventoryOption
}) {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);    

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


    const SubInventoryScreenItemContextData = {
        dataName,
        resource,
        currentBackpacksItemsAmount,
        listener: subInventoryMappings[dataName].listener,
        buttonText: subInventoryMappings[dataName].button
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
        </div>
    )
}

export default SubInventoryScreen