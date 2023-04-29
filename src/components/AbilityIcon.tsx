import { Ability } from "../types/ability";

import styles from '../index.module.css';

function AbilityIcon(props: {
    ability: Ability
}) {
    const {ability} = props;

    return (
        <div className={styles.abilitiesScreen_ability}>
            <img 
                src={ability.image}
                title={ability.description}
            />
            {ability.name}
        </div>
    )
}

export default AbilityIcon