import { ICharacher } from "../../enums-and-interfaces/interfaces";
import styles from './BattleOrder.module.css';
import InventoryScreen from "../InventoryScreen/InventoryScreen";
import ParamIcon from "../Icons/ParamIcon";
import { UserParam } from "../../enums-and-interfaces/enums";

function BattleOrder(props: {
    squad: ICharacher[],
    attacker: boolean,
    listener: any
}) {
    const {squad, attacker, listener} = props;

    const squadMember = (character: ICharacher, index: number) => (
        <div className={styles.BattleOrder_squadMember}>
            <div>
                {
                    [...Array(character.params.currentParams[UserParam.health])]
                        .map(icon => <ParamIcon param='health'/>)
                }
            </div>
            <div onClick={() => listener(index)}>
                <InventoryScreen character={character} battle={true}/>
            </div>            
        </div>
    )

    return (
        <div className={styles.BattleOrder}>
            {
                squad.map((member, index) => squadMember(member, index))
            }            
        </div>
    )
}

export default BattleOrder