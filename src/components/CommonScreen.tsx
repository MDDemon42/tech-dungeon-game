import { useEffect, useState } from 'react';
import styles from '../index.module.css';

import { ICommon } from '../types/interfaces';

import { upperCaseFirstLetter } from '../pages/MainPage';

function CommonScreen(props: {
    name: string,
    user: boolean
}) {
    const {name, user} = props;

    const [common, setCommon] = useState({} as Record<string, ICommon>);

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                if (user) {
                    setCommon(result['tech-dungeon-game'].user[name])
                } else {
                    setCommon(result['tech-dungeon-game'][name])
                }
            });
    }, []);

    return (
        <div className={styles.gamePage_component}>
            {user ? upperCaseFirstLetter(name) : 'Possible ' + name}:
            <div className={styles.commonScreen}>
                {
                    common && Object.keys(common).length > 0 ? 
                        Object.keys(common).map(key => {
                            const item = common[key];
                            return (
                                <div>
                                    <img 
                                        src={item.image}
                                        title={item.name + '\n' + item.description}
                                        className={styles.commonIcon}
                                    /> 
                                </div>
                            )
                        }) :
                        <p>
                            No {name} yet
                        </p>
                }
            </div>
        </div>
    )
}

export default CommonScreen