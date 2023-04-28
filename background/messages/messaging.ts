function onMessage(
    request,
    sender,
    callback
) {  
    if (request.token !== '0_0') {
        return
    }

    switch (request.type) {
        default:
            break
    }
}

chrome.runtime.onMessage.addListener(onMessage);