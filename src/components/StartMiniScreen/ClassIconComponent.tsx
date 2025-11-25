import { UserStartClass } from "../../enums-and-interfaces/enums";
import classInfo from "../../general/classInfo";
import { classToIcon } from "../../helpers/classIconRelates";
import images from "../../images/images";
import styles from './index.module.css';

const ClassIconComponent = (props: {charClass: UserStartClass}) => {
    const {charClass} = props;
    const imageSrc = images.classIcons[classToIcon(charClass) as keyof typeof images.classIcons];

    return (
        <img 
            className={styles.ClassIconComponent}
            src={imageSrc} 
            alt='classIcon' 
            title={classInfo[charClass].description}
        /> 
    )
}

export default ClassIconComponent