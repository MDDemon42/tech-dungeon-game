import styles from '../index.module.css';
import C from '../redux/constants';

import MarketScreen from '../components/MarketScreen';
import BattleScreen from "../components/BattleScreen";
import InventoryScreen from '../components/InventoryScreen';
import SpellShopScreen from '../components/SpellShopScreen';
import FocusSiteScreen from '../components/FocusSiteScreen';
import AcademyScreen from '../components/AcademyScreen';
import CyberLabScreen from '../components/CyberLabScreen';
import MutationLabScreen from '../components/MutationLabScreen';

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import userParams from '../redux/slices/userParams';
import generalUser from '../redux/slices/generalUser';

function GamePage() { 
    const dispatch = useDispatch();
      
    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            dispatch(userParams.actions.setState(result[C.name].userParams));
            dispatch(generalUser.actions.setState(result[C.name].generalUser));
        })
    }, [])

    return (
        <div className={styles.gamePage}>
            <div className={styles.gamePage_componentsBlock}>
                <InventoryScreen />
            </div>
            <div className={styles.gamePage_mainBlock}>
                <BattleScreen />
                <MarketScreen/>
                <AcademyScreen/>
                <SpellShopScreen/>
                <FocusSiteScreen/>
                <CyberLabScreen/>
                <MutationLabScreen/>
            </div>
        </div>
    )
}

export default GamePage

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
