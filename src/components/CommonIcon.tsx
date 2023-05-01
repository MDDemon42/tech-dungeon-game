import styles from '../index.module.css';
import { ICommon } from '../types/interfaces';

function CommonIcon(props: {
    item: ICommon
}) {
    const {item} = props;

    return(
        <div>
            <img 
                src={item.image}
                title={item.name + '\n' + item.description}
                className={styles.commonIcon}
            /> 
        </div>
    )
}

export default CommonIcon