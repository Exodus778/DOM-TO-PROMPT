document.getElementById("toggle-btn").addEventListener("click", async () => {
  // Query the active tab in the current window
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab?.id) {
    // Send a message or execute script directly in active tab
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        // Trigger the key event logic directly
        window.dispatchEvent(
          new KeyboardEvent("keydown", {
            altKey: true,
            code: "KeyP",
            bubbles: true,
          }),
        );
      },
    });

    // Close the popup window after clicking
    window.close();
  }
});
