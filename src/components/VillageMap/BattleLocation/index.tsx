import { EmojiAngryFill } from 'react-bootstrap-icons';
import styles from './index.module.css';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../../enums-and-interfaces/interfaces';
import { useNavigate } from 'react-router-dom';
import { PossibleBattleLocation } from '../../../enums-and-interfaces/enums';

const possibleBattleLocations: Record<PossibleBattleLocation, {}> = {
    'acrossTheRiver': { left: '51px', top: '51px' },
    'nearTheRiver': { left: '140px', top: '70px' },
    'overTheMountains': { left: '10px', top: '170px' },
    'eastBeach': { left: '320px', top: '155px' },
    'islandBeach': { left: '340px', top: '355px' },
    'southBeach': { left: '110px', top: '355px' }
};

const BattleLocation = (props: {
    battle: {
        location: PossibleBattleLocation;
        sinceDay: number;
    }
}) => {
    const {battle} = props;

    const gameStageDays = useSelector((store: IStore) => store.gameStage.days);

    const navigate = useNavigate();

    const battleLocationSize = useMemo(() => {
        let result = 25 + (gameStageDays.total - battle.sinceDay) * 5;

        if (result > 80) {
            result = 80;
        }

        return result;
    }, [gameStageDays.total, battle.sinceDay])

    return (
        <button 
            onClick={() => {
                navigate('/battle');
            }}
            className={styles.BattleLocation}
            title={chrome.i18n.getMessage('to_battle_screen_button_title')}
            style={possibleBattleLocations[battle.location]}
        >
            <EmojiAngryFill size={battleLocationSize}/>
        </button>
    )
}

export default BattleLocation