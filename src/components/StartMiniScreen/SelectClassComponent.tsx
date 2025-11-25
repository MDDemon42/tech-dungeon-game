import { UserStartClass } from "../../enums-and-interfaces/enums";
import classInfo from "../../general/classInfo";
import { iconToClass } from "../../helpers/classIconRelates";
import images from "../../images/images";
import styles from './index.module.css';

const SelectClassComponent = (props: {
    charClass: UserStartClass,
    setCharClass: (value: UserStartClass) => void,
    setCharName: (value: string) => void,
}) => {
    const {charClass, setCharClass, setCharName} = props;

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

    const classes = Object.keys(images.classIcons)
        .filter(icon => icon !== UserStartClass.noIcon);

    const chooseAnotherClass = (value: string) => {
        setCharClass(iconToClass(value));
        setCharName(getRandomStartName());

        // setStartButtonText(chrome.i18n.getMessage('main_page_start'));
    } 

    return (
        <select 
            className={styles.SelectClassComponent}
            onChange={(event) => chooseAnotherClass(event.target.value)}
        >
            <option 
                selected={charClass === UserStartClass.noIcon}
                disabled 
                hidden
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
    )
}

export default SelectClassComponent