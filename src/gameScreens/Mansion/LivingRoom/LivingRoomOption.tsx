import { ILivingRoomOption } from '.';
import CommonIcon from '../../../components/Icons/CommonIcon';
import styles from './index.module.css';

function LivingRoomOption(props: ILivingRoomOption) {
    const {data, buttonText, buttonDisabled, visible, listener} = props;

    if (!visible) {
        return null
    }

    return (
        <div className={styles.LivingRoomOption}>
            <CommonIcon item={data}/>
            <button 
                disabled={buttonDisabled}
                onClick={listener}
            >
                {buttonText}
            </button>
        </div>
    )
}

export default LivingRoomOption