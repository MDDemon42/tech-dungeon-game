import CommonIcon from '../../../components/Icons/CommonIcon';
import { ICommon } from '../../../enums-and-interfaces/interfaces';
import styles from './index.module.css';

function LivingRoomOption(props: {
    data: ICommon,
    buttonText: string,
    buttonDisabled: boolean,
    listener: () => void
}) {
    const {data, buttonText, buttonDisabled, listener} = props;

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