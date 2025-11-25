import { useDispatch, useSelector } from 'react-redux';
import { ICommon, IStore } from '../../../enums-and-interfaces/interfaces';
import styles from './index.module.css';
import LivingRoomOption from './LivingRoomOption';
import gameSquad from '../../../redux/slices/gameSquad';
import images from '../../../images/images';
import academyMasteries from '../../Academy/masteries';

export interface ILivingRoomOption {
    data: ICommon,
    buttonText: string,
    buttonDisabled: boolean,
    visible: boolean,
    listener: () => void
}

function LivingRoom() {
    const mansionStage = useSelector((store: IStore) => store.gameStage.Mansion.stage);

    const memberMasteriesNames = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[store.gameSquad.currentlyWatched]
            .general.mind.masteries).map(mastery => mastery.name);

    const squadResources = useSelector((store: IStore) => store.gameSquad.resources);
    const memberParams = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[store.gameSquad.currentlyWatched].params);
     
    const dispatch = useDispatch();

    const livingRoomOptions: ILivingRoomOption[] = [
        {
            data: {
                name: chrome.i18n.getMessage('sleep_title'),
                description: chrome.i18n.getMessage('sleep_description'),
                image: images.misc.sleep
            },
            buttonText: chrome.i18n.getMessage('sleep_title'),
            buttonDisabled: false,
            visible: true,
            listener: () => {
                dispatch(gameSquad.actions.relaxate({}));
            }
        },
        {
            data: {
                name: chrome.i18n.getMessage('eat_title'),
                description: chrome.i18n.getMessage('eat_description'),
                image: images.misc.eat
            },
            buttonText: chrome.i18n.getMessage('eat_title'),
            buttonDisabled: 
                memberParams.currentParams.Satiety >= memberParams.maxParams.Satiety ||
                squadResources.Food === 0,
            visible: true,
            listener: () => {
                dispatch(gameSquad.actions.eatFood({}));
            }
        },
        {
            data: {
                name: chrome.i18n.getMessage('train_title'),
                description: chrome.i18n.getMessage('train_description'),
                image: images.misc.training
            },
            buttonText: chrome.i18n.getMessage('train_title'),
            buttonDisabled: 
                memberParams.currentParams.Stamina < 3 ||
                memberParams.strength === 5,
            visible: true,
            listener: () => {
                dispatch(gameSquad.actions.raiseStrength(1));

                dispatch(gameSquad.actions.spendStamina(3));
            }
        },
        {
            data: academyMasteries.axeAffiliation,
            buttonText: chrome.i18n.getMessage('learn'),
            buttonDisabled: memberMasteriesNames.includes(academyMasteries.axeAffiliation.name),
            visible: mansionStage % 11 === 0,
            listener: () => {
                dispatch(gameSquad.actions.learnMastery(academyMasteries.axeAffiliation))
            }
        },
        {
            data: academyMasteries.swordAffiliation,
            buttonText: chrome.i18n.getMessage('learn'),
            buttonDisabled: memberMasteriesNames.includes(academyMasteries.swordAffiliation.name),
            visible: mansionStage % 11 === 0,
            listener: () => {
                dispatch(gameSquad.actions.learnMastery(academyMasteries.swordAffiliation))
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