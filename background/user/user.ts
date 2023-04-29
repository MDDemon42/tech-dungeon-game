const storageKey = 'tech-dungeon-game';

const user = {
    name: 'Adventurer',
    class: 'noIcon',
    level: 1,
    money: 0,
    stage: 0
}

function loadOrCreateUser() {
    chrome.storage.local.get()
        .then(items => {
            if (!(storageKey in items)) {
                chrome.storage.local.set({
                    'tech-dungeon-game': user
                })
            }
        })
}

loadOrCreateUser();