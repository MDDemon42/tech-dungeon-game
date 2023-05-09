import styles from '../index.module.css';

import { upperCaseFirstLetter } from '../pages/MainPage';

function CommonScreen(props: {
    name: string,
    user: boolean,
    vertical: boolean,
    inventory: boolean
}) {
    const {name, user, vertical, inventory} = props;

    return (
        <div className={styles.gamePage_component}>
            {user ? upperCaseFirstLetter(name) : 'Possible ' + name}:
            <div className={
                vertical ? 
                    styles.commonScreen_vertical : 
                    styles.commonScreen_notVertical
            }>
                <p>
                    No {name} yet
                </p>
            </div>
        </div>
    )
}

export default CommonScreen