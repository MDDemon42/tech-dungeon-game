import { UserParam } from "../../enums-and-interfaces/enums";
import { ICharacher, IMemberStatus } from "../../enums-and-interfaces/interfaces";
import InventoryScreen from "../InventoryScreen";
import SquadMemberParamLine from "./SquadMemberParamLine";
import styles from './index.module.css';

function SquadMember(props: {
    member: ICharacher,
    memberStatus: IMemberStatus | null, 
    index: number,
    listener: any
}) {
    const {member, memberStatus, index, listener} = props;
    const {currentParams} = member.params;

    const squadMemberStyles = [styles.BattleOrder_squadMember];
    if (memberStatus) {
        if (memberStatus.selected) {
            squadMemberStyles.push(styles.BattleOrder_squadMember__selected);
        }

        if (!memberStatus.hasTurn) {
            squadMemberStyles.push(styles.BattleOrder_squadMember__hasNoTurn);
        }

        if (memberStatus.dead) {
            squadMemberStyles.push(styles.BattleOrder_squadMember__dead);
        }
    }    

    return (<div className={squadMemberStyles.join(' ')}>
        <SquadMemberParamLine 
            paramAmount={currentParams[UserParam.health]}
            paramName='health'
        />
        <div 
            className={styles.BattleOrder_squadMember_with_Mana_and_Focus}
            onClick={() => listener(index)}
        >
            <SquadMemberParamLine 
                paramAmount={currentParams[UserParam.mana]}
                paramName='mana'
                vertical={true}
            />
            <InventoryScreen character={member} battle={true}/>
            <SquadMemberParamLine 
                paramAmount={currentParams[UserParam.focus]}
                paramName='focus'
                vertical={true}
            />
        </div>
        <SquadMemberParamLine 
            paramAmount={currentParams[UserParam.stamina]}
            paramName='stamina'
        />            
    </div>
)}

export default SquadMember