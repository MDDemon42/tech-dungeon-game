import { useSelector } from 'react-redux';
import styles from './SubMindScreen.module.css';
import { IMastery, IPower, IRitual, ISpell, IStore, ISubMindMapping } from '../../enums-and-interfaces/interfaces';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import { MindGameScreens, UserParam } from '../../enums-and-interfaces/enums';
import SubMindScreenItem from './SubMindScreenItem';

function SubMindScreen(props: {
    screenName: MindGameScreens
}) {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const member = useSelector((store: IStore) => store.gameSquad.squadMembers[index]);

    const memberMind: string[] = [];
    member.general.mind.masteries.map(data => memberMind.push(data.name));
    member.general.mind.powers.map(data => memberMind.push(data.name));
    member.general.mind.spells.map(data => memberMind.push(data.name));

    const {screenName} = props;
    const stage = useSelector((store: IStore) => store.gameStage[screenName].stage);
    const dataAll = useSelector((store: IStore) => 
        store.gameStage[screenName].options?.[stage]) as (IMastery | IPower | ISpell | IRitual)[];

    const dispatch = useDispatch();

    const subMindMappings: Record<MindGameScreens, ISubMindMapping> = {
        [MindGameScreens.academy]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('academy_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(gameSquad.actions.learnMastery({index, data}));
            }
        },
        [MindGameScreens.airSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('air_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(gameSquad.actions.learnMastery({index, data}));
            }
        },
        [MindGameScreens.fireSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('fire_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(gameSquad.actions.learnMastery({index, data}));
            }
        },
        [MindGameScreens.focusSite]: {
            capacity: member.params.maxParams[UserParam.focus],
            posessed: member.general.mind.powers.length,
            title: chrome.i18n.getMessage('focus_site_title'),
            button: chrome.i18n.getMessage('develop'),
            listener: (data: IPower) => {
                dispatch(gameSquad.actions.developPower({index, data}));
            }
        },
        [MindGameScreens.focusSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('focus_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(gameSquad.actions.learnMastery({index, data}));
            }
        },
        [MindGameScreens.guildRituals]: {
            capacity: member.params.level,
            posessed: member.general.mind.rituals.length,
            title: chrome.i18n.getMessage('guild_rituals_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(gameSquad.actions.surpassRitual({index, data}));
            }
        },       
        [MindGameScreens.guildSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('guild_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(gameSquad.actions.learnMastery({index, data}));
            }
        },
        [MindGameScreens.iceSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('ice_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(gameSquad.actions.learnMastery({index, data}));
            }
        },
        [MindGameScreens.spellSchool]: {
            capacity: member.params.maxParams[UserParam.mana],
            posessed: member.general.mind.spells.length,
            title: chrome.i18n.getMessage('spell_shop_title'),
            button: chrome.i18n.getMessage('study'),
            listener: (data: ISpell) => {
                dispatch(gameSquad.actions.studySpell({index, data}));
            }
        },
        [MindGameScreens.wizardSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('wizard_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(gameSquad.actions.learnMastery({index, data}));
            }
        }, 
    }

    return (
        <div className={styles.SubMindScreen}>
            <h3 className={styles.SubMindScreen_header}>
                {
                    subMindMappings[screenName].title
                }
            </h3>
            <div className={styles.SubMindScreen_body}>
                {
                    dataAll.map(data => 
                         <SubMindScreenItem 
                            data={data}
                            buttonText={subMindMappings[screenName].button}
                            listener={subMindMappings[screenName].listener}
                            screenName={screenName}
                            memberMind={memberMind}
                            capacity={subMindMappings[screenName].capacity}
                            posessed={subMindMappings[screenName].posessed}
                        />
                    )
                }
            </div>                  
        </div>
    )
}

export default SubMindScreen