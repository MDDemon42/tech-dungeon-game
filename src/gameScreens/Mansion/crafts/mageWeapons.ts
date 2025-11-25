import { createCraft } from ".";
import items from "../../Market/items";

const craftBattleMageAxe = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        },
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_battle_mage_axe'),
    chrome.i18n.getMessage('craft_battle_mage_axe_description', 
        ['1', items.bigResources.ore.name, '1', items.bigResources.crystal.name]
    ),
);

const craftMageDragonBoneBlade = createCraft(
    [
        {
            name: items.bigResources.dragonRemains.name,
            amount: 1
        },
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_mage_dragon_bone_blade'),
    chrome.i18n.getMessage('craft_mage_dragon_bone_blade_description', 
        ['1', items.bigResources.dragonRemains.name, '1', items.bigResources.crystal.name]
    ),
);

const craftMageGlaive = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        },
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_mage_glaive'),
    chrome.i18n.getMessage('craft_mage_glaive_description', 
        ['1', items.bigResources.ore.name, '1', items.bigResources.crystal.name]
    ),
);

const craftMageHalberd = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        },
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_mage_halberd'),
    chrome.i18n.getMessage('craft_mage_halberd_description', 
        ['1', items.bigResources.ore.name, '1', items.bigResources.crystal.name]
    ),
);

const craftMageKhopesh = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        },
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_mage_khopesh'),
    chrome.i18n.getMessage('craft_mage_khopesh_description', 
        ['1', items.bigResources.ore.name, '1', items.bigResources.crystal.name]
    ),
);

const craftMageMacuahuitl = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        },
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_mage_macuahuitl'),
    chrome.i18n.getMessage('craft_mage_macuahuitl_description', 
        ['1', items.bigResources.ore.name, '1', items.bigResources.crystal.name]
    ),
);

const craftMageMusket = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        },
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_mage_musket'),
    chrome.i18n.getMessage('craft_mage_musket_description', 
        ['1', items.bigResources.ore.name, '1', items.bigResources.crystal.name]
    ),
);

const craftBattleMageMusket = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 2
        },
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_battle_mage_musket'),
    chrome.i18n.getMessage('craft_battle_mage_musket_description', 
        ['2', items.bigResources.ore.name, '1', items.bigResources.crystal.name]
    ),
);

const craftMageRifle = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 1
        },
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_mage_rifle'),
    chrome.i18n.getMessage('craft_mage_rifle_description', 
        ['1', items.bigResources.ore.name, '1', items.bigResources.crystal.name]
    ),
);

const craftBattleMageRifle = createCraft(
    [
        {
            name: items.bigResources.ore.name,
            amount: 2
        },
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_battle_mage_rifle'),
    chrome.i18n.getMessage('craft_battle_mage_rifle_description', 
        ['2', items.bigResources.ore.name, '1', items.bigResources.crystal.name]
    ),
);

const craftMageWand = createCraft(
    [
        {
            name: items.bigResources.crystal.name,
            amount: 1
        }
    ],
    chrome.i18n.getMessage('craft_mage_wand'),
    chrome.i18n.getMessage('craft_mage_wand_description', 
        ['1', items.bigResources.crystal.name]
    ),
);

const mageWeapons = {
    craftBattleMageAxe,
    craftMageDragonBoneBlade,
    craftMageGlaive,
    craftMageHalberd,
    craftMageKhopesh,
    craftMageMacuahuitl,
    craftMageMusket,
    craftBattleMageMusket,
    craftMageRifle,
    craftBattleMageRifle,
    craftMageWand
}

export default mageWeapons