import { useSelector } from 'react-redux';
import styles from '../index.module.css';
import { IAbility, IStore } from '../types/interfaces';
import CommonIcon from './CommonIcon';
import { emptyInventory } from '../redux/slices/generalUser';
import items from '../general/items/items';
import masteries from '../general/masteries/masteries';
import abilities from '../general/abilities';

function BattleScreen() {
    const generalUser = useSelector((store: IStore) => store.generalUser);
    const masteriesUser = generalUser.masteries.map(mastery => mastery.name);;
    const inventory = generalUser.inventory ? generalUser.inventory : emptyInventory();

    const abilitiesUser: IAbility[] = [];
    
    Object.keys(inventory).forEach(name => {
        if (inventory[name].ability) {
            if (inventory[name].linkedMastery) {
                const masteryName = inventory[name].linkedMastery?.name;
                if (masteryName && masteriesUser.includes(masteryName)) {
                    abilitiesUser.push(...inventory[name].masterAbilities!);
                } else {
                    const {ability} = inventory[name];
                    if (ability) {
                        abilitiesUser.push(ability);
                    }
                }
            } else {
                const {ability} = inventory[name];
                if (ability) {
                    abilitiesUser.push(ability);
                }
            }
        }
    })

    // special abilities
    if (
        inventory.leftHand.name === items.item_steelSwordLeftHand.name &&
        inventory.rightHand.name === items.item_steelSwordRightHand.name &&
        masteriesUser.includes(masteries.mastery_dualSwords.name)
    ) {
        abilitiesUser.push(abilities.battleAbilities.battleAbilities_dualSwordsSlash);
    }

    return (
        <div className={styles.gamePage_component}>
            Battle Screen
            <div className={styles.commonScreen_notVertical}>
                {
                    abilitiesUser && abilitiesUser.map(ability => {
                        if (!!ability) {
                            return <div className={styles.commonIconWithButton}>
                                <CommonIcon item={ability}/>
                            </div>
                        }

                        return null
                    })
                }
            </div>
        </div>
    )
}

export default BattleScreen