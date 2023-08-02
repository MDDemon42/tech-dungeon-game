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
                    const squad = {...result['tech-dungeon-game'].gameSquad};

                    for (let i in squad.squadMembers) {
                        const user = squad.squadMembers[i];
                        if (!!user) {
                            user.general.mind.masteries = [];
                            user.general.mind.spells = [];
                            user.general.mind.powers = [];
                            user.general.inventory = null;

                            user.params.level = 12;
                            user.params.currentParams = {...user.params.maxParams};
                        }
                    }

                    squad.squadBackpacks.resources['Gems'] = 100;
                    squad.squadBackpacks.resources['Mecha-cores'] = 45;
                    squad.squadBackpacks.resources['Muta-genes'] = 45;
                    squad.squadBackpacks.items = [];

                    result['tech-dungeon-game'].gameSquad = squad;

                    chrome.storage.local.set(result);

                    chrome.tabs.reload(tab!.id!);
                });
            }
            break;

        default:
            break;
    }
}

chrome.contextMenus.onClicked.addListener(contextMenusListeners);