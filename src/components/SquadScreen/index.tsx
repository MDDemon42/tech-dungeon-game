import { useSelector } from 'react-redux';
import styles from './index.module.css';
import { IStore } from '../../enums-and-interfaces/interfaces';
import ProfileScreen from '../ProfileScreen';
import images from '../../images/images';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import { classToIcon } from '../../helpers/classIconRelates';
import { Inboxes, InboxesFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import StorageScreen from './StorageScreen';

function SquadScreen() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);
    const user = squad[index]; 

    const [storageScreenOpen, setStorageScreenOpen] = useState(false);
    const storageIconListener = () => {
        setStorageScreenOpen(value => !value);
    }

    const mansionStage = useSelector((store: IStore) => store.gameStage.Mansion.stage);
    let squadSize = 1;
    if (mansionStage > 0) {
        if (mansionStage % 2 === 0) {
            squadSize++;
        }

        if (mansionStage % 3 === 0) {
            squadSize += 3;
        }
    }

    const dispatch = useDispatch();
    const showProfileHandler = (clickedIndex: number) => {
        if (index !== clickedIndex) {
            dispatch(gameSquad.actions.changeSquadMember(clickedIndex));
        }
    }

    return (
        <div className={styles.SquadScreen}>
            <div className={styles.SquadAndStorage}>
                <div className={styles.SquadBar}
                    style={{height: (squadSize * 42) + 'px'}}
                >
                    {
                        Array(squadSize).fill(0).map((_, index: number) => {
                            if (!!squad[index]) {
                                return <img 
                                    src={images.classIcons[classToIcon(squad[index].params.class) as keyof typeof images.classIcons]}
                                    title={squad[index].params.name}
                                    onClick={() => showProfileHandler(index)}
                                    alt='squadMember'
                                />
                            }

                            return <img 
                                src={images.classIcons.noIcon}
                                style={{cursor: 'default'}}
                                alt='emptySquadSlot'
                            />
                        })
                    }              
                </div>
                {
                    mansionStage > 0 && (
                        storageScreenOpen ?
                        <InboxesFill
                            className={styles.StorageIcon}
                            onClick={storageIconListener}
                            title={chrome.i18n.getMessage('close_storage')}
                        /> :
                        <Inboxes
                            className={styles.StorageIcon}
                            onClick={storageIconListener}
                            title={chrome.i18n.getMessage('open_storage')}
                        />
                    )                    
                }                
                {
                    storageScreenOpen && <StorageScreen/>
                }
            </div>
            <ProfileScreen character={user}/>
        </div>        
    )   
}

export default SquadScreen