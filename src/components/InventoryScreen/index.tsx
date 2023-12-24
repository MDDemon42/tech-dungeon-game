import styles from './index.module.css';
import { ICharacher } from '../../enums-and-interfaces/interfaces';
import { createEmptyInventory } from '../../helpers/emptyEssencesCreators';
import getLeftHandImage from './leftHand';
import getHatImage from './hat';
import getHeadImage from './head';
import getSkinImage from './skin';
import getBackImage from './back';
import getBothHandsImage from './bothHands';
import getRightHandImage from './rightHand';
import getTailImage from './tail';
import getLegsImage from './legs';
import getShouldersImage from './shoulders';
import getArmorImage from './armor';
import getLeftPocketImage from './leftPocket';
import getRightPocketImage from './rightPocket';

function InventoryScreen(props: {
    character: ICharacher,
    battle: boolean
}) {
    const {character, battle} = props;
    const {general, params} = character;
    const userStrength = params.strength;
    const powersUserNames = general.mind.powers.map(power => power.name);
    const ritualsUserNames = general.mind.rituals.map(ritual => ritual.name);
    const inventory = general.inventory ? general.inventory : createEmptyInventory();

    const width = battle ? '150px' : '355px';
    const height = battle ? '160px' : '370px';

    const back = getBackImage(inventory.back.name);

    const tail = getTailImage(inventory.tail.name);

    const legs = getLegsImage(
        inventory.legs.name,
        inventory.skin.name,
        ritualsUserNames,
        powersUserNames,
        userStrength
    )

    const skin = getSkinImage(
        ritualsUserNames,
        powersUserNames,
        userStrength,
        inventory.skin.name
    );    

    const shoulders = getShouldersImage(inventory.shoulders.name);

    const armor = getArmorImage(inventory.armor.name);

    const rightPocket = getRightPocketImage(inventory.rightPocket.name);

    const leftPocket = getLeftPocketImage(inventory.leftPocket.name);

    const head = getHeadImage(
        powersUserNames,
        inventory.chin.name,
        inventory.head.name
    );

    const hat = getHatImage(inventory.hat.name);

    const leftHand = getLeftHandImage(inventory.leftHand.name);

    const rightHand = getRightHandImage(inventory.rightHand.name);

    const bothHands = getBothHandsImage(
        inventory.bothHands.name,
        inventory.rightHand.name,
        inventory.leftHand.name
    );

    return (
        <div 
            className={styles.InventoryScreen} 
            style={{width, height}}
            title={params.name}
        >                   
            { back }
            { tail }
            { legs }
            { skin }
            { shoulders }
            { armor }
            { rightPocket }
            { leftPocket }
            { head }
            { hat }
            { leftHand }
            { rightHand }  
            { bothHands }          
        </div>
    )
}

export default InventoryScreen