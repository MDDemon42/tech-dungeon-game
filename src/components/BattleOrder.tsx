import { ICharacher, UserParam } from "../types/interfaces";
import styles from '../index.module.css';
import InventoryScreen from "./InventoryScreen";
import ParamIcon from "./ParamIcon";

function BattleOrder(props: {
    squad: ICharacher[],
    attacker: boolean,
    listener: any
}) {
    const {squad, attacker, listener} = props;

    const squadMember = (character: ICharacher, index: number) => (
        <div className={styles.gamePage_battleScreen}>
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
        <div className={styles.gamePage_battleScreen_container_opponents}>
            {
                squad.map((member, index) => squadMember(member, index))
            }            
        </div>
    )
}

export default BattleOrder