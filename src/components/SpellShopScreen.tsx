import {useSelector, useDispatch} from "react-redux";
import {ISpell, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import spells from "../general/spells/spells";
import gameSquad from "../redux/slices/gameSquad";

function SpellShopScreen() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const spellsNames = Object.keys(spells);
    const spellsUser = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[index]?.general.spells.map(data => data.name))!;
    const masteriesUser = useSelector((store: IStore) => 
        store.gameSquad.squadMembers[index]?.general.masteries.map(data => data.name))!;

    const dispatch = useDispatch();

    function studyButtonListener(spell: ISpell) {
        dispatch(gameSquad.actions.studySpell({index, data: spell}))
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Spell Shop!
            <div className={styles.commonScreen_notVertical}>
                {
                    spells && spellsNames.map(name => {
                        const spell = spells[name as keyof typeof spells];
                        const disabled = spellsUser.includes(spell.name) ||
                            (!!spell.requiredMastery && !masteriesUser.includes(spell.requiredMastery.name));
                        return (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={spell}/>
                                {
                                    <button
                                        disabled={disabled}
                                        onClick={() => studyButtonListener(spell)}
                                    >
                                        Study!
                                    </button>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SpellShopScreen