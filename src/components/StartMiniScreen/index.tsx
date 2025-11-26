import { useState } from "react";
import { UserStartClass } from "../../enums-and-interfaces/enums";
import styles from './index.module.css';
import { ICharacter } from "../../enums-and-interfaces/interfaces";
import ClassIconComponent from "./ClassIconComponent";
import NameInputComponent from "./NameInputComponent";
import SelectClassComponent from "./SelectClassComponent";
import StartButtonComponent from "./StartButtonComponent";

const StartMiniScreen = (props: {
    char?: ICharacter
}) => {
    const {char} = props;
    const [charClass, setCharClass] = useState(char?.params.class ?? UserStartClass.noIcon);
    const [charName, setCharName] = useState(char?.params.name ?? '');

    const inputDisabled = !!char || charClass === UserStartClass.noIcon;
    
    return (
        <div className={styles.StartMiniScreen}>
            <ClassIconComponent charClass={charClass}/>
            <NameInputComponent 
                charName={charName}
                setCharName={setCharName}
                disabled={inputDisabled}
            />
            <SelectClassComponent 
                charClass={charClass}
                setCharClass={setCharClass}
                setCharName={setCharName}
            />
            <StartButtonComponent 
                start={!char}
                charClass={charClass}
                charName={charName}
            />
        </div>
    )
}

export default StartMiniScreen