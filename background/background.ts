try {
    importScripts(
        './user/user.js',
        './messages/messaging.js'
    )
} catch {
    console.error('Error in importing scripts in background')
}