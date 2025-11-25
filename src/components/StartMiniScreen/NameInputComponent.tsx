import styles from './index.module.css';

const NameInputComponent = (props: {
    charName: string,
    setCharName: (value: string) => void,
    disabled: boolean
}) => {
    const {charName, setCharName, disabled} = props;
    const onChangeHandler = (event: { target: { value: string } }) => setCharName(event.target.value);
    const onBlurHandler = () => setCharName((document.getElementById('charName') as HTMLInputElement)?.value);

    return (
        <input 
            className={styles.NameInputComponent}
            id='charName'
            maxLength={15}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            placeholder={chrome.i18n.getMessage('hero_name')}
            disabled={disabled}
            defaultValue={charName}
        />
    )
}

export default NameInputComponent