import { useDispatch } from "react-redux";
import { UserStartClass } from "../../enums-and-interfaces/enums";
import styles from './index.module.css';
import { Gear, InfoCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { removeGameTabs } from "../../helpers/removeGameTabs";
import gameSquad from "../../redux/slices/gameSquad";
import gameStage, { createGameStage } from "../../redux/slices/gameStage";

const StartButtonComponent = (props: {
    start: boolean,
    charName: string,
    charClass: UserStartClass
}) => {
    const {start, charClass, charName} = props;
    const startButtonText = start ? 
        chrome.i18n.getMessage('main_page_start') :
        chrome.i18n.getMessage('main_page_continue');

    const dispatch = useDispatch();

    const startButtonListener = async () => {
        await removeGameTabs();

        if (start) {
            dispatch(gameSquad.actions.startGame({
                charName,
                charClass,
            }));
            dispatch(gameStage.actions.setState(createGameStage(false)));
        }       

        window.open('#/game');
    }

    return (
        <div className={styles.StartButtonComponent}>
            <button 
                disabled={charClass === UserStartClass.noIcon}
                onClick={startButtonListener}
            >
                {startButtonText}
            </button>
            {
                start ?
                    <Link 
                        title='Settings'
                        to={'settings'}
                    >
                        <Gear/> 
                    </Link> :
                    <InfoCircle 
                        title='Info'
                        size={24}
                        onClick={() => window.open('#/info')}
                    />
            }
        </div> 
    )
}

export default StartButtonComponent