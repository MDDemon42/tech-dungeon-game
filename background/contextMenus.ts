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
    strongStart: 'cheat-strong-start'
}

function createContextMenu(options: IContextMenusOptions) {
    chrome.contextMenus.create(options)
}

function createCheatContextMenus() {
    createContextMenu({
        title: 'Strong start',
        id: cheatContextMenuIds.strongStart
    });
}

function createAllContextMenus() {
    chrome.contextMenus.removeAll();

    createCheatContextMenus();
}

function contextMenusListeners(info: IContextMenuInfo, tab?: ITab) {
    switch (info.menuItemId) {
        case cheatContextMenuIds.strongStart:
            if (tab?.url?.endsWith('index.html#/game')) {
                chrome.storage.local.get().then(result => {
                    const squad = {...result['tech-dungeon-game'].gameSquad.squadMembers};
                    const user = squad[2];
                    user.general.masteries = [];
                    user.general.spells = [];
                    user.general.powers = [];
                    user.general.inventory = null;
                    user.params.resources['Gems'] = 27;
                    user.params.resources['Mecha-cores'] = 9;
                    user.params.resources['Muta-genes'] = 9;
                    user.params.level = 12;
                    result['tech-dungeon-game'].gameSquad.squadMembers = squad;

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