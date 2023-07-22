import { useSelector } from 'react-redux';
import styles from './SubMindScreen.module.css';
import { IMastery, IPower, ISpell, IStore, ISubMindMapping, MindOptions, UserParam } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import CommonIcon from '../Icons/CommonIcon';

function SubMindScreen(props: {
    dataName: MindOptions
}) {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const member = useSelector((store: IStore) => store.gameSquad.squadMembers[index]);

    const memberMind: string[] = [];
    member.general.mind.masteries.map(data => memberMind.push(data.name));
    member.general.mind.powers.map(data => memberMind.push(data.name));
    member.general.mind.spells.map(data => memberMind.push(data.name));

    const {dataName} = props;
    const dataAll = useSelector((store: IStore) => store.generalAll[dataName]);
    const dataAllNames = Object.keys(dataAll);

    const dispatch = useDispatch();

    const subMindMappings: Record<MindOptions, ISubMindMapping> = {
        [MindOptions.masteries]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: 'Welcome to Academy!',
            button: 'Learn!',
            listener: (data: IMastery) => {
                dispatch(gameSquad.actions.learnMastery({index, data}));
            }
        },
        [MindOptions.powers]: {
            capacity: member.params.maxParams[UserParam.focus],
            posessed: member.general.mind.powers.length,
            title: 'Welcome to Focus Site!',
            button: 'Develop!',
            listener: (data: IPower) => {
                dispatch(gameSquad.actions.developPower({index, data}));
            }
        },
        [MindOptions.spells]: {
            capacity: member.params.maxParams[UserParam.mana],
            posessed: member.general.mind.spells.length,
            title: 'Welcome to Spell Shop!',
            button: 'Study!',
            listener: (data: ISpell) => {
                dispatch(gameSquad.actions.studySpell({index, data}));
            }
        }
    }

    let disableReason = '';
    function enableChecker(data: IMastery | IPower | ISpell) {
        if (subMindMappings[dataName].capacity === subMindMappings[dataName].posessed) {
            disableReason = 'Your mind cannot contain any more ' + dataName;
            return false
        }

        const posessedCheck = memberMind.includes(data.name);
        if (posessedCheck) {
            disableReason = 'Already posessed';
            return false
        }
        
        const requiredMasteryCheck = !!data.requiredMastery ? 
            memberMind.includes(data.requiredMastery.name) :
            true;
            
        if (!requiredMasteryCheck) {
            disableReason = 'Does not have required mastery';
            return false
        }

        return true 
    }

    return (
        <div className={styles.SubMindScreen}>
            <h3 className={styles.SubMindScreen_header}>
                {
                    subMindMappings[dataName].title
                }
            </h3>
            <div className={styles.SubMindScreen_body}>
                {
                    dataAllNames && dataAllNames.map(name => {
                        const data = dataAll[name];
                        return <div className={styles.commonIconWithButton}>
                            <CommonIcon item={data} disableReason={disableReason}/>
                            {
                                <button
                                    disabled={!enableChecker(data)}
                                    onClick={() => subMindMappings[dataName].listener(data)}
                                >
                                    {
                                        subMindMappings[dataName].button
                                    }
                                </button>
                            }
                        </div>
                    })
                }
            </div>            
        </div>
    )
}

export default SubMindScreen