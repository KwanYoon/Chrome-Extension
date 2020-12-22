chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (/^https:\/\/store\.steampowered\.com\/app\//.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, {file: "./mystyles.css"})
            chrome.tabs.executeScript(null, {file: "./foreground.js"})

            url = current_tab_info.url;
            slashLoc = 0;
            for (i = url.length - 2; i > 0; i--) {
                if (url.charAt(i) == '/') {
                    slashLoc = i;
                    i = 0;
                }
            }

            gogUrl = "https://www.gog.com/game/" + url.substring(slashLoc + 1, url.length - 1);
            console.log(gogUrl)
        }
    })
});