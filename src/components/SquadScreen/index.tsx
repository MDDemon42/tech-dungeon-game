import { useSelector } from 'react-redux';
import styles from './index.module.css';
import { IStore } from '../../enums-and-interfaces/interfaces';
import ProfileScreen from '../ProfileScreen';
import images from '../../images/images';
import { classToIcon } from '../../helpers/classIconRelates';

function SquadScreen() {
    const char = useSelector((store: IStore) => store.character);

    return (
        <div className={styles.SquadScreen}>
            <div className={styles.SquadAndStorage}>
                <div className={styles.SquadBar}
                    style={{height: '42px'}}
                >
                    <img 
                        src={images.classIcons[classToIcon(char.params.class) as keyof typeof images.classIcons]}
                        title={char.params.name}
                        alt='squadMember'
                    />                                  
                </div>
            </div>
            <ProfileScreen character={char}/>
        </div>        
    )   
}

export default SquadScreen