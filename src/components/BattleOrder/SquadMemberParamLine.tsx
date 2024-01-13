import { UserParam } from "../../enums-and-interfaces/enums";
import ParamIcon from "../Icons/ParamIcon";

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

export default SquadMemberParamLine