import styles from '../index.module.css';
import {useSelector} from "react-redux";
import CommonIcon from './CommonIcon';
import { upperCaseFirstLetter } from '../pages/MainPage';
import { IGeneralUser, IStore } from '../types/interfaces';

function CommonScreen(props: {
    name: string,
    vertical: boolean
}) {
    const {name, vertical} = props;
    const common = useSelector((state: IStore) => state.generalUser[name as keyof IGeneralUser]);

    return (
        <div className={styles.gamePage_component}>
            {upperCaseFirstLetter(name)}
            <div className={
                vertical ? 
                    styles.commonScreen_vertical : 
                    styles.commonScreen_notVertical
            }>
                {
                    common && common.length > 0 ?
                        common.map(item => (
                            <div className={styles.commonIconWithButton}>
                                <CommonIcon item={item}/>
                            </div>
                        )) :
                        <p>
                            No {name} yet
                        </p>
                }
            </div>
        </div>
    )
}

export default CommonScreen