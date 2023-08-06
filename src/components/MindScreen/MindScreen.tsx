import styles from './MindScreen.module.css';
import {useSelector} from "react-redux";
import CommonIcon from '../Icons/CommonIcon';
import { upperCaseFirstLetter } from '../../pages/PopupPages/MainPage';
import { ICommon, IStore } from '../../enums-and-interfaces/interfaces';
import { MindOption } from '../../enums-and-interfaces/enums';

function MindScreen(props: {
    name: string,
    vertical: boolean
}) {
    const {name, vertical} = props;
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const common = useSelector((state: IStore) => 
        state.gameSquad.squadMembers[index].general.mind[name as MindOption]);

    return (
        <div className={styles.MindScreen}>
            <div className={
                vertical ? 
                    styles.MindScreen__vertical : 
                    styles.MindScreen__notVertical
            }>
                {
                    common && Array.isArray(common) && common.length > 0 ?
                        common.map((item: ICommon) => (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={item}/>
                            </div>
                        )) :
                        <p>
                            No {upperCaseFirstLetter(name)} yet
                        </p>
                }
            </div>
        </div>
    )
}

export default MindScreen