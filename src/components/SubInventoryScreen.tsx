import { useDispatch, useSelector } from 'react-redux';
import styles from '../index.module.css';
import { IStore, IGeneralAll, IUserParams, IMutation, ICyber, IItem, InventoryPlaces, IInventorySlot } from '../types/interfaces';
import generalUser from '../redux/slices/generalUser';
import userParams from '../redux/slices/userParams';
import prioritisationChecker from '../functions/prioritisation';
import { upperCaseFirstLetter } from '../pages/MainPage';
import CommonIcon from './CommonIcon';

function SubInventoryScreen(props: {
    dataName: keyof IGeneralAll
}) {
    const {dataName} = props;
    const dataAll = useSelector((store: IStore) => store.generalAll[dataName]);
    const dataAllNames = Object.keys(dataAll);

    const resourceList = {
        cybers: 'mechaCores',
        mutations: 'mutaGenes',
        items: 'gems',
        masteries: '',
        spells: '',
        powers: '',
        abilities: ''
    }
    const userResource = useSelector((store: IStore) => Number(store.userParams[resourceList[dataName] as keyof IUserParams]));

    const masteriesUser = useSelector((store: IStore) => store.generalUser.masteries.map(data => data.name))

    const dispatch = useDispatch();

    function buyButtonListener(data: IItem | IMutation | ICyber) {
        switch (dataName) {
            case 'cybers':
                dispatch(generalUser.actions.implementCyber(data));
                dispatch(userParams.actions.implementCyber(data.cost));
                break;
            case 'items':
                dispatch(generalUser.actions.buyItem(data));
                dispatch(userParams.actions.buyItem(data.cost));
                break;
            case 'mutations':
                dispatch(generalUser.actions.mutateMutation(data));
                dispatch(userParams.actions.mutateMutation(data.cost));
                break;
            default:
                break;
        }        
    }

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

    const representTexts = {
        cybers: {
            title: 'Welcome to Cyber Lab!',
            button: 'Implement!'
        },
        mutations: {
            title: 'Welcome to Mutation Lab!',
            button: 'Mutate!'
        },
        items: {
            title: 'Welcome to Market!',
            button: 'Buy!'
        },
        masteries: {
            title: '',
            button: ''
        },
        spells: {
            title: '',
            button: ''
        },
        powers: {
            title: '',
            button: ''
        },
        abilities: {
            title: '',
            button: ''
        }
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
                                onClick={() => buyButtonListener(datum)}
                            >
                                {
                                    representTexts[dataName].button
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
                    representTexts[dataName].title
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