import { useSelector } from 'react-redux';
import styles from './SquadScreen.module.css';
import { IStore } from '../../enums-and-interfaces/interfaces';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import images from '../../images/images';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import { classToIcon } from '../../helpers/classIconRelates';

function SquadScreen() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const squad = useSelector((store: IStore) => store.gameSquad.squadMembers);
    const user = squad[index]; 

    const dispatch = useDispatch();
    const showProfileHandler = (clickedIndex: number) => {
        if (index !== clickedIndex) {
            dispatch(gameSquad.actions.changeSquadMember(clickedIndex));
        }
    }

    return (
        <div className={styles.SquadScreen}>
            <div className={styles.SquadScreen_squadMembers}>
                {
                    Array(5).fill(0).map((_, index: number) => {
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
            <ProfileScreen character={user}/>
        </div>        
    )   
}

export default SquadScreen