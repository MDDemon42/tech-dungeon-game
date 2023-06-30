import styles from '../index.module.css';
import C from '../redux/constants';
import ProfileScreen from '../components/ProfileScreen';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import GameScreen from '../components/GameScreen';
import gameSquad from '../redux/slices/gameSquad';

function GamePage() { 
    const dispatch = useDispatch();
      
    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            if (result[C.name]) {
                dispatch(gameSquad.actions.setState(result[C.name].gameSquad));
            }
        })
    }, [])

    return (
        <div className={styles.gamePage}>
            <ProfileScreen/>
            <GameScreen/>
        </div>
    )
}

export default GamePage