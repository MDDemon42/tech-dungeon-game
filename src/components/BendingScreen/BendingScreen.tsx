import { useDispatch, useSelector } from "react-redux";
import { BendingGameScreens } from "../../enums-and-interfaces/enums"
import { IBending, IBendingMapping, IStore } from "../../enums-and-interfaces/interfaces";
import BendingScreenItem from "./BendingScreenItem";
import gameSquad from "../../redux/slices/gameSquad";
import styles from './BendingScreen.module.css';
import gameStage from "../../redux/slices/gameStage";

function BendingScreen(props: {
    screenName: BendingGameScreens
}) {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const member = useSelector((store: IStore) => store.gameSquad.squadMembers[index]);

    const memberMind: string[] = [];
    member.general.mind.masteries.map(data => memberMind.push(data.name));
    member.general.mind.bending.map(data => memberMind.push(data.name));

    const {screenName} = props;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const bendingOptions = useSelector((store: IStore) => store.gameStage[screenName].options?.[stage]);

    const dispatch = useDispatch();

    const bendingMappings: Record<BendingGameScreens, IBendingMapping> = {
        [BendingGameScreens.airSite]: {
            title: chrome.i18n.getMessage('air_site_title'),
            button: chrome.i18n.getMessage('dominate'),
            listener: (data: IBending) => {
                dispatch(gameSquad.actions.dominateBending({index, data}));
            },
            upgradeButtons: [
                {
                    title: 'Thunder punch',
                    stage: 2,
                    disabled: stage !== 1
                },
                {
                    title: 'Air deprivation',
                    stage: 3,
                    disabled: stage !== 2
                },
            ]
        },
        [BendingGameScreens.fireSite]: {
            title: chrome.i18n.getMessage('fire_site_title'),
            button: chrome.i18n.getMessage('dominate'),
            listener: (data: IBending) => {
                dispatch(gameSquad.actions.dominateBending({index, data}));
            },
            upgradeButtons: [
                {
                    title: 'Fire ball',
                    stage: 2,
                    disabled: stage !== 1
                },
                {
                    title: 'Fire wave',
                    stage: 3,
                    disabled: stage !== 2
                },
            ]
        },
        [BendingGameScreens.iceSite]: {
            title: chrome.i18n.getMessage('ice_site_title'),
            button: chrome.i18n.getMessage('dominate'),
            listener: (data: IBending) => {
                dispatch(gameSquad.actions.dominateBending({index, data}));
            },
            upgradeButtons: [
                {
                    title: 'Ice spear',
                    stage: stage + 1,
                    disabled: stage !== 1 && stage !== 3
                },
                {
                    title: 'Ice hail',
                    stage: stage + 2,
                    disabled: stage !== 1 && stage !== 2
                },
                {
                    title: 'Cold death',
                    stage: stage + 10,
                    disabled: stage < 2 || stage > 10
                },
            ]
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
            <div className={styles.BendingScreen_buttons}>
                {
                    bendingMappings[screenName].upgradeButtons.map(option => (
                        <button 
                            onClick={() => dispatch(gameStage.actions.changeStage({
                                zone: screenName,
                                stage: option.stage
                            }))}
                            disabled={option.disabled}
                        >
                            {option.title}
                        </button>
                    ))
                } 
            </div>            
        </div>
    )
}

export default BendingScreen