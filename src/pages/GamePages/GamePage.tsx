import styles from './GamePage.module.css';
import C from '../../redux/constants';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import GameScreen from '../../screens/GameScreen/GameScreen';
import gameSquad from '../../redux/slices/gameSquad';
import SquadScreen from '../../components/SquadScreen/SquadScreen';
import gameStage from '../../redux/slices/gameStage';

function GamePage() { 
    const dispatch = useDispatch();
      
    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            if (result[C.extensionStorageName]) {
                dispatch(gameSquad.actions.setState(result[C.extensionStorageName].gameSquad));

                dispatch(gameStage.actions.setState(result[C.extensionStorageName].gameStage));
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