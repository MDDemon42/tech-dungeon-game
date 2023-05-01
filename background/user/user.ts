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
    cybers: [],
    powers: [],
    abilities: []
}

const startingData = {
    user,
    abilities: [],
    items: [],
    spells: [],
    mutations: [],
    cybers: [],
    powers: []
}

function loadOrCreateUser() {
    chrome.storage.local.get()
        .then(() => {
            chrome.storage.local.set({
                'tech-dungeon-game': startingData
            })
        })
}

loadOrCreateUser();