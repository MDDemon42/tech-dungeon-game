import { useSelector } from 'react-redux';
import styles from './SquadScreen.module.css';
import { IStore } from '../../enums-and-interfaces/interfaces';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import BackpacksScreen from '../BackpacksScreen/BackpacksScreen';
import images from '../../images/images';
import {BoxSeam, BoxSeamFill} from 'react-bootstrap-icons';
import { backpacksCapability } from '../../helpers/backpacksPutter';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';

function SquadScreen() {
    const [showBackpacks, setShowBackpacks] = useState(false);
    const showBackpacksHandler = () => {
        setShowBackpacks((state) => !state)
    }

    const dispatch = useDispatch();

    const gameScreen = useSelector((store: IStore) => store.gameScreen);
    const {screen, shouldShowBackpacks, shouldShowProfile} = gameScreen;

    const [showProfile, setShowProfile] = useState(false);

    const showProfileHandler = (index: number) => {
        dispatch(gameSquad.actions.changeSquadMember(index));
        setShowProfile((state) => !state);
    }

    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);

    const currentBackpacksItemsAmount = useSelector((store: IStore) => store.gameSquad.squadBackpacks.items.length);

    const backpacksFullCheck = currentBackpacksItemsAmount < backpacksCapability(squad);
    
    const user = squad[index]!; 

    useEffect(() => {
        if (shouldShowProfile) {
            setShowProfile(true);
        }

        if (shouldShowBackpacks) {
            setShowBackpacks(true);
        }
    }, [screen]);

    return (
        <div className={styles.SquadScreen}>
            <div className={styles.SquadScreen_squadMembers}>
                {
                    Array(5).fill(0).map((value, index: number) => {
                        if (!!squad[index]) {
                            return <img 
                                src={images.classIcons[squad[index].params.class]}
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
                {
                    backpacksFullCheck ?
                        <BoxSeam onClick={showBackpacksHandler} title='Backpacks'/> :
                        <BoxSeamFill onClick={showBackpacksHandler} title='Backpacks'/>
                }                
            </div>
            <div className={styles.SquadScreen_profileScreen}>
                {
                    showProfile ?
                        <ProfileScreen character={user}/> :
                        null
                }                
                {
                    showBackpacks ? 
                        <BackpacksScreen/> :
                        null
                } 
            </div>                       
        </div>        
    )   
}

export default SquadScreen