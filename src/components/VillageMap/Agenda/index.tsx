import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import gameSquad from '../../../redux/slices/gameSquad';
import gameStage from '../../../redux/slices/gameStage';
import CommonIcon from '../../Icons/CommonIcon';
import images from '../../../images/images';
import { IStore } from '../../../enums-and-interfaces/interfaces';
import { useMemo } from 'react';
import { PossibleBattleLocation } from '../../../enums-and-interfaces/enums';

const VillageMapAgenda = () => {
    const gameStageStore = useSelector((store: IStore) => store.gameStage);
    const {days, possibleBattles} = gameStageStore;
    const dispatch = useDispatch();

    const currentBattles = useMemo(() => Object.keys(possibleBattles)
        .filter((key) => possibleBattles[key as PossibleBattleLocation].sinceDay > 0), [possibleBattles]);

    return (
        <div className={styles.VillageMapAgenda}>
            <span>Day: {days.total}</span>

            <button onClick={() => {
                dispatch(gameSquad.actions.relaxate({}));
                dispatch(gameStage.actions.addDays({amount: 1}));

                if (
                    (days.total - days.lastVictory) >= 
                    5 * (currentBattles.length + 1)
                ) {
                    dispatch(gameStage.actions.addRandomBattle({}));
                }
            }}>
                <CommonIcon item={{
                    name: chrome.i18n.getMessage('sleep_title'),
                    description: chrome.i18n.getMessage('sleep_description'),
                    image: images.misc.sleep
                }}/>
            </button>
        </div> 
    )
}

export default VillageMapAgenda