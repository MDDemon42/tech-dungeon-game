import { useDispatch, useSelector } from 'react-redux';
import { ICommon, IStore } from '../../../enums-and-interfaces/interfaces';
import styles from './index.module.css';
import LivingRoomOption from './LivingRoomOption';
import gameSquad from '../../../redux/slices/gameSquad';
import images from '../../../images/images';

function LivingRoom() {
    const memberParams = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[store.gameSquad.currentlyWatched].params);
     
    const dispatch = useDispatch();

    const livingRoomOptions: {
        data: ICommon,
        buttonText: string,
        buttonDisabled: boolean,
        listener: () => void
    }[] = [
        {
            data: {
                name: chrome.i18n.getMessage('sleep_title'),
                description: chrome.i18n.getMessage('sleep_description'),
                image: images.misc.sleep
            },
            buttonText: chrome.i18n.getMessage('sleep_title'),
            buttonDisabled: false,
            listener: () => {
                dispatch(gameSquad.actions.relaxate({}));

                dispatch(gameSquad.actions.regenerate({}));
            }
        },
        {
            data: {
                name: chrome.i18n.getMessage('train_title'),
                description: chrome.i18n.getMessage('train_description'),
                image: images.misc.training
            },
            buttonText: chrome.i18n.getMessage('train_title'),
            buttonDisabled: memberParams.currentParams.Stamina < 3,
            listener: () => {
                dispatch(gameSquad.actions.raiseStrength(1));

                dispatch(gameSquad.actions.spendStamina(3));
            }
        }
    ]

    return (
        <div className={styles.LivingRoom}>
            <h3 className={styles.LivingRoom_header}>
                {chrome.i18n.getMessage('living_room')}
            </h3>
            <div className={styles.LivingRoom_body}>
                {
                    livingRoomOptions.map(option => (
                        <LivingRoomOption {...option} />
                    ))
                }
            </div>                  
        </div>
    )
}

export default LivingRoom