import { useEffect, useState } from 'react';
import styles from '../index.module.css';

import { ICommon, User } from '../types/interfaces';

import { upperCaseFirstLetter } from '../pages/MainPage';
import CommonIcon from './CommonIcon';

const buyButtonTexts: Record<string, string> = {
    'mutations': 'Mutate',
    'abilities': 'Study',
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
    const [allData, setAllData] = useState({} as User);
    const [userCommonNames, setUserCommonNames] = useState([] as string[]);

    useEffect(() => {
        chrome.storage.local.get()
            .then(result => {
                setAllData(result['tech-dungeon-game'])

                const mas: string[] = [];

                result['tech-dungeon-game'].user[name]
                    .forEach((item: {name: string}) => {
                        mas.push(item.name)
                    })

                setUserCommonNames(mas)

                if (user) {
                    setCommon(result['tech-dungeon-game'].user[name])
                } else {
                    setCommon(result['tech-dungeon-game'][name])
                }
            });
    }, []);

    function buyButtonListener(item: ICommon) {
        const newAllData = {...allData};
        // @ts-ignore
        newAllData.user[name as keyof User]?.push(item);
        chrome.storage.local.set({'tech-dungeon-game': newAllData})
            .then(() => window.location.reload())
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
                                                userCommonNames.includes(item.name)
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