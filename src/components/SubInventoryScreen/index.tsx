import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
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
    },
    [InventoryGameScreens.wizardShop]: {
        resource: UserResource.gem,
        title: chrome.i18n.getMessage('wizard_shop_title'),
        button: chrome.i18n.getMessage('buy'),
    },
    [InventoryGameScreens.cyberLab]: {
        resource: UserResource.core,
        title: chrome.i18n.getMessage('cyber_lab_title'),
        button: chrome.i18n.getMessage('implement'),
    },
    [InventoryGameScreens.mutaLab]: {
        resource: UserResource.gene,
        title: chrome.i18n.getMessage('muta_lab_title'),
        button: chrome.i18n.getMessage('mutate'),
    },
    [InventoryGameScreens.market]: {
        resource: UserResource.gem,
        title: chrome.i18n.getMessage('market_title'),
        button: chrome.i18n.getMessage('buy'),
    },
    [InventoryGameScreens.guildShop]: {
        resource: UserResource.gem,
        title: chrome.i18n.getMessage('guild_shop_title'),
        button: chrome.i18n.getMessage('buy'),
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
        data_for_hat: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.hat),
        data_for_head: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.head),
        data_for_eyes: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.eyes),
        data_for_chin: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.chin),
        data_for_skin: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.skin),
        data_for_back: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.back),
        data_for_armor: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.armor),
        data_for_shoulders: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.shoulders),
        data_for_tail: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.tail),
        data_for_one_hand: data.filter(item => (
            (item.inventoryPlaces.includes(InventoryPlace.rightHand) && screenName !== InventoryGameScreens.mutaLab) || 
            (item.inventoryPlaces.includes(InventoryPlace.leftHand) && screenName !== InventoryGameScreens.mutaLab) || 
            (item.inventoryPlaces.includes(InventoryPlace.extraLeftHand) && screenName !== InventoryGameScreens.mutaLab) || 
            (item.inventoryPlaces.includes(InventoryPlace.extraRightHand) && screenName !== InventoryGameScreens.mutaLab)
        )),
        data_for_two_hands: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.bothHands),
        data_for_belt: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.belt),
        data_for_hips: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.leftHip ||
            item.inventoryPlaces[0] === InventoryPlace.rightHip),
        data_for_pockets: data.filter(item => item.inventoryPlaces.includes(InventoryPlace.leftPocket) || item.inventoryPlaces.includes(InventoryPlace.rightPocket)),
        data_for_legs: data.filter(item => item.inventoryPlaces[0] === InventoryPlace.legs)
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