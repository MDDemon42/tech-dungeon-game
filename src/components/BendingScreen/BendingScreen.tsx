import { useDispatch, useSelector } from "react-redux";
import { BendingGameScreens } from "../../enums-and-interfaces/enums"
import { IBending, IBendingMapping, IStore } from "../../enums-and-interfaces/interfaces";
import BendingScreenItem from "./BendingScreenItem";
import character from "../../redux/slices/character";
import styles from './BendingScreen.module.css';

function BendingScreen(props: {
    screenName: BendingGameScreens
}) {
    const char = useSelector((store: IStore) => store.character);

    const charMind: string[] = [];
    char.general.mind.masteries.map((data) => charMind.push(data.name));
    char.general.mind.bending.map((data) => charMind.push(data.name));

    const {screenName} = props;
    const bendingOptions = useSelector((store: IStore) => store.gameStage[screenName].usableOptions);

    const dispatch = useDispatch();

    if (bendingOptions.length === 0) {
        return null
    }

    const bendingMappings: Record<BendingGameScreens, IBendingMapping> = {
        [BendingGameScreens.airSite]: {
            title: chrome.i18n.getMessage('air_site_title'),
            button: chrome.i18n.getMessage('dominate'),
            listener: (data: IBending) => {
                dispatch(character.actions.dominateBending(data));
            }, 
        },
        [BendingGameScreens.fireSite]: {
            title: chrome.i18n.getMessage('fire_site_title'),
            button: chrome.i18n.getMessage('dominate'),
            listener: (data: IBending) => {
                dispatch(character.actions.dominateBending(data));
            }
        },
        [BendingGameScreens.iceSite]: {
            title: chrome.i18n.getMessage('ice_site_title'),
            button: chrome.i18n.getMessage('dominate'),
            listener: (data: IBending) => {
                dispatch(character.actions.dominateBending(data));
            }
        }
    }

    return (
        <div className={styles.BendingScreen}>
            <h3 className={styles.BendingScreen_header}>
                {
                    bendingMappings[screenName].title
                }
            </h3>
            <div className={styles.BendingScreen_body}>
                {
                    bendingOptions && bendingOptions.map(bending => 
                         <BendingScreenItem 
                            bending={bending as IBending}
                            buttonText={bendingMappings[screenName].button}
                            listener={bendingMappings[screenName].listener}
                            charMind={charMind}
                            capacity={char.params.level}
                            posessed={char.general.mind.bending.length}
                        />
                    )
                }
            </div>          
        </div>
    )
}

export default BendingScreen