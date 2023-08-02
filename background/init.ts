function onIstalled() {
    createAllContextMenus();
}

chrome.runtime.onInstalled.addListener(onIstalled);