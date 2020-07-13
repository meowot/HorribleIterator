window.onload = function (event) {
    chrome.runtime.onMessage.addListener(function (msg, sender, response) {
        if (msg.from == "background" && msg.to == "content.js" && msg.subject == "sendDOM") {
            console.clear()
            show_more_timer = setInterval(() => {
                show_more = document.querySelector('a.more-button');
                if (show_more != null) {
                    show_more.click()
                } else {
                    clearInterval(show_more_timer)
                    links = Array.from(document.getElementsByClassName('rls-link link-1080p'))
                    click_timer = setInterval(() => {
                        if (links.length) {
                            link = links.shift()
                            link.children[1].children[0].click()
                        } else {
                            clearInterval(click_timer)
                        }
                    }, 500);
                }
            }, 500);
        }
    });
}