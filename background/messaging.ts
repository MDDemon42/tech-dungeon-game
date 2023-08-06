function onMessage(
    request: {
        type: string,
        data: any,
        token: string
    }
) {  
    console.log('Background got message', request)

    if (request.token !== '0_0') {
        return
    }

    switch (request.type) {
        case 'save': 
            chrome.storage.local.set({'tech-dungeon-game': request.data})
                .then(() => {
                    chrome.storage.local.get()
                        .then((data) => console.log('Chrome storage local has', data))
                });
            break;

        default:
            break;
    }
}

chrome.runtime.onMessage.addListener(onMessage);