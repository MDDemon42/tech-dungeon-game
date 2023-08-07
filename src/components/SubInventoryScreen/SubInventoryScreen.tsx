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
import { 
    InventoryOption, 
    UserResource, 
    InventoryOptionPart, 
    InventoryPlace 
} from '../../enums-and-interfaces/enums';
import { subInventoryEnableChecker } from '../../helpers/enableCheckers';
import SubInventoryScreenItemLine from './SubInventoryScreenItemLine';

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

                        return <SubInventoryScreenItemLine 
                            data={dataSpecified[key]}
                            title={key}
                            dataName={dataName}
                            resource={resource}
                            currentBackpacksItemsAmount={currentBackpacksItemsAmount}
                            members={members}
                            listener={subInventoryMappings[dataName].listener}
                            buttonText={subInventoryMappings[dataName].button}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default SubInventoryScreen