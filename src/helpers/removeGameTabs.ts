export async function removeGameTabs(): Promise<void> {
    const tabs = await chrome.tabs.query({});
    for (const tab of tabs) {
        if (
            (
                tab.url?.includes('index.html#/game') ||
                tab.url?.includes('index.html#/battle')
            ) && 
            tab.id !== undefined
        ) {
            await chrome.tabs.remove(tab.id);
        }
    }
}