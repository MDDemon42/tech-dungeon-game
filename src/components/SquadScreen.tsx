import { useSelector } from 'react-redux';
import styles from '../index.module.css';
import { IStore } from '../types/interfaces';
import ProfileScreen from './ProfileScreen';
import BackpacksScreen from './BackpacksScreen';
import CommonIcon from './CommonIcon';
import images from '../images/images';
import {BoxSeam, BoxSeamFill} from 'react-bootstrap-icons';
import { backpacksCapability } from '../functions/putItemInBackpacks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import gameSquad from '../redux/slices/gameSquad';

function SquadScreen() {
    const [showBackpacks, setShowBackpacks] = useState(false);
    const showBackpacksHandler = () => {
        setShowBackpacks((state) => !state)
    }

    const dispatch = useDispatch();

    const [showProfile, setShowProfile] = useState(false);
    const showProfileHandler = (index: number) => {
        dispatch(gameSquad.actions.changeSquadMember(index));
        setShowProfile((state) => !state);
    }

    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);
    const currentBackpacksItemsAmount = useSelector((store: IStore) => store.gameSquad.squadBackpacks.items.length);

    const user = squad[index]!; 

    const backpacksFullCheck = currentBackpacksItemsAmount < backpacksCapability(squad);

    return (
        <div className={styles.squadScreen}>
            <div className={styles.squadScreen_squadMembers}>
                {
                    Object.keys(squad).map(key => {
                        if (!!squad[key]) {
                            return <img 
                                src={images.classIcons[squad[key].params.class]}
                                title={squad[key].params.name}
                                onClick={() => showProfileHandler(Number(key))}
                            />
                        }

                        return <img 
                            src={images.classIcons.noIcon}
                            style={{cursor: 'default'}}
                        />
                    })
                }
                {
                    backpacksFullCheck ?
                        <BoxSeam onClick={showBackpacksHandler} title='Backpacks'/> :
                        <BoxSeamFill onClick={showBackpacksHandler} title='Backpacks'/>
                }                
            </div>
            <div className={styles.squadScreen_profileScreen}>
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