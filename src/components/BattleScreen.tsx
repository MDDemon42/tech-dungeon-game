import { useSelector } from 'react-redux';
import styles from '../index.module.css';
import { IStore } from '../types/interfaces';
import CommonIcon from './CommonIcon';
import { emptyInventory } from '../redux/slices/generalUser';

function BattleScreen() {
    const generalUser = useSelector((store: IStore) => store.generalUser);
    const {masteries, powers, spells} = generalUser;
    const inventory = generalUser.inventory ? generalUser.inventory : emptyInventory();

    const masteriesUser = masteries.map(data => data.name);

    const abilities = Object.keys(inventory).map(name => {
        if (inventory[name].ability) {
            if (inventory[name].linkedMastery) {
                const masteryName = inventory[name].linkedMastery?.name;
                if (masteryName && masteriesUser.includes(masteryName)) {
                    return inventory[name].masterAbility
                } else {
                    return inventory[name].ability
                }
            } else {
                return inventory[name].ability
            }
        }
    }).filter(ability => !!ability);

    return (
        <div className={styles.gamePage_component}>
            Battle Screen
            <div className={styles.commonScreen_notVertical}>
                {
                    abilities && abilities.map(ability => {
                        if (!!ability) {
                            return <div className={styles.commonIconWithButton}>
                                <CommonIcon item={ability}/>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default BattleScreen