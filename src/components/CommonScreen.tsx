import { useEffect, useState } from 'react';
import styles from '../index.module.css';

import { ICommon, User } from '../types/interfaces';

import { upperCaseFirstLetter } from '../pages/MainPage';
import CommonIcon from './CommonIcon';

import constants from '../redux/constants';

const buyButtonTexts: Record<string, string> = {
    'mutations': 'Mutate',
    'masteries': 'Study',
    'spells': 'Learn',
    'powers': 'Develop',
    'items': 'Buy',
    'cybers': 'Modify'
}

function CommonScreen(props: {
    name: string,
    user: boolean,
    vertical: boolean,
    inventory: boolean
}) {
    const {name, user, vertical, inventory} = props;

    const [common, setCommon] = useState({} as Record<string, ICommon>);
    const [userCommonNames, setUserCommonNames] = useState([] as string[]);
    const [userMasteries, setUserMasteries] = useState([] as string[]);

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                const data = result[constants.name];
                
                const mas: string[] = [];

                data.generalUser[name]
                    .forEach((item: {name: string}) => {
                        mas.push(item.name)
                    })

                setUserCommonNames(mas);

                setUserMasteries([...data.generalUser.masteries, null]);

                if (user) {
                    setCommon(data.generalUser[name])
                } else {
                    setCommon(data.generalAll[name])
                }
            });
    }, []);

    function buyButtonListener(item: ICommon) {
    }

    const buyButtonText = buyButtonTexts[name];

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
                                        <button
                                            disabled={
                                                userCommonNames.includes(item.name) ||
                                                (name === 'items' && 
                                                // @ts-ignore
                                                !userMasteries.includes(item.requiredMastery))
                                            }
                                            onClick={() => buyButtonListener(item)}
                                        >
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