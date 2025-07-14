let currentTab = null;
let startTime = 0;

// Listener when tab is updated (URL or loading state)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.active) {
    trackTime(tab);
  }
});

// Listener when user switches tabs
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  trackTime(tab);
});

// Track time spent on a website
async function trackTime(tab) {
  try {
    // Skip invalid or internal browser pages
    if (!tab || !tab.url || !tab.url.startsWith("http")) {
      return;
    }

    const hostname = new URL(tab.url).hostname;

    // If user has switched to a different tab/website
    if (currentTab && currentTab !== hostname && startTime !== 0) {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000); // in seconds

      await fetch("https://extensionsback.onrender.com/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          website: currentTab,
          timeSpent,
        }),
      });
    }

    // Set current tab and start new timer
    currentTab = hostname;
    startTime = Date.now();
  } catch (err) {
    console.error("Error tracking time:", err);
  }
}
