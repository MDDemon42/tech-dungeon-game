import { ICharacher, IMemberStatus } from "../../enums-and-interfaces/interfaces";
import styles from './index.module.css';
import SquadMember from "./SquadMember";

function BattleOrder(props: {
    squad: ICharacher[],
    squadStatus: IMemberStatus[],
    attacker: boolean,
    listener: any
}) {
    const {squad, squadStatus, attacker, listener} = props;
    
    return (
        <div className={styles.BattleOrder}>
            {
                squad.map((member, index) => {
                    if (!!member && squadStatus[index]) {
                        return <SquadMember 
                            member={member} 
                            memberStatus={squadStatus[index]} 
                            index={index}
                            listener={listener}
                        />
                    } else {
                        return null
                    }
                })
            }            
        </div>
    )
}

export default BattleOrder