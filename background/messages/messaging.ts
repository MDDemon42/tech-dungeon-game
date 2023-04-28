function onMessage(
    request,
    sender,
    callback
) {  
    if (request.token !== '0_0') {
        return
    }

    switch (request.type) {
        case 'class':
            setUserClass(request.class);
            break
        case 'get':
            callback(getUser());
            break
        default:
            break
    }
}

chrome.runtime.onMessage.addListener(onMessage);