import { useDispatch } from "react-redux";
import { 
    HexagonHalf,
    Tree, MinecartLoaded,
    ExclamationCircle
} from 'react-bootstrap-icons';
import gameScreens from '../../redux/slices/gameScreen';
import { 
    CommonGameScreens, 
    GameScreens,
    PossibleBattleLocation, 
} from "../../enums-and-interfaces/enums";
import styles from './index.module.css';
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
import VillageMapAgenda from "../../components/VillageMap/Agenda";
import screenMappings from "./screenMappings";
import BattleLocation from "../../components/VillageMap/BattleLocation";
import { useState } from "react";

function VillageMap() {
    const squadMember = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[store.gameSquad.currentlyWatched]);
    const squadMemberStamina = squadMember.params.currentParams.Stamina;
    const squadMemberInventory = squadMember.general.inventory;
    const treeCutterAmount = getWeaponAmount(squadMemberInventory, [cybers.weapons.treeCutter.name]);
    const axeAmount = getWeaponAmount(squadMemberInventory, [items.weapons.axe.name]);
    const pickaxeAmount = getWeaponAmount(squadMemberInventory, [items.weapons.pickaxe.name]);

    const gameStageScreens = useSelector((store: IStore) => store.gameStage);
    const {possibleBattles} = gameStageScreens;
    const [taskScreenOpen, setTaskScreenOpen] = useState<GameScreens|null>(null);

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
                            zone: CommonGameScreens.villageMap,
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
                Object.keys(possibleBattles).map((key) => {
                    const location = key as PossibleBattleLocation;
                    const {sinceDay} = possibleBattles[location];
                    if (sinceDay > 0) {
                        return <BattleLocation battle={{
                            location,
                            sinceDay
                        }} />
                    }       
                    
                    return null
                })
            }

            <VillageMapAgenda />   
        </div>
    )
}

export default VillageMap