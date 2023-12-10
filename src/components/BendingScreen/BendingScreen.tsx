import { useDispatch, useSelector } from "react-redux";
import { BendingGameScreens } from "../../enums-and-interfaces/enums"
import { IBending, IBendingMapping, IStore } from "../../enums-and-interfaces/interfaces";
import BendingScreenItem from "./BendingScreenItem";
import gameSquad from "../../redux/slices/gameSquad";
import styles from './BendingScreen.module.css';

function BendingScreen(props: {
    screenName: BendingGameScreens
}) {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const member = useSelector((store: IStore) => store.gameSquad.squadMembers[index]);

    const memberMind: string[] = [];
    member.general.mind.masteries.map(data => memberMind.push(data.name));
    member.general.mind.bending.map(data => memberMind.push(data.name));

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
                dispatch(gameSquad.actions.dominateBending({index, data}));
            }, 
        },
        [BendingGameScreens.fireSite]: {
            title: chrome.i18n.getMessage('fire_site_title'),
            button: chrome.i18n.getMessage('dominate'),
            listener: (data: IBending) => {
                dispatch(gameSquad.actions.dominateBending({index, data}));
            }
        },
        [BendingGameScreens.iceSite]: {
            title: chrome.i18n.getMessage('ice_site_title'),
            button: chrome.i18n.getMessage('dominate'),
            listener: (data: IBending) => {
                dispatch(gameSquad.actions.dominateBending({index, data}));
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
                            screenName={screenName}
                            memberMind={memberMind}
                            capacity={member.params.level}
                            posessed={member.general.mind.bending.length}
                        />
                    )
                }
            </div>          
        </div>
    )
}

export default BendingScreen