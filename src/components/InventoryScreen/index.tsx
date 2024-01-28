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
import getExtraLeftHandImage from './extraLeftHand';
import getExtraRightHandImage from './extraRightHand';
import getTelekinesisLeftHandImage from './telekinesisLeftHand';
import getTelekinesisRightHandImage from './telekinesisRightHand';
import powers from '../../gameScreens/FocusSite/powers';
import getRightHipItemImage from './rightHipItem';
import getLeftHipItemImage from './leftHipItem';
import getBeltsImage from './belts';

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

    const back = getBackImage(inventory.Back.name);

    const tail = getTailImage(inventory.Tail.name);

    const legs = getLegsImage(
        inventory.Left_hip.name,
        inventory.Right_hip.name,
        inventory.Legs.name,
        inventory.Skin.name,
        ritualsUserNames,
        powersUserNames,
        userStrength
    )

    const skin = getSkinImage(
        ritualsUserNames,
        powersUserNames,
        userStrength,
        inventory.Skin.name
    );    

    const shoulders = getShouldersImage(inventory.Shoulders.name);

    const extraLeftHand = getExtraLeftHandImage(
        inventory.Extra_left_hand?.name || '',
        inventory.Shoulders.name
    );

    const extraRightHand = getExtraRightHandImage(
        inventory.Extra_right_hand?.name || '',
        inventory.Shoulders.name
    );

    const armor = getArmorImage(inventory.Armor.name);

    const rightPocket = getRightPocketImage(inventory.Right_pocket.name);

    const rightHipItem = getRightHipItemImage(inventory.Right_hip_item?.name || '');

    const leftPocket = getLeftPocketImage(inventory.Left_pocket.name);

    const leftHipItem = getLeftHipItemImage(inventory.Left_hip_item?.name || '');

    const belts = getBeltsImage(inventory.Left_hip.name, inventory.Right_hip.name);

    const head = getHeadImage(
        powersUserNames,
        inventory.Chin.name,
        inventory.Eyes.name,
        inventory.Head.name
    );

    const hat = getHatImage(inventory.Hat.name);

    const leftHand = getLeftHandImage(inventory.Left_hand.name);

    const rightHand = getRightHandImage(inventory.Right_hand.name);

    const bothHands = getBothHandsImage(
        inventory.Both_hands.name,
        inventory.Right_hand.name,
        inventory.Left_hand.name
    );

    const telekinesisLeftHand = getTelekinesisLeftHandImage(
        inventory.Telekinesis_left_hand?.name || '',
        powersUserNames.includes(powers.other.telekinesis.name)
    );

    const telekinesisRightHand = getTelekinesisRightHandImage(
        inventory.Telekinesis_right_hand?.name || '',
        powersUserNames.includes(powers.other.telekinesis.name)
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
            { shoulders }
            { extraLeftHand }
            { extraRightHand }
            { skin }
            { armor }
            { belts }
            { rightHipItem }
            { rightPocket }
            { leftHipItem }
            { leftPocket }            
            { head }
            { hat }
            { leftHand }
            { rightHand }  
            { bothHands }   
            { telekinesisLeftHand }
            { telekinesisRightHand }       
        </div>
    )
}

export default InventoryScreen