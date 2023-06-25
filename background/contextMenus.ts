interface IContextMenusOptions {
    id: string;
    title: string;
}

interface IContextMenuInfo {
    menuItemId: string | number
}

interface ITab {
    id?: number,
    url?: string
}

const cheatContextMenuIds = {
    money: 'cheat-money',
    zero: 'cheat-zero'
}

function createContextMenu(options: IContextMenusOptions) {
    chrome.contextMenus.create(options)
}

function createCheatContextMenus() {
    createContextMenu({
        title: 'All resources = 10',
        id: cheatContextMenuIds.money
    });

    createContextMenu({
        title: 'Zero Hero',
        id: cheatContextMenuIds.zero
    })
}

function createAllContextMenus() {
    chrome.contextMenus.removeAll();

    createCheatContextMenus();
}

function contextMenusListeners(info: IContextMenuInfo, tab?: ITab) {
    switch (info.menuItemId) {
        case cheatContextMenuIds.money:
            if (tab?.url?.endsWith('index.html#/game')) {
                chrome.storage.local.get().then(result => {
                    const params = {...result['tech-dungeon-game'].userParams};
                    params.gems = 10;
                    params.mechaCores = 10;
                    params.mutaGenes = 9;
                    params.level = 20;
                    result['tech-dungeon-game'].userParams = params;

                    chrome.storage.local.set(result);

                    chrome.tabs.reload(tab!.id!);
                });
            };
            break;
        
        case cheatContextMenuIds.zero:
            if (tab?.url?.endsWith('index.html#/game')) {
                chrome.storage.local.get().then(result => {
                    const user = {...result['tech-dungeon-game'].generalUser};
                    user.masteries = [];
                    user.spells = [];
                    user.powers = [];
                    user.inventory = null;
                    result['tech-dungeon-game'].generalUser = user;

                    const params = {...result['tech-dungeon-game'].userParams};
                    params.diamonds = 0;
                    params.mechaCores = 0;
                    params.mutaGenes = 0;
                    params.level = 0;
                    result['tech-dungeon-game'].userParams = params;

                    chrome.storage.local.set(result);

                    chrome.tabs.reload(tab!.id!);
                });
            }
            break;
            
        default:
            break;
    }
}

createAllContextMenus();

chrome.contextMenus.onClicked.addListener(contextMenusListeners)