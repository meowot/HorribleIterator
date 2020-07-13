document.querySelector("#processButton").addEventListener("click", function() {
    chrome.runtime.sendMessage({ from: "popup", to: "background", subject: "start-process" });
});