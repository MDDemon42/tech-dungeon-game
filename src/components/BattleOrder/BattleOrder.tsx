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

    function SquadMember(props: {
        character: ICharacher, 
        index: number
    }) {
        const {character, index} = props;
        const {currentParams} = character.params;

        return (<div className={styles.BattleOrder_squadMember}>
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
                />
                <InventoryScreen character={character} battle={true}/>
                <SquadMemberParamLine 
                    paramAmount={currentParams[UserParam.focus]}
                    paramName='focus'
                />
            </div>
            <SquadMemberParamLine 
                paramAmount={currentParams[UserParam.stamina]}
                paramName='stamina'
            />            
        </div>
    )}

    function SquadMemberParamLine(props: {
        paramAmount: number, paramName: keyof typeof UserParam
    }) {
        const {paramAmount, paramName} = props;
        return <div>
            {
                [...Array(paramAmount)]
                    .map(icon => <ParamIcon param={paramName}/>)
            }
        </div>
    }

    return (
        <div className={styles.BattleOrder}>
            {
                squad.map((member, index) => {
                    if (!!member) {
                        return <SquadMember character={member} index={index}/>
                    } else {
                        return null
                    }
                })
            }            
        </div>
    )
}

export default BattleOrder