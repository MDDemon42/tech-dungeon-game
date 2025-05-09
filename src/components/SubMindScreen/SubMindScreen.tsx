import { useSelector } from 'react-redux';
import styles from './SubMindScreen.module.css';
import { IMastery, IPower, IRitual, ISpell, IStore, ISubMindMapping } from '../../enums-and-interfaces/interfaces';
import { useDispatch } from 'react-redux';
import character from '../../redux/slices/character';
import { 
    MindGameScreens, 
    RitualGameScreens, 
    SchoolGameScreens, 
    UserParam 
} from '../../enums-and-interfaces/enums';
import SubMindScreenItem from './SubMindScreenItem';
import academyMasteries from '../../gameScreens/Academy/masteries';

function SubMindScreen(props: {
    screenName: MindGameScreens
}) {
    const member = useSelector((store: IStore) => store.character);

    const memberMind: string[] = [];
    member.general.mind.rituals.map(data => memberMind.push(data.name));
    member.general.mind.masteries.map(data => memberMind.push(data.name));
    member.general.mind.powers.map(data => memberMind.push(data.name));
    member.general.mind.spells.map(data => memberMind.push(data.name));

    const {screenName} = props;
    const dataAll = useSelector((store: IStore) => 
        store.gameStage[screenName].usableOptions) as (IMastery | IPower | ISpell | IRitual)[];

    const dispatch = useDispatch();

    if (dataAll.length === 0) {
        return null
    }

    const subMindMappings: Record<MindGameScreens, ISubMindMapping> = {
        [SchoolGameScreens.academy]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('academy_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(character.actions.learnMastery(data));

                if (data.name === academyMasteries.brutalForce.name) {
                    dispatch(character.actions.raiseStrength(3))
                }
            }
        },
        [RitualGameScreens.airRituals]: {
            capacity: member.params.maxParams[UserParam.health],
            posessed: 0,
            title: chrome.i18n.getMessage('air_rituals_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IRitual) => {
                dispatch(character.actions.surpassRitual(data));
            }
        }, 
        [SchoolGameScreens.airSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('air_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(character.actions.learnMastery(data));
            }
        },
        [RitualGameScreens.fireRituals]: {
            capacity: member.params.maxParams[UserParam.health],
            posessed: 0,
            title: chrome.i18n.getMessage('fire_rituals_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IRitual) => {
                dispatch(character.actions.surpassRitual(data));
            }
        }, 
        [SchoolGameScreens.fireSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('fire_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(character.actions.learnMastery(data));
            }
        },
        [RitualGameScreens.focusRituals]: {
            capacity: member.params.maxParams[UserParam.health],
            posessed: 0,
            title: chrome.i18n.getMessage('focus_rituals_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IRitual) => {
                dispatch(character.actions.surpassRitual(data));
            }
        }, 
        [SchoolGameScreens.focusSite]: {
            capacity: member.params.maxParams[UserParam.focus],
            posessed: member.general.mind.powers.length,
            title: chrome.i18n.getMessage('focus_site_title'),
            button: chrome.i18n.getMessage('develop'),
            listener: (data: IPower) => {
                dispatch(character.actions.developPower(data));
            }
        },
        [SchoolGameScreens.focusSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('focus_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(character.actions.learnMastery(data));
            }
        },
        [RitualGameScreens.guildRituals]: {
            capacity: member.params.maxParams[UserParam.health],
            posessed: 0,
            title: chrome.i18n.getMessage('guild_rituals_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IRitual) => {
                dispatch(character.actions.surpassRitual(data));
            }
        },       
        [SchoolGameScreens.guildSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('guild_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(character.actions.learnMastery(data));
            }
        },
        [RitualGameScreens.iceRituals]: {
            capacity: member.params.maxParams[UserParam.health],
            posessed: 0,
            title: chrome.i18n.getMessage('ice_rituals_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IRitual) => {
                dispatch(character.actions.surpassRitual(data));
            }
        }, 
        [SchoolGameScreens.iceSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('ice_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(character.actions.learnMastery(data));
            }
        },
        [SchoolGameScreens.spellSchool]: {
            capacity: member.params.maxParams[UserParam.mana],
            posessed: member.general.mind.spells.length,
            title: chrome.i18n.getMessage('spell_shop_title'),
            button: chrome.i18n.getMessage('study'),
            listener: (data: ISpell) => {
                dispatch(character.actions.studySpell(data));
            }
        },
        [SchoolGameScreens.wizardSchool]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('wizard_school_title'),
            button: chrome.i18n.getMessage('learn'),
            listener: (data: IMastery) => {
                dispatch(character.actions.learnMastery(data));
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