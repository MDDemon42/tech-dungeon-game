const storageKey = 'tech-dungeon-game';

const user = {
    name: 'Adventurer',
    icon: 'noIcon',
    level: 1,
    money: 0,
    stage: 0,
    items: [],
    spells: [],
    mutations: [],
    cybers: []
}

const startingData = {
    user,
    items: [],
    spells: [],
    mutations: [],
    cybers: []
}

function loadOrCreateUser() {
    chrome.storage.local.get()
        .then(items => {
            if (!(storageKey in items)) {
                chrome.storage.local.set({
                    'tech-dungeon-game': startingData
                })
            }
        })
}

chrome.storage.local.clear()
loadOrCreateUser();