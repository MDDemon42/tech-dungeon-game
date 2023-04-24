try {
    importScripts(
        './user/user.js'
    )
} catch {
    console.error('Error in importing scripts in background')
}