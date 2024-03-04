import { useDispatch } from "react-redux";
import { 
    HexagonHalf,
    MortarboardFill, Virus, 
    Tools, Eye, Magic, 
    EmojiAngryFill, Fire,
    Wind, Snow2, Bank2,
    Tree, MinecartLoaded,
    HouseFill, ShopWindow,
    ExclamationCircle
} from 'react-bootstrap-icons';
import gameScreens from '../../redux/slices/gameScreen';
import { GameScreens } from "../../enums-and-interfaces/enums";
import styles from './index.module.css';
import { useNavigate } from "react-router-dom";
import { ReactElement, useState } from "react";
import images from "../../images/images";
import { useSelector } from "react-redux";
import { IStore } from "../../enums-and-interfaces/interfaces";
import InteractiveItemOnMap from "./InteractiveObjectOnMap";
import gameSquad from "../../redux/slices/gameSquad";
import items from "../Market/items";
import TaskScreen from "../../components/TaskScreen";
import cybers from "../CyberLab/cybers";
import gameStage from "../../redux/slices/gameStage";
import { getWeaponAmount } from "../../helpers/gatherMultipleWeaponsAbilities";

export const screenMappings: Partial<Record<GameScreens, {
    title: string,
    icon: ReactElement,
    houses: number[],
    requiredScreen: GameScreens,
    requiredStage: number
}>> = {
    [GameScreens.academy]: {
        requiredScreen: GameScreens.market,
        requiredStage: 1,
        title: chrome.i18n.getMessage('academy_to'),
        icon: <MortarboardFill size={25}/>,
        houses: [10, 11, 12, 13]
    },
    [GameScreens.airSite]: {
        requiredScreen: GameScreens.guildSchool,
        requiredStage: 1,
        title: chrome.i18n.getMessage('air_site_to'),
        icon: <Wind size={25}/>,
        houses: [7]
    },
    [GameScreens.cyberLab]: {
        requiredScreen: GameScreens.villageMap,
        requiredStage: 0,
        title: chrome.i18n.getMessage('cyber_lab_to'),
        icon: <Tools size={25}/>,
        houses: [20]
    },        
    [GameScreens.fireSite]: {
        requiredScreen: GameScreens.guildSchool,
        requiredStage: 1,
        title: chrome.i18n.getMessage('fire_site_to'),
        icon: <Fire size={25}/>,
        houses: [8]
    },
    [GameScreens.focusSite]: {
        requiredScreen: GameScreens.guildSchool,
        requiredStage: 1,
        title: chrome.i18n.getMessage('focus_site_to'),
        icon: <Eye size={25}/>,
        houses: [9]
    },
    [GameScreens.guildSchool]: {
        requiredScreen: GameScreens.market,
        requiredStage: 1,
        title: chrome.i18n.getMessage('guild_to'),
        icon: <Bank2 size={25}/>,
        houses: [14, 15, 16, 17]
    },
    [GameScreens.iceSite]: {
        requiredScreen: GameScreens.guildSchool,
        requiredStage: 1,
        title: chrome.i18n.getMessage('ice_site_to'),
        icon: <Snow2 size={25}/>,
        houses: [6]
    },
    [GameScreens.mansion]: {
        requiredScreen: GameScreens.villageMap,
        requiredStage: 0,
        title: chrome.i18n.getMessage('mansion_to'),
        icon: <HouseFill size={25}/>,
        houses: []
    },
    [GameScreens.market]: {
        requiredScreen: GameScreens.villageMap,
        requiredStage: 0,
        title: chrome.i18n.getMessage('market_to'),
        icon: <ShopWindow size={25}/>,
        houses: [0, 1, 2, 3, 4, 5]
    },
    [GameScreens.mutaLab]: {
        requiredScreen: GameScreens.villageMap,
        requiredStage: 0,
        title: chrome.i18n.getMessage('muta_lab_to'),
        icon: <Virus size={25}/>,
        houses: [20]
    },        
    [GameScreens.wizardSchool]: {
        requiredScreen: GameScreens.academy,
        requiredStage: 1,
        title: chrome.i18n.getMessage('wizard_school_to'),
        icon: <Magic size={25}/>,
        houses: [18, 19]
    },    
}

function VillageMap() {
    const squadMember = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[store.gameSquad.currentlyWatched]);
    const squadMemberStamina = squadMember.params.currentParams.Stamina;
    const squadMemberInventory = squadMember.general.inventory;
    const treeCutterAmount = getWeaponAmount(squadMemberInventory, [cybers.weapons.treeCutter.name]);
    const axeAmount = getWeaponAmount(squadMemberInventory, [items.weapons.axe.name]);
    const pickaxeAmount = getWeaponAmount(squadMemberInventory, [items.weapons.pickaxe.name]);

    const gameStageScreens = useSelector((store: IStore) => store.gameStage);
    const villageMapStage = useSelector((store: IStore) => store.gameStage.Village_Map.stage);
    const [taskScreenOpen, setTaskScreenOpen] = useState<GameScreens|null>(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                onClick={() => {
                    if (squadMemberStamina >= 3) {
                        const woodAmount = 1 + treeCutterAmount * 2 + axeAmount;
                        dispatch(gameSquad.actions.getBigResource({
                            resource: items.bigResources.wood,
                            amount: woodAmount
                        }));

                        dispatch(gameSquad.actions.spendStamina(3));

                        if (Math.floor(Math.random()*20) <= 1) {
                            dispatch(gameSquad.actions.getBigResource(items.bigResources.beastRemains));
                            dispatch(gameSquad.actions.getBigResource(items.bigResources.reptiloidRemains));
                        } 
                    }                
                }}
                className={styles.VillageMap_icon_Woods}
                title={chrome.i18n.getMessage('woods_to')}
            >
                <Tree size={25}/>
            </button>
            <button 
                onClick={() => {
                    if (squadMemberStamina >= 3) {
                        const oreAmount = 0 + pickaxeAmount;
                        dispatch(gameSquad.actions.getBigResource({
                            resource: items.bigResources.ore,
                            amount: oreAmount
                        }));
    
                        if (Math.floor(Math.random()*20) <= 1) {
                            dispatch(gameSquad.actions.getBigResource(items.bigResources.dragonRemains));
                            dispatch(gameSquad.actions.getBigResource(items.bigResources.insectoidRemains));
                        }
    
                        dispatch(gameSquad.actions.spendStamina(3));
                        
                        dispatch(gameStage.actions.changeStage({
                            zone: GameScreens.villageMap,
                            stage: 1
                        }))
                    }                    
                }}
                className={styles.VillageMap_icon_Mines}
                title={chrome.i18n.getMessage('mines_to')}
            >
                <MinecartLoaded size={25}/>
            </button>
            <button 
                onClick={() => {
                    if (squadMemberStamina >= 3) {
                        dispatch(gameSquad.actions.getBigResource(items.bigResources.crystal));

                        dispatch(gameSquad.actions.spendStamina(3));

                        const obsidianAmount = 0 + pickaxeAmount;
                        for (let obsidian = 0; obsidian < obsidianAmount; obsidian++) {
                            dispatch(gameSquad.actions.getBigResource(items.bigResources.obsidian));
                        }
                    }                    
                }}
                className={styles.VillageMap_icon_Caves}
                title={chrome.i18n.getMessage('caves_to')}
            >
                <HexagonHalf size={25}/>
            </button>
            {
                villageMapStage !== 0 && 
                <button 
                    onClick={() => navigate('/battle')}
                    className={styles.VillageMap_icon_Battle}
                    title={chrome.i18n.getMessage('to_battle_screen_button_title')}
                >
                    <EmojiAngryFill size={25}/>
                </button>
            }            
        </div>
    )
}

export default VillageMap