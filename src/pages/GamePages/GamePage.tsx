import styles from './GamePage.module.css';
import C from '../../redux/constants';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import GameScreen from '../../components/GameScreen/GameScreen';
import gameSquad from '../../redux/slices/gameSquad';
import SquadScreen from '../../components/SquadScreen/SquadScreen';

function GamePage() { 
    const dispatch = useDispatch();
      
    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            if (result[C.extensionStorageName]) {
                dispatch(gameSquad.actions.setState(result[C.extensionStorageName].gameSquad));
            }
        })
    }, [])

    return (
        <div className={styles.GamePage}>
            <SquadScreen/>
            <GameScreen/>
        </div>
    )
}

export default GamePage