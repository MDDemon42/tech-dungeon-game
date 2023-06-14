try {
    importScripts(
        './messaging.js',
        './contextMenus.js'
    )
} catch {
    console.error('Error in importing scripts in background')
}

// in case of adding new images
// chrome.storage.local.clear()