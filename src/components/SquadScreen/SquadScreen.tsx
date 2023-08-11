import { useSelector } from 'react-redux';
import styles from './SquadScreen.module.css';
import { IStore } from '../../enums-and-interfaces/interfaces';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import BackpacksScreen from '../BackpacksScreen/BackpacksScreen';
import images from '../../images/images';
import {BoxSeam, BoxSeamFill} from 'react-bootstrap-icons';
import { getBackpacksCapability } from '../../helpers/backpacksPutter';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import { classToIcon } from '../../helpers/classIconRelates';

function SquadScreen() {
    const [showBackpacks, setShowBackpacks] = useState(false);
    const showBackpacksHandler = () => {
        setShowBackpacks((state) => !state)
    }

    const dispatch = useDispatch();

    const gameScreen = useSelector((store: IStore) => store.gameScreen);
    const {screen, shouldShowBackpacks} = gameScreen;

    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const showProfileHandler = (clickedIndex: number) => {
        if (index !== clickedIndex) {
            dispatch(gameSquad.actions.changeSquadMember(clickedIndex));
        }
    }

    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);

    const currentBackpacksItemsAmount = useSelector((store: IStore) => store.gameSquad.squadBackpacks.items.length);

    const backpacksFullCheck = currentBackpacksItemsAmount < getBackpacksCapability(squad);
    
    const user = squad[index]!; 

    useEffect(() => {
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
                                src={images.classIcons[classToIcon(squad[index].params.class)]}
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
                <ProfileScreen character={user}/>
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