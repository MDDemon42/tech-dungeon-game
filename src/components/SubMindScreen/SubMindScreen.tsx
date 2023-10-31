import { useSelector } from 'react-redux';
import styles from './SubMindScreen.module.css';
import { IMastery, IPower, ISpell, IStore, ISubMindMapping } from '../../enums-and-interfaces/interfaces';
import { useDispatch } from 'react-redux';
import gameSquad from '../../redux/slices/gameSquad';
import { MindOption, UserParam } from '../../enums-and-interfaces/enums';
import SubMindScreenItem from './SubMindScreenItem';

function SubMindScreen(props: {
    dataName: MindOption
}) {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const member = useSelector((store: IStore) => store.gameSquad.squadMembers[index]);

    const memberMind: string[] = [];
    member.general.mind.masteries.map(data => memberMind.push(data.name));
    member.general.mind.powers.map(data => memberMind.push(data.name));
    member.general.mind.spells.map(data => memberMind.push(data.name));

    const {dataName} = props;
    const dataAll = useSelector((store: IStore) => store.everything[dataName]);
    const dataAllNames = Object.keys(dataAll);

    const dispatch = useDispatch();

    const subMindMappings: Record<MindOption, ISubMindMapping> = {
        [MindOption.masteries]: {
            capacity: member.params.level,
            posessed: member.general.mind.masteries.length,
            title: chrome.i18n.getMessage('academy_title'),
            button: chrome.i18n.getMessage('academy_button'),
            listener: (data: IMastery) => {
                dispatch(gameSquad.actions.learnMastery({index, data}));
            }
        },
        [MindOption.powers]: {
            capacity: member.params.maxParams[UserParam.focus],
            posessed: member.general.mind.powers.length,
            title: chrome.i18n.getMessage('focus_site_title'),
            button: chrome.i18n.getMessage('focus_site_button'),
            listener: (data: IPower) => {
                dispatch(gameSquad.actions.developPower({index, data}));
            }
        },
        [MindOption.spells]: {
            capacity: member.params.maxParams[UserParam.mana],
            posessed: member.general.mind.spells.length,
            title: chrome.i18n.getMessage('spell_shop_title'),
            button: chrome.i18n.getMessage('spell_shop_button'),
            listener: (data: ISpell) => {
                dispatch(gameSquad.actions.studySpell({index, data}));
            }
        }
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
                        
                        return <SubMindScreenItem 
                            data={data}
                            buttonText={subMindMappings[dataName].button}
                            listener={subMindMappings[dataName].listener}
                            dataName={dataName}
                            memberMind={memberMind}
                            capacity={subMindMappings[dataName].capacity}
                            posessed={subMindMappings[dataName].posessed}
                        />
                    })
                }
            </div>            
        </div>
    )
}

export default SubMindScreen