import { useEffect, useState } from 'react';
import styles from '../index.module.css';

import { ICommon } from '../types/interfaces';

import { upperCaseFirstLetter } from '../pages/MainPage';
import CommonIcon from './CommonIcon';

function CommonScreen(props: {
    name: string,
    user: boolean,
    vertical: boolean,
    inventory: boolean
}) {
    const {name, user, vertical, inventory} = props;

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

    let buyButtonText = '';

    switch (name) {
        case 'mutations':
            buyButtonText = 'Mutate';
            break
        case 'abilities':
            buyButtonText = 'Study';
            break
        case 'spells':
            buyButtonText = 'Learn';
            break
        case 'powers':
            buyButtonText = 'Develop';
            break
        case 'items':
            buyButtonText = 'Buy';
            break
        case 'cybers':
            buyButtonText = 'Modify';
            break
        default:
            break
    }

    return (
        <div className={styles.gamePage_component}>
            {user ? upperCaseFirstLetter(name) : 'Possible ' + name}:
            <div className={
                vertical ? 
                    styles.commonScreen_vertical : 
                    styles.commonScreen_notVertical
            }>
                {
                    common && Object.keys(common).length > 0 ? 
                        Object.keys(common).map(key => {
                            const item = common[key];
                            return (
                                <div className={styles.commonIconWithButton}>
                                    <CommonIcon item={item}/>
                                    {
                                        !inventory && 
                                        <button>
                                            {buyButtonText}
                                        </button>
                                    }
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