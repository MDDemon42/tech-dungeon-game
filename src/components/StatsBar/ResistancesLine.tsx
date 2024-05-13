import { DamageType } from "../../enums-and-interfaces/enums";
import { ICharacherParams } from "../../enums-and-interfaces/interfaces";
import ResistanceIcon from "../Icons/ResistanceIcon";
import styles from './index.module.css';

function ResistancesLine(props: {
    characterParams: ICharacherParams
}) {
    const {
        resistances, dodge,
        strength, lifted
    } = props.characterParams;

    return (
        <div className={styles.StatsBar_resistances}>
            {
                Object.keys(resistances).map(resistance => 
                    <ResistanceIcon 
                        type={resistance as DamageType}
                        value={resistances[resistance as DamageType]}
                    />
                )
            }
            {
                <div 
                    title={chrome.i18n.getMessage('dodge')}
                    className={styles.StatsBar_dodge}
                >
                    {dodge}
                </div>
            }
            {
                <div 
                    title={chrome.i18n.getMessage('strength')}
                    className={styles.StatsBar_strength}
                >
                    {lifted}/{strength}
                </div>
            }
        </div>
    )
}

export default ResistancesLine