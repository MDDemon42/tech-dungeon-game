import { DamageType } from "../../enums-and-interfaces/enums";
import styles from './Icons.module.css';

function ResistanceIcon(props: {
    type: DamageType,
    value: number
}) {
    const {type, value} = props;

    const damageColors = {
        [DamageType.acid]: 'lightgreen',
        [DamageType.electrical]: 'yellow',
        [DamageType.fire]: 'orange',
        [DamageType.suffocation]: 'lighyellow',
        [DamageType.physicalSlashing]: 'lightblue',
        [DamageType.physicalSmashing]: 'darkblue',
        [DamageType.physicalPiercing]: 'blue',
        [DamageType.psionic]: 'pink',
        [DamageType.cold]: 'aqua'
    }

    if (value === 0) {
        return null
    }

    return <div 
        title={type + chrome.i18n.getMessage('resistance')}
        className={styles.ResistanceIcon}
        style={{borderColor: damageColors[type]}}
    >
        {value}
    </div>
}

export default ResistanceIcon