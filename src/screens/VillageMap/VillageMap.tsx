import { useDispatch } from "react-redux";
import { 
    MortarboardFill, Capsule, 
    Gear, Eye, Gem, Magic, 
    EmojiAngryFill, Fire,
    Wind, Snow2, Bank2,
    Tree, MinecartLoaded,
    ExclamationCircle
} from 'react-bootstrap-icons';
import gameScreens from '../../redux/slices/gameScreen';
import { GameScreens } from "../../enums-and-interfaces/enums";
import styles from './VillageMap.module.css';
import { useNavigate } from "react-router-dom";
import { ReactElement, useState } from "react";
import images from "../../images/images";
import { useSelector } from "react-redux";
import { IStore } from "../../enums-and-interfaces/interfaces";
import InteractiveItemOnMap from "./InteractiveObjectOnMap";
import gameSquad from "../../redux/slices/gameSquad";
import items from "../../general/items";

import TaskScreen from "../../components/TaskScreen/TaskScreen";

function VillageMap() {
    const gameStageScreens = useSelector((store: IStore) => store.gameStage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<GameScreens|null>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const screenMappings: Partial<Record<GameScreens, {
        title: string,
        icon: ReactElement,
        houses: number[],
        requiredScreen: GameScreens,
        requiredStage: number
    }>> = {
        [GameScreens.market]: {
            requiredScreen: GameScreens.villageMap,
            requiredStage: 0,
            title: chrome.i18n.getMessage('market_to'),
            icon: <Gem size={25}/>,
            houses: [0, 1, 2, 3, 4, 5]
        },
        [GameScreens.cyberLab]: {
            requiredScreen: GameScreens.villageMap,
            requiredStage: 0,
            title: chrome.i18n.getMessage('cyber_lab_to'),
            icon: <Gear size={25}/>,
            houses: [20]
        },
        [GameScreens.mutationLab]: {
            requiredScreen: GameScreens.villageMap,
            requiredStage: 0,
            title: chrome.i18n.getMessage('mutation_lab_to'),
            icon: <Capsule size={25}/>,
            houses: [20]
        },
        [GameScreens.academy]: {
            requiredScreen: GameScreens.market,
            requiredStage: 1,
            title: chrome.i18n.getMessage('academy_to'),
            icon: <MortarboardFill size={25}/>,
            houses: [10, 11, 12, 13]
        },
        [GameScreens.wizardSchool]: {
            requiredScreen: GameScreens.academy,
            requiredStage: 1,
            title: chrome.i18n.getMessage('wizard_school_to'),
            icon: <Magic size={25}/>,
            houses: [18, 19]
        },
        [GameScreens.guildSchool]: {
            requiredScreen: GameScreens.market,
            requiredStage: 1,
            title: chrome.i18n.getMessage('guild_to'),
            icon: <Bank2 size={25}/>,
            houses: [14, 15, 16, 17]
        },
        [GameScreens.focusSchool]: {
            requiredScreen: GameScreens.guildSchool,
            requiredStage: 1,
            title: chrome.i18n.getMessage('focus_site_to'),
            icon: <Eye size={25}/>,
            houses: [9]
        },        
        [GameScreens.airSchool]: {
            requiredScreen: GameScreens.guildSchool,
            requiredStage: 1,
            title: chrome.i18n.getMessage('air_site_to'),
            icon: <Wind size={25}/>,
            houses: [7]
        },
        [GameScreens.fireSchool]: {
            requiredScreen: GameScreens.guildSchool,
            requiredStage: 1,
            title: chrome.i18n.getMessage('fire_site_to'),
            icon: <Fire size={25}/>,
            houses: [8]
        },
        [GameScreens.iceSchool]: {
            requiredScreen: GameScreens.guildSchool,
            requiredStage: 1,
            title: chrome.i18n.getMessage('ice_site_to'),
            icon: <Snow2 size={25}/>,
            houses: [6]
        }        
    }

    function goToListener(item: string) {
        dispatch(gameScreens.actions.changeScreen(item));
    }

    return (
        <div className={styles.VillageMap}>
            <img alt='map' src={images.misc.map}/>
            {
                taskScreenOpen && <TaskScreen 
                    screen={taskScreenOpen}
                    stage={1}
                    leaveListener={() => setTaskScreenOpen(null)}
                />
            }
            {
                Object.keys(screenMappings).map(item => {
                    if (gameStageScreens[item as GameScreens].stage === 0) {
                        if (
                            gameStageScreens[
                                screenMappings[item as GameScreens]!.requiredScreen
                            ].stage >= screenMappings[item as GameScreens]?.requiredStage!
                        ) {
                            return <button
                                onClick={() => setTaskScreenOpen(item as GameScreens)}
                                className={styles['VillageMap_icon_' + item]}
                                style={{border: 'none'}}
                                title={'Establish ' + item}
                            >
                                <ExclamationCircle size={25}/>
                            </button>
                        } else {
                            return null
                        }
                    }

                    return <InteractiveItemOnMap
                        listener={() => goToListener(item)}
                        item={item}
                        title={screenMappings[item as GameScreens]?.title || ''}
                        icon={screenMappings[item as GameScreens]?.icon || <></>}
                        houses={screenMappings[item as GameScreens]?.houses || []}
                    />
                })
            }
            <button 
                onClick={() => dispatch(gameSquad.actions.getBigResource(items.bigResources.wood))}
                className={styles.VillageMap_icon_Woods}
                title={chrome.i18n.getMessage('woods_to')}
            >
                <Tree size={25}/>
            </button>
            <button 
                onClick={() => dispatch(gameSquad.actions.getBigResource(items.bigResources.ore))}
                className={styles.VillageMap_icon_Mines}
                title={chrome.i18n.getMessage('mines_to')}
            >
                <MinecartLoaded size={25}/>
            </button>
            <button 
                onClick={() => navigate('/battle')}
                className={styles.VillageMap_icon_Battle}
                title={chrome.i18n.getMessage('to_battle_screen_button_title')}
            >
                <EmojiAngryFill size={25}/>
            </button>
        </div>
    )
}

export default VillageMap