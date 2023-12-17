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
    IGuildItem,
    IArmouryItem
} from '../../enums-and-interfaces/interfaces';
import gameSquad from '../../redux/slices/gameSquad';
import { 
    UserResource,
    InventoryPlace, 
    InventoryGameScreens
} from '../../enums-and-interfaces/enums';
import SubInventoryScreenItemLine from './SubInventoryScreenItemLine';
import { createContext, useState } from 'react';
import CraftScreen from '../CraftScreen';

export const SubInventoryScreenItemContext = createContext({
    screenName: '' as InventoryGameScreens,
    resource: 0 as number,
    listener: (datum: IItem | IMutation | ICyber | IWizardItem) => {},
    buttonText: '' as string
});

const subInventoryMappings: Record<InventoryGameScreens, ISubInventoryMapping> = {
    [InventoryGameScreens.armoury]: {
        resource: UserResource.none,
        title: chrome.i18n.getMessage('armoury_title'),
        button: chrome.i18n.getMessage('craft'),
        maxHeight: 'calc(95vh - 450px)'
    },
    [InventoryGameScreens.wizardShop]: {
        resource: UserResource.gem,
        title: chrome.i18n.getMessage('wizard_shop_title'),
        button: chrome.i18n.getMessage('buy'),
        maxHeight: 'calc(95vh - 450px)'
    },
    [InventoryGameScreens.cyberLab]: {
        resource: UserResource.core,
        title: chrome.i18n.getMessage('cyber_lab_title'),
        button: chrome.i18n.getMessage('implement'),
        maxHeight: 'calc(95vh - 350px)'
    },
    [InventoryGameScreens.mutaLab]: {
        resource: UserResource.gene,
        title: chrome.i18n.getMessage('muta_lab_title'),
        button: chrome.i18n.getMessage('mutate'),
        maxHeight: 'calc(95vh - 350px)'
    },
    [InventoryGameScreens.market]: {
        resource: UserResource.gem,
        title: chrome.i18n.getMessage('market_title'),
        button: chrome.i18n.getMessage('buy'),
        maxHeight: 'calc(95vh - 350px)'
    },
    [InventoryGameScreens.guildShop]: {
        resource: UserResource.gem,
        title: chrome.i18n.getMessage('guild_shop_title'),
        button: chrome.i18n.getMessage('buy'),
        maxHeight: 'calc(95vh - 450px)'
    }
}

function SubInventoryScreen(props: {
    screenName: InventoryGameScreens
}) {
    const {screenName} = props;
    const data = useSelector((store: IStore) => 
        store.gameStage[screenName].usableOptions) as 
        (IItem | IMutation | ICyber | IWizardItem | IGuildItem | IArmouryItem)[];

    const dispatch = useDispatch();

    const [craftOpen, setCraftOpen] = useState<IArmouryItem|null>(null);

    const subInventoryMappingListeners: Record<InventoryGameScreens, 
        (data: IItem | IMutation | ICyber | IWizardItem | IGuildItem | IArmouryItem) => void> = {
        [InventoryGameScreens.armoury]: (data) => {
            setCraftOpen(data as IArmouryItem);
        },
        [InventoryGameScreens.wizardShop]: (data) => {
            dispatch(gameSquad.actions.buyItem(data));
        },
        [InventoryGameScreens.cyberLab]: (data) => {
            dispatch(gameSquad.actions.implementCyber(data));
        },
        [InventoryGameScreens.mutaLab]: (data) => {
            dispatch(gameSquad.actions.mutateMutation(data));
        },
        [InventoryGameScreens.market]: (data) => {
            dispatch(gameSquad.actions.buyItem(data));
        },
        [InventoryGameScreens.guildShop]: (data) => {
            dispatch(gameSquad.actions.buyItem(data));
        },
    }

    const resource = useSelector((store: IStore) => 
        store.gameSquad.resources[subInventoryMappings[screenName].resource]);

    if (data.length === 0) {
        return null
    }
    
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
            && screenName !== InventoryGameScreens.mutaLab),
        data_for_right_hand: data.filter(item => item.inventoryPlace === InventoryPlace.rightHand 
            && screenName !== InventoryGameScreens.mutaLab),
        data_for_both_hands: data.filter(item => item.inventoryPlace === InventoryPlace.bothHands),
        data_for_belt: data.filter(item => item.inventoryPlace === InventoryPlace.belt),
        data_for_left_pocket: data.filter(item => item.inventoryPlace === InventoryPlace.leftPocket),
        data_for_right_pocket: data.filter(item => item.inventoryPlace === InventoryPlace.rightPocket),
        data_for_legs: data.filter(item => item.inventoryPlace === InventoryPlace.legs)
    }

    const SubInventoryScreenItemContextData = {
        screenName,
        resource,
        listener: subInventoryMappingListeners[screenName],
        buttonText: subInventoryMappings[screenName].button
    }

    return (
        <div className={styles.SubInventoryScreen}>
            {
                craftOpen && <CraftScreen 
                    armouryItem={craftOpen}
                    leaveListener={() => setCraftOpen(null)}
                />
            }
            <h3 className={styles.SubInventoryScreen_header}>
                {
                    subInventoryMappings[screenName].title
                }
            </h3>            
            <div 
                className={styles.SubInventoryScreen_body}
                style={{maxHeight: subInventoryMappings[screenName].maxHeight}}
            >
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