import images from "../images/images";
import { UserParam } from "../types/interfaces";
import styles from '../index.module.css';

function ParamIcon(props: {
    param: keyof typeof UserParam
}) {
    const {param} = props;

    const source = images.paramIcons[param]

    return <img 
        src={source} 
        alt={UserParam[param]} 
        title={UserParam[param]}
        className={styles.resourceIcon}
    />
}

export default ParamIcon