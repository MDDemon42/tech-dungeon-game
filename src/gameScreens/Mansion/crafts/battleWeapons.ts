import { createCraft } from ".";
import items from "../../Market/items";

const craftBattleAxe = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_battle_axe'),
    chrome.i18n.getMessage('craft_battle_axe_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const craftDragonBoneBlade = createCraft(
    [
        {
            name: items.bigResources.dragonRemains.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_dragon_bone_blade'),
    chrome.i18n.getMessage('craft_dragon_bone_blade_description', 
        ['1', items.bigResources.dragonRemains.name]
    ),
);

const craftGlaive = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_glaive'),
    chrome.i18n.getMessage('craft_glaive_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const craftHalberd = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_halberd'),
    chrome.i18n.getMessage('craft_halberd_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const craftKatana = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_katana'),
    chrome.i18n.getMessage('craft_katana_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const craftKhopesh = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_khopesh'),
    chrome.i18n.getMessage('craft_khopesh_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const craftMacuahuitl = createCraft(
    [
        {
            name: items.bigResources.obsidian.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_macuahuitl'),
    chrome.i18n.getMessage('craft_macuahuitl_description', 
        ['1', items.bigResources.obsidian.name]
    ),
);

const craftRapier = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_rapier'),
    chrome.i18n.getMessage('craft_rapier_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const craftSabre = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_sabre'),
    chrome.i18n.getMessage('craft_sabre_description', 
        ['1', items.bigResources.ore.name]
    ),
);

const battleWeapons = {
    craftBattleAxe,
    craftDragonBoneBlade,
    craftGlaive,
    craftHalberd,
    craftKatana,
    craftKhopesh,
    craftMacuahuitl,
    craftRapier,
    craftSabre
}

export default battleWeapons