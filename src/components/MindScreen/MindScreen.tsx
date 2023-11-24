import styles from './MindScreen.module.css';
import CommonIcon from '../Icons/CommonIcon';
import { upperCaseFirstLetter } from '../../pages/PopupPages/MainPage';
import { ICharacher, ICommon } from '../../enums-and-interfaces/interfaces';
import { MindOption } from '../../enums-and-interfaces/enums';

function MindScreen(props: {
    character: ICharacher,
    name: string,
    vertical: boolean
}) {
    const {character, name, vertical} = props;
    const common = character.general.mind[name as MindOption];

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
                            <div className={styles.MindScreen_datum}>
                                <CommonIcon item={item}/>
                            </div>
                        )) :
                        <p>
                            {chrome.i18n.getMessage('mind_screen_empty_text', [upperCaseFirstLetter(name)])}
                        </p>
                }
            </div>
        </div>
    )
}

export default MindScreen