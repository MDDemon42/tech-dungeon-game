import { useDispatch } from 'react-redux';
import { BattleResult, InventoryGameScreens, TaskStatus } from '../../../enums-and-interfaces/enums';
import { IBigResource, IItem } from '../../../enums-and-interfaces/interfaces';
import gameScreen from '../../../redux/slices/gameScreen';
import gameStage from '../../../redux/slices/gameStage';
import { useNavigate } from 'react-router-dom';
import gameSquad, { createGameSquad } from '../../../redux/slices/gameSquad';
import { removeGameTabs } from '../../../helpers/removeGameTabs';
import BattleOverScreen from '../BattleOverScreen';

const BattleResultScreen = (props: {
    battleResult: BattleResult,
    tropheys: (IItem | IBigResource)[]
}) => {
    const {battleResult, tropheys} = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showTropheys = () => {
        dispatch(gameStage.actions.setUsableOptions({
            screen: InventoryGameScreens.tropheyField,
            stage: 0,
            options: {0: tropheys}
        }));

        dispatch(gameStage.actions.changeStage({
            zone: InventoryGameScreens.tropheyField,
            stage: 1
        }))

        dispatch(gameStage.actions.updateTask({
            screen: InventoryGameScreens.tropheyField,
            stage: 2,
            status: TaskStatus.unknown
        }))

        dispatch(gameScreen.actions.changeScreen(InventoryGameScreens.tropheyField));
        
        setTimeout(() => navigate('/game'), 0);
    }

    const setGameOver = () => {
        dispatch(gameSquad.actions.setState(createGameSquad()));

        removeGameTabs();
    }

    if (battleResult === BattleResult.lose) {
        return <BattleOverScreen 
            result={battleResult} 
            listener={setGameOver}
        />
    }

    if (battleResult === BattleResult.win) {
        return <BattleOverScreen 
            result={battleResult} 
            listener={showTropheys}
        />
    }

    return null
}

export default BattleResultScreen