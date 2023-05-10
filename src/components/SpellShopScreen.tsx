import {useSelector, useDispatch} from "react-redux";
import {ISpell, IStore} from '../types/interfaces';
import CommonIcon from './CommonIcon';
import styles from '../index.module.css';
import generalUser from "../redux/slices/generalUser";

function SpellShopScreen() {
    const spellsAll = useSelector((store: IStore) => store.generalAll.spells);
    const spellsAllNames = Object.keys(spellsAll);

    const spellsUser = useSelector((store: IStore) => store.generalUser.spells.map(data => data.name));
    const masteriesUser = useSelector((store: IStore) => store.generalUser.masteries.map(data => data.name))
    const dispatch = useDispatch();

    function studyButtonListener(spell: ISpell) {
        dispatch(generalUser.actions.studySpell(spell))
    }

    return (
        <div className={styles.gamePage_component}>
            Welcome to Spell Shop!
            <div className={styles.commonScreen_notVertical}>
                {
                    spellsAll && spellsAllNames.map(name => {
                        const spell = spellsAll[name];
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