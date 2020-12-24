var gogUrl = "https://www.gog.com";

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currTab = tabs[0];
    if (/^https:\/\/store\.steampowered\.com\/app\//.test(currTab.url)) {
        url = currTab.url;
        slashLoc = 0;
        for (i = url.length - 2; i > 0; i--) {
            if (url.charAt(i) == '/') {
                slashLoc = i;
                i = 0;
            }
        }

        var gameName = url.substring(slashLoc + 1, url.length - 1).replaceAll("_", "").toLowerCase();
        gameName = gameName.replaceAll("1", "i");
        gameName = gameName.replaceAll("2", "ii");
        gameName = gameName.replaceAll("3", "iii");
        gameName = gameName.replaceAll("4", "iv");
        gameName = gameName.replaceAll("5", "v");
        gameName = gameName.replaceAll("6", "vi");
        gameName = gameName.replaceAll("7", "vii");
        gameName = gameName.replaceAll("8", "viii");
        gameName = gameName.replaceAll("9", "ix");
        document.getElementById("deals-url").onclick = hyperlink("https://isthereanydeal.com/game/" + gameName + "/info/")
    } else {
        document.getElementById("deals-url").onclick = hyperlink("https://isthereanydeal.com/")
    }
});

function hyperlink(link) {
    window.open(link)
}