import { EmojiDizzy } from "react-bootstrap-icons";
import PatternScreen from "../../components/PatternScreen";
import SubInventoryScreen from "../../components/SubInventoryScreen";
import { InventoryGameScreens } from "../../enums-and-interfaces/enums";
import { IUpgradeButton } from "../../enums-and-interfaces/interfaces";

const tropheyFieldMapping = {
    [InventoryGameScreens.tropheyField]: {
        requiredStage: 1,
        icon: <EmojiDizzy size={36} />,
        screen: <SubInventoryScreen screenName={InventoryGameScreens.tropheyField}/>
    } 
}

const tropheyFieldUpgradeButtons = (stage: number): IUpgradeButton[] => [
    {
        title: chrome.i18n.getMessage('burn_the_bodies_task_title'),
        stage: 2,
        disabled: stage % 2 === 0,
        visible: stage % 2 !== 0
    },
    {
        title: chrome.i18n.getMessage('bury_the_bodies_task_title'),
        stage: 4,
        disabled: stage % 2 === 0,
        visible: stage % 2 !== 0
    }
]

function TropheyField() {
    return <PatternScreen 
        screenName={InventoryGameScreens.tropheyField}
        upgradeButtonsFunc={tropheyFieldUpgradeButtons}
        subScreenMapping={tropheyFieldMapping}
    />
}

export default TropheyField