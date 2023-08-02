try {
    importScripts(
        './messaging.js',
        './contextMenus.js',
        './init.js'
    )
} catch {
    console.error('Error in importing scripts in background')
}

// in case of adding new features or images
chrome.storage.local.clear()