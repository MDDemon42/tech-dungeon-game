import { UserParam } from "../../enums-and-interfaces/enums";
import images from "../../images/images";
import styles from './Icons.module.css';

function ParamIcon(props: {
    param: keyof typeof UserParam
}) {
    const {param} = props;

    const source = images.paramIcons[param]

    return <img 
        src={source} 
        alt={UserParam[param]} 
        title={UserParam[param]}
        className={styles.ParamIcon}
    />
}

export default ParamIcon