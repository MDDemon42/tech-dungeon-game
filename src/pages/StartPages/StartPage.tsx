import {useSelector, useDispatch} from 'react-redux';
import styles from './StartPage.module.css';
import { IStore } from '../../enums-and-interfaces/interfaces';
import { useEffect } from 'react';
import C from '../../redux/constants';
import gameStage from '../../redux/slices/gameStage';
import StartMiniScreen from '../../components/StartMiniScreen';
import gameSquad from '../../redux/slices/gameSquad';

export function upperCaseFirstLetter(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1)
}

function StartPage() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const member = useSelector((store: IStore) => store.gameSquad.squadMembers[index]);

    const dispatch = useDispatch();

    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            if (result[C.extensionStorageName]) {
                dispatch(gameSquad.actions.setState(result[C.extensionStorageName].gameSquad));

                dispatch(gameStage.actions.setState(result[C.extensionStorageName].gameStage));
            }
        });       
    }, [dispatch]) 

    const startPageWidth = `${180 * ( 1 + Number(!!member.params.level))}px`;

    return (
        <div 
            className={styles.StartPage}
            style={{width: startPageWidth}}
        >
            <StartMiniScreen />
            { member.params.level > 0 && <StartMiniScreen char={member}/> }                    
        </div>
    )
}

export default StartPage