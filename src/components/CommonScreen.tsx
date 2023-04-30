import { useEffect, useState } from 'react';
import styles from '../index.module.css';

import { ICommon } from '../types/interfaces';

import { upperCaseFirstLetter } from '../pages/MainPage';

function CommonScreen(props: {
    name: string
}) {
    const {name} = props;

    const [common, setCommon] = useState([] as ICommon[]);

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                setCommon(result['tech-dungeon-game'][name])
            });
    }, []);

    return (
        <div className={styles.gamePage_component}>
            {upperCaseFirstLetter(name)}:
            <div className={styles.commonScreen}>
                {
                    common && common.length > 0 ? 
                        common.map(item => (
                            <div>
                                <img 
                                    src={item.image}
                                    title={item.name + '\n' + item.description}
                                    className={styles.commonIcon}
                                /> 
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