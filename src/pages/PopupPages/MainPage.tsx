import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {Gear} from 'react-bootstrap-icons';
import styles from './PopupPage.module.css';
import images from '../../images/images';
import {IClassInfo, IStore} from '../../enums-and-interfaces/interfaces';
import { useEffect, useState } from 'react';
import C from '../../redux/constants';
import { createEmptyInventory } from '../../helpers/emptyEssencesCreators';
import gameSquad, { classInfo } from '../../redux/slices/gameSquad';
import { iconToClass, classToIcon } from '../../helpers/classIconRelates';
import { UserStartClass } from '../../enums-and-interfaces/enums';

export function upperCaseFirstLetter(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1)
}

function MainPage() {
    const index = useSelector((store: IStore) => store.gameSquad.currentlyWatched);

    const memberClass = useSelector((store: IStore) => store.gameSquad.squadMembers[index].params.class);

    const classes = Object.keys(images.classIcons);

    const dispatch = useDispatch();

    const [startButtonText, setStartButtonText] = 
        useState(chrome.i18n.getMessage('main_page_start'))

    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            if (result[C.extensionStorageName]) {
                dispatch(gameSquad.actions.setState(result[C.extensionStorageName].gameSquad));

                const user = result[C.extensionStorageName].gameSquad.squadMembers[index];
                if (
                    user.params.level > 0 ||
                    !Object.is(user.general.inventory, createEmptyInventory())
                ) {
                    setStartButtonText(chrome.i18n.getMessage('main_page_continue'))
                }
            }
        })
    }, [])

    const changeClass = (value: string) => {
        let iconFromClass = iconToClass(value);
        if (value === UserStartClass.noIcon) {
            iconFromClass = value;
        }
        dispatch(gameSquad.actions.refreshState(iconFromClass));
        setStartButtonText(chrome.i18n.getMessage('main_page_start'));
    }

    const startButtonListener = () => {
        window.open('#/game');
    }

    return (
        <div className={styles.Popup}>
            <div className={styles.Popup_iconBlock}>
                <img 
                    src={images.classIcons[classToIcon(memberClass)]} 
                    alt='classIcon' 
                    title={classInfo[memberClass].description}
                />
                <select 
                    value={memberClass}
                    onChange={(event) => changeClass(event.target.value)}
                >
                    {
                        classes.map(item => {
                            return (
                                <option value={item}>
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
                    disabled={memberClass === UserStartClass.noIcon}
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