chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    if (msg.from == "popup" && msg.to == "background" && msg.subject == "start-process") {
        // console.log(chrome.tabs.query({ active: true, currentWindow: true }))
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { from: "background", to: "content.js", subject: "sendDOM" });
        });
    };
});