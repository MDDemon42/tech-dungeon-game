import styles from '../index.module.css';
import C from '../redux/constants';
import InventoryScreen from '../components/InventoryScreen';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import userParams from '../redux/slices/userParams';
import generalUser from '../redux/slices/generalUser';
import GameScreen from '../components/GameScreen';

function GamePage() { 
    const dispatch = useDispatch();
      
    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            if (result[C.name]) {
                dispatch(userParams.actions.setState(result[C.name].userParams));
                dispatch(generalUser.actions.setState(result[C.name].generalUser));
            }
        })
    }, [])

    return (
        <div className={styles.gamePage}>
            <InventoryScreen/>
            <GameScreen/>
        </div>
    )
}

export default GamePage