import {useSelector, useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import {Gear, InfoCircle} from 'react-bootstrap-icons';
import styles from './PopupPage.module.css';
import images from '../../images/images';
import { ICharacher, IStore } from '../../enums-and-interfaces/interfaces';
import { useEffect, useState } from 'react';
import C from '../../redux/constants';
import character from '../../redux/slices/character';
import { iconToClass, classToIcon } from '../../helpers/classIconRelates';
import { UserStartClass } from '../../enums-and-interfaces/enums';
import { removeGameTabs } from '../../helpers/removeGameTabs';
import gameStage, { createGameStage } from '../../redux/slices/gameStage';
import classInfo from '../../general/classInfo';

export function upperCaseFirstLetter(value: string) {
    return value.substring(0,1).toUpperCase() + value.substring(1)
}

function getRandomStartName() {
    const startNames = [
        chrome.i18n.getMessage('start_name_boris'),
        chrome.i18n.getMessage('start_name_jackline'),
        chrome.i18n.getMessage('start_name_stephan'),
        chrome.i18n.getMessage('start_name_colin'),
        chrome.i18n.getMessage('start_name_mishelle'),
        chrome.i18n.getMessage('start_name_hanz'),
        chrome.i18n.getMessage('start_name_romul'),
        chrome.i18n.getMessage('start_name_albert')
    ]

    return startNames[Math.floor(Math.random() * startNames.length)]
}

function charEquality(oldUser: ICharacher, newUser: ICharacher) {
    return oldUser.params.class === newUser.params.class &&
        oldUser.params.name === newUser.params.name
}

function MainPage() {
    const char = useSelector((store: IStore) => store.character, charEquality);

    const [charClass, setUserClass] = useState(char.params.class);
    const [charName, setUserName] = useState(char.params.name);
    const [charLevel, setUserLevel] = useState(char.params.level);

    const [startButtonText, setStartButtonText] = 
        useState(chrome.i18n.getMessage('main_page_start'));

    const classes = Object.keys(images.classIcons)
        .filter(icon => icon !== UserStartClass.noIcon);

    const dispatch = useDispatch();

    // loading storaged state
    useEffect(() => {
        chrome.storage.local.get().then(result => {
            if (result[C.extensionStorageName]) {
                dispatch(character.actions.setState(result[C.extensionStorageName].character));

                dispatch(gameStage.actions.setState(result[C.extensionStorageName].gameStage));

                const storagedChar = result[C.extensionStorageName].character;
                if (storagedChar.params.level > 0) {
                    setStartButtonText(chrome.i18n.getMessage('main_page_continue'))
                }

                if (storagedChar.params.name !== char.params.name) {
                    setUserClass(storagedChar.params.class);
                    setUserLevel(storagedChar.params.length);
                    setUserName(storagedChar.params.name);
                }
            }
        });       
    }, [])

    const getUserName = () => {
        return (document.getElementById('charName') as HTMLInputElement)?.value;
    }

    const chooseAnotherName = () => {
        setUserName(getUserName());
    }    

    const chooseAnotherClass = (value: string) => {
        setUserClass(iconToClass(value));
        setUserName(getRandomStartName());
        setUserLevel(0);

        setStartButtonText(chrome.i18n.getMessage('main_page_start'));
    } 

    const startButtonListener = async () => {
        await removeGameTabs();

        if (charLevel === 0) {
            dispatch(character.actions.startGame({
                charName,
                charClass,
            }));
            dispatch(gameStage.actions.setState(createGameStage(false)));
        }       

        window.open('#/game');
    }

    return (
        <div className={styles.Popup}>
            <div className={styles.Popup_iconBlock}>
                <img 
                    src={images.classIcons[classToIcon(charClass) as keyof typeof images.classIcons]} 
                    alt='classIcon' 
                    title={classInfo[charClass].description}
                />      
                <input 
                    id='charName'
                    maxLength={15}
                    onBlur={chooseAnotherName}
                    onChange={(event) => setUserName(event.target.value)}
                    placeholder={chrome.i18n.getMessage('hero_name')}
                    disabled={charLevel > 0 || charClass === UserStartClass.noIcon}
                    defaultValue={charName}
                ></input>
                <select 
                    onChange={(event) => chooseAnotherClass(event.target.value)}
                    style={{textAlignLast: 'center'}}
                >
                    <option 
                        selected={charClass === UserStartClass.noIcon}
                        disabled hidden
                    >
                        {chrome.i18n.getMessage('choose_class')}
                    </option>
                    {
                        classes.map(item => {
                            return (
                                <option 
                                    value={item} 
                                    selected={iconToClass(item) === charClass}
                                >
                                    {
                                        classInfo[iconToClass(item)].name
                                    }
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className={styles.Popup_buttonsBlock}>
                <button 
                    disabled={charClass === UserStartClass.noIcon}
                    className={styles.border}
                    onClick={startButtonListener}
                >
                    {startButtonText}
                </button>
                <Link 
                    title='Settings'
                    to={'settings'}
                >
                    <Gear/> 
                </Link>
                <InfoCircle 
                    title='Info'
                    size={24}
                    onClick={() => window.open('#/info')}
                />
            </div>                        
        </div>
    )
}

export default MainPage