import { ICharacher, IMemberStatus } from "../../enums-and-interfaces/interfaces";
import styles from './BattleOrder.module.css';
import InventoryScreen from "../InventoryScreen/InventoryScreen";
import ParamIcon from "../Icons/ParamIcon";
import { UserParam } from "../../enums-and-interfaces/enums";

function BattleOrder(props: {
    squad: ICharacher[],
    squadStatus: IMemberStatus[],
    attacker: boolean,
    listener: any
}) {
    const {squad, squadStatus, attacker, listener} = props;

    function SquadMember(props: {
        member: ICharacher,
        memberStatus: IMemberStatus, 
        index: number
    }) {
        const {member, memberStatus, index} = props;
        const {currentParams} = member.params;

        const squadMemberStyles = [styles.BattleOrder_squadMember];
        if (memberStatus.selected) {
            squadMemberStyles.push(styles.BattleOrder_squadMember__selected);
        }

        if (!memberStatus.hasTurn) {
            squadMemberStyles.push(styles.BattleOrder_squadMember__hasNoTurn);
        }

        if (memberStatus.dead) {
            squadMemberStyles.push(styles.BattleOrder_squadMember__dead);
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

    function SquadMemberParamLine(props: {
        paramAmount: number, 
        paramName: keyof typeof UserParam,
        vertical?: boolean
    }) {
        const {paramAmount, paramName, vertical} = props;
        return <div style={{
            display: 'flex', 
            flexDirection: vertical ? 'column' : 'row'
        }}>
            {
                paramAmount > 0 ?
                    [...Array(paramAmount)]
                        .map(icon => <ParamIcon param={paramName}/>) :
                    <ParamIcon param='blank'/>
            }
        </div>
    }

    return (
        <div className={styles.BattleOrder}>
            {
                squad.map((member, index) => {
                    if (!!member && squadStatus[index]) {
                        return <SquadMember 
                            member={member} 
                            memberStatus={squadStatus[index]} 
                            index={index}
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