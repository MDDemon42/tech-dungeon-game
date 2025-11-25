import { createCraft } from ".";
import items from "../../Market/items";

const craftMusket = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_musket'),
    chrome.i18n.getMessage('craft_musket_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const craftBattleMusket = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 2
        }
    ],
    chrome.i18n.getMessage('craft_battle_musket'),
    chrome.i18n.getMessage('craft_battle_musket_description', 
        ['2', items.bigResources.ore.name]
    ),
);

const craftPistol = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_pistol'),
    chrome.i18n.getMessage('craft_pistol_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const craftBattlePistol = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 2
        }
    ],
    chrome.i18n.getMessage('craft_battle_pistol'),
    chrome.i18n.getMessage('craft_battle_pistol_description', 
        ['2', items.bigResources.ore.name]
    ),
);

const craftRevolver = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_revolver'),
    chrome.i18n.getMessage('craft_revolver_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const craftBattleRevolver = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 2
        }
    ],
    chrome.i18n.getMessage('craft_battle_revolver'),
    chrome.i18n.getMessage('craft_battle_revolver_description', 
        ['2', items.bigResources.ore.name]
    ),
);

const craftRifle = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_rifle'),
    chrome.i18n.getMessage('craft_rifle_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const craftBattleRifle = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 2
        }
    ],
    chrome.i18n.getMessage('craft_battle_rifle'),
    chrome.i18n.getMessage('craft_battle_rifle_description', 
        ['2', items.bigResources.ore.name]
    ),
);

const guns = {
    craftMusket,
    craftBattleMusket,
    craftPistol,
    craftBattlePistol,
    craftRevolver,
    craftBattleRevolver,
    craftRifle,
    craftBattleRifle
}

export default guns