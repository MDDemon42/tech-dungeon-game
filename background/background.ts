try {
    importScripts(
        './messaging.js',
        './contextMenus.js'
    )
} catch {
    console.error('Error in importing scripts in background')
}