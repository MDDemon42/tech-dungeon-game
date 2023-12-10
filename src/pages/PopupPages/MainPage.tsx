import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {Gear} from 'react-bootstrap-icons';
import styles from './PopupPage.module.css';
import images from '../../images/images';
import { ICharacher, IStore } from '../../enums-and-interfaces/interfaces';
import { useEffect, useState } from 'react';
import C from '../../redux/constants';
import gameSquad, { classInfo } from '../../redux/slices/gameSquad';
import { iconToClass, classToIcon } from '../../helpers/classIconRelates';
import { UserStartClass } from '../../enums-and-interfaces/enums';
import { removeGameTabs } from '../../helpers/removeGameTabs';
import gameStage from '../../redux/slices/gameStage';

export function upperCaseFirstLetter(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1)
}

function userEquality(oldUser: ICharacher, newUser: ICharacher) {
    return oldUser.params.class === newUser.params.class &&
        oldUser.params.name === newUser.params.name
}

function MainPage() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);
    const user = useSelector((store: IStore) => store.gameSquad.squadMembers[index], userEquality);

    const userClass = user.params.class;
    const userName = user.params.name;
    const userLevel = user.params.level;

    const [startButtonText, setStartButtonText] = 
        useState(chrome.i18n.getMessage('main_page_start'));

    const classes = Object.keys(images.classIcons)
        .filter(icon => icon !== UserStartClass.noIcon);

    const dispatch = useDispatch();

    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            if (result[C.extensionStorageName]) {
                dispatch(gameSquad.actions.setState(result[C.extensionStorageName].gameSquad));

                dispatch(gameStage.actions.setState(result[C.extensionStorageName].gameStage));

                const user = result[C.extensionStorageName].gameSquad.squadMembers[index];
                if (user.params.level > 0) {
                    setStartButtonText(chrome.i18n.getMessage('main_page_continue'))
                }
            }
        });       
    }, [])

    const getUserName = () => {
        return (document.getElementById('userName') as HTMLInputElement)?.value;
    }

    const chooseAnotherName = () => {
        dispatch(gameSquad.actions.changeName(getUserName()));
    }

    const chooseAnotherClass = (value: string) => {
        dispatch(gameSquad.actions.changeClass((iconToClass(value))));

        setStartButtonText(chrome.i18n.getMessage('main_page_start'));
    } 

    const startButtonListener = () => {
        removeGameTabs();

        dispatch(gameSquad.actions.startGame(getUserName()));

        window.open('#/game');
    }

    return (
        <div className={styles.Popup}>
            <div className={styles.Popup_iconBlock}>
                <img 
                    src={images.classIcons[classToIcon(userClass) as keyof typeof images.classIcons]} 
                    alt='classIcon' 
                    title={classInfo[userClass].description}
                />      
                <input 
                    id='userName'
                    maxLength={15}
                    onBlur={chooseAnotherName}
                    placeholder={chrome.i18n.getMessage('hero_name')}
                    disabled={userLevel > 0 || userClass === UserStartClass.noIcon}
                    defaultValue={userName}
                ></input>
                <select 
                    onChange={(event) => chooseAnotherClass(event.target.value)}
                    style={{textAlignLast: 'center'}}
                >
                    <option 
                        selected={userClass === UserStartClass.noIcon}
                        disabled hidden
                    >
                        {chrome.i18n.getMessage('choose_class')}
                    </option>
                    {
                        classes.map(item => {
                            return (
                                <option 
                                    value={item} 
                                    selected={iconToClass(item) === userClass}
                                >
                                    {
                                        iconToClass(item)
                                    }
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className={styles.Popup_buttonsBlock}>
                <button 
                    disabled={userClass === UserStartClass.noIcon}
                    className={styles.border}
                    onClick={startButtonListener}
                >
                    {startButtonText}
                </button>
                <Link to={'settings'}>
                    <Gear/> 
                </Link>
            </div>                        
        </div>
    )
}

export default MainPage